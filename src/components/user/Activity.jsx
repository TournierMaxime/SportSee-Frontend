import React from "react"
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar } from "recharts"

const Activity = ({ data }) => {
  if (!data) {
    return null
  }

  const indexedData = data.map((session, index) => ({
    ...session,
    index: index + 1,
  }))

  const renderTooltip = (props) => {
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

  return (
    <div className="activityChart">
      <div className="activityChart__container">
        <div className="activityChart__container--title">
          <h5>Activité quotidienne</h5>
        </div>
        <div className="activityChart__container--legend">
          <p className="axisTitle">
            <span className="weightDot"></span>Poids (kg)
          </p>
          <p className="axisTitle">
            <span className="caloriesDot"></span>Calories brûlées (Kcal)
          </p>
        </div>
      </div>
      <BarChart
        width={730}
        height={250}
        data={indexedData}
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
    </div>
  )
}

export default Activity
