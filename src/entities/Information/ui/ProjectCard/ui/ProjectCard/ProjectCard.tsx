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
            <div className={classNames(cls.ProjectCard, {}, [className])}>
                <VStack
                    gap="64"
                    className={cls.contentCard}
                >
                    <HStack>
                        <Text
                            title={t(name)}
                            theme='white'
                            fontWeight='weight_500'
                            size='size_l'
                            className={cls.titleProject}
                        />
                    </HStack>
                    <ALink
                        href={gitLink}
                        target="_blank">
                        <Text
                            title={t(t('Подробнее'))}
                            fontWeight='weight_300'
                            size='size_s'
                        />
                    </ALink>
                </VStack>
                <VStack className={cls.containerImg}>
                    <AppImage
                        src={img}
                        width={700}
                        height={370}
                        opaticy='opaticy0_3'
                    />
                </VStack>
            </div>
        )
    }

    return (
        <div className={classNames(cls.ProjectCard, {}, [className])}>
            <VStack
                gap="64"
                className={cls.contentCard}
            >
                <Text
                    title={t(name)}
                    fontWeight='weight_500'
                    size='size_l'
                    className={cls.titleProject}
                    theme='white'
                />
                <ALink
                    href={gitLink}
                    target="_blank">
                    <Text
                        title={t(t('Подробнее'))}
                        fontWeight='weight_300'
                        size='size_s'
                    />
                </ALink>
            </VStack>
            <VStack className={cls.containerImg}>
                <AppImage
                    src={img}
                    width={700}
                    height={370}
                    opaticy='opaticy0_3'
                />
            </VStack>
        </div>
    )
}