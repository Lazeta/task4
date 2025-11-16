import { useTheme } from "@entities/product/ui/ThemeContext";
import { MainPage } from "./ui/MainPage";

export default function HomePage() {
  const { theme, setTheme } = useTheme();

  const handleToggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <div className="max-w-[1000px] mx-auto">
      <MainPage theme={theme} onToggleTheme={handleToggleTheme}/>
    </div>
  )
}
