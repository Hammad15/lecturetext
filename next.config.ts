import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/lecturetext",
  trailingSlash: true,
  images: { unoptimized: true },
}

export default nextConfig
