import Image from "next/image";

export default function HomePageBackground() {
	return (
		<Image src={'/images/alternating-arrowhead.svg'} alt={'Background image'} width={160} height={160} />
	);
}