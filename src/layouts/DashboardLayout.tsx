import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { Heart, LogOut } from "lucide-react";
import {
  Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent,
  SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem,
  SidebarProvider, SidebarTrigger, useSidebar,
} from "@/components/ui/sidebar";
import { useAuth } from "@/context/AuthContext";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const initials = (name: string) =>
  name.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase();

const RoleSidebar = () => {
  const { roleConfig, logout } = useAuth();
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const navigate = useNavigate();

  if (!roleConfig) return null;

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="border-b border-sidebar-border">
        <Link to="/" className="flex items-center gap-2 px-2 py-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0">
            <Heart className="w-4 h-4 text-primary-foreground" fill="currentColor" />
          </div>
          {!collapsed && (
            <div className="leading-tight">
              <p className="font-bold text-sm text-sidebar-foreground">MediCare+</p>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                {roleConfig.label}
              </p>
            </div>
          )}
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {roleConfig.menu.map((item) => (
                <SidebarMenuItem key={item.to}>
                  <SidebarMenuButton asChild tooltip={item.label}>
                    <NavLink
                      to={item.to}
                      end
                      className={({ isActive }) =>
                        isActive ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium" : ""
                      }
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton onClick={handleLogout} tooltip="Logout">
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

const TopBar = () => {
  const { user, roleConfig } = useAuth();
  const navigate = useNavigate();
  if (!user || !roleConfig) return null;

  const displayName = roleConfig.titlePrefix
    ? `${roleConfig.titlePrefix} ${user.name}`
    : user.name;

  return (
    <header className="sticky top-0 z-30 h-16 border-b bg-background/85 backdrop-blur-lg flex items-center justify-between px-4 gap-4">
      <div className="flex items-center gap-2">
        <SidebarTrigger />
        <h1 className="text-base md:text-lg font-semibold text-foreground">
          {roleConfig.label} Portal
        </h1>
      </div>

      <div className="flex items-center gap-3">
        <span className="hidden sm:block text-sm font-medium text-foreground">
          {displayName}
        </span>
        <button
          onClick={() => navigate("/app/profile")}
          aria-label="Profile"
          className="rounded-full ring-2 ring-transparent hover:ring-primary/40 transition-smooth"
        >
          <Avatar className="h-9 w-9">
            <AvatarFallback className="bg-gradient-primary text-primary-foreground font-semibold">
              {initials(user.name)}
            </AvatarFallback>
          </Avatar>
        </button>
      </div>
    </header>
  );
};

const DashboardLayout = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-muted/30">
        <RoleSidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <TopBar />
          <main className="flex-1 p-4 md:p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
