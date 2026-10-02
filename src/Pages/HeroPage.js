import React, { useContext } from "react";
import { heroSectionText } from "../Components/const";
import profileImage from "../Assets/images/profile_image.jpg";
import { NavLink } from "react-router-dom";
import { ThemeContext } from '../Store/ThemeContext'

const HeroPage = () => {
    const { heroSectionGreeting, heroSectionTitle, heroSectionDescription } = heroSectionText;
    const context = useContext(ThemeContext);
    return (
        <section className="heroPage">
            <div className="heroPage_contentPart">
                <p className={ `heroPage_contentPart_greeting ${context.theme}` }>{heroSectionGreeting} </p>
                <p className={ `heroPage_contentPart_title ${context.theme}` }>{heroSectionTitle}</p>
                <p className={ `heroPage_contentPart_description ${context.theme}` }>{heroSectionDescription}</p>
                <div className="heroPage_contentPart_buttons">
                    <NavLink to="/contact" className={ `heroPage_contentPart_buttons_contact ${context.theme}` }>Contact Me</NavLink>
                    <NavLink to="/projects" className={ `heroPage_contentPart_buttons_projects ${context.theme}` }>Browse Projects</NavLink>
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