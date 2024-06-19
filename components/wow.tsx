'use client'

import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';

import BrowserImg from '@/public/images/browser.png'
import TagImg from '@/public/images/tag.png'
import HomeTagImg from '@/public/images/home-tag.png'
import BrowserMemoImg from '@/public/images/browser-memo.png'
import Community0Img from '@/public/images/community-0.png'
import Community1Img from '@/public/images/community-1.png'
import PostImg from '@/public/images/post.png'


export default function Wow() {
    return (
        <>
            <section className="scroll-effect-section bg-gradient-to-r from-pink to-brown">
                <div className="scroll-effect-container">
                    <div className="scroll-effect-middle">
                        <div className="scroll-effect-inner">
                            <div className="text-center text-2xl md:text-4xl text-white font-semibold">
                                We offer features that other browsers don't have
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="scroll-effect-section bg-black">
                <div className="scroll-effect-container">
                    <div className="scroll-effect-middle">
                        <div className="scroll-effect-inner">
                            <div className="text-center text-2xl md:text-4xl mb-20 ">
                                <p className="text-gray-400">People Save Webpages</p>
                                <div className="inline font-semibold text-white">BY BOOKMARKING THEM</div>
                                <p className="text-gray-400">In Their Browser</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="scroll-effect-section bg-gradient-to-r from-pink to-violet">
                <div className="scroll-effect-container">
                    <div className="scroll-effect-middle">
                        <div className="scroll-effect-inner">
                            <div className="text-center text-2xl md:text-4xl text-white mb-20">
                                <p className="text-gray-500">Save Webpages</p>
                                <div className="inline font-black">"WITH HASHTAGS"</div>
                                <p className="text-gray-500">In Your Browser</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="scroll-effect-section-no-effect md:flex md:flex-row md:items-center md:mx-auto max-w-6xl">
                <div className="md:w-full mx-auto text-gray-700 text-base md:text-lg text-gray-600 md:my-auto" data-aos="zoom-y-out" data-aos-delay="300">
                    Bookmarking or taking screenshots are not ideal for
                    <p className='inline-block text-left ml-2 mt-3 md:mt-5 px-3 py-1 border-2 border-lightbrown rounded-lg'>(1) managing numerous web pages<br /> (2) remembering their contents<br />(3) quickly finding the specific page you need</p>

                    <p className="font-bold text-lg md:text-2xl mt-10">Try using hashtags instead!</p>
                    Save web pages with more details and find them easily using tags.
                </div>
                <div className='mx-auto px-2 md:px-10 md:w-1/2 max-md:max-w-[21rem]' data-aos="zoom-y-out" data-aos-delay="300">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={100}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 2000, disableOnInteraction: false }}
                        loop={true}
                    >
                        <SwiperSlide>
                            <div className='px-[4rem] pt-[4rem] pb-10'>
                                <Image className='mx-auto' src={BrowserImg} alt="Feature Image1" priority />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='px-[4rem] pt-[4rem] pb-10'>
                                <Image className='mx-auto' src={TagImg} alt="Feature Image1" priority />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='px-[4rem] pt-[4rem] pb-10'>
                                <Image className='mx-auto' src={HomeTagImg} alt="Feature Image1" priority />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
            <section className="scroll-effect-section bg-black">
                <div className="scroll-effect-container">
                    <div className="scroll-effect-middle">
                        <div className="scroll-effect-inner">
                            <div className="text-center text-2xl md:text-4xl mb-20 ">
                                <p className="text-gray-400">Write Notes</p>
                                <div className="inline text-white">
                                    ▢▢▢▢▢▢▢▢ ▢▢ ▢▢▢▢▢▢▢▢</div>
                                <p className="text-gray-400">In Browser</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="scroll-effect-section bg-gradient-to-r from-pink to-violet">
                <div className="scroll-effect-container">
                    <div className="scroll-effect-middle">
                        <div className="scroll-effect-inner">
                            <div className="text-center text-2xl md:text-4xl text-white mb-20">
                                <p className="text-gray-500">Write Notes</p>
                                <div className="inline text-white font-black">
                                    "DIRECTLY ON WEBPAGES"</div>
                                <p className="text-gray-500">In Browser</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="scroll-effect-section-no-effect md:flex md:flex-row md:items-center md:flex md:flex-row-reverse md:items-center md:mx-auto max-w-6xl">
                <div className="md:w-full mx-auto text-gray-700 text-base md:text-lg text-gray-600 max-md:mb-[3rem]" data-aos="zoom-y-out" data-aos-delay="300">
                    Ever had an idea while browsing and needed to jot it down?<br className='max-md:hidden' /> Do you use a separate app to write notes about web pages?
                    <p className="font-bold text-lg md:text-2xl">Leave memos directly on the web page! </p>
                    No need to switch apps. Save web pages with your notes.
                </div>
                < div className="md:w-full" data-aos="zoom-y-out" data-aos-delay="300">
                    <Image className='md:w-img w-smimg max-md:mx-auto' src={BrowserMemoImg} alt="Community Post Image" />
                </div >
            </section>
            <section className="scroll-effect-section bg-black">
                <div className="scroll-effect-container">
                    <div className="scroll-effect-middle">
                        <div className="scroll-effect-inner">
                            <div className="text-center text-2xl md:text-4xl mb-20 ">
                                <div className="inline text-white">
                                    ▢▢▢▢▢▢▢▢▢▢▢</div>
                                <p className="text-gray-400">About Webpages In Your Browser</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="scroll-effect-section bg-gradient-to-r from-pink to-violet">
                <div className="scroll-effect-container">
                    <div className="scroll-effect-middle">
                        <div className="scroll-effect-inner">
                            <div className="text-center text-2xl md:text-4xl text-white mb-20">
                                <div className="inline text-white font-black">
                                    "COMMUNICATE"</div>
                                <p className="text-gray-500">About Webpages In Your Browser</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="scroll-effect-section-no-effect md:flex md:flex-row md:items-center md:flex md:flex-row-reverse md:items-center md:mx-auto max-w-6xl">
                <div className="text-gray-700 text-base md:text-lg md:mb-[2rem]" data-aos="zoom-y-out">
                    <p className="font-bold text-lg md:text-2xl">Share your thoughts while browsing. </p>
                    Communicate without switching apps.
                </div>
                <div className="md:w-1/2 mx-auto px-2 md:px-10 max-md:max-w-[21rem]" data-aos="zoom-y-out" data-aos-delay="300">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={100}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 2000, disableOnInteraction: false }}
                        loop={true}
                    >
                        <SwiperSlide>
                            <div className='px-[4rem] pt-[4rem] pb-10'>
                                <Image className='mx-auto' src={BrowserImg} alt="Feature Image1" priority />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='px-[4rem] pt-[4rem] pb-10'>
                                <Image className='mx-auto' src={Community0Img} alt="Feature Image2" priority />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='px-[4rem] pt-[4rem] pb-10'>
                                <Image className='mx-auto' src={Community1Img} alt="Feature Image3" priority />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='px-[4rem] pt-[4rem] pb-10'>
                                <Image className='mx-auto' src={PostImg} alt="Feature Image4" priority />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div >
            </section>
        </>
    )
}