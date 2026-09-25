import SalesforceDevILogo from '../Assets/images/SDP I logo.png';
import SalesforceDevIILogo from '../Assets/images/SDP II logo.png';

const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
];
const navbarText = {
    brand: "Lưu Mạnh Thắng",
    contact: "Contact",
};

const heroSectionText = {
    heroSectionGreeting: "Hi, I'm Luu Manh Thang",
    heroSectionTitle: "Salesforce Developer",
    heroSectionDescription: "Salesforce Developer with 3 years of experience designing and implementing scalable solutions on the Salesforce platform, specializing in Apex, Lightning Web Components, and process automation."
};

const aboutMeText = {
    aboutMeTitle: "My story",
    aboutMeDescription: [
        "I began my career in 2022 as a Front-End Developer at VTI Vietnam.",
        "Six months later, I transitioned to a Salesforce Developer role, where I have been working for the past 3 years. During this time, I have gained extensive experience in designing and implementing scalable solutions on the Salesforce platform, specializing in Apex, Lightning Web Components, and process automation.",
        "In February 2025, I paused my career to fulfill mandatory military service — an experience that strengthened my discipline, resilience, and sense of responsibility. During this time, I made a conscious effort to use the time wisely, reviewing my technical knowledge and exploring how AI could be leveraged as a supporting tool in software development.",
        "After two years, I am returning to the tech industry with renewed determination and a stronger drive to grow, ready to combine my existing experience with fresh perspectives as a Salesforce Developer."
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

export { 
    navItems, 
    navbarText, 
    heroSectionText,
    aboutMeText,
    informationCertificationList
};
