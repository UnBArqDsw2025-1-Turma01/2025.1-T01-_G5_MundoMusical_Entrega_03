import { useNavigate, useLocation } from "react-router-dom";
import { Play, Bookmark, Trophy, Users } from "lucide-react";

export const HomeMenu = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const items = [
    { icon: <Play size={24} />, label: "Início", path: "/" },
    { icon: <Bookmark size={24} />, label: "Lições", path: "/licoes" },
    { icon: <Trophy size={24} />, label: "Ranking", path: "/ranking" },
    { icon: <Users size={24} />, label: "Comunidade", path: "/comunidade" },
  ];

  return (
    <div className="w-full bg-white border-t border-gray-200 mt-8">
      <div className="max-w-2xl mx-auto py-4 flex justify-around items-center px-4">
        {items.map((item) => {
          let isActive = false;
          if (item.path === "/") {
            isActive = pathname === "/";
          } else {
            isActive = pathname.startsWith(item.path);
          }

          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`flex flex-col items-center ${
                isActive ? "text-blue-600" : "text-gray-500 hover:text-blue-500"
              }`}
            >
              {item.icon}
              <span className={`text-xs mt-1 ${isActive ? "font-semibold" : ""}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default HomeMenu;
