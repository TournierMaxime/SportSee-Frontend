import React from "react"

/**
 * Each card shows:
 * - Icon: A visual representation of the nutrient.
 * - Count: The quantity of the nutrient.
 * - Unit: The measurement unit for the nutrient count.
 * - Name: The name of the nutrient.
 *
 * @component
 * @param {Object[]} nutrients - An array of nutrient objects :
 *    @param {string} nutrients[].name - The name of the nutrient.
 *    @param {string} nutrients[].unit - The unit of measurement for the nutrient.
 *    @param {string} nutrients[].icon - The URL or path to the icon representing the nutrient.
 *    @param {number|string} nutrients[].count - The quantity of the nutrient.
 */


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
