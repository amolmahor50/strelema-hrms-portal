import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import { getEmployees } from "@/services/employeeService";

const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //  Fetch employees from backend with pagination
  const fetchEmployees = useCallback(async (currentPage = 1) => {
    try {
      setLoading(true);
      setError(null);
      const response = await getEmployees(currentPage, 10);
      console.log(" Employee API Response:", response);

      const list =
        response?.data?.data || response?.data || response?.employees || [];

      const pagination =
        response?.data?.pagination ||
        response?.pagination ||
        response?.meta ||
        {};

      const pages =
        pagination.pages ||
        pagination.totalPages ||
        Math.ceil((pagination.total || list.length) / 10) ||
        1;

      setEmployees(Array.isArray(list) ? list : []);
      setTotalPages(pages);
    } catch (err) {
      console.error(" Error fetching employees:", err);
      setError("Failed to load employees. Please try again later.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchEmployees(page);
  }, [page, fetchEmployees]);

  return (
    <EmployeeContext.Provider
      value={{
        employees,
        page,
        setPage,
        totalPages,
        loading,
        error,
        refetch: fetchEmployees,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};

export const useEmployees = () => {
  const context = useContext(EmployeeContext);
  if (!context) {
    throw new Error("useEmployees must be used within an EmployeeProvider");
  }
  return context;
};
