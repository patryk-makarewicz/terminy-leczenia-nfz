'use client';

import { useEffect, useState } from 'react';

export const useColorMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'disabled');
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'enabled');
    }
  };

  useEffect(() => {
    const darkMode = localStorage.getItem('darkMode');
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if ((darkMode && darkMode === 'enabled') || (!darkMode && prefersDarkMode)) {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    }
  }, []);

  return { toggleDarkMode, isDarkMode };
};
