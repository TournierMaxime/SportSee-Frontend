import React from "react"
import Logo from "./Logo"

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
      <a href="/">
        <Logo />
      </a>
      <nav className="header__nav">
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
