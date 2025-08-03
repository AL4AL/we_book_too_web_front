import React from 'react';
import Image from 'next/image';

type Featured = { id: number; name: string; service: string; img: string };

export default function FeaturedProviders({ featured }: { featured: Featured[] }) {
	return (
		<section className="mt-8 px-2">
			<h2 className="text-lg font-semibold mb-3 px-2">Featured Providers</h2>
			<div className="flex overflow-x-auto gap-4 pb-2 px-2">
				{featured.length === 0 ? (
					<div className="text-gray-400">Loading...</div>
				) : (
					featured.map(card => (
						<div key={card.id} className="min-w-[180px] bg-white rounded-xl shadow-md p-4 flex-shrink-0 flex flex-col items-center">
							<Image src={card.img} alt={card.name} width={48} height={48} className="rounded-full mb-2" />
							<span className="font-semibold text-sm mb-1">{card.name}</span>
							<span className="text-xs text-gray-500">{card.service}</span>
						</div>
					))
				)}
			</div>
			<div className="flex justify-center mt-3">
				<button className="text-blue-600 font-medium px-4 py-2 rounded-full hover:bg-blue-50 transition">See More Providers</button>
			</div>
		</section>
	);
} 