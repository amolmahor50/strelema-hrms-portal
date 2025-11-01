import { Routes, Route, Navigate } from "react-router-dom";
import { MainLayout } from "@/view/layout/MainLayout";
import EmployeeTable from "@/pages/admin/EmployeeTable";
import Dashboard from "@/pages/admin/Dashboard";

const Departments = () => (
  <div className="p-6 text-lg font-semibold">Departments</div>
);
const Attendance = () => (
  <div className="p-6 text-lg font-semibold">Attendance</div>
);
const Leaves = () => <div className="p-6 text-lg font-semibold">Leaves</div>;
const Holidays = () => (
  <div className="p-6 text-lg font-semibold">Holidays</div>
);
const Training = () => (
  <div className="p-6 text-lg font-semibold">Training</div>
);
const Settings = () => (
  <div className="p-6 text-lg font-semibold">Settings</div>
);

export default function ProtectedRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {/*  Redirect root to dashboard */}
        <Route index element={<Navigate to="dashboard" replace />} />

        {/*  Correct paths — not nested with /dashboard/dashboard */}
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="employees" element={<EmployeeTable />} />
        <Route path="departments" element={<Departments />} />
        <Route path="attendance" element={<Attendance />} />
        <Route path="leaves" element={<Leaves />} />
        <Route path="holidays" element={<Holidays />} />
        <Route path="training" element={<Training />} />
        <Route path="settings" element={<Settings />} />

        {/*  Wildcard redirect */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Route>
    </Routes>
  );
}
