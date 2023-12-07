import { useState } from "react"
import userServices from "../services/users"

const useFetch = ({ userId }) => {
  const [userData, setUserData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    try {
      setLoading(true)

      const data = await userServices.getAllData(userId)
      const [userInfos, activity, averageSessions, performance] = data

      setUserData({ userInfos, activity, averageSessions, performance })
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  return { userData, loading, error, fetchData }
}

export default useFetch
