import api from "../api/axios";

export const getAllPrograms = async () => {
  const response = await api.get("/programs");
  return response.data.programs;
};

export const createProgram = async (programData, token) => {
  const response = await api.post("/programs", programData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type" : "multipart/form-data",
    },
  });

  return response.data;
};

export const deleteProgram = async (id, token) => {
  const response = await api.delete(`/programs/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const updateProgram = async (id, programData, token) => {
  const response = await api.put(`/programs/${id}`, programData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type" : "multipart/form-data",
    },
  });

  return response.data;
};