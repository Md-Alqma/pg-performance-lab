import baseConfig, {
  TailwindConfig,
} from "@pg-performance-lab/config/tailwind.config";

const config = {
  ...baseConfig,
  content: ["./src/**/*.{js,jsx,tsx,ts}", ...baseConfig.content],
} satisfies TailwindConfig;

export default config;
