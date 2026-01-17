import baseConfig, {
  TailwindConfig,
} from "@pg-performance-lab/config/tailwind.config";

const config = {
  ...baseConfig,
  content: [
    "./src/**/*.{js,jsx,tsx,ts}",
    "./node_modules/@mosje/ui/src/**/*.{js,jsx,ts,tsx}",
    ...baseConfig.content,
  ],
} satisfies TailwindConfig;

export default config;
