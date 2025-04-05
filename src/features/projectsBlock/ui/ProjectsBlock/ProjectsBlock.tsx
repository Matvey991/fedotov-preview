import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import { HStack, VStack } from '@/shared/ui/Stack';
import { ProjectCard } from '@/entities/Information/ui/ProjectCard';
import { Text } from '@/shared/ui/Text';
import { useTranslation } from 'react-i18next';
import { projectData } from '../../model/data';
import cls from './ProjectsBlock.module.scss'
import { Element } from 'react-scroll';

interface ProjectsProps {
    className?: string;
}

export const ProjectsBlock = memo((props: ProjectsProps) => {
    const { t } = useTranslation()
    const { className } = props

    return (
        <Element
            name='projects'
            className={classNames(cls.ProjectsBlock, {}, [className])}
        >
            <VStack
                gap='64'
            >
                <HStack
                    align='center'
                    justify='center'
                    gap='16'
                >
                    <Text
                        tag='h2'
                        fontWeight='weight_500'
                        title={t('Проекты')}
                    />
                    <Text
                        tag='h2'
                        fontWeight='weight_500'
                        title='#'
                        className={cls.hashtag}
                    />
                </HStack>
                {projectData.map((el, i) => (
                    <VStack
                        key={el.gitLink}
                    >
                        {i % 2 === 0
                            ?
                            (
                                <ProjectCard
                                    // className={cls.ProjectsBlock}
                                    card={el}
                                />
                            )
                            :
                            (
                                <ProjectCard
                                    // className={cls.ProjectsBlock}
                                    card={el}
                                    end
                                />
                            )
                        }
                    </VStack>
                ))}
            </VStack>
        </Element >
    );
});