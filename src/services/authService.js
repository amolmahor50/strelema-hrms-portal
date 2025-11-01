import apiClient from "./apiClient";

export const login = async (phone, password) => {
  const { data } = await apiClient.post("/auth/login", { phone, password });
  return data;
};
