import { useContext } from 'react'

import { LOCAL_STORAGE_THEME_KEY, type Theme, ThemeContext } from './ThemeContext'

interface UseThemeResult {
    theme?: Theme
    toggleTheme: () => void
}

export const useTheme = (): UseThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext)

    const toggleTheme = () => {
        let newTheme: Theme
        switch (theme) {
            case 'light':
                newTheme = 'orange'
                break
            case 'orange':
                newTheme = 'dark'
                break
            case 'dark':
                newTheme = 'light'
                break
            default:
                newTheme = 'light'
        }
        setTheme?.(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    return {
        theme,
        toggleTheme,
    }
}
