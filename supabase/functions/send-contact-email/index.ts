import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  inquiryType?: string;
  product?: string;
  message: string;
  formType: "contact" | "quote";
}

// Get Microsoft Graph access token using client credentials flow
async function getGraphAccessToken(): Promise<string> {
  const tenantId = Deno.env.get("AZURE_TENANT_ID");
  const clientId = Deno.env.get("AZURE_CLIENT_ID");
  const clientSecret = Deno.env.get("AZURE_CLIENT_SECRET");

  if (!tenantId || !clientId || !clientSecret) {
    throw new Error("Missing Azure credentials");
  }

  const tokenUrl = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`;

  const response = await fetch(tokenUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      scope: "https://graph.microsoft.com/.default",
      grant_type: "client_credentials",
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Token error:", errorText);
    throw new Error(`Failed to get access token: ${response.status}`);
  }

  const data = await response.json();
  return data.access_token;
}

// Send email via Microsoft Graph API
async function sendEmailViaGraph(
  accessToken: string,
  from: string,
  to: string,
  subject: string,
  htmlContent: string,
  replyTo?: string
): Promise<void> {
  const sendMailUrl = `https://graph.microsoft.com/v1.0/users/${from}/sendMail`;

  const emailPayload: any = {
    message: {
      subject: subject,
      body: {
        contentType: "HTML",
        content: htmlContent,
      },
      toRecipients: [
        {
          emailAddress: {
            address: to,
          },
        },
      ],
    },
    saveToSentItems: true,
  };

  if (replyTo) {
    emailPayload.message.replyTo = [
      {
        emailAddress: {
          address: replyTo,
        },
      },
    ];
  }

  const response = await fetch(sendMailUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(emailPayload),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Graph API error:", errorText);
    throw new Error(`Failed to send email: ${response.status} - ${errorText}`);
  }

  console.log("Email sent successfully via Microsoft Graph");
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: ContactFormData = await req.json();
    console.log("Received form submission:", formData);

    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      throw new Error("Missing required fields: name, email, or message");
    }

    const isQuote = formData.formType === "quote";
    const subject = isQuote
      ? `New Quote Request from ${formData.name}${formData.product ? ` - ${formData.product}` : ""}`
      : `New ${formData.inquiryType || "Contact"} Inquiry from ${formData.name}`;

    const htmlContent = `
      <h2>${isQuote ? "Quote Request" : "Contact Form Submission"}</h2>
      <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Name</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${formData.name}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Email</td>
          <td style="padding: 10px; border: 1px solid #ddd;"><a href="mailto:${formData.email}">${formData.email}</a></td>
        </tr>
        ${formData.phone ? `
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Phone</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${formData.phone}</td>
        </tr>
        ` : ""}
        ${formData.company ? `
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Company</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${formData.company}</td>
        </tr>
        ` : ""}
        ${formData.inquiryType ? `
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Inquiry Type</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${formData.inquiryType}</td>
        </tr>
        ` : ""}
        ${formData.product ? `
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Product</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${formData.product}</td>
        </tr>
        ` : ""}
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Message</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${formData.message.replace(/\n/g, "<br>")}</td>
        </tr>
      </table>
      <p style="margin-top: 20px; color: #666; font-size: 12px;">
        This email was sent from the Fusion Humanoids website contact form.
      </p>
    `;

    // Get access token and send email via Graph API
    const accessToken = await getGraphAccessToken();
    await sendEmailViaGraph(
      accessToken,
      "web1@fusiontechnologies.ie", // FROM address (must be a valid mailbox)
      "sales@fusiontechnologies.ie", // TO address
      subject,
      htmlContent,
      formData.email // Reply-To
    );

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error sending contact email:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
