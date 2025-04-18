import Logo from "@/components/Logo";
import NavigationBar from "@/components/NavigationBar";

export default function Home() {
	return (
		<div className="home-page-container">
			<Logo className={'block mx-auto'}/>
			<h1 className={'mt-1 text-center text-2xl'}>Title</h1>
			<div className={'block fixed bottom-0 w-full'}>
				<button className={'bg-blue-400 p-4 text-white rounded-xl ms-auto me-auto block mb-6'}>
					Call to Action
				</button>
				<NavigationBar/>
			</div>
		</div>
	);
}
