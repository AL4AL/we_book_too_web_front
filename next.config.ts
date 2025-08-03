import type { NextConfig } from "next";

function getValidatedProtocol(): 'http' | 'https' {
  const protocol = process.env.IMAGE_PROTOCOL;
  if (protocol !== 'http' && protocol !== 'https') {
    throw new Error("IMAGE_PROTOCOL must be 'http' or 'https'");
  }
  return protocol;
}

function getValidatedHostname(): string {
  const hostname = process.env.IMAGE_HOSTNAME;
  if (!hostname) {
    throw new Error("Missing required environment variable: IMAGE_HOSTNAME");
  }
  return hostname;
}

function getValidatedPort(): string | undefined {
  const port = process.env.IMAGE_PORT;
  if (!port) {
    throw new Error("Missing required environment variable: IMAGE_PORT");
  }
  return port;
}

function getOptionalPathname(): string | undefined {
  const pathname = process.env.IMAGE_PATHNAME;
  return pathname || undefined;
}

const protocol = getValidatedProtocol();
const hostname = getValidatedHostname();
const port = getValidatedPort();
const pathname = getOptionalPathname();

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol, // optional, but we always provide
        hostname, // required
        port,     // optional, but we always provide
        pathname: pathname ?? '**', // optional, but we always provide
      }
    ],
  }
};

export default nextConfig;
