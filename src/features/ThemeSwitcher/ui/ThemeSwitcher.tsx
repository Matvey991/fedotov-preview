import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';
import LightIcon from '../../../shared/assets/icons/light.svg'
import DarkIcon from '../../../shared/assets/icons/dark.svg'
import { Theme } from '@/shared/consts/theme';
import { useTheme } from '@/shared/hooks/useTheme/useTheme';
import { Icon } from '@/shared/ui/Icon';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            size='size_s'
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
        >
            {
                theme === Theme.DARK
                    ?
                    <Icon
                        theme='white'
                        size='size_s'
                        Svg={<DarkIcon />}
                    />
                    :
                    <Icon
                        theme='white'
                        size='size_s'
                        Svg={<LightIcon />}
                    />
            }
        </Button>
    );
});
