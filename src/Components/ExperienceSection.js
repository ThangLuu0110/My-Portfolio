import React from 'react';
import { aboutMeText } from '../Components/const';
import Badge from 'react-bootstrap/Badge';

const MyExperienceSection = () => {
    return (
        <div className="experienceSection">
            <p className="experienceSection_title">{aboutMeText.myExperienceTitle}</p>
            <ul className="experienceSection_detail">
                {aboutMeText.myExperienceDetail.map((item, index) => (
                    <li key={index} className="experienceSection_detail_item">
                        <p className='experienceSection_detail_item-period'>{item.period}</p>
                        <div className='experienceSection_detail_item-information'>
                            <p className='experienceSection_detail_item-information_title'>{item.role} <span className='company'>@ {item.company}</span></p>
                            <p className='experienceSection_detail_item-information_mission'>{item.mission}</p>
                            <ul className='experienceSection_detail_item-information_technology'>
                                {item.language.map((item, index) => (
                                    <li key={index} className='experienceSection_detail_item-information_technology-tag'>
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

export default MyExperienceSection;