/** @type {import('next').NextConfig} */
const BASE_URL = `https://fakestoreapi.com`;
const nextConfig = {
    env: {
        BASE_URL: `${BASE_URL}`,
        API_BASE_URL: `${BASE_URL}/`,
        STATIC_FILES_URL: `${BASE_URL}`,
      }
}

module.exports = nextConfig
