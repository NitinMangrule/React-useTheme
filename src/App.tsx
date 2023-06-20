import * as React from 'react';
import { useEffect } from 'react';
import Header from './header';
import './style.css';
import useTheme from './useTheme';

export default function App() {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      // Add the 'dark' class to the root element for dark mode styles
      root.classList.add('dark');
      root.style.setProperty('--text-color', '#FFFFFF');
    } else {
      // Remove the 'dark' class from the root element for light mode styles
      root.classList.remove('dark');
      root.style.setProperty('--text-color', '#000000');
    }
  }, [theme]);

  return (
    <div className={`app ${theme === 'dark' ? 'dark' : ''}`}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <div className="content-center mx-32 my-10">
        <h1 className="text-xl">Welcome to my app!</h1>
        <p className="text-base mt-2">
          This is an example of changing text color based on theme.
        </p>
      </div>
    </div>
  );
}
