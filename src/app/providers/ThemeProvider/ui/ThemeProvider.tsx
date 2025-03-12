import { LOCALSTORAGE_THEME_KEY } from "@/shared/consts/localstorage";
import { Theme } from "@/shared/consts/theme";
import { ThemeContext } from "@/shared/lib/context/ThemeContext";
import { ReactNode, useMemo, useState } from "react";

const defaultTheme =
    (localStorage.getItem(LOCALSTORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider = (props: ThemeProviderProps) => {

    const { children } = props

    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const defaultProps = useMemo(
        () => ({
            theme: theme,
            setTheme: setTheme,
        }),
        [theme]
    );

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
};