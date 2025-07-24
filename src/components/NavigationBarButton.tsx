import React from "react";

interface NavigationBarButtonProps {
	children: React.ReactNode;
}

/**
 * NavigationBarButton component.
 * @param children The button's inner content (e.g., a symbol or icon).
 */
export default function NavigationBarButton({ children }: NavigationBarButtonProps) {
	return (
		<button className={`w-full justify-items-center py-3`}>
			{children}
		</button>
	);
}