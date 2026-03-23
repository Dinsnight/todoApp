import {initReactI18next} from "react-i18next";
import i18n from "i18next";

i18n.use(initReactI18next).init({
    resources:{
        en:{
            translation:{
                common_task: "Common task",
                personal_growth: "Personal growth",
                home_task:"Home task",
                home_page: "Home Page",
                todo_app: 'Todo App — increase your productivity'
            }
        },
        ru:{
            translation:{
                common_task: "Общая задача",
                personal_growth: "Личностный рост",
                home_task:"Домашняя задача",
                home_page: "Главная страница",
                todo_app: 'Приложение Todo — повысьте свою продуктивность'
            }
        },
        uz:{
            translation:{
                common_task: "Umumiy vazifa",
                personal_growth: "Shaxsiy o'sish",
                home_task:"Uyga vazifa",
                home_page: "Uy sahifa",
                todo_app:"Todo ilovasi — unumdorligingizni oshiring"
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