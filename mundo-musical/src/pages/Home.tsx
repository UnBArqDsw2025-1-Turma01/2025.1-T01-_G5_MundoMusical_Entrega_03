import { LessonView } from "@/components/lesson/LessonView";
import { DailyReward } from "@/components/rewards/DailyRewards";
import HomeMenu from "@/components/HomeMenu";

import { themeSubject } from "../contexts/ThemeSubject";
import { useThemeObserver } from "../hooks/useThemeObserver";

// ... mesmo import e código acima ...

export const Home = () => {
  const theme = useThemeObserver();

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundColor: theme === "light" ? "#f0f0f0" : "#222",
        color: theme === "light" ? "#222" : "#f0f0f0",
        transition: "background-color 0.3s ease, color 0.3s ease",
      }}
    >
      <main className="flex-grow max-w-2xl mx-auto px-4 py-10 pb-16">
        <h1 className="text-3xl font-bold mb-6">Mundo Musical 🎶</h1>
        <LessonView />
        <DailyReward />
      </main>
      <HomeMenu />

      {/* {apenas style do botão, a lógica é totalmente feita pelo observer} */}
      <button
        onClick={() => themeSubject.toggleTheme()}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          padding: "0.5rem 1rem",
          borderRadius: "4px",
          border: "none",
          cursor: "pointer",
          backgroundColor: theme === "light" ? "#333" : "#ddd",
          color: theme === "light" ? "#fff" : "#333",
          transition: "background-color 0.3s ease, color 0.3s ease",
          zIndex: 1000,
          boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
        }}
      >
        Alternar Tema
      </button>
    </div>
  );
};

export default Home;
