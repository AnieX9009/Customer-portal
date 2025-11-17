import { Settings as SettingsIcon, Bell, Shield, User } from "lucide-react";

export default function Settings() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
    <div className="mb-8">
      <div className="flex flex-col items-center gap-3 mb-2 text-center md:flex-row md:items-center md:text-left md:gap-3">
        <div className="p-3 mb-2 shadow-sm rounded-xl bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 md:mb-0">
        <SettingsIcon className="w-6 h-6 text-white" />
        </div>
        <div>
        <h1 className="text-3xl font-bold text-foreground">Settings</h1>
        <p className="mt-1 text-sm text-muted-foreground">Manage your account and preferences</p>
        </div>
      </div>
    </div>

      {/* Settings Sections */}
      <div className="space-y-6">
        {/* Profile */}
        <div className="p-6 shadow-lg glass-effect rounded-2xl">
          <div className="flex items-center gap-3 mb-4">
            <User className="w-5 h-5 text-accent" />
            <h2 className="text-lg font-semibold text-foreground">Profile Settings</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Full Name</label>
              <input
                type="text"
                className="w-full rounded-lg border border-input bg-card px-4 py-2.5 text-sm text-foreground"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
              <input
                type="email"
                className="w-full rounded-lg border border-input bg-card px-4 py-2.5 text-sm text-foreground"
                placeholder="your.email@example.com"
              />
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="p-6 shadow-lg glass-effect rounded-2xl">
          <div className="flex items-center gap-3 mb-4">
            <Bell className="w-5 h-5 text-accent" />
            <h2 className="text-lg font-semibold text-foreground">Notifications</h2>
          </div>
          <div className="space-y-3">
            <label className="flex items-center justify-between cursor-pointer">
              <span className="text-sm text-foreground">Email notifications</span>
              <input type="checkbox" className="w-4 h-4 rounded border-input text-accent" defaultChecked />
            </label>
            <label className="flex items-center justify-between cursor-pointer">
              <span className="text-sm text-foreground">Customer updates</span>
              <input type="checkbox" className="w-4 h-4 rounded border-input text-accent" defaultChecked />
            </label>
            <label className="flex items-center justify-between cursor-pointer">
              <span className="text-sm text-foreground">System alerts</span>
              <input type="checkbox" className="w-4 h-4 rounded border-input text-accent" />
            </label>
          </div>
        </div>

        {/* Security */}
        <div className="p-6 shadow-lg glass-effect rounded-2xl">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-5 h-5 text-accent" />
            <h2 className="text-lg font-semibold text-foreground">Security</h2>
          </div>
        <button
            type="button"
            aria-label="Change password"
            className="relative px-4 py-2 overflow-hidden font-medium text-white transition-all duration-200 rounded-lg group bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:shadow-lg"
        >
            <span className="relative z-10">Change Password</span>
            <span className="absolute top-0 w-1/2 h-full transition-transform duration-500 transform -skew-x-12 bg-white -left-1/2 opacity-20 group-hover:translate-x-full" />
        </button>
        </div>
      </div>
    </div>
  );
}
