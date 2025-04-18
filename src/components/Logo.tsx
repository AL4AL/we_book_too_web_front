import Image from "next/image";
import WeBookToo from '@/assets/images/WeBookTooLogo.png'

interface LogoProps {
	className?: string;
}

export default function Logo({ className }: LogoProps) {
	return (
		<Image className={className} src={WeBookToo} alt={'WeBookToo logo'} width="100" height="100" />
	);
}