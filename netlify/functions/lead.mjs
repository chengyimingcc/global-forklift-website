const jsonHeaders = {
  "Content-Type": "application/json; charset=utf-8",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Accept"
};

function response(statusCode, body) {
  return {
    statusCode,
    headers: jsonHeaders,
    body: JSON.stringify(body)
  };
}

async function parseBody(event) {
  const contentType = event.headers["content-type"] || event.headers["Content-Type"] || "";
  const raw = event.isBase64Encoded ? Buffer.from(event.body || "", "base64").toString("utf8") : event.body || "";

  if (contentType.includes("application/json")) {
    return JSON.parse(raw || "{}");
  }

  const params = new URLSearchParams(raw);
  return Object.fromEntries(params.entries());
}

function cleanLead(payload) {
  return {
    name: String(payload.name || "").trim(),
    company: String(payload.company || "").trim(),
    email: String(payload.email || "").trim(),
    phone: String(payload.phone || "").trim(),
    country: String(payload.country || "").trim(),
    product: String(payload.product || "").trim(),
    quantity: String(payload.quantity || "").trim(),
    message: String(payload.message || "").trim(),
    language: String(payload.language || "").trim(),
    source_path: String(payload.source_path || "").trim(),
    submitted_at: new Date().toISOString()
  };
}

export async function handler(event) {
  if (event.httpMethod === "OPTIONS") {
    return response(204, {});
  }

  if (event.httpMethod !== "POST") {
    return response(405, { ok: false, error: "Method not allowed" });
  }

  try {
    const payload = await parseBody(event);

    if (payload.company_website) {
      return response(200, { ok: true, spam: true });
    }

    const lead = cleanLead(payload);
    if (!lead.name || !lead.message || (!lead.email && !lead.phone)) {
      return response(422, {
        ok: false,
        error: "name, message, and either email or phone are required"
      });
    }

    if (process.env.LEAD_WEBHOOK_URL) {
      const webhookResponse = await fetch(process.env.LEAD_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "forklift-global-lead-endpoint"
        },
        body: JSON.stringify({
          type: "forklift_lead",
          lead
        })
      });

      if (!webhookResponse.ok) {
        return response(502, { ok: false, error: "Lead webhook failed" });
      }

      return response(200, { ok: true, mode: "webhook" });
    }

    return response(200, {
      ok: true,
      mode: "dry-run",
      message: "Lead endpoint is working. Set LEAD_WEBHOOK_URL to route submissions.",
      lead
    });
  } catch (error) {
    return response(400, {
      ok: false,
      error: error instanceof Error ? error.message : "Invalid request"
    });
  }
}
