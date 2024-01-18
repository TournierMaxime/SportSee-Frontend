import React from "react"
import Lines from "./charts/Lines"

/**
 * @component
 * @param {Object[]} data - The data to be visualized in the line chart.
 */


const Sessions = ({ data }) => {
  return (
    <div className="sessionsChart">
        <h5 className="sessionsChart__title">
          Durée moyenne des sessions
        </h5>
      <Lines data={data} />
    </div>
  )
}

export default Sessions
