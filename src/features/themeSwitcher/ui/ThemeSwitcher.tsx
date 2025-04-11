import { ButtonHTMLAttributes, memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';
import LightIcon from '@/shared/assets/icons/light.svg'
import DarkIcon from '@/shared/assets/icons/dark.svg'
import { Theme } from '@/shared/consts/theme';
import { useTheme } from '@/shared/hooks/useTheme/useTheme';
import { Icon } from '@/shared/ui/Icon';

interface ThemeSwitcherProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    onClick?: () => void;
}

export const ThemeSwitcher = memo(({ className, onClick }: ThemeSwitcherProps) => {
    const { toggleTheme, theme } = useTheme();

    const themeHandlerFunc = () => {
        toggleTheme()
        onClick?.()
    }

    return (
        <Button
            size='size_s'
            className={classNames('', {}, [className])}
            onClick={themeHandlerFunc}
        >
            {
                theme === Theme.DARK
                    ?
                    <Icon
                        theme='outline'
                        size='size_m'
                        Svg={<LightIcon />}
                    />
                    :
                    <Icon
                        theme='outline'
                        size='size_m'
                        Svg={<DarkIcon />}
                    />
            }
        </Button>
    );
});