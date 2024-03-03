import createJiti from "jiti";

/** @type {import('next').NextConfig} */
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
const jiti = createJiti(new URL(import.meta.url).pathname);
jiti("./src/env");
const nextConfig = {
  output: "standalone",
};

export default nextConfig;
