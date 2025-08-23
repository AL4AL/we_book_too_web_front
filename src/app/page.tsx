import BottomNavigation from "@/components/NavigationBar";
import HomePageBackground from '@/components/HomePageBackground'
import Banner from '@/components/Banner';
import ServicesGrid from '@/components/ServicesGrid';
import FeaturedProviders from '@/components/FeaturedProviders';
import axiosClient from '@/utils/axios'
import { headers } from 'next/headers'

async function fetchServices() {

	const res = await axiosClient.get('/api/v1/catalog/services');

	return res.data.data;
}

async function fetchFeaturedProviders() {
	const res = await axiosClient.get('/api/v1/catalog/featured', {
		headers: {
			'referer': (await headers()).get('host'),
		},
	});
	// todo handle failure case
	return res.data.data;
}

export default async function Home() {
	axiosClient.defaults.headers.common['referer'] = (await headers()).get('host');
	const services = await fetchServices();
	const featured = await fetchFeaturedProviders();
	return (
		<div className="home-page-container relative min-h-screen">
			<HomePageBackground />
			<main className="relative z-10 pb-24">
				<section className="w-full flex flex-col items-center pt-8 pb-4 px-4">
					<Banner />
				</section>

				<ServicesGrid services={services} isLoading={false}/>

				<FeaturedProviders featured={featured} isLoading={false} />

				<div className="block fixed bottom-0 w-full z-20">
					<BottomNavigation />
				</div>
			</main>
		</div>
	);
}
