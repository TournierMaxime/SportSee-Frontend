import { useState } from "react"
import { GetUserActivity } from "../services/users"

const useHandleUserActivity = ({ userId }) => {
    const [userActivity, setUserActivity] = useState(null)

    const fetchDataUserActivity = async () => {
      const response = await GetUserActivity(userId)
      setUserActivity(response.data.data)
    }

    return {
        userActivity,
        fetchDataUserActivity
    }
}

export default useHandleUserActivity