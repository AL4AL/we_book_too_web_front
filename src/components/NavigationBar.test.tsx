import '@testing-library/react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import NavigationBar from './NavigationBar'; // Use @ alias for src

describe('NavigationBar Component - Unit Tests', () => {
	it('renders at least 4 buttons', () => {
		render(<NavigationBar />);
		const buttons = screen.getAllByRole('button');
		expect(buttons.length).toBeGreaterThanOrEqual(4);
	});
});