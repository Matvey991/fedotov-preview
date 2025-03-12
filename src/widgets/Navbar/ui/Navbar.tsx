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
        <div className={classNames(cls.Navbar, {}, [className])}>
            <HStack className={cls.logo} align='center'>
                <Icon size={IconSize.M} Svg={FedotovLogo} />
                <Text size={TextSize.M} text='EDOTOV' />
            </HStack>
            <HStack align='center'>
                <Button size={ButtonSize.L}>
                    ОБО МНЕ
                </Button>
                <Button size={ButtonSize.L}>
                    ПРОЕКТЫ
                </Button>
                <Button size={ButtonSize.L}>
                    НАВЫКИ
                </Button>
                <Button size={ButtonSize.L}>
                    ОБУЧЕНИЕ
                </Button>
                <Button size={ButtonSize.L}>
                    КОНТАКТЫ
                </Button>
                <ThemeSwitcher />
            </HStack>
        </div>
    );
});