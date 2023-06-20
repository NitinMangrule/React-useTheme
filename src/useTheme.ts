import { useEffect, useState } from 'react';

interface ThemeHook {
  theme?: string;
  toggleTheme?: () => void;
}

const useTheme = (): ThemeHook => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Retrieve theme from local storage on initial render
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
      setTheme(currentTheme);
    }
  }, []);

  useEffect(() => {
    // Update the theme in local storage and apply it to the root element
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    // Toggle between light and dark theme
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return { theme, toggleTheme };
};

export default useTheme;
