type Theme = "light" | "dark";

type ThemeObserver = (theme: Theme) => void;

class ThemeSubject {
  private observers: ThemeObserver[] = [];
  private currentTheme: Theme = "light";

  subscribe(fn: ThemeObserver) {
    this.observers.push(fn);
    fn(this.currentTheme);
  }

  unsubscribe(fn: ThemeObserver) {
    this.observers = this.observers.filter(observer => observer !== fn);
  }

  toggleTheme() {
    this.currentTheme = this.currentTheme === "light" ? "dark" : "light";
    this.notify();
  }

  private notify() {
    this.observers.forEach(fn => fn(this.currentTheme));
  }

  getTheme() {
    return this.currentTheme;
  }
}

export const themeSubject = new ThemeSubject();
