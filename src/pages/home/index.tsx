import { useTheme } from "@/entities/product/ui/ThemeContext";
import { MainPage } from "./ui/MainPage";

export const HomePage = () => {
  const { theme, setTheme } = useTheme();

  const handleToggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="max-w-5xl mx-auto">
      <MainPage theme={theme} onToggleTheme={handleToggleTheme} />
    </div>
  );
};
