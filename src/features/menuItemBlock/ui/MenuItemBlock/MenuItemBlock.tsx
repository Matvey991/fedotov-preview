import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './MenuItemBlock.module.scss'
import { HStack, VStack } from '@/shared/ui/Stack';
import { navbarData } from '@/widgets/Navbar/model/data/navbarData';
import { Text } from '@/shared/ui/Text';
import { Link } from 'react-scroll';
import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import MenuIcon from '@/shared/assets/icons/MenuIcon.svg'
import { Hr } from '@/shared/ui/Hr';
import { ThemeSwitcher } from '@/features/themeSwitcher';
import { LangSwitcher } from '@/features/langSwitcher';

interface MenuItemBlockProps {
    className?: string;
    isOpen: boolean;
    onChange?: () => void;
}

const MenuItemBlock = memo((props: MenuItemBlockProps) => {

    const { className, isOpen, onChange } = props
    const { t } = useTranslation()

    if (!isOpen) {
        return (
            <HStack
                className={classNames(cls.MenuItemBlock, {}, [className])}
            >
                <Button
                    className={cls.menu}
                    size='size_s'
                    onClick={onChange}
                >
                    <Icon
                        Svg={<MenuIcon />}
                        size='size_l'
                    />
                </Button>
            </HStack>
        )
    }

    return (
        <HStack
            align='center'
            justify='center'
            max
            className={classNames(cls.MenuItemBlock, {}, [className])}
        >
            <Button
                className={cls.menu}
                size='size_s'
                onClick={onChange}
            >
                <Icon
                    Svg={<MenuIcon />}
                    size='size_l'
                />
            </Button>
            <HStack>
                <VStack
                    align='center'
                    justify='center'
                    gap='32'
                    max
                    className={cls.btnWrapper}
                >
                    {navbarData.map((el) => (
                        <Link
                            key={el.href}
                            activeClass="active"
                            to={el.href}
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            offset={50}
                            duration={500}
                            delay={100}
                            isDynamic={true}
                            ignoreCancelEvents={false}
                            spyThrottle={500}
                        >
                            <Button
                                key={el.title}
                                className={cls.navbarBtn}
                                size='size_l'
                            >
                                <Text
                                    align='center'
                                    link
                                    tag='h4'
                                    title={t(el.title)}
                                    fontWeight='weight_300'
                                    TextSizeType='textLittle'
                                />
                            </Button>
                            <Hr max white />
                        </Link>
                    ))}
                    <HStack
                        align='center'
                        justify='center'
                        gap='44'
                    >
                        <ThemeSwitcher onClick={onChange} />
                        <LangSwitcher />
                    </HStack>
                </VStack>
            </HStack>
            <Hr white max />
        </HStack>
    )
})

export default MenuItemBlock