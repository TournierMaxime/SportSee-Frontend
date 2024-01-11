import React from "react"

const Statistics = ({ nutrients }) => {
  return (
    <div className="statisticsCards">
      {nutrients?.map((nutrient, idx) => {
        const { name, unit, icon, count } = nutrient
        return (
          <div key={idx} className="statisticsCards__card">
            <div className="statisticsCards__card--image">
              <img src={icon} alt={`icon-${name}`} />
            </div>
            <div className="statisticsCards__card--data">
              <h5>
                {count}
                {unit}
              </h5>
              <h6>{name}</h6>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Statistics
