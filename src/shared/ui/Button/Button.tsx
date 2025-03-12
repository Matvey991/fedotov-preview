import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import cls from './Button.module.scss'

export enum ButtonTheme {
    OUTLINE_WHITE = 'outline_white',
    PURPLE = 'purple',
}

export enum ButtonSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: ReactNode;
    theme?: ButtonTheme;
    size?: ButtonSize;
}

export const Button = memo((props: ButtonProps) => {

    const { className, children, theme = ButtonTheme.OUTLINE_WHITE, size = ButtonSize.M } = props

    const additional: Array<string | undefined> = [
        className,
        cls[theme],
        cls[size]
    ]


    return (
        <button className={classNames(cls.Button, {}, additional)}>
            {children}
        </button>
    );
});