import {initReactI18next} from "react-i18next";
import i18n from "i18next";

i18n.use(initReactI18next).init({
    resources:{
        en:{
            translation:{
                common_task: "Common task",
                personal_growth: "Personal growth",
                home_task:"Home task"
            }
        },
        ru:{
            translation:{
                common_task: "Общая задача",
                personal_growth: "Личностный рост",
                home_task:"Домашняя задача"
            }
        },
        uz:{
            translation:{
                common_task: "Umumiy vazifa",
                personal_growth: "Shaxsiy o'sish",
                home_task:"Uyga vazifa"
            }
        }
    },
    lng: "ru",
    fallbackLng: "en",
    interpolation:{
        escapeValue: false
    }
});

export default i18n;