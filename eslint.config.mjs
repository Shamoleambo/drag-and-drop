import globals from "globals"
import pluginJs from "@eslint/js"

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    rules: {
      "no-unused-vars": ["error", { args: "none" }],
      indent: ["error", 2],
      quotes: [2, "double"],
      "eol-last": 1,
      semi: ["error", "never"],
      "object-curly-spacing": ["error", "always"]
    }
  },
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
]
