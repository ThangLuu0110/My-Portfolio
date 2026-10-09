import React, { useContext } from "react";
import { aboutMeText } from '../Components/const';
import profileImage from "../Assets/images/profile_image.jpg";
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../Store/ThemeContext';


const AboutPage = () => {
    const { t, i18n } = useTranslation();
    const listStory = t("aboutPage.myStoryDescription", { returnObjects: true });
    const context = useContext(ThemeContext);
    
    return (
        <div className="aboutPage">
            <div className={`aboutPage_card ${context.theme}`}>
                <div className="aboutPage_card_image">
                    <img src={profileImage} alt="Hero" />
                </div>
                <p className={`aboutPage_card_name ${context.theme}`}>{t("aboutPage.name")}</p>
                <p className={`aboutPage_card_title ${context.theme}`}>
                    {t("aboutPage.role")}
                </p>
                <div className={`aboutPage_card_social ${context.theme}`}>
                    <ul className={`aboutPage_card_social-list ${context.theme}`}>
                        {aboutMeText.listSocial.map((item, index) => (
                            <li key={index} className="aboutPage_card_social-list_item">
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="aboutPage_card_social-list_item-link"
                                    aria-label={item.name}
                                    title={item.name}
                                >
                                    <span className={`icon ${context.theme}`}>{item.icon}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="aboutPage_myStory">
                <h1 className={`aboutPage_myStory_title ${context.theme}`}>
                    {t("aboutPage.myStoryTitle")}
                </h1>
                <ul className={`aboutPage_myStory_story ${context.theme}`}>
                        {listStory.map((item, index) => (
                            <li key={index} className={`aboutPage_myStory_story_item ${context.theme}`}>
                                {item}
                            </li>
                        ))}
                        <li className={`aboutPage_myStory_story_quote ${context.theme}`}>
                            {t("aboutPage.myQuote")}
                        </li>
                </ul>
            </div>
        </div>
    )
}

export default AboutPage;