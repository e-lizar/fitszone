const API_BASE =
  import.meta.env.VITE_API_URL.replace("/api", "");

export const getImageUrl = (path) => {
  if (!path) return "";

  return `${API_BASE}${path}`;
};