import React from "react";
import { aboutMeText } from '../Components/const';

const AboutPage = () => {
    return (
        <div className="aboutPage">
            <p className="aboutPage_title">{aboutMeText.aboutMeTitle}</p>
            <p className="aboutPage_quote">{aboutMeText.quote}</p>
            
        </div>
    )
}

export default AboutPage;