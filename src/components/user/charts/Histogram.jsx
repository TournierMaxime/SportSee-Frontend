import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar } from "recharts"
import React from "react"
import Statistics from "../../../utils/Statistics"

const Histogram = ({ data }) => {
  const renderTooltip = Statistics.tooltipBar

  return (
    <BarChart
      width={685}
      height={250}
      data={data}
      reverseStackOrder={true}
      barSize={10}
    >
      <CartesianGrid strokeDasharray="3 3" vertical={false} />
      <XAxis
        dataKey="index"
        tickMargin={16}
        tickLine={false}
        scale="point"
        padding={{ left: 10, right: 10 }}
      />
      <YAxis
        yAxisId="calories"
        hide={true}
        width={80}
        domain={["dataMin - 100", "dataMax + 100"]}
        dataKey="calories"
        type="number"
      />
      <YAxis
        yAxisId="kilogram"
        orientation="right"
        axisLine={false}
        tickMargin={43}
        width={80}
        domain={["dataMin - 2", "dataMax + 2"]}
        tickLine={false}
        tickCount={4}
        dataKey="kilogram"
        type="number"
      />
      <Tooltip content={renderTooltip} />
      <Bar
        yAxisId="kilogram"
        dataKey="kilogram"
        fill="#282D30"
        barSize={7}
        radius={[3, 3, 0, 0]}
        name="Poids (kg)"
        unit="kg"
      />
      <Bar
        yAxisId="calories"
        dataKey="calories"
        fill="#E60000"
        barSize={7}
        radius={[3, 3, 0, 0]}
        name="Calories brûlées (kCal)"
        minPointSize={5}
        unit="kCal"
      />
    </BarChart>
  )
}

export default Histogram
