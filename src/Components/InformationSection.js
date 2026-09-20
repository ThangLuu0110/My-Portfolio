import React from 'react';
import { informationCertificationList } from '../Components/const';

const InformationSection = () => {
    return (
        <div className="informationSection">
            <div className="informationSection_certificate">
                <p className="informationSection_certificate-title">Certificate</p>
                <ul className="informationSection_certificate-list">
                    {informationCertificationList.map((item, index) => (
                        <li key={index} className="informationSection_certificate-list_item">
                            <div className="informationSection_certificate-list_item-title">
                                <img src={item.certImage} alt="CertificateLogo" className='informationSection_certificate-list_item-title_logo'></img>
                                <p><span>{item.certName}</span><br/> <span className='date'>{item.certIssuedDate}</span></p>
                            </div>
                            <div className="informationSection_certificate-list_item-intro">
                                {item.certIntro}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <div className='informationSection_experiment'>
                <p className="informationSection_experiment-title">Experience</p>
            </div>
        
        </div>
    )
}

export default InformationSection;