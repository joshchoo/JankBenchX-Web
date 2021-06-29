import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), rechartsPlugin()],
});

// Temporary fix for https://github.com/vitejs/vite/issues/3477
function rechartsPlugin() {
  return {
    name: "recharts_plugin",
    transform(code: string, id: string) {
      if (id.includes("reduce-css-calc/dist/parser.js")) {
        return code.replace(`typeof require !== 'undefined'`, "true");
      }

      return null;
    },
  };
}
