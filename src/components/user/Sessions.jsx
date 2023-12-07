import React from "react"
import Lines from "./charts/Lines"

const Sessions = ({ data }) => {
  return (
    <div className="sessionsChart">
      <div className="sessionsChart__container">
        <h5 className="sessionsChart__container--title">
          Durée moyenne des sessions
        </h5>
      </div>
      <Lines data={data} />
    </div>
  )
}

export default Sessions
