import { useTheme } from "next-themes";
import { Sun, Moon, Monitor } from "lucide-react"; // Added Monitor icon for system
import { Button } from "./ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("system");
    } else {
      setTheme("light");
    }
  };

  return (
    <Button
      variant="outline"
      onClick={toggleTheme}
      className="rounded-full size-14 flex justify-center items-center"
    >
      {theme === "light" && <Moon size={20} />}
      {theme === "dark" && <Sun size={20} />}
      {theme === "system" && <Monitor size={20} />}
    </Button>
  );
}
