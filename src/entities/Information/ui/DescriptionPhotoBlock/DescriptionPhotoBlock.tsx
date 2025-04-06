import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import cls from './DescriptionPhotoBlock.module.scss'
import FedotovPhoto from '../../../../shared/assets/2025-04-06 01.56.12.jpg'
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
                tag='h1'
                theme='white'
                title={t('Привет, я Матвей!')}
                fontWeight='weight_700'
                TextSizeType='textVeryBig'
            />
        )
        const arr2 = (
            <Text
                tag='h2'
                theme='white'
                fontWeight='weight_300'
                title={t('Фронтенд разработчик')}
            />
        )
        const arr3 = (
            <Text
                tag='h2'
                theme='white'
                fontWeight='weight_300'
                title={t('с 2-х летнем опытом.')}
            />
        )
        return [arr1, arr2, arr3]
    }, [])

    return (
        <div
            className={classNames(cls.DescriptionPhotoBlock, {}, [className])}
        >
            <VStack
                justify='center'
            >
                <img
                    className={cls.photo}
                    src={FedotovPhoto}
                    draggable="false"
                />
                <VStack
                    justify='center'
                    className={cls.description}
                >
                    {func().map((el, i) => (
                        <HStack
                            align='center'
                            justify='start'
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