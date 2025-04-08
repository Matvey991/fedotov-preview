import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useCallback, useState } from 'react';
import cls from './Navbar.module.scss'
import { HStack } from '@/shared/ui/Stack';
import { NavbarBtnScroll } from '@/features/navbarBtnScroll/ui/NavbarBtnScroll';
import { Icon } from '@/shared/ui/Icon';
import { useMediaQuery } from 'react-responsive';
import FedotovLogo from '@/shared/assets/icons/FedotovLogo.svg';
import { Text } from '@/shared/ui/Text';
import { navbarData } from '../model/data/navbarData';
import { MenuItemBlock } from '@/features/menuItemBlock';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo((props: NavbarProps) => {

    const { className } = props
    const isMobile = useMediaQuery({ query: '(max-width: 1130px)' })

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const onChange = useCallback(() => {
        setIsOpen(prev => !prev)
    }, [])

    return (
        <HStack
            max
            justify='between'
            align='start'
            className={classNames(cls.Navbar, {}, [className])}
        >
            <HStack
                gap='4'
                className={cls.logo}
                align='center'
            >
                <Icon
                    theme='outline'
                    size='size_l'
                    Svg={<FedotovLogo />}
                />
                <Text
                    theme='white'
                    tag='h4'
                    fontWeight='weight_300'
                    title='EDOTOV'
                    TextSizeType='textLittle'
                />
            </HStack >
            <HStack>
                {isMobile
                    ?
                    <MenuItemBlock
                        isOpen={isOpen}
                        onChange={onChange}
                    />
                    :
                    <NavbarBtnScroll data={navbarData} />
                }
            </HStack>
        </HStack>
    );
});