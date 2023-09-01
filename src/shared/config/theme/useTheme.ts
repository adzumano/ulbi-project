import { useContext } from 'react'

import { LOCAL_STORAGE_THEME_KEY, type Theme, ThemeContext } from './ThemeContext'

interface UseThemeResult {
    theme?: Theme
    toggleTheme: () => void
}

export const useTheme = (): UseThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext)

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark'
        setTheme?.(newTheme)
        document.body.className = newTheme
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    return {
        theme,
        toggleTheme,
    }
}
