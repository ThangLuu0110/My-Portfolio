import React, { useContext } from "react";
import profileImage from "../Assets/images/profile_image.jpg";
import { NavLink } from "react-router-dom";
import { ThemeContext } from '../Store/ThemeContext';
import { useTranslation } from 'react-i18next';


const HeroPage = () => {
    const { t, i18n } = useTranslation();
    const context = useContext(ThemeContext);
    return (
        <section className="heroPage">
            <div className="heroPage_contentPart">
                <p className={ `heroPage_contentPart_greeting ${context.theme}` }>{t("heroSection.greeting")}</p>
                <p className={ `heroPage_contentPart_title ${context.theme}` }>{t("heroSection.title")}</p>
                <p className={ `heroPage_contentPart_description ${context.theme}` }>{t("heroSection.description")}</p>
                <div className="heroPage_contentPart_buttons">
                    <NavLink to="/contact" className={ `heroPage_contentPart_buttons_contact ${context.theme}` }>{t("heroSection.contactMe")}</NavLink>
                    <NavLink to="/projects" className={ `heroPage_contentPart_buttons_projects ${context.theme}` }>{t("heroSection.browseProjects")}</NavLink>
                </div>
            </div>

            <div className="heroPage_imagePart">
                <div className={ `heroPage_imagePart-border ${context.theme}` }>
                    <div className="heroPage_imagePart-border_image">
                        <img src={profileImage} alt="Hero" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroPage;