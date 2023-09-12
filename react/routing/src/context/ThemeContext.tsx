import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext<{
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
} | null>(null);

export const ThemeProvider = ({ children }: any) => {
  const [isDark, setIsDark]: [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
  ] = useState<boolean>(false);

  const color = isDark ? "#fff" : "#333";
  const backgroundColor = isDark ? "#333" : "#fff";

  document.body.style.color = color;
  document.body.style.backgroundColor = backgroundColor;

  const contextValue = { isDark, setIsDark };
  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
