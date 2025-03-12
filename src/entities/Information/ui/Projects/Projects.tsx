import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Projects.module.scss'
import { VStack } from '@/shared/ui/Stack';
import { ProjectCard } from '@/shared/ui/ProjectCard/ProjectCard';
import { Text } from '@/shared/ui/Text';
import { TextSize, TextTheme } from '@/shared/ui/Text/Text';

interface ProjectsProps {
    className?: string;
}

export const Projects = memo((props: ProjectsProps) => {

    const { className } = props
    return (
        <VStack
            align='center'
            className={classNames(cls.Projects, {}, [className])}
        >
            <Text
                text='Проекты'
                size={TextSize.L} theme={TextTheme.INVERTED}
            />
            <ProjectCard
                width={780}
                height={372}
                photoPath=
                'https://s3-alpha-sig.figma.com/img/8492/dd40/73a728af1a75486a1d1b3d6f1c118739?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KTOXHc1QOGqw9DeZoqCvmkDYLWQEeOOeGvXCl0SUWQP5Z4Rd2VvPFDDOKBQU1t83fYxaEu-c3xMSlt9US3xMfGTeWmDhJYrnevOB6HpIDTUyuADuW0iFF3hW-L-M5KfNV7mIPDtemQl2OSJXSsR-a4~m9CWJhKIwQxmW4t3zKCYOvUhJhsvlM~CBgF1WKDpaQuQ6IosMOvpLYVuqVq0~ILE7sbQSs4-CTN9~EPgDM5Glg1wNMuizt3IvB34mydyHrYI6BcYaXbCZ6JTnf5VpHNeJDXkTO8bZTVy7ADKRPqMm5aoFhD8by2nvlRQ7XmFY69qz5ETBdpybbl13pqUYGQ__'
            />
        </VStack>
    );
});