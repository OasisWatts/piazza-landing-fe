'use client'

import LogoInstagram from './ui/logo-instagram';
import LogoTwitter from './ui/logo-twitter';
import LogoDiscord from './ui/logo-discord';

export default function ToDiscord() {

    return (
        <section className="relative">
            <div className='bg-gradient-to-r from-lightyellow to-lightbrown px-5 md:px-10 '>
                <div className="pt-28 pb-10 mx-auto max-w-2xl text-center" data-aos="zoom-y-out">
                    <div className='text-lg md:text-xl'>
                        Join our discord server right now to get the latest development news and share your proposals!
                    </div>
                    <div className='bg-white rounded-full inline-block p-3 mt-3 md:mt-10 hover:bg-gray-300'>
                        <LogoDiscord size={70} fill="#7289da" />
                    </div>
                </div>
            </div>
            <div className='mt-10 md:mt-20 pb-40 mx-auto max-w-2xl text-center' data-aos="zoom-y-out">
                <div className='text-lg md:text-xl'>
                    Join other SNS
                </div>
                <div className='inline-block w-full flex flex-row align-center justify-center mt-5 md:mt-10'>
                    <div className="mr-10 w-[48px] pl-3.5 pt-3.5 rounded-full border border-gray-300 p-3 hover:bg-gray-300">
                        <LogoTwitter size={18} fill="#000000" />
                    </div>
                    <div className="bottom-0.5 relative rounded-full border border-gray-300 p-3 hover:bg-gray-300">
                        <LogoInstagram size={22} fill="#E1306C" />
                    </div>
                </div>
            </div>
        </section >
    )
}