import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Icon } from "@/custom/Icon";
import { Link, useLocation } from "react-router-dom";
import { MotionWrapper } from "@/components/common/MotionWrapper";
import { PageLayout } from "@/components/common/PageLayout";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Destinations", path: "/destinations" },
    { name: "Hotels", path: "/hotels" },
    { name: "Flights", path: "/flights" },
    { name: "Bookings", path: "/bookings" },
  ];

  // Handle scroll background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      <PageLayout>
        <MotionWrapper
          type="slideDown"
          duration={0.6}
          className="flex justify-between items-center py-4"
        >
          {/* Logo */}
          <MotionWrapper type="slideRight" delay={0.1}>
            <Link to="/" className="flex items-center text-2xl font-extrabold">
              <span className="text-gray-900">Travel</span>
              <span className="text-amber-500">.ly</span>
            </Link>
          </MotionWrapper>

          {/* Desktop Navigation */}
          <MotionWrapper
            type="fade"
            delay={0.2}
            className="hidden md:flex items-center gap-8"
          >
            {navLinks.map((link, index) => {
              const isActive = location.pathname === link.path;
              return (
                <MotionWrapper
                  key={link.name}
                  type="slideUp"
                  delay={0.1 * index}
                >
                  <Link
                    to={link.path}
                    className={`transition font-normal pb-1 ${
                      isActive
                        ? "text-amber-600 border-b-2 border-amber-500"
                        : "text-gray-700 hover:text-amber-600"
                    }`}
                  >
                    {link.name}
                  </Link>
                </MotionWrapper>
              );
            })}

            <Link
              to="/login"
              className={`pb-1 transition ${
                location.pathname === "/login"
                  ? "text-amber-600 border-b-2 border-amber-500"
                  : "text-gray-700 hover:text-amber-600"
              }`}
            >
              Login
            </Link>

            <Link to="/signup">
              <Button
                size="sm"
                variant="outline"
                className="flex items-center gap-2 border-amber-400 text-amber-600 hover:bg-amber-100"
              >
                Sign up
              </Button>
            </Link>

            <Button
              variant="ghost"
              className="font-normal flex items-center gap-1"
            >
              <Icon name="Globe" />
              EN
            </Button>
          </MotionWrapper>

          {/* Mobile Menu Button */}
          <MotionWrapper type="scale" delay={0.3} className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 text-gray-700 hover:text-amber-600 transition"
            >
              {menuOpen ? <Icon name="X" /> : <Icon name="Menu" />}
            </button>
          </MotionWrapper>
        </MotionWrapper>
      </PageLayout>

      {/* Mobile Navigation Dropdown */}
      <MotionWrapper
        type={menuOpen ? "slideDown" : "fade"}
        duration={0.4}
        className={`${
          menuOpen ? "block" : "hidden"
        } md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-sm`}
      >
        <nav className="flex flex-col items-center space-y-6 py-4">
          {navLinks.map((link, i) => {
            const isActive = location.pathname === link.path;
            return (
              <MotionWrapper key={link.name} type="slideUp" delay={i * 0.1}>
                <Link
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`transition text-sm font-normal ${
                    isActive
                      ? "text-amber-600 border-b-2 border-amber-500"
                      : "text-gray-700 hover:text-amber-600"
                  }`}
                >
                  {link.name}
                </Link>
              </MotionWrapper>
            );
          })}

          <MotionWrapper type="slideUp">
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className={`transition text-sm ${
                location.pathname === "/login"
                  ? "text-amber-600 border-b-2 border-amber-500"
                  : "text-gray-700 hover:text-amber-600"
              }`}
            >
              Login
            </Link>
          </MotionWrapper>

          <MotionWrapper type="slideUp">
            <Link to="/signup" onClick={() => setMenuOpen(false)}>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2 border-amber-400 text-amber-600 hover:bg-amber-100"
              >
                Sign up
              </Button>
            </Link>
          </MotionWrapper>

          <MotionWrapper type="slideUp">
            <Button variant="ghost" size="sm">
              <Icon name="Globe" />
              EN
            </Button>
          </MotionWrapper>
        </nav>
      </MotionWrapper>
    </header>
  );
}
