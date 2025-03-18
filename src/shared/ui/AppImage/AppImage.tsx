import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { CSSProperties, ImgHTMLAttributes, memo } from 'react';
import cls from './AppImage.module.scss'

type AppImageOpaticy = 'opaticy0_7' | 'opaticy0_5' | 'opaticy0_3' | 'none'

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
    src: string;
    width?: string | number;
    height?: string | number;
    alt?: string;
    opaticy?: AppImageOpaticy;
}

export const AppImage = memo((props: AppImageProps) => {

    const { className, src, width, height, alt, opaticy = 'none' } = props
    const { t } = useTranslation()

    const styles: CSSProperties = {
        width: width,
        height: height,
    }

    const additional = [
        className,
        cls[opaticy],
    ]

    return (
        <img
            src={src}
            alt={alt}
            style={styles}
            className={classNames(cls.AppImage, {}, additional)}
        />
    );
});