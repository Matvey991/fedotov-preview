import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Button } from '@/shared/ui/Button';
import { ButtonSize } from '@/shared/ui/Button/Button';
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
            size={ButtonSize.S}
            onClick={toggle}>
            <Text
                size='size_l'
                fontWeight='weight_300'
                text={t('Короткий язык')}
            />
        </Button>
    );
});