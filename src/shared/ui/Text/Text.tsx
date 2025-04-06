import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Text.module.scss';

type TextTheme = 'white' | 'outline'
type TextAlign = 'left' | 'center' | 'right'
type TextTag = 'h4' | 'h3' | 'h2' | 'h1'

type TextSize = 'textLittle' | 'textMedium' | 'textBig' | 'textVeryBig'
type TextFontWeight = 'weight_700' | 'weight_500' | 'weight_300'

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
    tag?: TextTag;
    fontWeight?: TextFontWeight;
    TextSizeType?: TextSize;
    link?: boolean;
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
        TextSizeType = '',
        theme = 'white',
        align = 'left',
        tag = 'h2',
        link,
        fontWeight = '500',
    } = props;

    const HeaderTag = mapSizeToHeaderTag[tag];

    const additional: Array<string | undefined> = [
        className,
        cls[align],
        cls[tag],
        cls[theme],
        cls[TextSizeType],
        cls[fontWeight],
    ]

    return (
        <div className={classNames(cls.Text, {}, [className])}>
            {title && (
                <HeaderTag
                    className={classNames(cls.title, { [cls.link]: link }, additional)}
                >
                    {title}
                </HeaderTag>
            )}
            {text && (
                <p
                    className={classNames('', { [cls.link]: link }, additional)}
                >
                    {text}
                </p>
            )}
        </div>
    );
});
