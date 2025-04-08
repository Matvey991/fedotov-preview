import { useTranslation } from 'react-i18next';
import { CSSProperties, memo } from 'react';
import cls from './Hr.module.scss'
import { classNames, Mods } from '@/shared/lib/classNames/classNames';

interface HrProps {
    className?: string;
    width?: string | number;
    max?: boolean;
    white?: boolean;
}

export const Hr = memo((props: HrProps) => {

    const { className, width, max, white } = props
    const { t } = useTranslation()

    const styles: CSSProperties = {
        width: width
    }

    const mods: Mods = {
        [cls.max]: max,
        [cls.white]: white
    }

    return (
        <hr
            style={styles}
            className={classNames(cls.Hr, mods, [className])}
        />
    );
});