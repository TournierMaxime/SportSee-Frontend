import React, { Fragment, useEffect } from "react"
import PropTypes from "prop-types"
import { useParams } from "react-router-dom"
import Title from "../utils/Title"
import Activity from "../components/user/Activity"
import useHandleUsers from "../hooks/useHandleUsers"
import useHandleUserActivity from "../hooks/useHandleUserActivity"

/**
 * Composant pour définir le titre de la page.
 * @param {object} props - L'objet props.
 * @param {number} props.userId - Le titre de la page.
 * @returns {React.ReactElement} Le composant Title.
 */

const DashBoard = () => {
  const { userId } = useParams()

  const { user, fetchDataUser } = useHandleUsers({ userId })
  const { userActivity, fetchDataUserActivity } = useHandleUserActivity({
    userId,
  })

  useEffect(() => {
    fetchDataUser()
    fetchDataUserActivity()
  }, [userId])

  return (
    <Fragment>
      <Title
        title={`Profil de ${user?.userInfos?.lastName} ${user?.userInfos?.firstName}`}
      />
      <div className="container">
        <h1>
          Bonjour{" "}
          <span style={{ color: "red" }}>{user?.userInfos?.firstName}</span>
        </h1>
        <p style={{ margin: 0, padding: 0 }}>
          Félicitation ! Vous avez explosé vos objectifs hier 👏
        </p>

        <Activity data={userActivity?.sessions} />
      </div>
    </Fragment>
  )
}

DashBoard.propTypes = {
  userId: PropTypes.number,
}

export default DashBoard
