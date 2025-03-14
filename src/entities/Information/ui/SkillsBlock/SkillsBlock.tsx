import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './Skills.module.scss'

interface SkillsProps {
    className?: string;
}

export const SkillsBlock = memo((props: SkillsProps) => {

    const { className } = props
    const { t } = useTranslation()
    return (
        <div className={classNames(cls.Skills, {}, [className])}>
            /
        </div>
    );
});