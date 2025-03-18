import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';
import { memo, ReactNode } from 'react';

type IconSize = 'size_s' | 'size_m'
type IconTheme = 'white' | 'outline'

interface IconProps {
    className?: string;
    Svg: ReactNode;
    inverted?: boolean;
    size?: IconSize;
    theme?: IconTheme;
}

export const Icon = memo((props: IconProps) => {
    const {
        className, Svg, theme = 'white', inverted, size = 'size_m', ...otherProps
    } = props;

    const additional = [
        className,
        cls[size],
        cls[theme],
    ]

    return (
        <svg
            className={classNames(cls.Icon, {}, additional)}
            {...otherProps}
        >
            {Svg}
        </svg>
    );
});
