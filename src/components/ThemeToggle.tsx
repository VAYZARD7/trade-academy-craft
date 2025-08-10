import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/ThemeProvider"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="h-9 w-9 px-0"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all [html[data-theme='dark']_&]:-rotate-90 [html[data-theme='dark']_&]:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all [html[data-theme='dark']_&]:rotate-0 [html[data-theme='dark']_&]:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}