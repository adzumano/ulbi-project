import { type FC, useMemo, useState } from 'react'

import { LOCAL_STORAGE_THEME_KEY, type Theme, ThemeContext } from './ThemeContext'

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || 'light'
export const ThemeProvider: FC = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme)

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme],
    )
    return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>
}
