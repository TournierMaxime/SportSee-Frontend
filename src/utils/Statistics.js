import React from "react"

class Statistics {

  static tooltipBar = (props) => {
    const { active, payload } = props

    if (active && payload && payload.length) {
      const data = payload[0].payload
      return (
        <div
          style={{
            backgroundColor: "#E60000",
            color: "#FFF",
            padding: "1em",
            fontWeight: "bold",
          }}
        >
          <p>Poids: {data.kilogram} kg</p>
          <p>Calories: {data.calories} Kcal</p>
        </div>
      )
    }

    return null
  }

  static tooltipLine = (props) => {
    const { active, payload } = props

    if (active && payload && payload.length) {
      const data = payload[0].payload
      return (
        <div
          style={{
            backgroundColor: "#FFF",
            color: "#000",
            padding: "1em",
            fontWeight: "bold",
          }}
        >
          <p>{data.sessionLength} min</p>
        </div>
      )
    }

    return null
  }
}

export default Statistics
