import React from "react";
import { heroSectionText } from "./const";
import profileImage from "../Assets/images/profile_image.jpg";
import { NavLink } from "react-router-dom";

const HeroSection = () => {
    const { heroSectionGreeting, heroSectionTitle, heroSectionDescription } = heroSectionText;
    return (
        <section className="heroSection">
            <div className="heroSection_contentPart">
                <p className="heroSection_contentPart_greeting">{heroSectionGreeting} </p>
                <p className="heroSection_contentPart_title">{heroSectionTitle}</p>
                <p className="heroSection_contentPart_description">{heroSectionDescription}</p>
                <div className="heroSection_contentPart_buttons">
                    <NavLink to="/contact" className="heroSection_contentPart_buttons_contact">Contact Me</NavLink>
                    <NavLink to="/projects" className="heroSection_contentPart_buttons_projects">Browse Projects</NavLink>
                </div>
            </div>

            <div className="heroSection_imagePart">
                <div className="heroSection_imagePart-border">
                    <div className="heroSection_imagePart-border_image">
                        <img src={profileImage} alt="Hero" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;