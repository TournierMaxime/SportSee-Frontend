import React from "react"
import { XAxis, Tooltip, LineChart, Line } from "recharts"
import Statistics from "../../../utils/Statistics"

const Lines = ({ data }) => {
  const renderTooltip = Statistics.tooltipLine

  return (
    <LineChart width={250} height={200} data={data}>
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
  )
}

export default Lines
