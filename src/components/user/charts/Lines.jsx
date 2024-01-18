import React from "react"
import { XAxis, Tooltip, LineChart, Line, ResponsiveContainer } from "recharts"
import Statistics from "../../../utils/Statistics"

/**
 * @component
 * @param {Object[]} data - Data in the line chart :
 *    @param {string} data[].day - Label for the X-axis.
 *    @param {number} data[].sessionLength - Y-axis.
 */


const Lines = ({ data }) => {
  const renderTooltip = Statistics.tooltipLine

  return (
    <ResponsiveContainer height={"65%"}>
    <LineChart data={data}>
      <XAxis
        dataKey="day"
        axisLine={false}
        tickLine={false}
        tick={{ fill: "white", opacity: 0.5 }}
      />
      <Tooltip
        content={renderTooltip}
        wrapperStyle={{ outline: "none" }}
        cursor={false}
      />
      <Line
        dataKey="sessionLength"
        type="basis"
        dot={false}
        stroke="white"
        opacity={0.5}
        strokeWidth={3}
        unit="min"
      />
    </LineChart>
    </ResponsiveContainer>
  )
}

export default Lines
