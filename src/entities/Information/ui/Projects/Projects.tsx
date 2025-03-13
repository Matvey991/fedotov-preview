import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Projects.module.scss'
import { VStack } from '@/shared/ui/Stack';
import { ProjectCard } from '@/shared/ui/ProjectCard/ProjectCard';
import { Text } from '@/shared/ui/Text';
import { TextSize } from '@/shared/ui/Text/Text';

interface ProjectsProps {
    className?: string;
}

export const Projects = memo((props: ProjectsProps) => {

    const { className } = props
    return (
        <VStack
            gap='64'
            align='center'
            className={classNames(cls.Projects, {}, [className])}
        >
            <Text
                text='Проекты'
                size={TextSize.L}
            />
            <VStack gap='64' >
                <ProjectCard
                    width={780}
                    height={372}
                    linkProject='https://github.com/Matvey991/fedotov-preview'
                    photoPath='https://sun9-77.userapi.com/impg/02aB30LzeLjkO0Ir1qiMsOSPwmXUQtxN67voNg/0Fqn_mK4FiI.jpg?size=2560x1435&quality=95&sign=a5b79d3ba9b080b107cde5cd9709de90&type=album'
                />
                <ProjectCard
                    width={780}
                    height={372}
                    rightCard
                    linkProject='https://github.com/Matvey991/production-project'
                    photoPath='https://sun9-16.userapi.com/impg/7erQ9ofeBBLMyifoOueatZtSYQfqwjfPuncwyA/mL5FLOp6yYU.jpg?size=2560x1424&quality=95&sign=321bd90fae3f8114f7f667f11a3cbc66&type=album'
                />
                <ProjectCard
                    width={780}
                    height={372}
                    linkProject='https://github.com/Matvey991/online-scooter-sales-store'
                    photoPath='https://sun9-37.userapi.com/impg/5wYXw7A4hLlWrhWnf5pc5U8gg7Wsa9yRYRKtJA/JWM2JFXWVz0.jpg?size=2560x1442&quality=95&sign=25f9645043ae8e4b3fdb1c1ed33480b6&type=album'
                />
                <ProjectCard
                    width={780}
                    height={372}
                    rightCard
                    linkProject='https://github.com/Matvey991/todo-list'
                    photoPath='https://sun9-62.userapi.com/impg/zUAH7CIxiBt2drs4A8A2WDuKv5GUSDl1aDJp0g/WPrm5ykk9Sc.jpg?size=2560x1149&quality=95&sign=68b789c4028ee3553b9f9f6a5f689ac1&type=album'
                />
            </VStack >
        </VStack>
    );
});