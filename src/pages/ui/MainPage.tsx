import { memo } from 'react';
import cls from './MainPage.module.scss'
import { DescriptionPhotoBlock, Projects } from '@/entities/Information';
import { VStack } from '@/shared/ui/Stack';

export const MainPage = memo(() => {

    return (
        <VStack gap='32' className={cls.MainPage}>
            <DescriptionPhotoBlock />
            <Projects />
        </VStack>
    );
});