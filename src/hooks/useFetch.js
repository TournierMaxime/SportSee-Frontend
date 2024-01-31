import { useState } from "react"
import { userServices, userMockData } from "../services/users"

/**
 * @hook
 * @param {Object} params - Parameters for the hook.
 *   @param {string|number} params.userId - The user ID for which data needs to be fetched.
 * @returns {Object} - An object containing:
 *   @returns {Object|null} userData - The fetched user data.
 *   @returns {boolean} loading.
 *   @returns {Object|null} error.
 *   @returns {Function} fetchData - A function to trigger the fetch operation.
 */

const useFetch = ({ userId }) => {
  const [userData, setUserData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    try {
      setLoading(true)

      const data =
        process.env.REACT_APP_ENV === "API"
          ? await userServices.getAllData(userId)
          : await userMockData.getAllData(userId)

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
