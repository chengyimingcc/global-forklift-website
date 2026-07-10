import { defaultLang } from "@data/languages";
import { getCategory, getProductName, products } from "@data/products";
import { absoluteUrl, languagePath } from "@lib/seo";

export function GET() {
  const items = products.map((product) => {
    const category = getCategory(product.category);
    const copy = product.translations[defaultLang];

    return {
      id: product.sku,
      title: getProductName(product, defaultLang),
      description: copy.seoDescription,
      link: absoluteUrl(languagePath(defaultLang, `/products/${product.slug}/`)),
      image_link: absoluteUrl(product.image),
      brand: product.brand,
      condition: "new",
      availability: product.availability === "InStock" ? "in stock" : "preorder",
      price: "",
      product_type: category?.label[defaultLang] ?? product.category,
      custom_label_0: product.capacityTons,
      custom_label_1: product.powerType,
      google_product_category: "Vehicles & Parts > Vehicles"
    };
  });

  return new Response(JSON.stringify({ generatedAt: new Date().toISOString(), items }, null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=3600"
    }
  });
}
