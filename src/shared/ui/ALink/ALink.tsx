import { classNames } from '@/shared/lib/classNames/classNames';
import { HTMLAttributeAnchorTarget, memo, ReactNode } from 'react';
import cls from './ALink.module.scss'

type AlinkTheme = 'outline' | 'clear' | 'clear_outline'

interface ALinkProps {
    className?: string;
    children: ReactNode;
    href: string;
    target?: HTMLAttributeAnchorTarget;
    theme?: AlinkTheme;
}

export const ALink = memo((props: ALinkProps) => {

    const { className, children, href, target, theme = 'outline' } = props

    const additional = [
        className,
        cls[theme]
    ]

    return (
        <a
            draggable='false'
            target={target}
            href={href}
            className={classNames(cls.ALink, {}, additional)}
        >
            {children}
        </a>
    );
});