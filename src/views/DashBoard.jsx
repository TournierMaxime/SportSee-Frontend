import React, { Fragment, useEffect } from "react"
import PropTypes from "prop-types"
import { useParams } from "react-router-dom"
import Title from "../utils/Title"
import Activity from "../components/user/Activity"
import Sessions from "../components/user/Sessions"
import Performances from "../components/user/Performances"
import useFetch from "../hooks/useFetch"
import Score from "../components/user/Score"
import Statistics from "../components/Statistics"
import Heading from "../components/Heading"

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
        <Heading firstName={userData?.userInfos?.identity?.firstName} />
        <Activity data={userData?.activity} />
        <div className="charts">
          <Sessions data={userData?.averageSessions} />
          <Performances data={userData?.performance} />
          <Score data={userData?.userInfos?.score} />
        </div>

        <Statistics nutrients={userData?.userInfos?.nutrients} />
      </div>
    </Fragment>
  )
}

DashBoard.propTypes = {
  userId: PropTypes.number,
}

export default DashBoard
