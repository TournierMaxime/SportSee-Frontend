import React, { Fragment } from "react"
import { Link } from "react-router-dom"
import Title from "./Title"

const Error404 = () => {
  return (
    <Fragment>
      <Title title={"Erreur 404"} />
      <div className="error404">
        <h1 className="error404__title">404</h1>
        <h4 className="error404__message">
          Oups! La page que vous demandez n&apos;existe pas.
        </h4>
        <Link className="error404__redirectLink" to={"/"}>
          Retourner sur la page d&apos;accueil
        </Link>
      </div>
    </Fragment>
  )
}

export default Error404
