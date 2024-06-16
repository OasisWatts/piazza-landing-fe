'use client'

import ButtonDownload from "./button-download"
import ButtonRouteWaitlist from "./button-routeWaitlist";
import ButtonGradient from "./button-routeWaitlist"
import PiazzaLogo from '@/components/ui/logo-piazza';


export default function Intro() {
    return (
        <section className="relative">
            <div className="absolute top-5 right-5 md:w-0 md:h-0" data-aos="zoom-y-out">
                <PiazzaLogo height="35" />
            </div>
            {/* Intro content */}
            <div className="pt-28 pb-12 md:pt-40 md:pb-20 mx-5 md:mx-auto max-w-3xl">
                {/* Section header */}
                <div className="mb-[5rem] md:mb-[8rem] max-md:w-0 max-md:h-0" data-aos="zoom-y-out">
                    <PiazzaLogo height="70" />
                </div>
                <div className="md:text-center">
                    <h1 className="text-3xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-[4rem] md:mb-[5rem]" data-aos="zoom-y-out">
                        Piazza is an <p className="text-violet inline">innovative browsing app</p> where you can <p className="text-brown inline">Write & Share</p> Anything within Web Pages</h1>
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