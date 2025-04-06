import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Button } from '@/shared/ui/Button';
import { Text } from '@/shared/ui/Text';

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = memo((props: LangSwitcherProps) => {

    const { className } = props
    const { t, i18n } = useTranslation()

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button
            className={classNames('', {}, [className])}
            size='size_s'
            onClick={toggle}>
            <Text
                link
                tag='h2'
                fontWeight='weight_300'
                text={t('Короткий язык')}
            />
        </Button>
    );
});