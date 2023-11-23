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
    <nav style={{ backgroundColor: "#000", padding: "1em", position: 'relative' }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center",  marginLeft: '4em' }}>
          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              borderRadius: "50%",
              backgroundColor: "red",
              width: "60px",
              height: "60px",
            }}
          >
            <img style={{ position: "absolute" }} src={Logo} alt="logo" />
          </div>
          <h1 style={{ color: "red", fontSize: "2em", marginLeft: "0.5em" }}>
            SportSee
          </h1>
        </div>
        <ul
          style={{
            listStyleType: "none",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
                  {navItem.map((item, idx) => {
                      if (item[0]) {
                          <li>
                      
                  </li>
              }
            return (
              <li
                key={idx}
                style={{
                  color: "#fff",
                  margin: "0 1em",
                  fontWeight: "bold",
                  fontSize: "1.5em",
                }}
              >
                {item.name}
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default HorizontalNav
