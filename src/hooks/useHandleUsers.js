import { useState } from "react"
import { GetOneUser } from "../services/users"

const useHandleUsers = ({ userId }) => {
    const [user, setUser] = useState(null)

    const fetchDataUser = async () => {
      const response = await GetOneUser(userId)
      setUser(response.data.data)
    }

    return {
        user,
        fetchDataUser
    }
}

export default useHandleUsers