import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import cls from './DescriptionPhotoBlock.module.scss'
import FedotovPhoto from '../../../../shared/assets/2025-03-12 19.05.22.jpg'
import { Text } from '@/shared/ui/Text';
import { useTranslation } from 'react-i18next';
import { HStack, VStack } from '@/shared/ui/Stack';

interface DescriptionPhotoBlockProps {
    className?: string;
}

export const DescriptionPhotoBlock = memo((props: DescriptionPhotoBlockProps) => {
    const { t } = useTranslation()
    const { className } = props

    const func = useCallback(() => {
        const arr1 = (
            <Text
                size='size_xl'
                theme='white'
                title={t('Привет, я Матвей!')}
                fontWeight='weight_700'
            />
        )
        const arr2 = (
            <Text
                size='size_l'
                theme='white'
                title={t('Фронтенд разработчик')}
                fontWeight='weight_300'
            />
        )
        const arr3 = (
            <Text
                size='size_l'
                theme='white'
                title={t('с 2-х летнем опытом.')}
                fontWeight='weight_300'
            />
        )
        return [arr1, arr2, arr3]
    }, [])

    return (
        <div
            className={classNames(cls.DescriptionPhotoBlock, {}, [className])}
        >
            <VStack
                align='center'
                justify='center'
            >
                <img
                    className={cls.photo}
                    src={FedotovPhoto}
                    draggable="false"
                />
                <VStack
                    align='start'
                    className={cls.description}
                >
                    {func().map((el, i) => (
                        <HStack
                            max
                            key={i}
                        >
                            {el}
                        </HStack>
                    ))}
                </VStack>
            </VStack>
        </div>
    );
});