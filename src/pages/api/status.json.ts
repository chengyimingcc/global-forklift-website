import { languages } from "@data/languages";
import { products, categories } from "@data/products";
import { siteConfig } from "@data/site";

export function GET() {
  return new Response(
    JSON.stringify(
      {
        ok: true,
        brand: siteConfig.brand,
        indexingEnabled: siteConfig.allowIndexing,
        languages: languages.map((language) => language.code),
        productCount: products.length,
        categoryCount: categories.length,
        leadEndpoint: "/.netlify/functions/lead",
        feeds: ["/feeds/products.json", "/feeds/google-merchant.csv"]
      },
      null,
      2
    ),
    {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Cache-Control": "public, max-age=300"
      }
    }
  );
}
