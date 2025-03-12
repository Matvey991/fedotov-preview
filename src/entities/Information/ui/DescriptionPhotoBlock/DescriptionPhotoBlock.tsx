import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './DescriptionPhotoBlock.module.scss'
import FedotovPhoto from '../../../../shared/assets/2025-03-12 19.05.22.jpg'
import { Text } from '@/shared/ui/Text';
import { TextSize, TextTheme } from '@/shared/ui/Text/Text';

interface DescriptionPhotoBlockProps {
    className?: string;
}

export const DescriptionPhotoBlock = memo((props: DescriptionPhotoBlockProps) => {

    const { className } = props
    return (
        <div className={classNames(cls.DescriptionPhotoBlock, {}, [className])}>
            <img className={cls.photo} src={FedotovPhoto} />
            <Text
                size={TextSize.XL}
                className={cls.text}
                theme={TextTheme.PRIMARY}
                title='Привет, я Матвей!'
                text='Фронтенд разработчик
                 с 2-х летнем опытом.'
            />
        </div>
    );
});