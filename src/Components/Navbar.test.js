import { render, screen, fireEvent, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from './Navbar';

function mockMatchMedia(initialMatches) {
    const listeners = [];
    const mql = {
        matches: initialMatches,
        media: '(min-width: 768px)',
        addEventListener: (_event, listener) => listeners.push(listener),
        removeEventListener: (_event, listener) => {
            const index = listeners.indexOf(listener);
            if (index !== -1) listeners.splice(index, 1);
        },
    };

    window.matchMedia = jest.fn().mockReturnValue(mql);

    return {
        setMatches(matches) {
            mql.matches = matches;
            act(() => {
                listeners.forEach((listener) => listener({ matches }));
            });
        },
    };
}

function renderNavbar() {
    return render(
        <MemoryRouter>
            <Navbar />
        </MemoryRouter>
    );
}

describe('Navbar', () => {
    afterEach(() => {
        delete window.matchMedia;
    });

    test('renders logo, desktop links and contact', () => {
        mockMatchMedia(true);
        renderNavbar();

        expect(screen.getByText('Thắng Lưu')).toBeInTheDocument();
        expect(screen.getByText('Home')).toBeInTheDocument();
        expect(screen.getByText('Projects')).toBeInTheDocument();
        expect(screen.getByText('About')).toBeInTheDocument();
        expect(screen.getByText('Contact')).toBeInTheDocument();
    });

    test('mobile menu is closed by default and opens on toggle click', () => {
        mockMatchMedia(false);
        const { container } = renderNavbar();

        const menuLinks = container.querySelector('.navbar_menu_links');
        expect(menuLinks).not.toHaveClass('active');

        const menuToggle = container.querySelector('.navbar_menu');
        fireEvent.click(menuToggle);

        expect(menuLinks).toHaveClass('active');

        fireEvent.click(menuToggle);
        expect(menuLinks).not.toHaveClass('active');
    });

    test('menu auto-closes when viewport crosses the 768px breakpoint', () => {
        const media = mockMatchMedia(false);
        const { container } = renderNavbar();

        const menuLinks = container.querySelector('.navbar_menu_links');
        const menuToggle = container.querySelector('.navbar_menu');

        fireEvent.click(menuToggle);
        expect(menuLinks).toHaveClass('active');

        media.setMatches(true);

        expect(menuLinks).not.toHaveClass('active');
    });

    test('menu is force-closed on mount if the viewport already matches desktop', () => {
        mockMatchMedia(true);
        const { container } = renderNavbar();

        const menuLinks = container.querySelector('.navbar_menu_links');
        expect(menuLinks).not.toHaveClass('active');
    });
});
