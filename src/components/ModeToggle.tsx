"use client";

import * as React from "react";
import {Moon, Sun} from "lucide-react";
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="outline" size="icon" title="Toggle theme" className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-600">
        <Sun className="h-[1.2rem] w-[1.2rem] text-gray-900 dark:text-white" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Button 
      variant="outline" 
      size="icon" 
      onClick={toggleTheme}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      className="relative bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
    >
      <Sun className={`h-[1.2rem] w-[1.2rem] transition-all duration-300 text-gray-900 dark:text-white ${theme === 'dark' ? 'scale-0 -rotate-90 opacity-0' : 'scale-100 rotate-0 opacity-100'}`} />
      <Moon className={`absolute h-[1.2rem] w-[1.2rem] transition-all duration-300 text-gray-900 dark:text-white ${theme === 'dark' ? 'scale-100 rotate-0 opacity-100' : 'scale-0 rotate-90 opacity-0'}`} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
