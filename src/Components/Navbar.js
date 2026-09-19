import React, {useState, useEffect} from "react";
import { NavLink } from 'react-router-dom';
import { navItems, portfolioTitle } from "../Components/const";
import { FaPhoneAlt, FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        // Keep in sync with $breakpoint-md in _variables.scss
        const mediaQuery = window.matchMedia("(min-width: 768px)");

        const handleBreakpointChange = (event) => {
            if (event.matches) {
                setIsMenuOpen(false);
            }
        };

        if (mediaQuery.matches) {
            setIsMenuOpen(false);
        }

        mediaQuery.addEventListener("change", handleBreakpointChange);
        return () => mediaQuery.removeEventListener("change", handleBreakpointChange);
    }, []);

    return (
        <>
            <nav className="navbar">
                <NavLink to="/" className="navbar_logo">
                    {portfolioTitle}
                </NavLink>

                {/* Navbar for Desktop and Tablet */}
                <div className="navbar_links">
                    <ul className="navbar_links-list">
                        {navItems.map((item, index) => (
                            <li key={index} className="navbar_links-list_item">
                                <NavLink to={item.path} className="navbar_links-list_item-link">
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="navbar_contact">
                    <NavLink to="/contact">
                        <FaPhoneAlt className="navbar_contact-icon" />
                        <span className="navbar_contact-text">Contact</span>
                    </NavLink>
                </div>

                <div className="navbar_menu" onClick={handleMenuToggle}>
                    {isMenuOpen ? (
                        <IoMdClose className="navbar_menu-icon" />
                    ) : (
                        <FaBars className="navbar_menu-icon" />
                    )}
                </div>

                {/* Navbar for Mobile */}
            </nav>

            <div className={`navbar_menu_links ${isMenuOpen ? 'active' : ''}`}>
                <ul className="navbar_menu_links-list">
                    {navItems.map((item, index) => (
                        <li key={index} className="navbar_menu_links-list_item">
                            <NavLink to={item.path} className="navbar_menu_links-list_item-link">
                                {item.name}
                            </NavLink>
                        </li>
                    ))}
                    <li className="navbar_menu_links-list_item">
                        <NavLink to="/contact" className="navbar_menu_links-list_item-link">
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Navbar;