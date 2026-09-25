import React from 'react';
import { informationCertificationList } from './const';

const CertificateSection = () => {
    return (
        <div className="certificateSection">
            <div className="certificateSection_certificate">
                <p className="certificateSection_certificate-title">Certificate</p>
                <ul className="certificateSection_certificate-list">
                    {informationCertificationList.map((item, index) => (
                        <li key={index} className="certificateSection_certificate-list_item">
                            <div className="certificateSection_certificate-list_item-title">
                                <img src={item.certImage} alt="CertificateLogo" className='certificateSection_certificate-list_item-title_logo'></img>
                                <p><span>{item.certName}</span><br/> <span className='date'>{item.certIssuedDate}</span></p>
                            </div>
                            <div className="certificateSection_certificate-list_item-intro">
                                {item.certIntro}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default CertificateSection;