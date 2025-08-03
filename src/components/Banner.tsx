import React from 'react';

export default function Banner() {
	return (
		<div className="w-full rounded-2xl bg-gradient-to-r from-blue-400 to-blue-600 p-6 flex flex-col items-center shadow-md">
			<h1 className="text-white text-3xl font-bold mb-2 text-center">Welcome to WeBookToo</h1>
			<p className="text-white text-base text-center mb-4">Book your favorite services with ease</p>
			<button className="bg-white text-blue-600 font-semibold px-6 py-2 rounded-full shadow hover:bg-blue-50 transition">Book Now</button>
		</div>
	);
} 