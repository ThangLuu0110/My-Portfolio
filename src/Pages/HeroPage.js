import React, { useContext } from "react";
import profileImage from "../Assets/images/profile_image.jpg";
import { NavLink } from "react-router-dom";
import { ThemeContext } from '../Store/ThemeContext';
import { useTranslation } from 'react-i18next';


const HeroPage = () => {
    const { t } = useTranslation();
    const context = useContext(ThemeContext);
    return (
        <section className="heroPage">
            <div className="heroPage_contentPart">
                <p className={ `heroPage_contentPart_greeting ${context.theme}` }>{t("heroPage.greeting")}</p>
                <h1 className={ `heroPage_contentPart_title ${context.theme}` }>{t("heroPage.title")}</h1>
                <p className={ `heroPage_contentPart_description ${context.theme}` }>{t("heroPage.description")}</p>
                <div className="heroPage_contentPart_buttons">
                    <NavLink to="/contact" className={ `heroPage_contentPart_buttons_contact ${context.theme}` }>{t("heroPage.contactMe")}</NavLink>
                    <NavLink to="/projects" className={ `heroPage_contentPart_buttons_projects ${context.theme}` }>{t("heroPage.browseProjects")}</NavLink>
                </div>
            </div>

            <div className="heroPage_imagePart">
                <div className={ `heroPage_imagePart-disc ${context.theme}` }>
                    <div className="heroPage_imagePart-stage">
                        <span className="heroPage_imagePart-ring heroPage_imagePart-ring--outer" aria-hidden="true">
                            <span className="heroPage_imagePart-ring_dot" />
                        </span>
                        <span className="heroPage_imagePart-ring heroPage_imagePart-ring--inner" aria-hidden="true" />
                        <div className="heroPage_imagePart-photo">
                            <img src={profileImage} alt="Thang Luu" />
                        </div>
                    </div>
                    <div className={ `heroPage_imagePart-badge ${context.theme}` }>
                        <span className="heroPage_imagePart-badge_value">3+</span>
                        <span className="heroPage_imagePart-badge_label">
                            <span>{t("heroPage.badgeYears")}</span>
                            <span>{t("heroPage.badgeExperience")}</span>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroPage;