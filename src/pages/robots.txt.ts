import { siteConfig } from "@data/site";

export function GET() {
  const lines = [
    "User-agent: *",
    siteConfig.allowIndexing ? "Allow: /" : "Disallow: /",
    "",
    `Sitemap: ${siteConfig.baseUrl.replace(/\/$/, "")}/sitemap-index.xml`
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
}
