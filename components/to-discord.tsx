'use client'

import PiazzaLogo from '@/components/ui/logo-piazza';
import LogoInstagram from './ui/logo-instagram';
import LogoTwitter from './ui/logo-twitter';
import LogoDiscord from './ui/logo-discord';

export default function ToDiscord() {

    return (
        <section className="relative">
            <div className="absolute top-5 right-5 md:w-0 md:h-0" data-aos="zoom-y-out">
                <PiazzaLogo height="35" />
            </div>
            <div className="pt-28 pb-40 mx-5 mx-auto max-w-2xl text-center" data-aos="zoom-y-out">
                <div className="mb-[5rem] md:mb-[8rem] max-md:w-0 max-md:h-0">
                    <PiazzaLogo height="70" />
                </div>
                <div className='text-lg md:text-xl text-gray-700 '>
                    Join our discord server right now <br /> to get the latest development news <br /> and share your proposals!
                </div>
                <div className='rounded-full inline-block border-2 border-gray-300 p-3 mt-3 md:mt-10 hover:bg-gray-300'>
                    <LogoDiscord size={70} fill="#7289da" />
                </div>
                <div className='text-lg md:text-xl font-semibold mt-7 md:mt-20 text-gray-700 '>
                    Join other SNS
                </div>
                <div className='inline-block w-full flex flex-row align-center justify-center mt-3 md:mt-10'>
                    <div className="mr-10 w-[48px] pl-3.5 pt-3.5 rounded-full border border-gray-300 p-3 hover:bg-gray-300">
                        <LogoTwitter size={18} fill="#000000" />
                    </div>
                    <div className="bottom-0.5 relative rounded-full border border-gray-300 p-3 hover:bg-gray-300">
                        <LogoInstagram size={22} fill="#E1306C" />
                    </div>
                </div>
            </div>
        </section>
    )
}