import React from "react"
import Radars from "./charts/Radars"

/**
 * @component
 * @param {Object[]} data - The data to be visualized in the radar chart.
 */


const Performances = ({ data }) => {
  return (
    <div className="radarsChart">
      <Radars data={data} />
    </div>
  )
}

export default Performances
