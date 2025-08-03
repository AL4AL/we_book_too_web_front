import React from 'react';
import Link from 'next/link';

type Service = { id: number; name: string; icon: string };

export default function ServicesGrid({ services }: { services: Service[] }) {
	const visibleServices = services.slice(0, 5);

	return (
		<section className="mt-6 px-4">
			<h2 className="text-lg font-semibold mb-3">Services</h2>
			<div className="grid grid-cols-5 gap-4">
				{services.length === 0 ? (
					<div className="col-span-5 text-center text-gray-400">Loading...</div>
				) : (
					visibleServices.map(service => (
						<div key={service.id} className="flex flex-col items-center bg-gray-50 rounded-lg p-3 shadow-sm">
							<span className="text-2xl mb-1">{service.icon}</span>
							<span className="text-xs font-medium text-gray-700">{service.name}</span>
						</div>
					))
				)}
			</div>
			{services.length > 5 && (
				<div className="flex justify-center mt-3">
					<Link
						href="/services"
						className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
					>
						Show More
					</Link>
				</div>
			)}
		</section>
	);
} 