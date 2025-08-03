import ServicesInfiniteList from '@/components/ServicesInfiniteList';

async function fetchServices(page = 1, limit = 20) {
	const res = await fetch(`${process.env.BACK_END_BASE_URL}/services?page=${page}&limit=${limit}`);
	if (!res.ok) {
		return { services: [], hasMore: false };
	}
	const data = await res.json();
	return {
		services: data.services || [],
		hasMore: data.hasMore || false,
	};
}

export default async function ServicesPage() {
	const { services, hasMore } = await fetchServices();

	return (
		<div className="min-h-screen bg-white">
			<main className="max-w-3xl mx-auto py-8 px-4">
				<h1 className="text-2xl font-bold mb-6 text-center">All Services</h1>
				<ServicesInfiniteList initialServices={services} initialHasMore={hasMore} />
			</main>
		</div>
	);
} 