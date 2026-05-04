// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'OpenSans',
      display: 'swap',
      cssVariable: '--font-open-sans',
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
