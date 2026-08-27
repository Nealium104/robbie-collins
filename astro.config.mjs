// @ts-check
import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://collinstrumpet.com",

  output: "static",
  adapter: netlify(),

  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});
