import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import { navItems } from "../Components/const";



const Navbar = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const handleMoveActiveBox = (index) => {
        const activeBox = document.querySelector('.navbar_list-active');
        const leftValue = `calc(10px + ${index}*10px + ${index}*calc((100% - 70px) / 6))`;
        if(activeBox){
            activeBox.style.left = leftValue;
        }
    }

    return (
        <nav className="navbar">
            {/* Navbar for Desktop and Tablet */}
            <ul className="navbar_list">
                <div className="navbar_list-active"></div>
                {navItems.map((item, index) => {
                    const isActive = activeIndex === index;

                    return (
                        <li key={index} className={`navbar_list-item ${isActive  ? "active" : ""}`} onClick={() => {
                            setActiveIndex(index);
                            handleMoveActiveBox(index);
                        }}>
                            <NavLink to={item.path} className="navbar_list-item_link" >
                                <span className="icon">{item.icon}</span>
                                <span className="text">{item.name}</span>
                            </NavLink>
                        </li>);
                })}
            </ul>
        </nav>
    );
}

export default Navbar;