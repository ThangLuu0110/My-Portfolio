import React from "react";
import { heroSectionText } from "../Components/const";
import profileImage from "../Assets/images/profile_image.jpg";
import { NavLink } from "react-router-dom";

const HeroPage = () => {
    const { heroSectionGreeting, heroSectionTitle, heroSectionDescription } = heroSectionText;
    return (
        <section className="heroPage">
            <div className="heroPage_contentPart">
                <p className="heroPage_contentPart_greeting">{heroSectionGreeting} </p>
                <p className="heroPage_contentPart_title">{heroSectionTitle}</p>
                <p className="heroPage_contentPart_description">{heroSectionDescription}</p>
                <div className="heroPage_contentPart_buttons">
                    <NavLink to="/contact" className="heroPage_contentPart_buttons_contact">Contact Me</NavLink>
                    <NavLink to="/projects" className="heroPage_contentPart_buttons_projects">Browse Projects</NavLink>
                </div>
            </div>

            <div className="heroPage_imagePart">
                <div className="heroPage_imagePart-border">
                    <div className="heroPage_imagePart-border_image">
                        <img src={profileImage} alt="Hero" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroPage;