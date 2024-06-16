'use client'

import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';

import featureMemoImg from '@/public/images/feature-memo.png'
import featureTagsImg from '@/public/images/feature-tags.png'
import featureCommunityImg from '@/public/images/feature-community.png'
import featureHomeImg from '@/public/images/feature-home.png'

export default function Features() {
    return (
        <section className='relative'>
            <div className="mt-[5rem] md:mt-[10rem] mx-5 md:mx-auto max-w-3xl">
                <div className='text-center text-2xl md:text-5xl font-extrabold leading-tighter tracking-tighter mb-[2rem] md:mb-[3rem]'>
                    Features
                </div>
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    loop={true}
                >
                    <SwiperSlide>
                        <div className='p-[3rem] md:p-[7rem]'>
                            <div className='text-center px-1 pb-5 text-base text-gray-800 md:text-2xl md:pt-5'>
                                Write memos on a web page
                            </div>
                            <Image src={featureMemoImg} alt="Feature Image1" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='p-[3rem] md:p-[7rem]'>
                            <div className='text-center px-1 pb-5 text-base text-gray-800 md:text-2xl md:pt-5'>
                                Save a web page with tags
                            </div>
                            <Image src={featureTagsImg} alt="Feature Image1" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='p-[3rem] md:p-[7rem]'>
                            <div className='text-center px-1 pb-5 text-base text-gray-800 md:text-2xl md:pt-5'>
                                Discuss about the web pages
                            </div>
                            <Image src={featureCommunityImg} alt="Feature Image1" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='p-[3rem] md:p-[7rem]'>
                            <div className='text-center px-1 pb-5 text-base text-gray-800 md:text-2xl md:pt-5'>
                                Look up web pages with tags and memos
                            </div>
                            <Image src={featureHomeImg} alt="Feature Image1" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}