import api from "../api/axios";

export const getAllMembers = async (token) => {
  const response = await api.get("/users", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data.members;
};
export const deleteMember = async (id, token) => {
  const response = await api.delete(`/users/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
export const updateMember = async (id, memberData, token) => {
  const response = await api.put(`/users/${id}`, memberData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
export const assignMembershipPlan = async (
  memberId,
  planId,
  token
) => {
  const response = await api.put(
    "/users/assign-membership",
    {
      memberId,
      planId,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};
export const assignPrograms = async (
  memberId,
  programIds,
  token
) => {
  const response = await api.put(
    "/users/assign-programs",
    {
      memberId,
      programIds,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};