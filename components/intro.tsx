'use client'

import ButtonDownload from "./button-download"
import ButtonRouteWaitlist from "./button-routeWaitlist_bfLaunch";
import ButtonGradient from "./button-routeWaitlist_bfLaunch"
import PiazzaLogo from '@/components/ui/logo-piazza';
import { WAITLIST_SERVER_URL } from "./env";
import { useEffect } from "react";
import axios from "axios";


export default function Intro() {
    useEffect(() => {
        axios.get(WAITLIST_SERVER_URL + "/api/visit")
    })
    return ( //WARN: YOU NEED TO ADD SOME CODE LINES FROM intro-bflaunch.tsx 
        <section className="relative h-[100vh]">
            <div className="absolute top-5 right-5 md:w-0 md:h-0" data-aos="zoom-y-out">
                <PiazzaLogo height="35" />
            </div>
            {/* Intro content */}
            <div className="pt-5 md:pt-20 md:mx-auto max-w-5xl px-5">
                {/* Section header */}
                <div className="mb-[4rem] max-md:w-0 max-md:h-0" data-aos="zoom-y-out">
                    <PiazzaLogo height="70" />
                </div>
                <div className="md:text-center">
                    <h1 className="text-3xl md:text-6xl font-urbanist font-extrabold leading-tighter tracking-tighter mb-[1rem] md:mb-[3rem] text-gray-500" data-aos="zoom-y-out">
                        Enhance Mobile Web Search Experience</h1>
                    <div className="text-lg md:text-2xl font-semibold text-gray-700 mb-[1rem] md:mb-[3rem]">
                        The mobile browser you need to make your web searches more efficient
                    </div>
                    <div className="md:text-lg text-base md:text-center text-gray-700 mb-2" data-aos="zoom-y-out">It's free!</div>
                    <div className="max-w-xs md:mx-auto md:max-w-none content-start flex flex-col md:flex-row md:justify-center md:items-center" data-aos="zoom-y-out" data-aos-delay="300">
                        <ButtonDownload />
                        <div className="md:mr-[1rem] md:ml-auto mr-auto mb-4 md:mb-0 text-gray-600 font-medium text-lg"> For iOS, </div>
                        <ButtonRouteWaitlist />
                    </div>
                </div>
            </div>
        </section >
    )
}