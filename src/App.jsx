import HomePage from './pages/HomePage'
import { Link, Route, Routes } from 'react-router-dom'
import PersonalGrowthPage from "./pages/PersonalGrowthPage.jsx";
import CommonTaskPage from "./pages/CommonTaskPage.jsx";
import HomeTaskPage from "./pages/HomeTaskPage.jsx";
import {useState} from "react";

function App() {
  const [dark, setDark] = useState(false)
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
                Common Task
              </Link>
            </li>

            <li className="nav-item mx-2">
              <Link className="nav-link fw-bold" to="/personal-growth">
                Personal Growth
              </Link>
            </li>

            <li className="nav-item mx-2">
              <Link className="nav-link fw-bold" to="/home-task">
                Home Task
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