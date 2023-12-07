import React from "react"
import Radars from "./charts/Radars"

const Performances = ({ data }) => {
  return (
    <div className="radarsChart">
      <Radars data={data} />
    </div>
  )
}

export default Performances
