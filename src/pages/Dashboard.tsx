import { Link } from "react-router-dom";
import { UserPlus, Users, TrendingUp, Activity } from "lucide-react";

export default function Dashboard() {
  const stats = [
    { icon: Users, label: "Total Customers", value: "1,234", change: "+12%" },
    { icon: TrendingUp, label: "Active Accounts", value: "892", change: "+8%" },
    { icon: Activity, label: "Pending Approvals", value: "23", change: "-5%" },
    { icon: UserPlus, label: "New This Month", value: "45", change: "+23%" },
  ];

  return (
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="mb-2 text-2xl font-bold text-center sm:text-3xl text-foreground sm:text-left">Dashboard</h1>
        <p className="text-sm text-center sm:text-base text-muted-foreground sm:text-left">Welcome to LUX COZI Customer Portal</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="p-6 transition-all duration-300 shadow-lg glass-effect rounded-2xl hover:shadow-xl animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
                    <Icon className="w-6 h-6 text-white" />
                </div>
                <span className="px-2 py-1 text-xs font-medium text-green-600 rounded-full bg-green-50">
                  {stat.change}
                </span>
              </div>
              <h3 className="mb-1 text-2xl font-bold text-foreground">{stat.value}</h3>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="p-8 mb-8 shadow-lg glass-effect rounded-2xl">
        <h2 className="mb-6 text-xl font-semibold text-foreground">Quick Actions</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Link
            to="/create-customer"
            className="p-6 transition-all duration-200 border-2 group rounded-xl border-border hover:border-accent hover:shadow-lg"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 transition-transform duration-200 rounded-lg bg-gradient-accent group-hover:scale-110">
                <UserPlus className="w-6 h-6 text-blue-700" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Create New Customer</h3>
                <p className="text-sm text-muted-foreground">Add a customer and sync to SAP</p>
              </div>
            </div>
          </Link>

          <div className="p-6 transition-all duration-200 border-2 cursor-pointer group rounded-xl border-border hover:border-accent hover:shadow-lg">
            <div className="flex items-center gap-4">
              <div className="p-3 transition-transform duration-200 rounded-lg bg-gradient-primary group-hover:scale-110">
                <Users className="w-6 h-6 text-blue-700" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">View All Customers</h3>
                <p className="text-sm text-muted-foreground">Browse and manage customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="p-8 shadow-lg glass-effect rounded-2xl">
        <h2 className="mb-6 text-xl font-semibold text-foreground">Recent Activity</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex items-center gap-4 p-4 transition-colors rounded-lg hover:bg-accent/5">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">New customer created</p>
                <p className="text-xs text-muted-foreground">Customer #{1000 + item} was added to the system</p>
              </div>
              <span className="text-xs text-muted-foreground">{item}h ago</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
