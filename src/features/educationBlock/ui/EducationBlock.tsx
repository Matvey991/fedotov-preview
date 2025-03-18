import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './EducationBlock.module.scss'
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { AppImage } from '@/shared/ui/AppImage';
import { ALink } from '@/shared/ui/ALink';
import { educationData } from '../model/data/educationData';

interface EducationBlockBlockProps {
    className?: string;
}

export const EducationBlock = memo((props: EducationBlockBlockProps) => {

    const { className } = props
    const { t } = useTranslation()
    return (
        <VStack
            className={classNames(cls.EducationBlock, {}, [className])}
            align='center'
            justify='center'
            gap='64'
            max
        >
            <HStack
                align='center'
                justify='center'
                gap='16'
                max
            >
                <Text
                    size='size_xl'
                    fontWeight='weight_500'
                    title={t('Обучение')}
                />
                <Text
                    size='size_xl'
                    fontWeight='weight_500'
                    title='#'
                    className={cls.hashtag}
                />
            </HStack>
            <HStack
                align='center'
                justify='center'
            >
                {educationData.map((el) => (
                    <HStack
                        key={el.img}
                        justify='center'
                        align='center'
                    >
                        <ALink
                            theme='clear_outline'
                            href={el.link}
                            target='_blank'
                        >
                            <AppImage
                                height={265}
                                src={el.img}
                            />
                        </ALink>
                    </HStack>
                ))}
            </HStack>
        </VStack>
    );
});