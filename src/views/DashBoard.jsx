import React, { Fragment, useEffect } from "react"
import PropTypes from "prop-types"
import { useParams } from "react-router-dom"
import Title from "../utils/Title"
import Activity from "../components/user/Activity"
import Sessions from "../components/user/Sessions"
import Performances from "../components/user/Performances"
import useFetch from "../hooks/useFetch"

/**
 * Composant pour définir le titre de la page.
 * @param {object} props - L'objet props.
 * @param {number} props.userId - Le titre de la page.
 * @returns {React.ReactElement} Le composant Title.
 */

const DashBoard = () => {
  const { userId } = useParams()

  const { userData, fetchData } = useFetch({ userId })

  console.log("userData", userData)

  useEffect(() => {
    fetchData()
  }, [userId])

  return (
    <Fragment>
      <Title
        title={`Profil de ${userData?.userInfos?.identity?.lastName} ${userData?.userInfos?.identity?.firstName}`}
      />
      <div className="container">
        <h1>
          Bonjour{" "}
          <span style={{ color: "red" }}>
            {userData?.userInfos?.identity?.firstName}
          </span>
        </h1>
        <p style={{ margin: 0, padding: 0 }}>
          Félicitation ! Vous avez explosé vos objectifs hier 👏
        </p>
        <Activity data={userData?.activity} />
        <div style={{display: 'flex', flexDirection: 'row', marginTop: "2em"}}>
          <Sessions data={userData?.averageSessions} />
          <Performances data={userData?.performance} />
        </div>
      </div>
    </Fragment>
  )
}

DashBoard.propTypes = {
  userId: PropTypes.number,
}

export default DashBoard
