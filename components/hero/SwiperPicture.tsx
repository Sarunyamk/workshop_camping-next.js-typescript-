'use client'

import { landmarkCardProps } from "@/utils/types";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import OtherInfo from "./OtherInfo";


const SwiperPicture = ({ landmarks }: { landmarks: landmarkCardProps[] }) => {
    console.log(landmarks, "landmark")
    return (
        <div>
            <Swiper
                navigation={true}
                autoplay={{
                    delay: 2500,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Navigation, Autoplay, Pagination]} className="mySwiper">
                {
                    landmarks.map((landmark, index) => {
                        return (

                            <SwiperSlide key={index} className="group">
                                <div className="relative rounded-lg overflow-hidden">
                                    <img className="h-[600px] w-full object-cover 
                                            brightness-75 group-hover:brightness-50 duration-300 transition-all"
                                        src={landmark.image} />
                                </div>

                                <div className="absolute bottom-0 left-0 z-50">
                                    <div className="col-span-4 mb-4 flex h-full flex-1
                                            justify-end px-5 md:mb-4 md:justify-end md:px-10">
                                        <OtherInfo landmark={landmark} />
                                    </div>
                                </div>
                            </SwiperSlide>

                        )
                    })
                }
            </Swiper>
        </div>
    )
}

export default SwiperPicture
