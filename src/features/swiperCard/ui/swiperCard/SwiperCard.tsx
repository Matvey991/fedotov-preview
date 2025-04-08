import { memo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules'
import { ALink } from '@/shared/ui/ALink';
import { AppImage } from '@/shared/ui/AppImage';
import { EducationType } from '@/shared/types/EducationType';
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import './SwiperCard.scss'
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack } from '@/shared/ui/Stack';

interface SwiperCardProps {
    className?: string;
    card: EducationType[];
}

export const SwiperCard = memo((props: SwiperCardProps) => {

    const { className, card } = props

    return (
        <Swiper
            spaceBetween={10}
            autoplay={{
                delay: 1500,
            }}
            slidesPerView={'auto'}
            modules={[Autoplay, Pagination]}
            className={classNames('', {}, [className])}
        >
            {card.map((el) => (
                <HStack
                    key={el.img}
                    max
                    justify='center'
                    align='center'
                >
                    <SwiperSlide key={el.link}>
                        <ALink href={el.link} theme='clear_outline' target='_blank'>
                            <AppImage height={200} src={el.img} />
                        </ALink>
                    </SwiperSlide>
                </HStack>
            ))}
        </Swiper >
    );
});