import SalesforceDevILogo from '../Assets/images/SDP I logo.png';
import SalesforceDevIILogo from '../Assets/images/SDP II logo.png';
import { 
    FaLinkedin, 
    FaSalesforce, 
    FaGithub 
} from "react-icons/fa";



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
        { icon: <FaLinkedin/>, link: 'https://www.linkedin.com/in/l%C6%B0u-m%E1%BA%A1nh-th%E1%BA%AFng-88b3b1257/' },
        { icon: <FaSalesforce/>, link: 'https://www.salesforce.com/trailblazer/thangluumanh' },
        { icon: <FaGithub/>, link: 'https://github.com/ThangLuu0110'}
    ]
};

const informationCertificationList = [
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
]

const footerText = {
    copyRight: 'Lưu Mạnh Thắng. All rights reserved.',
}

export {
    aboutMeText,
    informationCertificationList,
    footerText
};
