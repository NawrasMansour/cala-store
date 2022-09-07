import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en_lang from "../locale/en_lang.json";
import ar_lang from "../locale/ar_lang.json";

const getLocalStorage = () => {
    let lang = localStorage.getItem("i18nextLng");
    return lang ? lang : "en";
};

const resources = {
    en: {
        translation: en_lang,
    },
    ar: {
        translation: ar_lang,
    },
};

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: getLocalStorage(),

        interpolation: {
            escapeValue: false,
        },
        react:{
            useSuspense : false,
        }
    });

export default i18n;
