import React from 'react';
import { informationCertificationList } from '../Components/const';

const SkillPage = () => {
    return (
        <div className="skillPage">
            <div className="skillPage_certificate">
                <p className="skillPage_certificate-title">Certificate</p>
                <ul className="skillPage_certificate-list">
                    {informationCertificationList.map((item, index) => (
                        <li key={index} className="skillPage_certificate-list_item">
                            <div className="skillPage_certificate-list_item-title">
                                <img src={item.certImage} alt="CertificateLogo" className='skillPage_certificate-list_item-title_logo'></img>
                                <p><span>{item.certName}</span><br/> <span className='date'>{item.certIssuedDate}</span></p>
                            </div>
                            {/* <div className="skillPage_certificate-list_item-intro">
                                {item.certIntro}
                            </div> */}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default SkillPage;