import axios from 'axios'
import {
  activity,
  averageSessions,
  informations,
  performance,
} from "../mocks/users.js"

const api = axios.create({
  baseURL: process.env.REACT_APP_API
})

const mockAxios = (userId, dataType) => {
  const data = {
    activity: activity,
    averageSessions: averageSessions,
    informations: informations,
    performance: performance,
  };

  return new Promise((resolve, reject) => {
    const response = data[dataType][userId];
    if (response) {
      resolve({ data: response, status: 200 });
    } else {
      reject(new Error("Données non trouvées"));
    }
  });
};

export { api, mockAxios }