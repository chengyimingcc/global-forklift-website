import { defaultLang } from "@data/languages";
import { getCategory, getProductName, products } from "@data/products";
import { absoluteUrl, languagePath } from "@lib/seo";

function csv(value: string) {
  return `"${value.replace(/"/g, '""')}"`;
}

export function GET() {
  const headers = [
    "id",
    "title",
    "description",
    "link",
    "image_link",
    "availability",
    "price",
    "brand",
    "condition",
    "product_type",
    "google_product_category",
    "custom_label_0",
    "custom_label_1"
  ];
  const rows = products.map((product) => {
    const category = getCategory(product.category);
    const copy = product.translations[defaultLang];
    return [
      product.sku,
      getProductName(product, defaultLang),
      copy.seoDescription,
      absoluteUrl(languagePath(defaultLang, `/products/${product.slug}/`)),
      absoluteUrl(product.image),
      product.availability === "InStock" ? "in stock" : "preorder",
      "",
      product.brand,
      "new",
      category?.label[defaultLang] ?? product.category,
      "Vehicles & Parts > Vehicles",
      product.capacityTons,
      product.powerType
    ];
  });
  const output = [headers, ...rows].map((row) => row.map(csv).join(",")).join("\n");

  return new Response(output, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Cache-Control": "public, max-age=3600"
    }
  });
}
