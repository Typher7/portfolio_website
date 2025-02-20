import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        
        return savedTheme === null ? systemPrefersDark.matches : savedTheme === 'dark';
    });

    useEffect(() => {
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        
        const handleSystemThemeChange = (e) => {
            if (localStorage.getItem('theme') === null) {
                setIsDarkMode(e.matches);
            }
        };

        systemPrefersDark.addEventListener('change', handleSystemThemeChange);

        document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
        
        return () => {
            systemPrefersDark.removeEventListener('change', handleSystemThemeChange);
        };
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode(prev => {
            const newTheme = !prev;
            localStorage.setItem('theme', newTheme ? 'dark' : 'light');
            return newTheme;
        });
    };

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};