import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './NavbarBtnScroll.module.scss'
import { LangSwitcher } from '@/features/langSwitcher';
import { ThemeSwitcher } from '@/features/themeSwitcher';
import { HStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { Button } from '@/shared/ui/Button';
import { Link } from 'react-scroll';
import { NavbarBtnType } from '@/entities/Information/ui/ProjectCard/model/types/NavbarBtnType';

interface NavbarBtnScrollProps {
    className?: string;
    data: NavbarBtnType[];
}

export const NavbarBtnScroll = memo((props: NavbarBtnScrollProps) => {

    const { className, data } = props
    const { t } = useTranslation()

    return (
        <HStack max className={classNames(cls.NavbarBtnScroll, {}, [className])}>
            <HStack
                justify='end'
                max
            >
                {data.map((el) => (
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
                                link
                                tag='h4'
                                title={t(el.title)}
                                fontWeight='weight_300'
                                TextSizeType='textLittle'
                            />
                        </Button>
                    </Link>
                ))}
            </HStack>
            <HStack
                justify='center'
                align='end'
                gap='16'
            >
                <LangSwitcher />
                <ThemeSwitcher />
            </HStack>
        </HStack>
    );
});