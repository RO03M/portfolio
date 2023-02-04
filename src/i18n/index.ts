import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import PTBR from "./locales/pt/pt-br.json";
import EN from "./locales/en/en-us.json";

const resources = {
    "pt-BR": PTBR,
    "en-US": EN
};

i18n.use(initReactI18next)
    .init({
        resources,
        lng: "pt-BR",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;