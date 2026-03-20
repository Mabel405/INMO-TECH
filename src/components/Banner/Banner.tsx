"use client"
 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { FloatedSearch } from '../FloatedSearch';
import { dataBanner } from "./Banner.data"; 
 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
 
interface BannerProps {
  onSearch: (filters: { location: string, type: string, priceRange: string }) => void;
}
 
export function Banner({ onSearch }: BannerProps) {
  return (
    // overflow-visible aquí para que los dropdowns no se corten
    <div className="container relative mx-auto px-4 md:px-0 overflow-visible">
      
      {/* El swiper va en su propio div con overflow-hidden para no afectar los dropdowns */}
      <div className="relative rounded-[2rem] shadow-2xl border border-slate-100 overflow-hidden">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="min-h-[70vh] md:min-h-[85vh]"
        >
          {dataBanner.map(({ id, image, title, subtitle }) => (
            <SwiperSlide key={id}>
              <div
                className="relative w-full h-[70vh] md:h-[85vh] bg-no-repeat bg-cover bg-center flex items-center justify-center"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${image})`
                }}
              >
                <div className="max-w-4xl text-center text-white px-6">
                  <h2 className="text-4xl md:text-7xl font-bold tracking-tight mb-4 animate-fade-up">
                    {title}
                  </h2>
                  <p className="text-xl md:text-2xl font-light opacity-90 animate-fade-up delay-200">
                    {subtitle}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
 
      {/* FloatedSearch fuera del div con overflow-hidden */}
      <div className="relative z-20 flex justify-center px-4 -mt-8 md:-mt-10">
        <div className="w-full max-w-5xl">
          <FloatedSearch onSearch={onSearch} />
        </div>
      </div>
 
      <style jsx global>{`
        .swiper-button-next, .swiper-button-prev {
          color: white !important;
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(8px);
          width: 55px !important;
          height: 55px !important;
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        .swiper-button-next:hover, .swiper-button-prev:hover {
          background: #4ade80;
          transform: scale(1.1);
        }
        .swiper-pagination-bullet-active {
          background: #4ade80 !important;
          width: 30px !important;
          border-radius: 12px !important;
        }
      `}</style>
    </div>
  );
}