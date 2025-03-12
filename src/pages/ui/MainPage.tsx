import { memo } from 'react';
import cls from './MainPage.module.scss'
import { DescriptionPhotoBlock, Projects } from '@/entities/Information';

export const MainPage = memo(() => {

    return (
        <div className={cls.MainPage}>
            <DescriptionPhotoBlock />
            <Projects />
        </div>
    );
});