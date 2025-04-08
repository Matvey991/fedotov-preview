import { memo } from 'react';
import cls from './MainPage.module.scss'
import {
    DescriptionPhotoBlock,
} from '@/entities/Information';
import { VStack } from '@/shared/ui/Stack';
import { ParticlesBg } from '@/entities/Particles';
import { ProjectsBlock } from '@/features/projectsBlock';
import { ContactsBlock } from '@/features/contactsBlock';
import { SkillsBlock } from '@/features/skillsBlock';
import { EducationBlock } from '@/features/educationBlock';

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
            <ContactsBlock />
        </VStack>
    );
});