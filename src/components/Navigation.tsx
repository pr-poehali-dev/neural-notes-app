import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  const currentPath = window.location.pathname;

  const navItems = [
    { path: "/dashboard", label: "Панель", icon: "Home" },
    { path: "/analytics", label: "Аналитика", icon: "BarChart3" },
    { path: "/profile", label: "Профиль", icon: "User" },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="text-xl font-bold text-purple-600">StudyPredict</h1>
          </div>

          <div className="flex items-center space-x-4">
            {navItems.map((item) => (
              <Button
                key={item.path}
                variant={currentPath === item.path ? "default" : "ghost"}
                size="sm"
                onClick={() => (window.location.href = item.path)}
                className="flex items-center gap-2"
              >
                <Icon name={item.icon} size={16} />
                {item.label}
              </Button>
            ))}

            <Button
              variant="outline"
              size="sm"
              onClick={() => (window.location.href = "/")}
              className="flex items-center gap-2"
            >
              <Icon name="LogOut" size={16} />
              Выйти
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
