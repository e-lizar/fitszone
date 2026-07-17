import api from "../api/axios";

export const getTrainerDashboard = async (token) => {
  const response = await api.get("/trainer-dashboard", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};