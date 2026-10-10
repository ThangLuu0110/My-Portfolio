import React, { useContext } from 'react';
import { skillPageText } from '../Components/const';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../Store/ThemeContext';


const SkillPage = () => {
    const { t } = useTranslation();
    const context = useContext(ThemeContext);

    return (
        <section className="skillPage">
            <div className="skillPage_certificate">
                <h1 className={`skillPage_certificate-title ${context.theme}`}>{t('skillPage.certificate')}</h1>
                <ul className="skillPage_certificate-list">
                    {skillPageText.informationCertificationList.map((item, index) => (
                        <li key={index} className={`skillPage_certificate-list_item ${context.theme}`}>
                            <img src={item.certImage} alt="" className="skillPage_certificate-list_item-logo" />
                            <div className="skillPage_certificate-list_item-info">
                                <p className={`skillPage_certificate-list_item-name ${context.theme}`}>{item.certName}</p>
                                <p className={`skillPage_certificate-list_item-date ${context.theme}`}>{item.certIssuedDate}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="skillPage_skills">
                <h2 className={`skillPage_skills-title ${context.theme}`}>{t('skillPage.skills')}</h2>
                <ul className="skillPage_skills-list">
                    {skillPageText.skillsList.map((item, index) => (
                        <li key={index} className={`skillPage_skills-list_item ${context.theme}`}>
                            <span className="icon">{item.icon}</span>
                            <span className="name">{item.name}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default SkillPage;
