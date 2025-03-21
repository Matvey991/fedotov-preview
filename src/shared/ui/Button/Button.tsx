import { classNames } from '@/shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, memo } from 'react';
import cls from './Button.module.scss'

type ButtonTheme = 'outline_white' | 'outline'

export enum ButtonSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    size?: ButtonSize;
}

export const Button = memo((props: ButtonProps) => {

    const {
        className,
        children,
        theme = 'outline_white',
        size = ButtonSize.M,
        ...otherProps
    } = props

    const additional: Array<string | undefined> = [
        className,
        cls[theme],
        cls[size]
    ]


    return (
        <button
            type="button"
            className={classNames(cls.Button, {}, additional)}
            {...otherProps}
        >
            {children}
        </button>
    );
});