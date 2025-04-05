import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './SkillsBlock.module.scss'
import { Element } from 'react-scroll';
import { SkillsCard } from '@/entities/Information/ui/SkillsCard';
import { Text } from '@/shared/ui/Text';
import { HStack, VStack } from '@/shared/ui/Stack';
import { skillsData } from '../model/skillsData';

interface SkillsBlockProps {
    className?: string;
}

export const SkillsBlock = memo((props: SkillsBlockProps) => {

    const { className } = props
    const { t } = useTranslation()

    return (
        <Element
            name='skills'
            className={classNames(cls.SkillsBlock, {}, [className])}
        >
            <VStack
                gap='32'
            >
                <HStack
                    align='center'
                    justify='center'
                    gap='16'
                >
                    <Text
                        tag='h2'
                        fontWeight='weight_500'
                        title={t('Навыки')}
                    />
                    <Text
                        tag='h2'
                        fontWeight='weight_500'
                        title='#'
                        className={cls.hashtag}
                    />
                </HStack>
                <VStack
                    max
                    gap='none'
                    align='center'
                >
                    {skillsData.map((el) => (
                        <VStack>
                            <SkillsCard skillsCard={el} />
                        </VStack>
                    ))}
                </VStack >
            </VStack>
        </Element>
    );
});