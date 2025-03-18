import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Footer.module.scss'
import { HStack, VStack } from '@/shared/ui/Stack';
import { Button } from '@/shared/ui/Button';
import { Text } from '@/shared/ui/Text';
import { useTranslation } from 'react-i18next';

interface FooterProps {
    className?: string;
}

export const Footer = memo((props: FooterProps) => {
    const { t } = useTranslation()
    const { className } = props

    return (
        <VStack
            gap='32'
            justify='center'
            align='center'
            className={classNames(cls.Footer, {}, [className])}
        >
            <Text
                title={t('Контакты')}
            />
            <HStack
                justify='between'
                align='center'
            >
                <Button>
                    Telegramm
                </Button>
                <Button>
                    Telegramm
                </Button>
                <Button>
                    Telegramm
                </Button>
            </HStack>
        </VStack>
    );
});