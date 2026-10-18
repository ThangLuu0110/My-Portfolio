import React, { useContext } from "react";
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../Store/ThemeContext';
import { FiPhone } from "react-icons/fi";
import { FaRegEnvelope, FaLocationDot, FaArrowRight } from "react-icons/fa6";

const ContactPage = () => {
    const { t } = useTranslation();
    const context = useContext(ThemeContext);

    const contactPageTextDetail = [
            {
                name: 'Email',
                value: 'manhthang713@gmail.com',
                icon: <FaRegEnvelope />,
            },
            {
                name: t('contactPage.phone'),
                value: '(+84)976 374 900',
                icon: <FiPhone/>,
            },
            {
                name: t('contactPage.location'),
                value: t('contactPage.locationDetail'),
                icon: <FaLocationDot/>,
            }
        ];

    return (
        <div className='contactPage'>
            <h1 className={`contactPage_title ${context.theme}`}>{t('contactPage.title')}</h1>
            <ul className={`contactPage_list ${context.theme}`}>
                {contactPageTextDetail.map((item, index) => (
                    <li key={index} className={`contactPage_list-item ${context.theme}`}>
                        <div className={`contactPage_list-item_icon ${context.theme}`}>{item.icon}</div>
                        <div className={`contactPage_list-item_detail ${context.theme}`}>
                            <p className={`contactPage_list-item_detail-name ${context.theme}`}>{item.name}</p>
                            <p className={`contactPage_list-item_detail-value ${context.theme}`}>{item.value}</p>
                        </div>
                    </li>
                ))}
            </ul>
            <button className={`contactPage_email ${context.theme}`}>
                {t('contactPage.sendingEmail')} <FaArrowRight/>
            </button>
            <ul>
                
            </ul>
        </div>
    )
}

export default ContactPage;