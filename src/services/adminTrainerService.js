import api from "../api/axios";

// Get All Trainers
export const getAllTrainers = async () => {
  const response = await api.get("/trainers");
  return response.data.trainers;
};

// Create Trainer
export const createTrainer = async (trainerData, token) => {
  const response = await api.post("/trainers", trainerData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

// Update Trainer
export const updateTrainer = async (id, trainerData, token) => {
  const response = await api.put(`/trainers/${id}`, trainerData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

// Delete Trainer
export const deleteTrainer = async (id, token) => {
  const response = await api.delete(`/trainers/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};