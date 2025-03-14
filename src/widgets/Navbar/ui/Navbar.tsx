import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Navbar.module.scss'
import FedotovLogo from '../../../shared/assets/icons/FedotovIcon.svg';
import { Text } from '@/shared/ui/Text';
import { TextSize } from '@/shared/ui/Text/Text';
import { HStack } from '@/shared/ui/Stack';
import { Button } from '@/shared/ui/Button';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { Icon } from '@/shared/ui/Icon';
import { useTranslation } from 'react-i18next';
// import { IconSize } from '@/shared/ui/Icon/Icon';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo((props: NavbarProps) => {

    const { t } = useTranslation()
    const { className } = props

    return (
        <HStack
            align='center'
            justify='between'
            className={classNames(cls.Navbar, {}, [className])}
        >
            <HStack className={cls.logo}>
                {/* <Icon size={IconSize.M} Svg={FedotovLogo} /> */}
                {/* <Icon Svg={FedotovLogo} /> */}
                <Text size={TextSize.M} text='EDOTOV' noneTheme />
            </HStack>
            <HStack align='center'>
                <Button>
                    {t('ОБО МНЕ')}
                </Button>
                <Button>
                    {t('ПРОЕКТЫ')}
                </Button>
                <Button>
                    {t('НАВЫКИ')}
                </Button>
                <Button>
                    {t('ОБУЧЕНИЕ')}
                </Button>
                <Button>
                    {t('КОНТАКТЫ')}
                </Button>
            </HStack>
            <ThemeSwitcher />
        </HStack>
    );
});