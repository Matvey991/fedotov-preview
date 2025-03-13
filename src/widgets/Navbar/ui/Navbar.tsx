import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Navbar.module.scss'
import FedotovLogo from '../../../shared/assets/icons/FedotovIcon.svg';
import { Icon } from '@/shared/ui/Icon';
import { Text } from '@/shared/ui/Text';
import { TextSize } from '@/shared/ui/Text/Text';
import { IconSize } from '@/shared/ui/Icon/Icon';
import { HStack } from '@/shared/ui/Stack';
import { Button } from '@/shared/ui/Button';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { ButtonSize } from '@/shared/ui/Button/Button';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo((props: NavbarProps) => {

    const { className } = props

    return (
        <HStack
            align='center'
            justify='between'
            className={classNames(cls.Navbar, {}, [className])}
        >
            <HStack className={cls.logo}>
                <Icon size={IconSize.M} Svg={FedotovLogo} />
                <Text size={TextSize.M} text='EDOTOV' noneTheme />
            </HStack>
            <HStack align='center'>
                <Button>
                    ОБО МНЕ
                </Button>
                <Button>
                    ПРОЕКТЫ
                </Button>
                <Button>
                    НАВЫКИ
                </Button>
                <Button>
                    ОБУЧЕНИЕ
                </Button>
                <Button>
                    КОНТАКТЫ
                </Button>
            </HStack>
            <ThemeSwitcher />
        </HStack>
    );
});