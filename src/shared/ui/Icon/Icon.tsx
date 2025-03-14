// import { classNames } from '@/shared/lib/classNames/classNames';
// import cls from './Icon.module.scss';
// import React, { FC, SVGProps, VFC, forwardRef } from 'react';



// export enum IconSize {
//     M = 'size_m'
// }

// interface IconProps extends React.SVGProps<SVGSVGElement> {
//     className?: string;
//     Svg: FC<SVGProps<SVGSVGElement>>;
//     inverted?: boolean;
//     size?: IconSize;
// }

// // export const Icon: VFC<IconProps> = memo((props: IconProps) => {
// export const Icon: FC<IconProps> = forwardRef<SVGSVGElement, IconProps>((props: IconProps, ref) => {
//     const {
//         className, Svg, inverted, size = IconSize.M, ...otherProps
//     } = props;

//     const additional = [
//         className,
//         cls[size]
//     ]

//     return (
//         <Svg
//             className={classNames(cls.Icon, {}, additional)}
//             {...otherProps}
//         />
//     );
// });

import { memo } from 'react';

interface IIconProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
    Svg: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const Icon = memo((props: IIconProps) => {
    const { className, Svg, ...otherProps } = props;

    return <Svg className={className} {...otherProps} />;
});
