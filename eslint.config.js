import pluginJs from "@eslint/js";
import globals from "globals";

// export default defineConfig([
//   {
//     files: ["**/*.{js,mjs,cjs}"],
//     plugins: { js },
//     extends: ["js/recommended"],
//     languageOptions: { globals: globals.browser }
//   }
// ]);

export default [
  pluginJs.configs.recommended,
  {
    languageOptions: { globals: globals.browser },
    rules: {
      semi: "error"
    }
  }
];
