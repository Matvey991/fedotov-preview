import { HStack, VStack } from "../../../../../../shared/ui/Stack";
import cls from './ProjectCard.module.scss'
import { classNames, Mods } from "@/shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { ProjectCardType } from "../../model/types/ProjectCardType";
import { AppImage } from "@/shared/ui/AppImage";
import { ALink } from "@/shared/ui/ALink";
import { Text } from "@/shared/ui/Text";

interface ProjectCardProps {
    className?: string;
    card: ProjectCardType;
    end?: boolean;
}

export const ProjectCard = (props: ProjectCardProps) => {
    const { t } = useTranslation()

    const { className, card, end } = props
    const { name, img, gitLink } = card

    if (end) {
        return (
            <HStack
                justify="end"
                max
                className={classNames(cls.ProjectCard, {}, [className])}
            >
                <div className={cls.containerImg}>
                    <AppImage src={img} className={cls.img} />
                    <VStack className={cls.titleWrapper} gap="32">
                        <Text
                            title={t(name)}
                            tag="h3"
                            theme="white"
                            TextSizeType='textMedium'
                        />
                        <ALink
                            theme="outline"
                            href={gitLink}
                            target="_blank"
                        >
                            <Text
                                text={t('Подробнее')}
                                theme="white"
                            />
                        </ALink>
                    </VStack>
                </div>
            </HStack>
        )
    }

    return (
        <HStack
            justify="start"
            max
            className={classNames(cls.ProjectCard, {}, [className])}
        >
            <div className={cls.containerImg}>
                <AppImage src={img} className={cls.img} />
                <VStack className={cls.titleWrapper} gap="32">
                    <Text
                        title={t(name)}
                        tag="h3"
                        theme="white"
                        fontWeight='weight_500'
                        TextSizeType='textMedium'
                    />
                    <ALink
                        theme="outline"
                        href={gitLink}
                        target="_blank"
                    >
                        <Text
                            text={t('Подробнее')}
                            theme="white"
                        />
                    </ALink>
                </VStack>
            </div>
        </HStack>
    )
}
