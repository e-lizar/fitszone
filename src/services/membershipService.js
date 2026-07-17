import api from "../api/axios";

export const getMemberships = async () => {
  const response = await api.get("/memberships");
  return response.data.memberships;
};