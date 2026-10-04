import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      navbar: {
        home: "Home",
        about: "About",
        projects: "Projects",
        skills: "Skills",
        experience: "Experience",
        testimonials: "Testimonials",
        contact: "Contact"
      },
      heroSection: {
        greeting: "Hi, I am Thang Luu",
        title: "Salesforce Developer",
        description: "I am a Salesforce Developer with 3 years of experience designing and implementing scalable solutions on the Salesforce platform, specializing in Apex, Lightning Web Components, and process automation.",
        contactMe: "Contact Me",
        browseProjects: "Browse Projects"
      }
    }
  },
  vi: {
    translation: {
      navbar: {
        home: "Trang chủ",
        about: "Giới thiệu",
        projects: "Dự án",
        skills: "Kỹ năng",
        experience: "Kinh nghiệm",
        testimonials: "Chứng chỉ",
        contact: "Liên hệ"
      },
      heroSection: {
        greeting: "Xin chào, tôi là Lưu Thắng",
        title: "Salesforce Developer",
        description: "Tôi là Lập trình viên Salesforce với 3 năm kinh nghiệm trong việc thiết kế và triển khai các giải pháp có khả năng mở rộng trên nền tảng Salesforce, chuyên sâu về Apex, Lightning Web Components và tự động hóa quy trình.",
        contactMe: "Liên hệ với tôi",
        browseProjects: "Tìm hiểu các dự án"
      } 
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "vi", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;