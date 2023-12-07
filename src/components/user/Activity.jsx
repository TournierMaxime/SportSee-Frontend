import React from "react"
import Histogram from "./charts/Histogram"

const Activity = ({ data }) => {
  if (!data) {
    return null
  }

  return (
    <div className="activityChart">
      <div className="activityChart__container">
        <div className="activityChart__container--title">
          <h5>Activité quotidienne</h5>
        </div>
        <div className="activityChart__container--legend">
          <p className="axisTitle">
            <span className="weightDot"></span>Poids (kg)
          </p>
          <p className="axisTitle">
            <span className="caloriesDot"></span>Calories brûlées (Kcal)
          </p>
        </div>
      </div>
        <Histogram data={data} />
    </div>
  )
}

export default Activity
