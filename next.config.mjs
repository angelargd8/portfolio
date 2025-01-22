/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.imgur.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.credly.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "seeklogo.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img.icons8.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn4.iconfinder.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "static-00.iconduck.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "itproger.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.icon-icons.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.freeiconspng.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "mariadb.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "jobtech.jp",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "w7.pngwing.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
