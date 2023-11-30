import { api as http } from "./axios.js";

const GetOneUser = (userId) => {
  return http.get(`/user/${userId}`);
};

const GetUserActivity = (userId) => {
  return http.get(`/user/${userId}/activity`);
};

const GetUserAverageSessions = (userId) => {
  return http.get(`/user/${userId}/average-sessions`);
};

const GetUserPerformance = (userId) => {
  return http.get(`/user/${userId}/performance`);
};

export { GetOneUser, GetUserActivity, GetUserAverageSessions, GetUserPerformance };