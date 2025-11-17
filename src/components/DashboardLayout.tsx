import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Users, LayoutDashboard, Settings, Menu, X } from "lucide-react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/" },
  { icon: Users, label: "Create Customer", path: "/create-customer" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const location = useLocation();

  return (
    <div className="flex min-h-screen">
      {/* Mobile menu button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed z-50 p-2 rounded-lg lg:hidden top-4 left-4 glass-effect"
      >
        {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:sticky top-0 left-0 h-screen z-40
          w-64 glass-effect border-r border-border/50
          transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        <div className="flex flex-col h-full p-6">
          {/* Logo */}
            <div className="pt-12 mb-8 lg:pt-0">
            <h1 className="text-2xl font-bold">
              <span className="text-red-500">Lux</span>
              <span className="text-blue-900"> Cozi</span>
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">Customer Portal</p>
            </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-2">
            {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                
                return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setSidebarOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  className={`
                  flex items-center gap-3 px-4 py-3 rounded-lg
                  transition-all duration-200 relative overflow-hidden group
                  ${isActive ? "bg-red-500 text-white shadow-lg" : "text-foreground hover:bg-accent/10"}
                  `}
                >
                  <div className="absolute inset-0 opacity-0 bg-gradient-to-r from-transparent via-white to-transparent group-hover:opacity-20 group-hover:animate-shimmer" />
                  <Icon className="relative z-10 w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="pt-6 mt-6 border-t border-border/50">
            <p className="text-xs text-muted-foreground">
              © 2024 LUX COZI. All rights reserved.
            </p>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        <div className="p-6 lg:p-10 animate-fade-in">
          {children}
        </div>
      </main>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
