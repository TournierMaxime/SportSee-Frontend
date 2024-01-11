import React from "react"
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
} from "recharts"

const Radars = ({ data }) => {
  return (
    <ResponsiveContainer>
      <RadarChart width={230} height={210} data={data}>
        <PolarGrid radialLines={false} />
        <PolarAngleAxis
          dataKey="kind"
          tick={{ fill: "white", fontSize: "12px", fontWeight: "bold" }}
        />
        <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
      </RadarChart>
    </ResponsiveContainer>
  )
}

export default Radars
