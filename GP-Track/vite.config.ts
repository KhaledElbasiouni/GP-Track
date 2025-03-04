import { fileURLToPath, URL } from "node:url";
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";
import { quasar, transformAssetUrls } from "@quasar/vite-plugin";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [
      vue({ template: { transformAssetUrls } }),
      vueDevTools(),
      // @quasar/plugin-vite options list:
      // https://github.com/quasarframework/quasar/blob/dev/vite-plugin/index.d.ts
      quasar({
        autoImportComponentCase: "combined",
        sassVariables: fileURLToPath(
          new URL("./src/quasar-variables.scss", import.meta.url)
        ),
      }),
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    server:
      env.VITE_USE_PROXY === "true"
        ? {
            proxy: {
              "/api/": {
                target: "http://localhost:3000",
                changeOrigin: true,
                secure: false,
                rewrite: (path: string) => path.replace(/^\/api/, ""),
              },
            },
          }
        : undefined,
  };
});
