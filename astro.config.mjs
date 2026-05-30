import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://rawatswapnil.github.io',
  integrations: [tailwind()],
});
