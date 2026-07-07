import { siteConfig } from "@data/site";

export function GET() {
  return new Response(
    JSON.stringify({
      name: siteConfig.brand,
      short_name: "Forklift",
      start_url: "/en/",
      display: "standalone",
      background_color: "#ffffff",
      theme_color: "#0b6d61",
      icons: [
        {
          src: "/favicon.svg",
          sizes: "any",
          type: "image/svg+xml"
        }
      ]
    }),
    {
      headers: {
        "Content-Type": "application/manifest+json; charset=utf-8"
      }
    }
  );
}
