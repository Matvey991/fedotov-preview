import { memo } from 'react';
import cls from './MainPage.module.scss'
import {
    DescriptionPhotoBlock,
    SkillsBlock,
} from '@/entities/Information';
import { VStack } from '@/shared/ui/Stack';
import { ProjectsBlock } from '@/features/projectsBlock';
import { EducationBlock } from '@/features/educationBlock';

export const MainPage = memo(() => {

    return (
        <VStack
            gap='64'
            className={cls.MainPage}
        >
            <DescriptionPhotoBlock />
            <ProjectsBlock />
            <SkillsBlock />
            <EducationBlock />
        </VStack>
    );
});