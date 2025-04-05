import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Navbar.module.scss'
import { HStack } from '@/shared/ui/Stack';
import { NavbarBtnScroll } from '@/features/navbarBtnScroll/ui/NavbarBtnScroll';
import MenuIcon from '../../../shared/assets/icons/Menu.svg'
import { Icon } from '@/shared/ui/Icon';
import { useMediaQuery } from 'react-responsive';
import FedotovLogo from '../../../shared/assets/icons/FedotovIcon.svg';
import { Text } from '@/shared/ui/Text';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo((props: NavbarProps) => {

    const { className } = props
    const isMobile = useMediaQuery({ query: '(max-width: 1100px)' })

    return (
        <HStack className={classNames(cls.Navbar, {}, [className])}>
            <HStack
                gap='4'
                className={cls.logo}
            >
                <Icon theme='outline' size='size_m' Svg={<FedotovLogo />} />
                <Text
                    theme='white'
                    tag='h4'
                    fontWeight='weight_300'
                    title='EDOTOV'
                />
            </HStack >
            {isMobile ?
                <Icon Svg={<MenuIcon />} />
                :
                <NavbarBtnScroll className={cls.NavbarBtnScroll} />
            }
        </HStack>
    );
});