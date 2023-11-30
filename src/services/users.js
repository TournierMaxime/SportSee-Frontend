import { api as http } from "./axios.js";

const GetOneUser = async (userId) => {
  const response = await http.get(`/user/${userId}`);
  return response
};

const GetUserActivity = async (userId) => {
  const response = await http.get(`/user/${userId}/activity`);
  return response
};

const GetUserAverageSessions = async (userId) => {
  const response = await http.get(`/user/${userId}/average-sessions`);
  return response
};

const GetUserPerformance = async (userId) => {
  const response = await http.get(`/user/${userId}/performance`);
  return response
};

export { GetOneUser, GetUserActivity, GetUserAverageSessions, GetUserPerformance };