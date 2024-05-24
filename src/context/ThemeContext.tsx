import { ReactNode, createContext, useState } from "react";

interface ITheme {
  theme: string;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ITheme>({
  theme: '',
  toggleTheme: () => null,
});

type Props = {
  children: ReactNode;
};

const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<string>("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };