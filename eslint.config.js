// import js from '@eslint/js'
// import globals from 'globals'
// import reactHooks from 'eslint-plugin-react-hooks'
// import reactRefresh from 'eslint-plugin-react-refresh'
// import { defineConfig, globalIgnores } from 'eslint/config'

// export default defineConfig([
//   globalIgnores(['dist']),
//   {
//     files: ['**/*.{js,jsx}'],
//     extends: [
//       js.configs.recommended,
//       reactHooks.configs['recommended-latest'],
//       reactRefresh.configs.vite,
//     ],
//     languageOptions: {
//       ecmaVersion: 2020,
//       globals: globals.browser,
//       parserOptions: {
//         ecmaVersion: 'latest',
//         ecmaFeatures: { jsx: true },
//         sourceType: 'module',
//       },
//     },
//     rules: {
//       'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
//     },
//   },
// ])

// Import necessary ESLint core functionality and plugins
import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  // A configuration object for your project files
  {
    // Ignore files or directories that shouldn't be linted
    ignores: ["dist"],

    // Files to apply this configuration to
    files: ["**/*.{js,jsx}"],

    // Language options, including JSX support
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser, // Make browser globals (like window, document) available
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // Crucial: Enable JSX parsing
        },
      },
    },

    // Include the React plugins and their rules
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },

    // Define rules for your project
    rules: {
      // Basic recommended JavaScript rules
      ...js.configs.recommended.rules,

      // Recommended rules for React
      ...react.configs.recommended.rules,

      // Recommended rules for React Hooks
      ...reactHooks.configs.recommended.rules,
      
      // The specific rule that will fix your issue
      "react/jsx-uses-vars": "error",

      // Optional: Add the react-refresh rule for hot module reloading
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    },

    // Settings for the plugins (especially React settings)
    settings: {
      react: {
        version: "detect", // Automatically detect the React version
      },
    },
  },
];
