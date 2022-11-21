import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },

  // root: process.cwd(),
  // base: "/",
  // mode: "development",
  // define: [],
  // publicDir: "public",
  // // cacheDir: "node_modules/.vite",
  // resolve: {
  //   alias: [{ find: "@", replacement: resolve(__dirname, "./src") }],
  //   dedupe: [],
  //   conditions: [],
  //   mainFields: ["module", "jsnext:main", "jsnext"],
  //   extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"],
  // },
  // css: {
  //   modules: {},
  //   postcss: {},
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `@import './src/assets/styles/index.scss';`,
  //     },
  //   },
  // },
  // json: {
  //   namedExports: true,
  //   stringify: false,
  // },
  // esbuild: {
  //   jsxFactory: "h",
  //   jsxFragment: "Fragment",
  //   // jsxInject: `import React from 'react'`
  // },
  // assetsInclude: "",
  // logLevel: "info",
  // clearScreen: false,

  // server: {
  //   host: "0.0.0.0",
  //   port: 9090,
  //   strictPort: false,
  //   https: false,
  //   open: false,
  //   proxy: {
  //     "^/api/.*": {
  //       target: "http://jsonplaceholder.typicode.com",
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, ""),
  //     },
  //   },
  //   cors: true,
  //   force: true,
  //   hmr: true,
  //   watch: {},
  //   middlewareMode: false,
  //   fsServe: {
  //     strict: false,
  //     root: "..",
  //   },
  // },

  build: {
    // target: "modules",
    // polyfillDynamicImport: false,
    outDir: "docs",
    // assetsDir: "assets",
    // assetsInlineLimit: 4096,
    // cssCodeSplit: true,
    // sourcemap: false,
    // rollupOptions: {
    //   input: {
    //     index: resolve(__dirname, "index.html"),
    //     platformStandards: resolve(__dirname, "platformStandards.html"),
    //   },
    // },
    // commonjsOptions: {},
    // lib: false,
    // manifest: false,
    // minify: "terser",
    // terserOptions: {},
    // cleanCssOptions: {},
    // write: true,
    // emptyOutDir: true,
    // brotliSize: true,
    // chunkSizeWarningLimit: 500,
    // watch: null,
  },

  // optimizeDeps: {
  //   entries: [],
  //   exclude: [],
  //   include: [],
  //   keepNames: false,
  // },
  // ssr: {
  //   external: [],
  //   noExternal: [],
  //   target: "node"
  // }
});
