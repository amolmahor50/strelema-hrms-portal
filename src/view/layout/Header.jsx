import { Icon } from "@/custom/Icon";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/contexts/AuthContext";

export const Header = ({ onMenuClick }) => {
  const { logout } = useAuth();
  return (
    <header className="bg-background border-b sticky top-0 z-40 shadow-sm backdrop-blur-md">
      <div className="flex items-center justify-between px-3 md:px-6 py-3">
        {/* Left Section */}
        <div className="flex items-center gap-3">
          {/* Mobile Menu Button */}
          <Button
            onClick={onMenuClick}
            variant="ghost"
            size="icon"
            className="lg:hidden"
          >
            <Icon name="Menu" className="text-foreground" />
          </Button>

          <div className="hidden lg:block">
            <h1 className="text-xl font-semibold text-foreground flex items-center gap-1">
              Overview Management
            </h1>
            <p className="text-sm text-muted-foreground">User Name</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-1 md:gap-3">
          <div className="relative lg:flex hidden">
            <Icon
              name="Search"
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4"
            />
            <Input placeholder="Search..." className="pl-9" />
          </div>

          {/*  Notifications */}
          <Button
            variant="ghost"
            size="icon"
            className="relative hover:bg-accent"
          >
            <Icon name="Bell" className="text-foreground" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
          </Button>

          {/* 👤 User Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex items-center gap-2 hover:bg-accent transition-all"
              >
                <Avatar className="w-8 h-8">
                  <AvatarImage src="" />
                  <AvatarFallback>A</AvatarFallback>
                </Avatar>
                <span className="hidden sm:block text-sm font-medium text-foreground">
                  User
                </span>
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuLabel className="text-gray-700">
                Account
              </DropdownMenuLabel>
              <DropdownMenuSeparator />

              <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
                <Icon name="UserCircle" />
                Profile
              </DropdownMenuItem>

              <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
                <Icon name="Settings" />
                Settings
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              <DropdownMenuItem
                onClick={logout}
                className="flex items-center gap-2 text-red-600 cursor-pointer hover:bg-red-50"
              >
                <Icon name="LogOut" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};
