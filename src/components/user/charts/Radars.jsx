import React from "react"
import { RadarChart, PolarGrid, PolarAngleAxis, Radar } from "recharts"

const Radars = ({ data }) => {
  return (
    <RadarChart width={250} height={200} data={data}>
      <PolarGrid radialLines={false} />
      <PolarAngleAxis
        dataKey="kind"
        tick={{ fill: "white", fontSize: "12px", fontWeight: "bold" }}
      />
      <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
    </RadarChart>
  )
}

export default Radars
