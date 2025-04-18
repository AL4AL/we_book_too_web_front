interface NavigationBarButtonProps {
	children: React.ReactNode;
}

export default function NavigationBarButton({ children }: NavigationBarButtonProps) {
	return (
		<button>
			{children}
		</button>
	);
}