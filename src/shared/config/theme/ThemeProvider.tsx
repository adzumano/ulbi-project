import { type FC, useMemo, useState } from 'react'

import { LOCAL_STORAGE_THEME_KEY, type Theme, ThemeContext } from './ThemeContext'

interface ThemeProverProps {
    initialTheme?: Theme
}

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || 'light'
export const ThemeProvider: FC<ThemeProverProps> = (props) => {
    const { children, initialTheme } = props
    const [theme, setTheme] = useState<Theme>(initialTheme ?? defaultTheme)

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme],
    )
    return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>
}
