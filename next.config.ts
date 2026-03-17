/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cishnxqxaieaxmdglnpl.supabase.co', // آدرس اختصاصی باکت شما
        port: '',
        pathname: '/storage/v1/object/public/**',
      },
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
      }
    ],
  },
};

export default nextConfig;