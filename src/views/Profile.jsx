import React from "react"
import DashBoard from "./DashBoard"
import VerticalNav from "./VerticalNav"

const Profile = () => {
  return (
    <div style={{ display: "flex", flex: 1 }}>
      <VerticalNav />
      <DashBoard />
    </div>
  )
}

export default Profile
