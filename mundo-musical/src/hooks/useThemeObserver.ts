import { useEffect, useState } from "react";
import { themeSubject } from "../contexts/ThemeSubject";

export function useThemeObserver() {
  const [theme, setTheme] = useState(themeSubject.getTheme());

  useEffect(() => {
    const observer = (newTheme: "light" | "dark") => {
      setTheme(newTheme);
    };

    themeSubject.subscribe(observer);

    return () => {
      themeSubject.unsubscribe(observer);
    };
  }, []);

  return theme;
}
