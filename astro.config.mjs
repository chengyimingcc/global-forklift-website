import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const site = process.env.PUBLIC_SITE_URL || "https://wegoforklift.com";
const placeholderRoutes = [
  "/solutions/",
  "/parts-service/",
  "/resources/",
  "/industries/",
  "/services/",
  "/about/",
  "/privacy/",
  "/terms/",
  "/why-wego/company/",
  "/why-wego/global-network/",
  "/why-wego/certificates/",
  "/why-wego/case-studies/"
];
const categorySlugs = [
  "lithium-electric-forklifts",
  "diesel-forklifts",
  "heavy-duty-forklifts",
  "rough-terrain-forklifts",
  "electric-pallet-stackers"
];
const nonEnglishCategoryPattern = new RegExp(`^/(es|fr|ja|de|pt|ko|ar)/products/(${categorySlugs.join("|")})/$`);

export default defineConfig({
  site,
  trailingSlash: "always",
  compressHTML: true,
  output: "static",
  integrations: [
    sitemap({
      filter: (page) => {
        const pathname = new URL(page).pathname;
        return pathname !== "/" && !placeholderRoutes.some((path) => pathname.includes(path)) && !nonEnglishCategoryPattern.test(pathname);
      }
    })
  ],
  build: {
    format: "directory"
  }
});
