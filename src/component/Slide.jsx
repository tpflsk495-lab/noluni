import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';

const Slide = () => {
    return (
        <>
            <div className="inner slide_wrap">
                <div className="slide">
                    <Swiper
                        centeredSlides={true}
                        loop={true}
                        slidesPerView={1.2}
                        spaceBetween={20}
                        navigation={true}
                        pagination={true}
                        breakpoints={{
                            1040: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                                centeredSlides: false,
                            },
                        }}
                        modules={[Navigation, Pagination]}
                        className="mySwiper" >
                        <SwiperSlide><a href="#"><img src="../slide_01.jpg" alt="슬라이드사진" /></a></SwiperSlide>
                        <SwiperSlide><a href="#"><img src="../slide_02.jpg" alt="슬라이드사진" /></a></SwiperSlide>
                        <SwiperSlide><a href="#"><img src="../slide_03.jpg" alt="슬라이드사진" /></a></SwiperSlide>
                        <SwiperSlide><a href="#"><img src="../slide_04.jpg" alt="슬라이드사진" /></a></SwiperSlide>
                        <SwiperSlide><a href="#"><img src="../slide_05.jpg" alt="슬라이드사진" /></a></SwiperSlide>
                        <SwiperSlide><a href="#"><img src="../slide_06.jpg" alt="슬라이드사진" /></a></SwiperSlide>
                    </Swiper>
                </div>
            </div >
        </>
    )
}

export default Slide