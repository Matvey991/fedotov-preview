import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/shared/hooks/useTheme/useTheme';
import { Button } from '@/shared/ui/Button';
import LightIcon from '../../../shared/assets/icons/light.svg'
import DarkIcon from '../../../shared/assets/icons/dark.svg'
import { Theme } from '@/shared/consts/theme';
import { ButtonSize } from '@/shared/ui/Button/Button';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    console.log('THEME>>>>>>>>' + theme);


    return (
        <Button
            size={ButtonSize.S}
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
});
