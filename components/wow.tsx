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
import ButtonRouteWaitlist from './button-routeWaitlist_bfLaunch';


export default function Wow() {
    return (
        <>
            <section className="scroll-effect-section bg-gradient-to-r from-pink to-brown">
                <div className="scroll-effect-container">
                    <div className="scroll-effect-middle">
                        <div className="scroll-effect-inner">
                            <div className="text-center text-2xl md:text-4xl text-white font-semibold font-rubik font-medium">
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
                            <div className="text-center text-2xl md:text-4xl mb-20 font-rubik font-medium">
                                <p className="text-gray-400">Other Browser Saves Webpages</p>
                                <div className="inline font-bold text-white">BY BOOKMARKING THEM</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="scroll-effect-section bg-gradient-to-r from-pink to-violet">
                <div className="scroll-effect-container">
                    <div className="scroll-effect-middle">
                        <div className="scroll-effect-inner">
                            <div className="text-center text-2xl md:text-4xl text-white mb-20 font-rubik font-medium">
                                <p className="text-gray-500">The Piazza Browser Saves Webpages</p>
                                <div className="inline font-bold">"WITH HASHTAGS"</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="scroll-effect-section-no-effect md:mx-auto max-w-6xl md:min-h-[100vh]">
                <div className="md:flex md:flex-row md:items-center md:justify-center">
                    <div className="md:w-full mx-auto text-gray-700 text-base md:text-lg text-gray-600 md:my-auto">
                        Bookmarking or taking screenshots is not ideal for:
                        <p className='inline-block text-left ml-2 mt-3 md:mt-5 px-3 py-1 border-2 border-lightbrown rounded-lg'>(1) Managing numerous webpages<br /> (2) Remembering their contents<br />(3) Quickly finding the specific page you need</p>

                        <p className="font-bold text-lg md:text-2xl mt-10">Manage numerous webpages with hashtags</p>
                        Save webpages with more details and find them easily using hashtags
                        <div className="max-md:hidden text-center mt-[7rem]">
                            <ButtonRouteWaitlist />
                        </div>
                    </div>
                    <div className='mx-auto px-2 md:px-10 md:w-1/2 max-md:max-w-[21rem]'>
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
                </div>
                <div className="md:hidden text-center mt-[4rem]">
                    <ButtonRouteWaitlist />{/*WARN: add download button af launch*/}
                </div>
            </section>
            <section className="scroll-effect-section bg-black">
                <div className="scroll-effect-container">
                    <div className="scroll-effect-middle">
                        <div className="scroll-effect-inner">
                            <div className="text-center text-2xl md:text-4xl mb-20 font-rubik font-medium">
                                <p className="text-gray-400">Write Notes</p>
                                <div className="inline text-white font-bold blur md:blur-md">
                                    "DIRECTLY ON WEBPAGES"</div>
                                <p className="text-gray-400">In The Piazza Browser</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="scroll-effect-section bg-gradient-to-r from-pink to-violet">
                <div className="scroll-effect-container">
                    <div className="scroll-effect-middle">
                        <div className="scroll-effect-inner">
                            <div className="text-center text-2xl md:text-4xl text-white mb-20 font-rubik font-medium">
                                <p className="text-gray-500">Write Notes</p>
                                <div className="inline text-white font-bold">
                                    "DIRECTLY ON WEBPAGES"</div>
                                <p className="text-gray-500">In The Piazza Browser</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="scroll-effect-section-no-effect md:mx-auto max-w-6xl">
                <div className="md:flex md:items-center md:justify-center md:flex md:flex-row-reverse md:min-h-[100vh]">
                    <div className="md:w-full mx-auto text-gray-700 text-base md:text-lg text-gray-600 max-md:mb-[3rem]">
                        Ever had an idea while browsing and needed to jot it down?<br />
                        <p className="font-bold text-lg md:text-2xl">Save webpages with notes to capture ideas that come to mind while reading</p>
                        No need to switch apps to write notes about webpages
                        <div className="max-md:hidden text-center mt-[7rem]">
                            <ButtonRouteWaitlist />
                        </div>
                    </div>
                    < div className="md:w-full">
                        <Image className='md:w-img w-smimg max-md:mx-auto' src={BrowserMemoImg} alt="Community Post Image" />
                    </div >
                </div>
                <div className="md:hidden text-center mt-[4rem]">
                    <ButtonRouteWaitlist />{/*WARN: add download button af launch*/}
                </div>
            </section>
            <section className="scroll-effect-section bg-black">
                <div className="scroll-effect-container">
                    <div className="scroll-effect-middle">
                        <div className="scroll-effect-inner">
                            <div className="text-center text-2xl md:text-4xl mb-20 font-rubik font-medium">
                                <div className="inline text-white font-bold blur md:blur-md">
                                    "COMMUNICATE"</div>
                                <p className="text-gray-400">About Webpages In The Piazza Browser</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="scroll-effect-section bg-gradient-to-r from-pink to-violet">
                <div className="scroll-effect-container">
                    <div className="scroll-effect-middle">
                        <div className="scroll-effect-inner">
                            <div className="text-center text-2xl md:text-4xl text-white mb-20 font-rubik font-medium">
                                <div className="inline text-white font-bold">
                                    "COMMUNICATE"</div>
                                <p className="text-gray-500">About Webpages In The Pizza Browser</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="scroll-effect-section-no-effect md:mx-auto max-w-6xl">
                <div className="md:flex md:flex-row-reverse md:justify-center md:items-center md:min-h-[100vh] ">
                    <div className="text-gray-700 text-base md:text-lg md:mb-[2rem]">
                        Want to share what you read on the webpages?<br />
                        <p className="font-bold text-lg md:text-2xl">Share webpage and your thoughts while browsing </p>
                        No need to switch apps to communicate
                        <div className="max-md:hidden text-center mt-[7rem]">
                            <ButtonRouteWaitlist />
                        </div>
                    </div>
                    <div className="md:w-1/2 mx-auto px-2 md:px-10 max-md:max-w-[21rem]">
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
                </div>
                <div className="md:hidden text-center mt-[4rem]">
                    <ButtonRouteWaitlist />{/*WARN: add download button af launch*/}
                </div>
            </section>
        </>
    )
}