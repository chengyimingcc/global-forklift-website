import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const site = process.env.PUBLIC_SITE_URL || "https://www.wegoforklift.com";

export default defineConfig({
  site,
  trailingSlash: "always",
  compressHTML: true,
  output: "static",
  integrations: [sitemap()],
  build: {
    format: "directory"
  }
});
