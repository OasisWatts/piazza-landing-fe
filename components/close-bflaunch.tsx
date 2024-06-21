'use client'

import ButtonDownload from "./button-download"
import ButtonRouteWaitlist from "./button-routeWaitlist_bfLaunch";
import ButtonGradient from "./button-routeWaitlist_bfLaunch"
import PiazzaLogo from '@/components/ui/logo-piazza';


export default function CloseBfLaunch() {
    return (
        <section className="relative">
            {/* Intro content */}
            <div className="pt-28 pb-40 md:pb-60 md:pt-40 mx-5 md:mx-auto max-w-3xl">
                {/* Section header */}
                <div className="md:text-center">
                    <h1 className=" text-2xl md:text-4xl leading-tighter tracking-tighter mb-[2rem] md:mb-[5rem] text-center font-extrabold" data-aos="zoom-y-out">
                        Enhance your web search experience with Piazza</h1>
                    <div className="text-xl md:text-2xl  mb-[2rem] md:mb-[5rem] text-center" data-aos="zoom-y-out" data-aos-delay="300">
                        Comming Soon in<br />July to August
                    </div>

                    <div className="md:text-lg text-base text-center text-gray-700 mb-2" data-aos="zoom-y-out" data-aos-delay="300">It's free!</div>
                    <div className="max-w-xs mx-auto md:max-w-none content-start flex flex-col max-md:text-center" data-aos="zoom-y-out" data-aos-delay="300">
                        <ButtonRouteWaitlist />
                    </div>
                </div>
            </div>
        </section >
    )
}