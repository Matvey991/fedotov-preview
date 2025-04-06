import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './SkillsCard.module.scss'
import { SkillsCardType } from '../../model/skillsCardType';
import { Hr } from '@/shared/ui/Hr';
import { Text } from '@/shared/ui/Text';
import { useTranslation } from 'react-i18next';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Button } from '@/shared/ui/Button';

interface SkillsCardProps {
    className?: string;
    skillsCard: SkillsCardType;
    collapsed?: boolean;
    id: number;
    isOpen?: boolean;
    onCollapsed?: (id: number) => void;
}

export const SkillsCard = memo((props: SkillsCardProps) => {

    const { className, skillsCard, collapsed, id, onCollapsed } = props
    const { t } = useTranslation()
    const { name, description } = skillsCard

    const onCollapsedHandler = (id: number) => {
        onCollapsed?.(id)
    }

    if (!collapsed) {
        return (
            <VStack
                className={classNames('', {}, [className])}
                max
            >
                <Hr max />
                <Button
                    theme='outline'
                    size='size_xl'
                    onClick={() => onCollapsedHandler(id)}
                >
                    <Text
                        className={cls.title}
                        tag='h2'
                        fontWeight='weight_300'
                        title={t(name)}
                        TextSizeType='textMedium'
                    />
                </Button>
                <Hr max />
            </VStack >
        );
    }

    return (
        <VStack
            align="start"
            className={classNames(cls.SkillsCard, {}, [className])}
            max
            gap='none'
        >
            <Button
                size='size_xl'
                theme='outline'
                onClick={() => onCollapsedHandler(-1)}
            >
                <Text
                    className={cls.title}
                    tag='h2'
                    fontWeight='weight_300'
                    title={t(name)}
                    TextSizeType='textMedium'
                />
            </Button>
            <VStack gap="16" className={cls.description} max>
                {description.map((text) => (
                    <HStack gap="32" key={text}>
                        <Text
                            text="•"
                            TextSizeType="textMedium"
                            theme="outline"
                        />
                        <Text
                            text={t(text)}
                            TextSizeType="textMedium"
                            theme="outline"
                            fontWeight='weight_300'
                        />
                    </HStack>
                ))}
            </VStack>
        </VStack>
    )

});