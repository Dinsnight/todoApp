import HomePage from './pages/HomePage'
import { Link, Route, Routes } from 'react-router-dom'
import PersonalGrowthPage from "./pages/PersonalGrowthPage.jsx";
import CommonTaskPage from "./pages/CommonTaskPage.jsx";
import HomeTaskPage from "./pages/HomeTaskPage.jsx";
import {useState} from "react";
import {useTranslation} from "react-i18next";

function App() {
  const [dark, setDark] = useState(false)
  const {t, i18n} = useTranslation()
  const toggleBg = ()=>{
      setDark(prev => !prev)
  }
  return (
  <div className={dark ? "bg-dark text-white min-vh-100" : "bg-light text-dark min-vh-100"}>
    <nav className={`navbar navbar-expand-lg ${dark ? "navbar-dark bg-dark" : "navbar-light bg-white"} shadow-sm`}>
      <div className="container">

        {/* Логотип */}
        <Link className="navbar-brand" to="/">
          <img
              src="/logo.png"
              alt="Logo"
              style={{ height: '50px' }}
          />
        </Link>
        <button
            onClick={toggleBg}
            className="btn btn-outline ms-3"
        >
          {dark ? "☀ Light" : "🌙 Dark"}
        </button>
        <div>
          <button onClick={() => i18n.changeLanguage('ru')} className="btn">RU</button>
          <button onClick={() => i18n.changeLanguage('en')} className="btn">EN</button>
          <button onClick={() => i18n.changeLanguage('uz')} className="btn">UZ</button>
        </div>
        <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item mx-2">
              <Link className="nav-link fw-bold " to="/common-task">
                {t('common_task')}
              </Link>
            </li>

            <li className="nav-item mx-2">
              <Link className="nav-link fw-bold" to="/personal-growth">
                {t('personal_growth')}
              </Link>
            </li>

            <li className="nav-item mx-2">
              <Link className="nav-link fw-bold" to="/home-task">
                {t('home_task')}
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>

    <div className="container mt-5">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/personal-growth" element={<PersonalGrowthPage/>}/>
          <Route path="/common-task" element={<CommonTaskPage/>}/>
          <Route path="/home-task" element={<HomeTaskPage/>}/>

        </Routes>
      </div>
      
    </div>
  )
}

export default App