import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Navbar from "../Components/NavComp/Navbar"


function Carousel() {

    return (
        <>
        
            <div className=' w-full border border-black border-none'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper bg-black">
                    <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
                        <img className='h-[500px] w-full object-cover max-sm:h-[300px] bg-black/20' src="../public/dog wit girl.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='h-[500px] w-full object-cover max-sm:h-[300px]' src='https://img.freepik.com/free-photo/girl-with-cat_1157-17459.jpg?uid=R167309508&ga=GA1.1.1966480882.1738846517&semt=ais_hybrid' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='h-[500px] w-full object-cover max-sm:h-[300px]' src='https://img.freepik.com/premium-photo/portrait-young-woman-looking-away_1048944-2461624.jpg?uid=R167309508&ga=GA1.1.1966480882.1738846517&semt=ais_hybrid' />
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

export default Carousel