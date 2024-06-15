'use client'

import ButtonDownload from "./button-download"
import ButtonRouteWaitlist from "./button-routeWaitlist";


export default function Close() {
    return (
        <section className="relative">
            {/* Intro content */}
            <div className="pt-28 pb-40 md:pt-40 mx-5 md:mx-auto max-w-3xl">
                {/* Section header */}
                <div className="md:text-center">
                    <h1 className="text-2xl leading-tighter tracking-tighter mb-[2rem] md:mb-[5rem] text-center" data-aos="zoom-y-out">
                        Write & Share Anything within Web Pages on Piazza</h1>
                    <div className="max-w-xs mx-auto md:max-w-none content-start flex flex-col max-md:text-center" data-aos="zoom-y-out" data-aos-delay="300">
                        <ButtonDownload />
                        <div className="mb-[1rem] md:mb-[3rem] mt-[3rem] md:mt-[10rem] text-gray-600 text-center text-base">
                            If you use another platform, we'll notify you when it's available.
                        </div>
                        <ButtonRouteWaitlist />
                    </div>
                </div>
            </div>
        </section >
    )
}