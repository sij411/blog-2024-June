import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://sij411.github.io/blog-2024-June',
	integrations: [mdx(), sitemap()],
	
});
