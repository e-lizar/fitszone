import api from "../api/axios";

export const getPrograms = async () => {
  const response = await api.get("/programs");
  return response.data.programs;
};