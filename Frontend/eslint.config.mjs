import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  // Convierte el config viejo de Next.js a flat
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Convierte el plugin de TypeScript recomendado
  ...compat.extends("plugin:@typescript-eslint/recommended"),

  // Tus reglas personalizadas
  {
    rules: {
      "@next/next/no-img-element": "off",
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
];
