import React from "react"
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
} from "recharts"

/**
 * @component
 * @param {Object[]} data - Data in the radar chart :
 *    @param {string} data[].kind
 *    @param {number} data[].value
 */

const Radars = ({ data }) => {
  return (
    <ResponsiveContainer>
      <RadarChart
        outerRadius={64}
        width={230}
        height={210}
        data={data}
      >
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
