import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://draftone.app', // Update with actual domain when ready
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
