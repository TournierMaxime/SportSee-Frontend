import React from "react"

/**
 * @component
 * @param {string} firstName - The firstname of the user.
 */


const Heading = ({ firstName }) => {
    return (
        <div className="heading">
          <h1>
            Bonjour{" "}
            <span style={{ color: "red" }}>
              {firstName}
            </span>
          </h1>
          <p style={{ margin: 0, padding: 0 }}>
            Félicitation ! Vous avez explosé vos objectifs hier 👏
          </p>
        </div>
    )
}

export default Heading