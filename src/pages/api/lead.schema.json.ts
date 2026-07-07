export function GET() {
  return new Response(
    JSON.stringify(
      {
        endpoint: "/.netlify/functions/lead",
        method: "POST",
        contentTypes: ["multipart/form-data", "application/x-www-form-urlencoded", "application/json"],
        required: ["name", "message"],
        recommended: ["email", "phone", "country", "product", "quantity"],
        fields: {
          name: "Buyer name",
          company: "Buyer company",
          email: "Buyer email",
          phone: "Phone or WhatsApp",
          country: "Destination country",
          product: "Product slug",
          quantity: "Estimated quantity",
          message: "Inquiry details",
          language: "Website language code",
          source_path: "Page where the lead was submitted",
          company_website: "Hidden honeypot field"
        }
      },
      null,
      2
    ),
    {
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    }
  );
}
