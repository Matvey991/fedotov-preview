import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import { HStack, VStack } from '@/shared/ui/Stack';
import { ProjectCard } from '@/entities/Information/ui/ProjectCard';
import { Text } from '@/shared/ui/Text';
import { useTranslation } from 'react-i18next';
import { projectData } from '../../model/data';
import cls from './ProjectsBlock.module.scss'

interface ProjectsProps {
    className?: string;
}

export const ProjectsBlock = memo((props: ProjectsProps) => {
    const { t } = useTranslation()
    const { className } = props

    return (
        <VStack className={classNames(cls.ProjectsBlock, {}, [className])}>
            <VStack
                align='center'
                gap='64'
            >
                <HStack
                    align='center'
                    justify='center'
                    max
                    gap='16'
                >
                    <Text
                        size='size_xl'
                        fontWeight='weight_500'
                        title={t('Проекты')}
                    />
                    <Text
                        size='size_xl'
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
                                <VStack>
                                    <ProjectCard
                                        className={cls.ProjectsBlock}
                                        card={el}
                                    />
                                </VStack>
                            )
                            :
                            (
                                <VStack
                                    align='end'
                                    justify='end'
                                >
                                    <ProjectCard
                                        className={cls.ProjectsBlock}
                                        card={el}
                                        end
                                    />
                                </VStack>
                            )
                        }
                    </VStack>
                ))}
            </VStack>
        </VStack>
    );
});