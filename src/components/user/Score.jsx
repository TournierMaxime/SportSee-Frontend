import React from "react"
import Radial from "./charts/Radial"

const Score = ({ data }) => {
  return (
    <div className="radialChart">
      <Radial data={data} />
    </div>
  )
}

export default Score
