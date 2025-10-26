"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button 
        variant="outline" 
        size="icon"
        className="h-14 w-14 rounded-full backdrop-blur-md bg-white/20 shadow-lg ring-1 ring-white/5 text-white hover:bg-white/30 transition-all duration-300 border-white/10"
      >
        <Sun className="h-[1.4rem] w-[1.4rem]" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <Button 
      variant="outline" 
      size="icon"
      onClick={toggleTheme}
      className="h-14 w-14 rounded-full backdrop-blur-md bg-white/20 shadow-lg ring-1 ring-white/5 text-white hover:bg-white/30 transition-all duration-300 border-white/10 relative overflow-hidden"
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === 'light' ? (
          <motion.div
            key="sun"
            initial={{ scale: 0, rotate: -90, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ scale: 0, rotate: 90, opacity: 0 }}
            transition={{ 
              duration: 0.4, 
              ease: [0.4, 0, 0.2, 1],
              type: "spring",
              stiffness: 200,
              damping: 20
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Sun className="h-[1.4rem] w-[1.4rem]" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ scale: 0, rotate: -90, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ scale: 0, rotate: 90, opacity: 0 }}
            transition={{ 
              duration: 0.4, 
              ease: [0.4, 0, 0.2, 1],
              type: "spring",
              stiffness: 200,
              damping: 20
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Moon className="h-[1.4rem] w-[1.4rem]" />
          </motion.div>
        )}
      </AnimatePresence>
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
