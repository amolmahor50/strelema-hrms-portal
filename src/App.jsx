import { Routes, Route, Navigate } from "react-router-dom";
import { Spinner } from "@/components/ui/spinner";
import { useAuth } from "@/contexts/AuthContext";
import PublicRoutes from "@/routes/PublicRoutes";
import ProtectedRoutes from "@/routes/ProtectedRoutes";

export default function App() {
  const { isAuthenticated, loading } = useAuth();

  // if (loading) {
  //   return (
  //     <div className="flex justify-center items-center min-h-screen text-gray-600">
  //       <Spinner />
  //       <span className="ml-2">Loading...</span>
  //     </div>
  //   );
  // }

  return (
    <Routes>
      {/*  Public routes (like /login, /register) */}
      {!isAuthenticated && <Route path="/*" element={<PublicRoutes />} />}

      {/*  Protected routes (Dashboard, Employees, etc.) */}
      {isAuthenticated && <Route path="/*" element={<ProtectedRoutes />} />}

      {/*  Fallback to correct route */}
      <Route
        path="*"
        element={
          <Navigate to={isAuthenticated ? "/dashboard" : "/login"} replace />
        }
      />
    </Routes>
  );
}
