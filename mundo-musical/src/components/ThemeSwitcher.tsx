import { themeSubject } from "../contexts/ThemeSubject";
import { useThemeObserver } from "../hooks/useThemeObserver";

export function ThemeSwitcher() {
  const theme = useThemeObserver();

  return (
    <div
      style={{
        padding: "1rem",
        backgroundColor: theme === "light" ? "#f0f0f0" : "#222",
        color: theme === "light" ? "#222" : "#f0f0f0",
        borderRadius: "8px",
        textAlign: "center",
      }}
    >
      <p>Tema atual: <strong>{theme}</strong></p>
      <button
        onClick={() => themeSubject.toggleTheme()}
        style={{
          padding: "0.5rem 1rem",
          cursor: "pointer",
          borderRadius: "4px",
          border: "none",
          backgroundColor: theme === "light" ? "#333" : "#ddd",
          color: theme === "light" ? "#fff" : "#333",
        }}
      >
        Alternar Tema
      </button>
    </div>
  );
}
