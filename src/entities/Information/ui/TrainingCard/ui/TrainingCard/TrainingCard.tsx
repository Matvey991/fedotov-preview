import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './TrainingCard.module.scss'

interface TrainingCardProps {
    className?: string;
}

export const TrainingCard = memo((props: TrainingCardProps) => {

    const { className } = props
    const { t } = useTranslation()
    return (
        <div className={classNames(cls.TrainingCard, {}, [className])}>
            /
        </div>
    );
});