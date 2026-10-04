import React, { useEffect, useState, useContext } from "react";
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
    const { t, i18n } = useTranslation();
    const context = useContext(ThemeContext);
    const location = useLocation();
    const [activeIndex, setActiveIndex] = useState(0);
    const handleMoveActiveBox = (index) => {
        const activeBox = document.querySelector('.navbar_list-active');
        const leftValue = `calc(10px + ${index}*10px + ${index}*calc((100% - 80px) / 7))`;
        if(activeBox){
            activeBox.style.left = leftValue;
        }
    }

    useEffect(() => {
        const pathName = window.location.pathname;
        switch(pathName) {
            case "/":
                setActiveIndex(0);
                handleMoveActiveBox(0);
                break;
            case "/about":
                setActiveIndex(1);
                handleMoveActiveBox(1);
                break;
            case "/projects":
                setActiveIndex(2);
                handleMoveActiveBox(2);
                break;
            case "/skills":
                setActiveIndex(3);
                handleMoveActiveBox(3);
                break;
            case "/experience":
                setActiveIndex(4);
                handleMoveActiveBox(4);
                break;
            case "/testimonials":
                setActiveIndex(5);
                handleMoveActiveBox(5);
                break;
            case "/contact":
                setActiveIndex(6);
                handleMoveActiveBox(6);
                break;
            default:
                break;
        }
    }, [location])

    const navItems = [
        { name: t('navbar.home'), path: "/", icon: <GoHome/> },
        { name: t('navbar.about'), path: "/about", icon: <GoPerson/> },
        { name: t('navbar.projects')    , path: "/projects", icon: <GoFileDirectory/> },
        { name: t('navbar.skills'), path: "/skills", icon: <GoArchive/>},
        { name: t('navbar.experience'), path: "/experience", icon: <GoBriefcase />},
        { name: t('navbar.testimonials'), path: "/testimonials", icon: <GoDiscussionClosed/>},
        { name: t('navbar.contact'), path: "/contact", icon: <GoDeviceMobile/>}
    ];

    return (
        <header className="header_container">
            <nav className="navbar">
                {/* Navbar for Desktop and Tablet */}
                <ul className={`navbar_list ${context.theme}`}>
                    <div className={`navbar_list-active ${context.theme}`}></div>
                    {navItems.map((item, index) => {
                        const isActive = activeIndex === index;

                        return (
                            <li key={index} className={`navbar_list-item ${isActive  ? "active" : ""} ${context.theme}`} onClick={() => {
                                setActiveIndex(index);
                                handleMoveActiveBox(index);
                            }}>
                                <NavLink to={item.path} className={`navbar_list-item_link ${context.theme}`} >
                                    <span className="icon">{item.icon}</span>
                                    <span className="text">{item.name}</span>
                                </NavLink>
                            </li>);
                    })}
                </ul>
            </nav>  
        </header>
    );
}

export default Header;