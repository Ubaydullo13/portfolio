import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      about: "About Me",
      skills: "Skills",
      project: "Project",
      contact: "Contact",
      greeting: "Hi",
      name: "I’m Charles",
      job: "Front-end Developer",
      desc: "I design and develop experiences that make people’s lives simpler through Web and Mobile apps.I work with FIgma , HTML5, CSS3, JavaScript, React, React Native and Flutter.",
      hireMe: "HIRE ME",
      seeProjects: "SEE MY PROJECTS",
    },
  },
  ru: {
    translation: {
      about: "Обо Мне",
      skills: "Навыки",
      project: "Проекты",
      contact: "Контакты",
      greeting: "Привет",
      name: "Я Чарльз",
      job: "Front-end Developer",
      desc: "Я проектирую и разрабатываю решения, которые упрощают жизнь людей с помощью веб и мобильных приложений. Я работаю с FIgma, HTML5, CSS3, JavaScript, React, React Native и Flutter.",
      hireMe: "НАЙМИ МЕНЯ",
      seeProjects: "ПОСМОТРЕТЬ ПРОЕКТЫ",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
