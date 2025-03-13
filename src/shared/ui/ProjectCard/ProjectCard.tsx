import { CSSProperties } from "react";
import { Button } from "../Button";
import { ButtonSize, ButtonTheme } from "../Button/Button";
import { VStack } from "../Stack";
import cls from './ProjectCard.module.scss'
import { classNames, Mods } from "@/shared/lib/classNames/classNames";

type ProjectCardSize = string | number

interface ProjectCardProps {
    photoPath: string;
    alt?: string;
    width?: ProjectCardSize;
    height?: ProjectCardSize;
    rightCard?: boolean;
    linkProject: string;
}

export const ProjectCard = (props: ProjectCardProps) => {

    const { photoPath, alt, width, height, rightCard, linkProject } = props

    const styles: CSSProperties = {
        width: width,
        height: height
    }

    return (
        <VStack
            gap="64"
            align={rightCard ? "end" : 'start'}
            className={classNames(rightCard ? cls.ProjectRightCard : cls.ProjectCard)
            }>
            <img
                className={cls.image}
                style={styles}
                src={photoPath}
                alt={alt}
            />
            <a target="_blank" href={linkProject}>
                <Button
                    className={rightCard ? cls.rightBtn : cls.btn}
                    size={ButtonSize.L}
                    theme={ButtonTheme.PURPLE}
                >
                    Подробнее
                </Button>
            </a>
        </VStack>
    )
}