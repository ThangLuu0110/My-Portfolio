import React from 'react';
import { footerText } from '../../Components/const';

const Footer = () => {
    return (
        <footer className='footer-container'>
            <p className='footer-container_copyright'>&copy; {new Date().getFullYear()} {footerText.copyRight}</p>
            <div className='footer-container_social'>
                <ul className='footer-container_social-list'>
                    {footerText.listSocial.map((item, index) => (
                        <li key={index} className="footer-container_social-list_item">
                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="footer-container_social-list_item-link">
                                <span className='icon'>{item.icon}</span>
                                <span className='name'>{item.name}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    )
}

export default Footer;