import React from "react"
import Radial from "./charts/Radial"

/**
 * @component
 * @param {number|string} data - The score to be visualized in the radial chart.
 */


const Score = ({ data }) => {
  return (
    <div className="radialChart">
      <Radial data={data} />
    </div>
  )
}

export default Score
