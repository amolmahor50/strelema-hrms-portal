import apiClient from "./apiClient";

export const getEmployees = async (page = 1, limit = 10) => {
  try {
    const { data } = await apiClient.get(
      `/employees?page=${page}&limit=${limit}`
    );
    return data;
  } catch (error) {
    console.error(
      " Failed to fetch employees:",
      error.response?.data || error.message
    );
    throw error;
  }
};
