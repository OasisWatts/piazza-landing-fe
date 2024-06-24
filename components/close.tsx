'use client'

import ButtonDownload from "./buttons/button-download"
import ButtonRouteWaitlistBfLaunch from "./buttons/button-routeWaitlist_bfLaunch";


export default function Close() {
    return (//WARN: YOU MIGHT NEED TO ADD SOME CODE LINES FROM close-bflaunch.tsx 
        <section className="relative">
            {/* Intro content */}
            <div className="pt-28 pb-40 md:pb-60 md:pt-40 mx-5 md:mx-auto max-w-3xl">
                {/* Section header */}
                <div className="md:text-center">
                    <h1 className="text-2xl md:text-4xl leading-tighter tracking-tighter mb-[2rem] md:mb-[5rem] text-center font-bold font-rubik" data-aos="zoom-y-out">
                        Enhance your web search experience with Piazza</h1>
                    <div className="max-w-xs mx-auto md:max-w-none content-start flex flex-col max-md:text-center" data-aos="zoom-y-out" data-aos-delay="300">
                        <ButtonDownload />
                        <div className="mb-[1rem] md:mb-[3rem] mt-[3rem] md:mt-[10rem] text-gray-600 text-center text-lg">
                            If you are not Android user, we'll notify you when it's available.
                        </div>
                        <ButtonRouteWaitlistBfLaunch />
                    </div>
                </div>
            </div>
        </section >
    )
}