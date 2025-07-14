import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import svelte from "@astrojs/svelte";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // 修改为你的 Vercel 部署地址
  site: 'https://oner-z.vercel.app',

  // Vercel 部署在根路径，所以设置为 "/"
  base: "/",

  integrations: [mdx(), sitemap(), svelte()],

  markdown: {
    remarkRehype: {
      footnoteLabel: "脚注",
      footnoteBackLabel: '文档内容的脚注',
    }
  },

  vite: {
    plugins: [tailwindcss()]
  }
});