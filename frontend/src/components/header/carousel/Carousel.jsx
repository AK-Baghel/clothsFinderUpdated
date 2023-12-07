import React from 'react'
import "./style.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation, A11y } from 'swiper/modules';
import { EffectFade } from 'swiper/modules';
import "swiper/css/effect-fade";


function Carousel() {

    const data = [
        "https://c1.wallpaperflare.com/preview/771/100/852/fabric-cloth-textile-clothing.jpg",
        "https://c0.wallpaperflare.com/preview/925/706/403/fabric-cloth-fashion-textile.jpg",
        "https://media.istockphoto.com/id/465986712/photo/colorful-t-shirt-backgorund-roll.jpg?s=612x612&w=0&k=20&c=CU09tSGehTuF7_LYf9zH_ZRCin2Gcl6eycWbegfYXu4="
    ];

    return (
        <Swiper
            spaceBetween={0}
            slidesPerView={1}
            navigation={true}
            effect={"fade"}
            speed={1500}
            autoplay={{ delay: 3000 }}
            pagination={{
                clickable: true,
            }}
            loop={true}
            modules={[Navigation, Pagination, Autoplay, A11y, EffectFade]}
            className="mySwiper"
        >

            {
                data.map((item, id) => {
                    return (
                        <SwiperSlide key={id}><img className='new' src={item} alt="" /></SwiperSlide>
                    )
                })
            }

        </Swiper>
    )
}

export default Carousel
