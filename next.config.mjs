/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: process.env.NODE_ENV === 'production' ? 'johnt0.github.io' : '',
    images: {
        unoptimized: true,
    },
};

module.exports = nextConfig;

export default nextConfig;

