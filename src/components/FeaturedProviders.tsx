import React from 'react';
import Image from 'next/image';

type Media = {
	mediable_type: string,
	url: string,
	alt: string,
}

type Featured = {
	type: string,
	data: {
		id: number,
		name: string,
		media: Media[],
	}
};

export default function FeaturedProviders({ featured, isLoading }: { featured: Featured[], isLoading: boolean }) {
	return (
		<section className="mt-8 px-2">
			<h2 className="text-lg font-semibold mb-3 px-2">Featured Providers</h2>
			<div className="flex overflow-x-auto gap-4 pb-2 px-2">
				{isLoading ? (
					<div className="text-gray-400">Loading...</div>
				) : (
					featured.length === 0 ? (
						<div className="col-span-5 text-center text-gray-400">No services are available</div>
					) : (

						featured.map(card => (
							<div key={`${card.type}-${card.data.id}`}
									 className="min-w-[180px] bg-white rounded-xl shadow-md p-4 flex-shrink-0 flex flex-col items-center">
								{
									card.data.media.length > 0 ? (
										card.data.media[0].mediable_type === 'image' ?
											<Image src={card.data.media[0].url} alt={card.data.media[0].alt} width={48} height={48} className="rounded-full mb-2" /> :
											''
									) : ''
								}

								<span className="font-semibold text-sm mb-1">{card.data.name}</span>
							</div>
						))
					)
				)}
			</div>
			<div className="flex justify-center mt-3">
				<button className="text-blue-600 font-medium px-4 py-2 rounded-full hover:bg-blue-50 transition">See More Providers</button>
			</div>
		</section>
	);
} 