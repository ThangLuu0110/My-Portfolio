import React, { useContext } from 'react';
import { footerText } from '../../Components/const';
import { ThemeContext } from '../../Store/ThemeContext';

const Footer = () => {
    const context = useContext(ThemeContext);
    return (
        <footer className={`footer-container ${context.theme}`}>
            <p className={`footer-container_copyright ${context.theme}`}>&copy; {new Date().getFullYear()} {footerText.copyRight}</p>
            <div className={`footer-container_social ${context.theme}`}>
                <ul className={`footer-container_social-list ${context.theme}`}>
                    {footerText.listSocial.map((item, index) => (
                        <li key={index} className="footer-container_social-list_item">
                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="footer-container_social-list_item-link">
                                <span className={`icon ${context.theme}`}>{item.icon}</span>
                                <span className={`name ${context.theme}`}>{item.name}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    )
}

export default Footer;