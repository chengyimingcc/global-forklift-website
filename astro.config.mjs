import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const site = process.env.PUBLIC_SITE_URL || "https://wegoforklift.com";

export default defineConfig({
  site,
  trailingSlash: "always",
  compressHTML: true,
  output: "static",
  integrations: [
    sitemap({
      filter: (page) => {
        const pathname = new URL(page).pathname;
        return pathname !== "/" && !pathname.startsWith("/admin/");
      }
    })
  ],
  build: {
    format: "directory"
  }
});
