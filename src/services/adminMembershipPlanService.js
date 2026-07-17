import api from "../api/axios";

// Get all plans
export const getAllPlans = async () => {
  const response = await api.get("/membership-plans");
  return response.data.plans;
};

// Create plan
export const createPlan = async (planData, token) => {
  const response = await api.post("/membership-plans", planData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

// Update plan
export const updatePlan = async (id, planData, token) => {
  const response = await api.put(`/membership-plans/${id}`, planData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

// Delete plan
export const deletePlan = async (id, token) => {
  const response = await api.delete(`/membership-plans/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};