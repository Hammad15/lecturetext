import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  output: "export",
  // www.lecturetext.com serves this export at /. A /lecturetext prefix 404s the stylesheet.
  trailingSlash: true,
  images: { unoptimized: true },
}

export default nextConfig
