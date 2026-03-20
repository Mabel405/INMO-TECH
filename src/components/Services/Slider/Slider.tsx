"use client"
import { Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { sliderDataImages } from "./Slider.data";
import Image from "next/image";
 
export function Slider() {
    return (
        <Swiper
            slidesPerView={2.5}
            spaceBetween={15}
            freeMode={true}
            navigation
            scrollbar={{ draggable: true }}
            modules={[Navigation, Scrollbar]}
            className="h-[420px] md:h-[520px] w-[420px] md:w-[650px]"
            grabCursor
        >
            {sliderDataImages.map(({ id, urlImage }) => (
                <SwiperSlide key={id} className="rounded-xl overflow-hidden">
                    <div className="relative w-full h-full">
                        <Image
                            src={`/assets/houses/${urlImage}`}
                            alt="House"
                            fill
                            className="object-cover rounded-xl"
                        />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
 