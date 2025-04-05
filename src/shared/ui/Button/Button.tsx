import { classNames } from '@/shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, memo } from 'react';
import cls from './Button.module.scss'

type ButtonTheme = 'outline_white' | 'outline'
type ButtonSize = 'size_s' | 'size_m' | 'size_l' | 'size_xl'

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
        size = 'size_m',
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