import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './EducationBlock.module.scss'
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { educationData } from '../model/data/educationData';
import { SwiperCard } from '@/entities/swiperCard';
import { Element } from 'react-scroll';

interface EducationBlockBlockProps {
    className?: string;
}

export const EducationBlock = memo((props: EducationBlockBlockProps) => {

    const { className } = props
    const { t } = useTranslation()
    return (
        <Element name='education'>
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
                        tag='h2'
                        fontWeight='weight_500'
                        title={t('Обучение')}
                    />
                    <Text
                        tag='h2'
                        fontWeight='weight_500'
                        title='#'
                        className={cls.hashtag}
                    />
                </HStack>
                <VStack
                    className='imgWrapper'
                    align='center'
                    justify='center'
                >
                    <SwiperCard
                        card={educationData}
                        className={cls.wrapper}
                    />
                </VStack>
            </VStack>
        </Element>
    );
});