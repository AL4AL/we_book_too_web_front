import NavigationBarButton from "@/components/NavigationBarButton";
import {HomeIcon, MagnifyingGlassIcon, NewspaperIcon, UserCircleIcon} from '@heroicons/react/24/solid'

export interface NavigationBarProps {
	className?: string
}

export default function NavigationBar({className}: NavigationBarProps) {
	return (
		<div className={`bg-gray-100 py-2 w-full flex flex-row justify-around m-1 rounded-sm ${className}`}>
			<NavigationBarButton>
				<HomeIcon className={'size-6'} />
			</NavigationBarButton>
			<NavigationBarButton>
				<MagnifyingGlassIcon className={'size-6'} />
			</NavigationBarButton>
			<NavigationBarButton>
				<NewspaperIcon className={'size-6'} />
			</NavigationBarButton>
			<NavigationBarButton>
				<UserCircleIcon className={'size-6'} />
			</NavigationBarButton>
		</div>
	);
}