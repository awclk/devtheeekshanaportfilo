'use client';

import { useEffect, useState } from 'react';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isDarkMode = localStorage.getItem('theme') === 'dark';
    setIsDark(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    if (newIsDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  if (!mounted) return <>{children}</>;

  return (
    <>
      {children}
      <button
        onClick={toggleTheme}
        className="fixed bottom-4 right-4 p-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white z-50"
        aria-label="Toggle dark mode"
      >
        {isDark ? '☀️' : '🌙'}
      </button>
    </>
  );
}
