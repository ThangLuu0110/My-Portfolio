import React from "react";
import { aboutMeText } from '../Components/const';

const AboutPage = () => {
    return (
        <div className="aboutPage">
            <p className="aboutPage_title">{aboutMeText.aboutMeTitle}</p>
            <p className="aboutPage_quote">{aboutMeText.quote}</p>
            
            <div className="myStorySection">
                <p className="myStorySection_title">{aboutMeText.myStoryTitle}</p>
                <ul className="myStorySection_story">
                        {aboutMeText.myStoryDescription.map((item, index) => (
                            <li key={index} className="myStorySection_story_item">
                                {item}
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    )
}

export default AboutPage;