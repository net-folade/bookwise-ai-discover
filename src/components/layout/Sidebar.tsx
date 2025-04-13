
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { 
  Book, 
  BookOpen, 
  Home, 
  Library, 
  Search, 
  Settings, 
  User, 
  UserPlus, 
  Users, 
  BarChart, 
  LogOut,
  Menu,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

type NavigationItem = {
  name: string;
  path: string;
  icon: React.ElementType;
  admin?: boolean;
};

// Navigation items
const navigationItems: NavigationItem[] = [
  { name: "Home", path: "/", icon: Home },
  { name: "Explore", path: "/explore", icon: Search },
  { name: "My Books", path: "/my-books", icon: BookOpen },
  { name: "Catalog", path: "/catalog", icon: Book },
  { name: "Profile", path: "/profile", icon: User },
];

const adminNavigationItems: NavigationItem[] = [
  { name: "Dashboard", path: "/admin", icon: BarChart, admin: true },
  { name: "Manage Books", path: "/admin/books", icon: Library, admin: true },
  { name: "Manage Users", path: "/admin/users", icon: Users, admin: true },
  { name: "Settings", path: "/admin/settings", icon: Settings, admin: true },
];

type SidebarProps = {
  isAdmin?: boolean;
  className?: string;
};

export function Sidebar({ isAdmin = false, className }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  
  // Combined navigation items based on user role
  const items = [...navigationItems, ...(isAdmin ? adminNavigationItems : [])];

  // Toggle sidebar on mobile
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Mobile toggle button */}
      {isMobile && (
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleSidebar}
          className="fixed top-4 left-4 z-50"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      )}

      {/* Sidebar */}
      <div 
        className={cn(
          "bg-white h-screen fixed left-0 top-0 bottom-0 z-40 transition-all duration-300 shadow-lg flex flex-col",
          isMobile ? (isOpen ? "w-64 translate-x-0" : "w-64 -translate-x-full") : "w-64",
          className
        )}
      >
        {/* Logo */}
        <div className="p-6 border-b">
          <h1 className="text-xl font-bold text-library-primary flex items-center">
            <Library className="mr-2 h-6 w-6 text-library-secondary" />
            BookWise AI
          </h1>
        </div>

        {/* Navigation links */}
        <nav className="flex-1 overflow-y-auto p-4">
          <ul className="space-y-1">
            {items.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors",
                      isActive && "bg-gray-100 text-library-secondary font-medium",
                      item.admin && "text-library-secondary"
                    )
                  }
                  onClick={() => isMobile && setIsOpen(false)}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer with login/logout */}
        <div className="p-4 border-t">
          <Button variant="ghost" className="w-full justify-start">
            {isAdmin ? (
              <>
                <LogOut className="mr-2 h-5 w-5" />
                Logout
              </>
            ) : (
              <>
                <UserPlus className="mr-2 h-5 w-5" />
                Login / Register
              </>
            )}
          </Button>
        </div>
      </div>
    </>
  );
}
