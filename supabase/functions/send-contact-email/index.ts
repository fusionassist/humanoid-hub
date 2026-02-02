import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

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

    const emailResponse = await resend.emails.send({
      from: "Fusion Humanoids <noreply@fusionhumanoids.com>",
      to: ["sales@fusiontechnologies.ie"],
      reply_to: formData.email,
      subject: subject,
      html: htmlContent,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
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
