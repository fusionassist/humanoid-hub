import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";

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

    const smtpUser = Deno.env.get("SMTP_USER") || "";
    const smtpPassword = Deno.env.get("SMTP_PASSWORD") || "";

    console.log("Attempting SMTP connection with user:", smtpUser);

    const client = new SMTPClient({
      connection: {
        hostname: "smtp.office365.com",
        port: 587,
        tls: false,
        auth: {
          username: smtpUser,
          password: smtpPassword,
        },
      },
    });

    await client.send({
      from: smtpUser,
      to: "sales@fusiontechnologies.ie",
      replyTo: formData.email,
      subject: subject,
      content: "Please view this email in an HTML-capable email client.",
      html: htmlContent,
    });

    await client.close();
    console.log("Email sent successfully via Microsoft 365 SMTP");

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
