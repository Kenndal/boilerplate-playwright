module.exports = {
  root: true,
  env: { es2022: true },
  settings: {
    files: ["**/*.ts"],
    parser: "@typescript-eslint/parser",
    "import/resolver": {
      typescript: {},
    },
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json"],
    tsconfigRootDir: __dirname,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "prettier",
  ],
  ignorePatterns: [".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["prettier", "eslint-plugin-no-relative-import-paths"],
  rules: {
    "no-relative-import-paths/no-relative-import-paths": ["error", { allowSameFolder: true }],
    "prettier/prettier": ["error"],
    "no-empty-pattern": "off",
  },
}
