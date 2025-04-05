import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './SkillsCard.module.scss'
import { SkillsCardType } from '../../model/skillsCardType';
import { Hr } from '@/shared/ui/Hr';
import { Text } from '@/shared/ui/Text';
import { useTranslation } from 'react-i18next';
import { VStack } from '@/shared/ui/Stack';
import { Button } from '@/shared/ui/Button';

interface SkillsCardProps {
    className?: string;
    skillsCard: SkillsCardType;
    collapsed?: boolean;
    id?: number;
    isOpen?: boolean;
    onCollapsed?: (id: number) => void;
}

export const SkillsCard = memo((props: SkillsCardProps) => {

    const { className, skillsCard, collapsed, id, isOpen, onCollapsed } = props
    const { t } = useTranslation()
    const { name, description } = skillsCard

    const onCollapsedHandler = (id: number) => {
        onCollapsed?.(id)
    }

    return (
        <VStack
            className={classNames(cls.SkillsCard, {}, [className])}
            max
        >
            <Hr max />
            <Button theme='outline' size='size_xl'>
                <Text
                    className={cls.title}
                    tag='h2'
                    fontWeight='weight_300'
                    title={t(name)}
                />
            </Button>
            <Hr max />
        </VStack>
    );
});