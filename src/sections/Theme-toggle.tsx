"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react"; // use any icon library you like

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDark = theme === "dark";

  useEffect(() => {
    setMounted(true); // ensures hydration matches server
  }, []);

  if (!mounted) return null;

  return (
    <div
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={`p-2 rounded-full hover:bg-muted  transition-transform duration-500 ${
        isDark ? "rotate-180" : "rotate-0"
      }`}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="w-6 h-6 text-yellow-500 rotate-0 transition-all" />
      ) : (
        <Moon className="w-6 h-6  text-blue-500 rotate-0 transition-all" />
      )}
    </div>
  );
}
