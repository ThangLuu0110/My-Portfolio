import React from 'react';
import { aboutMeText } from '../Components/const';

const ExperienceSection = () => {
    return (
        <div className="experiencePage">
            <p className="experiencePage_title">{aboutMeText.myExperienceTitle}</p>
            <ul className="experiencePage_detail">
                {aboutMeText.myExperienceDetail.map((item, index) => (
                    <li key={index} className="experiencePage_detail_item">
                        <p className='experiencePage_detail_item-period'>{item.period}</p>
                        <div className='experiencePage_detail_item-information'>
                            <p className='experiencePage_detail_item-information_title'>{item.role} <span className='company'>@ {item.company}</span></p>
                            <p className='experiencePage_detail_item-information_mission'>{item.mission}</p>
                            <ul className='experiencePage_detail_item-information_technology'>
                                {item.language.map((item, index) => (
                                    <li key={index} className='experiencePage_detail_item-information_technology-tag'>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ExperienceSection;