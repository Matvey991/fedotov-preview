import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ContactsBlock.module.scss'
import { HStack, VStack } from '@/shared/ui/Stack';
import { useTranslation } from 'react-i18next';
import { Text } from '@/shared/ui/Text';
import { ALink } from '@/shared/ui/ALink';
import { Element } from 'react-scroll';
import { ContactsData } from '../../model/data/data';

interface FooterProps {
    className?: string;
}

const ContactsBlock = memo((props: FooterProps) => {
    const { t } = useTranslation()
    const { className } = props

    return (
        <Element
            name='contacts'
            className={classNames(cls.ContactsBlock, {}, [className])}
        >
            <VStack
                gap='64'
                justify='center'
                align='center'
            >
                <HStack
                    align='center'
                    justify='center'
                    gap='16'
                >
                    <Text
                        theme='outline'
                        tag='h2'
                        fontWeight='weight_500'
                        TextSizeType='textBig'
                        title={t('Обучение')}
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
                    max
                    align='center'
                    className={cls.btnWrapper}
                >
                    {ContactsData.map((el) => (
                        <HStack
                            max
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
                                    theme='outline'
                                    link
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

export default ContactsBlock