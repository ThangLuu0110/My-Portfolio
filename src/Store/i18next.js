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
      heroPage: {
        greeting: "Hi, I am Thang Luu",
        title: "Salesforce Developer",
        description: "I am a Salesforce Developer with 3 years of experience designing and implementing scalable solutions on the Salesforce platform, specializing in Apex, Lightning Web Components, and process automation.",
        contactMe: "Contact Me",
        browseProjects: "Browse Projects"
      },
      aboutPage: {
        name: "Luu Manh Thang",
        role: "Junior Salesforce Developer",
        myStoryTitle: "My Story",
        myStoryDescription: [
          "\"I started working as a Salesforce developer in August 2022.  During that time, I have gained extensive experience in designing and implementing scalable solutions on the Salesforce platform, specializing in Apex, Lightning Web Components, and process automation.",
          "In February 2025, I paused my career to fulfill military service. During this time, I made a conscious effort to use the time wisely, reviewing my technical knowledge.",
          "After two years, I am returning with renewed determination and a stronger drive to grow, ready to combine my existing experience with fresh perspectives as a Salesforce Developer.\""  
        ],
        myQuote: "\"Daily work is the foundation of competition\" - Ho Chi Minh"
      },
      skillPage: {
        certificate: "Certificates",
        skills: "Skills"
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
      heroPage: {
        greeting: "Xin chào, tôi là Lưu Thắng",
        title: "Salesforce Developer",
        description: "Tôi là Lập trình viên Salesforce với 3 năm kinh nghiệm trong việc thiết kế và triển khai các giải pháp có khả năng mở rộng trên nền tảng Salesforce, chuyên sâu về Apex, Lightning Web Components và tự động hóa quy trình.",
        contactMe: "Liên hệ với tôi",
        browseProjects: "Tìm hiểu các dự án"
      },
      aboutPage: {
        name: "Lưu Mạnh Thắng",
        role: "Lập trình viên Salesforce",
        myStoryTitle: "Câu chuyện của tôi",
        myStoryDescription: [
          "\"Tôi bắt đầu làm việc với tư cách là lập trình viên Salesforce vào tháng 8 năm 2022. Trong khoảng thời gian đó, tôi đã tích lũy được nhiều kinh nghiệm trong việc thiết kế và triển khai các giải pháp có khả năng mở rộng trên nền tảng Salesforce, với chuyên môn tập trung vào Apex, Lightning Web Components và tự động hóa quy trình.",
          "Vào tháng 2 năm 2025, tôi tạm dừng sự nghiệp để thực hiện nghĩa vụ quân sự. Trong khoảng thời gian này, tôi luôn nỗ lực tận dụng thời gian một cách hiệu quả để ôn tập và củng cố kiến ​​thức chuyên môn.",
          "Sau hai năm, tôi trở lại với quyết tâm mới và động lực phát triển mạnh mẽ hơn, sẵn sàng kết hợp những kinh nghiệm sẵn có cùng những góc nhìn mới mẻ trong vai trò lập trình viên Salesforce.\""  
        ],
        myQuote: "\"Công việc hàng ngày chính là nền tảng của thi đua\" - Hồ Chí Minh"
      },
      skillPage: {
        certificate: "Các chứng chỉ",
        skills: "Các kỹ năng"
      }
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;