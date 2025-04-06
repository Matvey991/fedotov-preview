import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Footer.module.scss'
import { HStack, VStack } from '@/shared/ui/Stack';
import { useTranslation } from 'react-i18next';
import { footerData } from '../model/data/data';
import { Text } from '@/shared/ui/Text';
import { ALink } from '@/shared/ui/ALink';
import { Element } from 'react-scroll';

interface FooterProps {
    className?: string;
}

export const Footer = memo((props: FooterProps) => {
    const { t } = useTranslation()
    const { className } = props

    return (
        <Element
            name='contacts'
            className={classNames(cls.Footer, {}, [className])}
        >
            <VStack
                gap='64'
                justify='center'
                align='center'
            >
                <HStack
                    align='center'
                    justify='center'
                    max
                    gap='16'
                >
                    <Text
                        tag='h2'
                        fontWeight='weight_500'
                        title={t('Контакты')}
                        TextSizeType='textBig'
                    />
                    <Text
                        tag='h2'
                        fontWeight='weight_500'
                        title='#'
                        className={cls.hashtag}
                        TextSizeType='textBig'
                    />
                </HStack>
                <HStack
                    align='center'
                >
                    {footerData.map((el) => (
                        <HStack
                            justify='center'
                            align='center'
                            key={el.href}
                        >
                            <ALink
                                theme='clear'
                                href={el.href}
                                target='_blank'
                            >
                                <Text
                                    title={el.text}
                                    fontWeight='weight_300'
                                    tag='h3'
                                    TextSizeType='textMedium'
                                />
                            </ALink>
                        </HStack>
                    ))}
                </HStack>
            </VStack>
        </Element>
    );
});