import React from "react"
import Gym from "../assets/images/Gym"

const Home = () => {
  const usersId = ["12", "18"]

  return (
    <div className={"home"}>
      {usersId.map((userId, idx) => {
        return (
          <a key={idx} href={`/user/${userId}`} className={"link"}>
            <span className={"users"}>Utilisateur {userId}</span>
            <div className={"gymLogo"}>
              <Gym />
            </div>
          </a>
        )
      })}
    </div>
  )
}

export default Home
