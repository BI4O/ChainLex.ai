import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,  // 静态导出必须禁用图片优化
  },
};

export default nextConfig;
