import Logo from "@/components/Logo";
import BottomNavigation from "@/components/NavigationBar";
import HomePageBackground from '@/components/HomePageBackground'

export default function Home() {
	return (
		<div className="home-page-container relative">
			<HomePageBackground />
			<main className="relative z-10">
				<Logo className={'block mx-auto'}/>
				<h1 className={'mt-1 text-center text-2xl'}>Title</h1>
				<div className={'block fixed bottom-0 w-full z-20'}>
					<button className={'bg-blue-400 p-4 text-white rounded-xl ms-auto me-auto block mb-6'}>
						Call to Action
					</button>
					<BottomNavigation/>
				</div>
			</main>
		</div>
	);
}
