import React, { Fragment } from "react"
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts"

const Radial = ({ data }) => {
  const score = isNaN(data) ? 0 : Number(data)

  const arr = [
    {
      name: "Score",
      uv: score,
      fill: "#FF0000",
    },
    {
      name: "Base",
      uv: 100,
      fill: "rgba(255, 255, 255, 0)",
    },
  ]
  return (
    <Fragment>
      <p className="radialChart__title">Score</p>
      <div className={"radialChart__goal"}>
        <p>{score}%</p>
        <p>de votre objectif</p>
      </div>
      <ResponsiveContainer width="99%">
        <RadialBarChart
          innerRadius={80}
          outerRadius={80}
          barSize={10}
          startAngle={90}
          endAngle={450}
          data={arr}
          style={{ marginTop: "2em" }}
        >
          <RadialBar minAngle={15} clockWise dataKey="uv" cornerRadius={5} />
        </RadialBarChart>
      </ResponsiveContainer>
    </Fragment>
  )
}

export default Radial
