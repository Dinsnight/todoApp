import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

function HomePage(){
    const {t} = useTranslation()
    return(
        <div>
            <h1>{t('home_page')}</h1>
            <p>📝 {t("todo_app")}</p>
            <img src="./public/logo.png" className="img-fluid w-50"/>
            <Link to="/personal-growth" className="btn btn-outline-info">{t("personal_growth")}</Link>
        </div>
    )
}

export default HomePage