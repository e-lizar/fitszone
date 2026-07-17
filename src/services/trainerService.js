import api from "../api/axios";

export const getTrainers = async () => {
  const response = await api.get("/trainers");
  return response.data.trainers;
};