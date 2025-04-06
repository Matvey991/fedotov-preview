import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import cls from './SkillsBlock.module.scss'
import { Element } from 'react-scroll';
import { SkillsCard } from '@/entities/Information/ui/SkillsCard';
import { Text } from '@/shared/ui/Text';
import { HStack, VStack } from '@/shared/ui/Stack';
import { skillsData } from '../model/skillsData';
import { Hr } from '@/shared/ui/Hr';

interface SkillsBlockProps {
    className?: string;
}

export const SkillsBlock = memo((props: SkillsBlockProps) => {

    const { className } = props
    const { t } = useTranslation()
    const [collapsed, setCollapsed] = useState<number>()

    const onCollapsed = useCallback((id: number) => {
        setCollapsed(id)
    }, [])

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
                    max
                >
                    <Text
                        tag='h2'
                        fontWeight='weight_500'
                        title={t('Навыки')}
                        TextSizeType='textBig'
                    />
                    <Text
                        tag='h2'
                        fontWeight='weight_500'
                        title='#'
                        className={cls.hashtag}
                        TextSizeType='textBig'
                    />
                </HStack>
                <VStack
                    gap='none'
                    align='start'
                    max
                >
                    <Hr max />
                    {skillsData.map((el, i) => (
                        <VStack
                            key={el.name}
                            max
                        >
                            <SkillsCard
                                collapsed={collapsed === i}
                                onCollapsed={onCollapsed}
                                skillsCard={el}
                                id={i}
                                isOpen
                            />
                        </VStack>
                    ))}
                </VStack >
            </VStack>
        </Element>
    );
});