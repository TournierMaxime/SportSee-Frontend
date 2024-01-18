import React from "react"

/**
 * Methods:
 * - tooltipBar(props): Returns a custom tooltip for bar charts. It displays weight and calories when active.
 *    - props: The props passed by the recharts library, containing information about the active payload.
 * - tooltipLine(props): Returns a custom tooltip for line charts. It displays the session length when active.
 *    - props: The props passed by the recharts library, containing information about the active payload.
 */


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
