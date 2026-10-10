import SalesforceDevILogo from '../Assets/images/SDP I logo.png';
import SalesforceDevIILogo from '../Assets/images/SDP II logo.png';
import { 
    FaLinkedin, 
    FaSalesforce, 
    FaGithub,
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaSass
} from "react-icons/fa";
import { FaBoltLightning } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";

const aboutMeText = {
    myExperienceTitle: "My Experience",
    myExperienceDetail: [
        {
            period: "Mar - Aug 2022",
            role: "Intern Frontend Developer",
            mission: "Built and maintained website user interfaces, fixed bugs, and implemented design changes based on feedback from senior developers or designers.",
            language: ["HTML & CSS", "JavaScript", "TypeScript", "React"],
            company: "VTI Vietnam"
        },
        {
            period: "2022 - 2025",
            role: "Salesforce Developer",
            mission: "",
            language: ["Salesforce Apex & SOQL", "JavaScript", "Lightning Web Components (LWC)"],
            company: "VTI Vietnam"
        }
    ],
    listSocial: [
        { name: 'LinkedIn', icon: <FaLinkedin/>, link: 'https://www.linkedin.com/in/l%C6%B0u-m%E1%BA%A1nh-th%E1%BA%AFng-88b3b1257/' },
        { name: 'Salesforce Trailblazer', icon: <FaSalesforce/>, link: 'https://www.salesforce.com/trailblazer/thangluumanh' },
        { name: 'GitHub', icon: <FaGithub/>, link: 'https://github.com/ThangLuu0110'}
    ]
};

const skillPageText = {
    informationCertificationList : [
        {
            certName: "Salesforce Certified Platform Developer",
            certIssuedDate: "Dec 2022",
            certImage: SalesforceDevILogo,
            certIntro: "Understanding how to develop and deploy custom business logic and custom interfaces using the programmatic capabilities of the Lightning Platform."
            
        },
        {
            certName: "Salesforce Certified Platform Developer II",
            certIssuedDate: "Jul 2023",
            certImage: SalesforceDevIILogo,
            certIntro: "Understanding the advanced programmatic capabilities of the Salesforce Platform, as well as using data modeling to develop complex business logic and interfaces."
        }
    ],
    skillsList : [
        { name: "Salesforce Apex & SOQL", icon: <FaSalesforce color='#00b3f9'/>},
        { name: "Lightning Web Components (LWC)", icon: <FaBoltLightning color="#1b96ff"/>},
        { name: "HTML", icon: <FaHtml5 color="#f64d22"/>},
        { name: "CSS", icon: <FaCss3Alt color="#0273b7"/>},
        { name: "Sass", icon: <FaSass color="#c76395"/>},
        { name: "JavaScript", icon: <IoLogoJavascript color="#f0d81e"/>},
        { name: "React.js", icon: <FaReact color="#00cff2"/> }
    ]

}

const footerText = {
    copyRight: 'Lưu Mạnh Thắng. All rights reserved.',
}

export {
    aboutMeText,
    skillPageText,
    footerText
};
