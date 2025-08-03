import BottomNavigation from "@/components/NavigationBar";
import HomePageBackground from '@/components/HomePageBackground'
import Banner from '@/components/Banner';
import ServicesGrid from '@/components/ServicesGrid';
import FeaturedProviders from '@/components/FeaturedProviders';

async function fetchServices() {
	const res = await fetch(`${process.env.BACK_END_BASE_URL}/services`);
	if (!res.ok) {
		return [];
	}
	return res.json();
}

async function fetchFeaturedProviders() {
	const res = await fetch(`${process.env.BACK_END_BASE_URL}/featured`);
	if (!res.ok) {
		return [];
	}
	return res.json();
}

export default async function Home() {
	const services = await fetchServices();
	const featured = await fetchFeaturedProviders();

	return (
		<div className="home-page-container relative min-h-screen">
			<HomePageBackground />
			<main className="relative z-10 pb-24">
				<section className="w-full flex flex-col items-center pt-8 pb-4 px-4">
					<Banner />
				</section>

				<ServicesGrid services={services} />

				<FeaturedProviders featured={featured} />

				<div className="block fixed bottom-0 w-full z-20">
					<BottomNavigation />
				</div>
			</main>
		</div>
	);
}
