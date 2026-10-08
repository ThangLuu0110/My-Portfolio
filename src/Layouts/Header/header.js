import React, { useContext } from "react";
import { NavLink, useLocation } from 'react-router-dom';
import { ThemeContext } from '../../Store/ThemeContext';
import { useTranslation } from 'react-i18next';
import {
    GoHome,
    GoPerson,
    GoFileDirectory,
    GoArchive,
    GoDiscussionClosed,
    GoDeviceMobile,
    GoBriefcase
} from "react-icons/go";

const Header = () => {
    const { t } = useTranslation();
    const context = useContext(ThemeContext);
    const location = useLocation();

    const navItems = [
        { name: t('navbar.home'), path: "/", icon: <GoHome/> },
        { name: t('navbar.about'), path: "/about", icon: <GoPerson/> },
        { name: t('navbar.projects'), path: "/projects", icon: <GoFileDirectory/> },
        { name: t('navbar.skills'), path: "/skills", icon: <GoArchive/>},
        { name: t('navbar.experience'), path: "/experience", icon: <GoBriefcase />},
        { name: t('navbar.testimonials'), path: "/testimonials", icon: <GoDiscussionClosed/>},
        { name: t('navbar.contact'), path: "/contact", icon: <GoDeviceMobile/>}
    ];

    // The active indicator is positioned purely in CSS from these two variables,
    // so each breakpoint in _header.scss can change sizes without touching JS.
    const activeIndex = navItems.findIndex((item) => item.path === location.pathname);
    const listStyle = {
        '--nav-count': navItems.length,
        '--active-index': Math.max(activeIndex, 0)
    };

    return (
        <header className="header_container">
            <nav className="navbar">
                <ul className={`navbar_list ${context.theme}`} style={listStyle}>
                    <div
                        className={`navbar_list-active ${activeIndex === -1 ? "hidden" : ""} ${context.theme}`}
                        aria-hidden="true"
                    ></div>
                    {navItems.map((item, index) => (
                        <li key={item.path} className={`navbar_list-item ${activeIndex === index ? "active" : ""} ${context.theme}`}>
                            <NavLink
                                to={item.path}
                                className={`navbar_list-item_link ${context.theme}`}
                                aria-label={item.name}
                                title={item.name}
                            >
                                <span className="icon">{item.icon}</span>
                                <span className="text">{item.name}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Header;
