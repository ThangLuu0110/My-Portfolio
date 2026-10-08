import React, { useContext } from 'react';
import { footerText } from '../../Components/const';
import { ThemeContext } from '../../Store/ThemeContext';

const Footer = () => {
    const context = useContext(ThemeContext);
    return (
        <footer className={`footer-container ${context.theme}`}>
            <p className={`footer-container_copyright ${context.theme}`}>&copy; {new Date().getFullYear()} {footerText.copyRight}</p>
        </footer>
    )
}

export default Footer;