import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Text.module.scss';

type TextTheme = 'white' | 'outline'
type TextAlign = 'left' | 'center' | 'right'
type TextSize = 'size_s' | 'size_m' | 'size_l' | 'size_xl'

type TextFontWeight = 'weight_700' | 'weight_500' | 'weight_300'

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;
    fontWeight?: TextFontWeight;
}

type HeaderTagType = 'h1' | 'h2' | 'h3';

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
    'size_s': 'h3',
    'size_m': 'h2',
    'size_l': 'h1',
    'size_xl': 'h1',
};

export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        title,
        theme = '',
        align = 'left',
        size = 'size_m',
        fontWeight = '500',
    } = props;

    const HeaderTag = mapSizeToHeaderTag[size];

    const additional = [
        className,
        cls[align],
        cls[size],
        cls[theme],
    ];

    return (
        <div className={classNames(cls.Text, {}, additional)}>
            {title && (
                <HeaderTag
                    className={classNames(cls.title, {}, [className, cls[fontWeight]])}
                >
                    {title}
                </HeaderTag>
            )}
            {text && (
                <p
                >
                    {text}
                </p>
            )}
        </div>
    );
});
