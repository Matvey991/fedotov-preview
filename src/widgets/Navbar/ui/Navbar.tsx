import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Navbar.module.scss'
import FedotovLogo from '../../../shared/assets/icons/FedotovIcon.svg';
import { Text } from '@/shared/ui/Text';
import { HStack } from '@/shared/ui/Stack';
import { Button } from '@/shared/ui/Button';
import { ThemeSwitcher } from '@/features/themeSwitcher';
import { Icon } from '@/shared/ui/Icon';
import { useTranslation } from 'react-i18next';
import { LangSwitcher } from '@/features/langSwitcher';
import { navbarData } from '../model/data/navbarData';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo((props: NavbarProps) => {

    const { t } = useTranslation()
    const { className } = props

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <HStack>
                <HStack
                    gap='4'
                    className={cls.logo}
                >
                    <Icon size='size_m' Svg={<FedotovLogo />} />
                    <Text
                        theme='white'
                        size='size_xl'
                        fontWeight='weight_300'
                        text='EDOTOV'
                    />
                </HStack>
                {navbarData.map((el) => (
                    <HStack
                        key={el.title}
                        justify='end'
                    >
                        <Button>
                            <Text
                                size='size_m'
                                title={t(el.title)}
                                fontWeight='weight_300'
                            />
                        </Button>
                    </HStack>
                ))}
                <HStack
                    justify='center'
                    align='center'
                >
                    <LangSwitcher />
                    <ThemeSwitcher />
                </HStack>
            </HStack>
        </div>
    );
});