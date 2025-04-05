import { memo } from 'react';
import cls from './MainPage.module.scss'
import {
    DescriptionPhotoBlock,
} from '@/entities/Information';
import { VStack } from '@/shared/ui/Stack';
import { ProjectsBlock } from '@/features/projectsBlock';
import { EducationBlock } from '@/features/educationBlock';
import { ParticlesBg } from '@/entities/Particles';
import { SkillsBlock } from '@/features/skillsBlock';

export const MainPage = memo(() => {

    return (
        <VStack
            align='center'
            gap='64'
            className={cls.MainPage}
        >
            <DescriptionPhotoBlock />
            <ProjectsBlock />
            <SkillsBlock />
            <EducationBlock />
            <ParticlesBg />
        </VStack>
    );
});