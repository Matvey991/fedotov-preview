import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

export enum IconSize {
    M = 'size_m'
}

interface IconProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
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
        <Svg
            className={classNames(cls.Icon, {}, additional)}
            {...otherProps}
        />
    );
});
