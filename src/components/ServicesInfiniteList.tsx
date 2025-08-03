"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import ServicesGrid from "./ServicesGrid";
import { usePathname } from "next/navigation";

interface Service {
	// Define the shape of a service object as needed
	id: string | number;
	// ...other fields
}

interface ServicesInfiniteListProps {
	initialServices: Service[];
	initialHasMore: boolean;
}

const PAGE_SIZE = 20;

export default function ServicesInfiniteList({ initialServices, initialHasMore }: ServicesInfiniteListProps) {
	const [services, setServices] = useState<Service[]>(initialServices);
	const [page, setPage] = useState(1);
	const [hasMore, setHasMore] = useState(initialHasMore);
	const [loading, setLoading] = useState(false);
	const loaderRef = useRef<HTMLDivElement | null>(null);
	const pathname = usePathname();

	// Scroll position memory
	useEffect(() => {
		const saved = sessionStorage.getItem(`scroll-pos:${pathname}`);
		if (saved) {
			window.scrollTo(0, parseInt(saved, 10));
		}
		return () => {
			sessionStorage.setItem(`scroll-pos:${pathname}` , String(window.scrollY));
		};
	}, [pathname]);

	const fetchMore = useCallback(async () => {
		if (loading || !hasMore) return;
		setLoading(true);
		const nextPage = page + 1;
		try {
			const res = await fetch(`/api/services?page=${nextPage}&limit=${PAGE_SIZE}`);
			if (!res.ok) throw new Error("Failed to fetch");
			const data = await res.json();
			setServices((prev) => [...prev, ...(data.services || [])]);
			setHasMore(data.hasMore || false);
			setPage(nextPage);
		} catch (e) {
			// Optionally handle error
		} finally {
			setLoading(false);
		}
	}, [loading, hasMore, page]);

	// Infinite scroll observer
	useEffect(() => {
		if (!hasMore) return;
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					fetchMore();
				}
			},
			{ threshold: 1 }
		);
		if (loaderRef.current) {
			observer.observe(loaderRef.current);
		}
		return () => {
			if (loaderRef.current) observer.unobserve(loaderRef.current);
		};
	}, [fetchMore, hasMore]);

	return (
		<div>
			<ServicesGrid services={services} />
			<div ref={loaderRef} style={{ height: 40 }} />
			{loading && <div className="text-center py-4">Loading...</div>}
			{!hasMore && <div className="text-center py-4 text-gray-400">No more services</div>}
		</div>
	);
} 