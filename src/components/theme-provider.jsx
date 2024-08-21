import { createContext, useContext, useEffect, useState } from "react";

// Define the available theme types
const themes = ["dark", "light", "system"];

// Create the context with default values
const initialState = {
  theme: "light",
  setTheme: () => {},
};

const ThemeProviderContext = createContext(initialState);

// ThemeProvider component
export function ThemeProvider({ children, defaultTheme = "light", storageKey = "vite-ui-theme", ...props }) {
  // State to store the current theme
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem(storageKey);
    return themes.includes(storedTheme) ? storedTheme : defaultTheme;
  });

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  // Provide the current theme and function to update it
  const value = {
    theme,
    setTheme: (theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider value={value} {...props}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

// Custom hook to use the theme context
export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};