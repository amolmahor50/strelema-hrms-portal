import { useNavigate, useLocation } from "react-router-dom";
import { Icon } from "@/custom/Icon";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";

export const Sidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: "Home", path: "/dashboard" },
    { id: "employees", label: "Employees", icon: "Users", path: "/employees" },
    {
      id: "departments",
      label: "Departments",
      icon: "Briefcase",
      path: "/departments",
    },
    {
      id: "attendance",
      label: "Attendance",
      icon: "CalendarCheck",
      path: "/attendance",
    },
    { id: "leaves", label: "Leaves", icon: "CalendarDays", path: "/leaves" },
    { id: "holidays", label: "Holidays", icon: "Sun", path: "/holidays" },
    { id: "training", label: "Training", icon: "BookOpen", path: "/training" },
    { id: "settings", label: "Settings", icon: "Settings", path: "/settings" },
  ];

  const handleMenuClick = (path) => {
    navigate(path);
    if (onClose) onClose();
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-200 shadow-md z-50 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Fixed Header */}
        <div className="sticky top-0 z-20 bg-white p-5 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-primary w-10 h-10 rounded-full flex items-center justify-center shadow-sm">
              <Icon name="Building2" color="white" />
            </div>
            <div>
              <h5 className="text-lg font-semibold text-gray-800">
                Strelema Portal
              </h5>
              <p className="text-xs text-gray-500 truncate">
                Manage Employees & More
              </p>
            </div>
          </div>

          {/* Close (mobile only) */}
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="lg:hidden"
          >
            <Icon name="X" className="w-5 h-5 text-gray-600" />
          </Button>
        </div>

        {/* Scrollable Menu Area */}
        <ScrollArea className="h-[calc(100%-160px)] px-3 py-4">
          <TooltipProvider>
            <ul className="space-y-1">
              {menuItems.map(({ id, label, icon, path }) => {
                const isActive = location.pathname === path;
                return (
                  <li key={id}>
                    <Tooltip delayDuration={300}>
                      <TooltipTrigger asChild>
                        <Button
                          variant="ghost"
                          onClick={() => handleMenuClick(path)}
                          className={`w-full justify-start gap-3 px-4 py-2.5 text-sm rounded-lg font-medium transition-all ${
                            isActive
                              ? "bg-blue-100 text-primary"
                              : "text-gray-700 hover:bg-primary/10 hover:text-primary"
                          }`}
                        >
                          <Icon name={icon} className="w-5 h-5" />
                          <span className="truncate">{label}</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent side="right" className="hidden lg:block">
                        {label}
                      </TooltipContent>
                    </Tooltip>
                  </li>
                );
              })}
            </ul>
          </TooltipProvider>
        </ScrollArea>

        <Separator />

        {/* Footer Section */}
        <div className="grid grid-cols-2 gap-2 p-4 border-t border-gray-100">
          <Button size="sm">
            <Icon name="Moon" /> Dark
          </Button>
          <Button size="sm" variant="outline">
            <Icon name="Sun" /> Light
          </Button>
        </div>
      </aside>
    </>
  );
};
