import React, { createContext, useState, useMemo } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { LightTheme, DarkTheme } from './Themes.js'; // adjust path if needed

// Correctly create Context
export const ThemeContext = createContext();

// Correctly export ThemeProvider
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const contextValue = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      <MuiThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
