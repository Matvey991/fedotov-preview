import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useTransition } from 'react';
import cls from './DescriptionPhotoBlock.module.scss'
import FedotovPhoto from '../../../../shared/assets/2025-03-12 19.05.22.jpg'
// import FedotovPhoto from '../../../../shared/assets/2025-03-11 17.26.39.jpg'
import { Text } from '@/shared/ui/Text';
import { TextSize, TextTheme } from '@/shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';

interface DescriptionPhotoBlockProps {
    className?: string;
}

export const DescriptionPhotoBlock = memo((props: DescriptionPhotoBlockProps) => {
    const { t } = useTranslation()
    const { className } = props
    return (
        <div className={classNames(cls.DescriptionPhotoBlock, {}, [className])}>
            <img
                className={cls.photo}
                src={FedotovPhoto}
                draggable="false"
            />
            <Text
                noneTheme
                size={TextSize.XL}
                className={cls.text}
                theme={TextTheme.PRIMARY}
                title={t('Привет, я Матвей!')}
                text={t('Фронтенд разработчик \n с 2-х летнем опытом.')}
            />
        </div>
    );
});