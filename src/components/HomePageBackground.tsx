import Image from "next/image";

// Image configurations based on Tailwind breakpoints
const imageConfigs = {
	base: {
		src: 'images/base/home-page-background.webp',
		width: 640,
		height: 800,
	},
	sm: {
		src: 'images/sm/home-page-background.webp',
		width: 768,
		height: 1024,
	},
	lg: {
		src: 'images/lg/home-page-background.webp',
		width: 1920,
		height: 1080,
	}
} as const;

export default function HomePageBackground() {
	// Build the image URL for the base configuration
	const imageUrl = `${process.env.BACK_END_BASE_URL}/${imageConfigs.base.src}`;
	
	return (
		<div className="fixed inset-0 -z-10 w-full h-full">
			<picture>
				{/* TODO: Using sources like this violates whole purpose of Next.js Image tag. */}
				{/* Large screens (≥1024px) */}
				<source
					media="(min-width: 1024px)"
					srcSet={`${process.env.BACK_END_BASE_URL}/${imageConfigs.lg.src}`}
				/>
				{/* Small screens (≥640px) */}
				<source
					media="(min-width: 640px)"
					srcSet={`${process.env.BACK_END_BASE_URL}/${imageConfigs.sm.src}`}
				/>
				{/* Base image (fallback) */}
				<Image 
					src={imageUrl}
					alt="Background image"
					fill={true}
					objectFit={'cover'}
					priority={true}
					quality={85}
				/>
			</picture>
		</div>
	);
}