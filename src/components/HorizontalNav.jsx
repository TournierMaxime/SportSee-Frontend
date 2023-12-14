import React from "react"
import Logo from "../assets/images/logo.png"

const HorizontalNav = () => {
  const navItem = [
    {
      name: "Accueil",
    },
    {
      name: "Profil",
    },
    {
      name: "Réglages",
    },
    {
      name: "Communauté",
    },
  ]

  return (
    <header className="header">
      <nav className="header__nav">
        <div className="logo">
          <div className="logo__container">
            <img src={Logo} alt="logo" />
          </div>
          <h1>SportSee</h1>
        </div>
        <ul className="header__nav--ul">
          {navItem.map((item, idx) => {
            if (item[0]) {
              <li></li>
            }
            return <li key={idx}>{item.name}</li>
          })}
        </ul>
      </nav>
    </header>
  )
}

export default HorizontalNav
