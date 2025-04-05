import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Text.module.scss';

type TextTheme = 'white' | 'outline'
type TextAlign = 'left' | 'center' | 'right'
type TextTag = 'h4' | 'h3' | 'h2' | 'h1'

type TextFontWeight = 'weight_700' | 'weight_500' | 'weight_300'

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
    tag?: TextTag;
    fontWeight?: TextFontWeight;
}

type HeaderTagType = 'h1' | 'h2' | 'h3' | 'h4';

const mapSizeToHeaderTag: Record<TextTag, HeaderTagType> = {
    h4: 'h4',
    h3: 'h3',
    h2: 'h2',
    h1: 'h1',
};

export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        title,
        theme = '',
        align = 'left',
        tag = 'h2',
        fontWeight = '500',
    } = props;

    const HeaderTag = mapSizeToHeaderTag[tag];

    const additional = [
        className,
        cls[align],
        cls[tag],
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
                    className={classNames('', {}, [cls[tag]])}
                >
                    {text}
                </p>
            )}
        </div>
    );
});
