import SalesforceDevILogo from '../Assets/images/SDP I logo.png';
import SalesforceDevIILogo from '../Assets/images/SDP II logo.png';
import { 
    FaLinkedin, 
    FaSalesforce, 
    FaGithub 
} from "react-icons/fa";

const heroSectionText = {
    heroSectionGreeting: "Hi, I'm Luu Manh Thang",
    heroSectionTitle: "Salesforce Developer",
    heroSectionDescription: "Salesforce Developer with 3 years of experience designing and implementing scalable solutions on the Salesforce platform, specializing in Apex, Lightning Web Components, and process automation."
};

const aboutMeText = {
    aboutMeTitle: "About me",
    quote: "\"Công việc hàng ngày chính là nền tảng của thi đua\"",
    myStoryTitle: "My Story",
    myStoryDescription: [
        "I began my career in March 2022 as a Front-End Developer at VTI Vietnam.",
        "Six months later, I transitioned to a Salesforce Developer role, where I had worked for 3 years. During this time, I have gained extensive experience in designing and implementing scalable solutions on the Salesforce platform, specializing in Apex, Lightning Web Components, and process automation.",
        "In February 2025, I paused my career to fulfill mandatory military service - an experience that strengthened my discipline, resilience, and sense of responsibility. During this time, I made a conscious effort to use the time wisely, reviewing my technical knowledge and exploring how AI could be leveraged as a supporting tool.",
        "After two years, I am returning to the tech industry with renewed determination and a stronger drive to grow, ready to combine my existing experience with fresh perspectives as a Salesforce Developer."
    ],
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
    listSocial: [
        {name: 'LinkedIn', icon: <FaLinkedin/>, link: 'https://www.linkedin.com/in/l%C6%B0u-m%E1%BA%A1nh-th%E1%BA%AFng-88b3b1257/' },
        {name: 'Trailblazer', icon: <FaSalesforce/>, link: 'https://www.salesforce.com/trailblazer/thangluumanh' },
        {name: 'Github', icon: <FaGithub/>, link: 'https://github.com/ThangLuu0110'}
    ]
}

export {
    heroSectionText,
    aboutMeText,
    informationCertificationList,
    footerText
};
