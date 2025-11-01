import { Routes, Route, useLocation } from "react-router-dom";

// Pages
import Destinations from "@/pages/Destinations";
import Flights from "@/pages/Flights";
import Bookings from "@/pages/Bookings";
import Hotels from "@/pages/Hotels";
import NotFound from "@/pages/NotFound";

// Layouts & Components
import LandingPageLayout from "@/view/landing/LandingPageLayout";
import LoginForm from "@/view/auth/LoginForm";
import Header from "@/view/landing/Header";
import Footer from "@/view/landing/Footer";

export default function PublicRoutes() {
  const location = useLocation();

  //  Routes where Header/Footer should not appear
  const noHeaderFooterRoutes = ["/login"];
  const hideLayout = noHeaderFooterRoutes.includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden bg-white">
      {!hideLayout && <Header />}

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<LandingPageLayout />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/flights" element={<Flights />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {!hideLayout && <Footer />}
    </div>
  );
}
