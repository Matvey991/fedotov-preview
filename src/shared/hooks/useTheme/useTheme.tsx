import { LOCALSTORAGE_THEME_KEY } from "@/shared/consts/localstorage";
import { Theme } from "@/shared/consts/theme";
import { ThemeContext } from "@/shared/lib/context/ThemeContext";
import { useContext } from "react";

interface UseThemeResult {
    toggleTheme: () => void;
    theme?: Theme;
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme?.(newTheme);
        localStorage.setItem(LOCALSTORAGE_THEME_KEY, newTheme);
    };

    return {
        theme,
        toggleTheme,
    }
}