import { useTranslation } from 'react-i18next';
import { CSSProperties, memo } from 'react';
import cls from './Hr.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames';

interface HrProps {
    className?: string;
    width?: string | number;
}

export const Hr = memo((props: HrProps) => {

    const { className, width } = props
    const { t } = useTranslation()

    const styles: CSSProperties = {
        width: width
    }

    return (
        <hr
            style={styles}
            className={classNames(cls.Hr, {}, [className])}
        />
    );
});