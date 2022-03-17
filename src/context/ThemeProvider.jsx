import React, { useContext, useState } from "react";

export const THEME_LIGHT = "light";
export const THEME_DARK = "dark";
export const THEME_NEITRAL = "neitral";

const ThemeContect = React.createContext();

export const ThemeProvider = ({ children, ...props }) => {
  const [theme, setTheme] = useState(null);

  const change = (name) => {
    setTheme(name);
  };
  return (
    <ThemeContect.Provider
      value={{
        theme: theme,
        change: change,
      }}
      {...props}
    >
      {children}
    </ThemeContect.Provider>
  );
};

export default ThemeProvider;

export const useTheme = () => useContext(ThemeContect);
