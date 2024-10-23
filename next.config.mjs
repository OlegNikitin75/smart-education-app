/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['res.cloudinary.com']
		// loader: 'cloudinary',
		// path:'https://res.cloudinary.com/dakehatrn/image/upload/'
	},
	webpack: (config, { isServer }) => {
		if (!isServer) {
			config.resolve.fallback.fs = false
		}

		return config
	}
}

export default nextConfig
