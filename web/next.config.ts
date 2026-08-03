import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  allowedDevOrigins: [
    "localhost:3000", // Local development host
    "*.lhr.life", // localhost.run secure tunnels
    "*.localhost.run", // localhost.run alternative domains
    "*.ngrok-free.app", // Ngrok free subdomains
    "*.preview.app.github.dev", // Github Codespaces tunnel domains
    "*.tunnels.api.visualstudio.com", // VS Code native port forwarding tunnels
  ],
  async redirects() {
    return [
      {
        source: "/docs/:path*",
        destination: "/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
