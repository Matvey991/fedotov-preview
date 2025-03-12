import { CSSProperties } from "react";
import { Button } from "../Button";
import { ButtonSize, ButtonTheme } from "../Button/Button";
import { VStack } from "../Stack";
import cls from './ProjectCard.module.scss'
import { classNames } from "@/shared/lib/classNames/classNames";

type ProjectCardSize = string | number

interface ProjectCardProps {
    photoPath: string;
    alt?: string;
    width?: ProjectCardSize;
    height?: ProjectCardSize;
}

export const ProjectCard = (props: ProjectCardProps) => {

    const { photoPath, alt, width, height } = props

    const styles: CSSProperties = {
        width: width,
        height: height
    }

    return (
        <VStack className={classNames(cls.ProjectCard)}>
            <img className={cls.image} style={styles} src={photoPath} alt={alt} />
            <Button
                className={cls.btn}
                size={ButtonSize.L}
                theme={ButtonTheme.PURPLE}
            >
                Подробнее
            </Button>
        </VStack>
    )
}