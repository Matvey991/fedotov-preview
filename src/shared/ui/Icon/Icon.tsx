import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';
import { memo, ReactNode, SVGProps } from 'react';

export enum IconSize {
    M = 'size_m'
}

interface IconProps {
    className?: string;
    Svg: ReactNode;
    inverted?: boolean;
    size?: IconSize;
}

export const Icon = memo((props: IconProps) => {
    const {
        className, Svg, inverted, size = IconSize.M, ...otherProps
    } = props;

    const additional = [
        className,
        cls[size]
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
