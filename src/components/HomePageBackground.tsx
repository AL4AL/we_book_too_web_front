// Image configurations based on Tailwind breakpoints
const imageConfigs = {
	base: {
		src: 'api/v1/images/base/home-page-background.webp',
		width: 640,
		height: 800,
	},
	sm: {
		src: 'api/v1/images/sm/home-page-background.webp',
		width: 768,
		height: 1024,
	},
	lg: {
		src: 'api/v1/images/lg/home-page-background.webp',
		width: 1920,
		height: 1080,
	}
} as const;

export default function HomePageBackground() {

	return (
		<div className="fixed inset-0 -z-10 w-full h-full">
			<picture>
				{/* TODO: Using sources like this violates whole purpose of Next.js Image tag. */}
				{/* Large screens (≥1024px) */}
				<source
					media="(min-width: 1024px)"
					srcSet={`${process.env.NEXT_PUBLIC_BACK_END_BASE_URL}/${imageConfigs.lg.src}`}
				/>
				{/* Small screens (≥640px) */}
				<source
					media="(min-width: 640px)"
					srcSet={`${process.env.NEXT_PUBLIC_BACK_END_BASE_URL}/${imageConfigs.sm.src}`}
				/>
				{/* Base image (fallback) */}
				<img 
					src={`${process.env.NEXT_PUBLIC_BACK_END_BASE_URL}/${imageConfigs.base.src}`}
					alt="Background image"
					className="w-full h-full object-cover"
					loading="eager"
				/>
			</picture>
		</div>
	);
}