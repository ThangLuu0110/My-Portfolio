import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../Store/ThemeContext';

const ExperienceSection = () => {
    const { t } = useTranslation();
    const context = useContext(ThemeContext);
    const experienceDetailItems = t('experiencePage.detail', { returnObjects: true });

    return (
        <section className="experiencePage">
            <h1 className={`experiencePage_title ${context.theme}`}>{t('experiencePage.title')}</h1>
            <ol className={`experiencePage_timeline ${context.theme}`}>
                {experienceDetailItems.map((item, index) => (
                    <li key={index} className="experiencePage_timeline_item">
                        <span className={`experiencePage_timeline_item-dot ${context.theme}`} aria-hidden="true"></span>
                        <div className={`experiencePage_timeline_item-card ${context.theme}`}>
                            <p className={`experiencePage_timeline_item-card_period ${context.theme}`}>{item.period}</p>
                            <h2 className={`experiencePage_timeline_item-card_role ${context.theme}`}>{item.role}</h2>
                            <p className={`experiencePage_timeline_item-card_company ${context.theme}`}>{item.company}</p>
                            {item.mission && (
                                <p className={`experiencePage_timeline_item-card_mission ${context.theme}`}>{item.mission}</p>
                            )}
                            <ul className="experiencePage_timeline_item-card_technology">
                                {item.language.map((language, languageIndex) => (
                                    <li key={languageIndex} className={`experiencePage_timeline_item-card_technology-tag ${context.theme}`}>
                                        {language}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                ))}
            </ol>
        </section>
    )
}

export default ExperienceSection;
