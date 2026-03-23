import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

function HomePage(){
    const {t} = useTranslation()
    return(
        <div>
            <h1>{t('home_page')}</h1>
            <p>📝 {t("todo_app")}</p>
            <div className="d-flex align-items-center gap-3 justify-content-around">
                <img src={"https://i.pinimg.com/1200x/a2/24/38/a224382797c87db66c8f06e8d61e57f4.jpg"}
                     className="img-fluid w-50 rounded-bottom-circle"/>
                <Link to="/personal-growth" className="btn btn-outline-info">{t("personal_growth")}</Link>
            </div>

        </div>
    )
}

export default HomePage