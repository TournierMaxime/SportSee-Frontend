import React, { Fragment } from "react"
import { RadialBarChart, RadialBar } from "recharts"

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
      <div className="radialChart__label">
        <p className="radialChart__label--pourcent">{data}%</p>
        <p className="radialChart__label--goal">
          de votre
          <br />
          objectif
        </p>
      </div>
      <RadialBarChart
        width={250}
        height={200}
        innerRadius={150}
        outerRadius={0}
        barSize={10}
        startAngle={90}
        endAngle={450}
        data={arr}
        style={{ marginTop: "1em" }}
          >
        <RadialBar minAngle={15} clockWise dataKey="uv" cornerRadius={5} />
      </RadialBarChart>
    </Fragment>
  )
}

export default Radial
