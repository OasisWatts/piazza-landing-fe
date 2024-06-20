'use client'


export default function Users() {
    return (
        <section className='relative'>
            <div className="mt-[7rem] md:mt-[10rem] px-5 md:mx-auto max-w-5xl">
                <div className='md:text-center text-gray-800 font-urbanist font-semibold leading-tighter tracking-tighter md:text-center text-2xl md:text-4xl mb-[2rem] md:mb-[3rem]' data-aos="zoom-y-out">
                    Who can gain the most benefit from the Piazza?
                </div>
                <div className="flex md:flex-row max-md:flex-col justify-between w-full" data-aos="zoom-y-out">
                    <div className="rounded-lg md:w-[30%] max-md:mb-5 p-2 md:p-3 border-gray-300 border-2">
                        <div className="font-rubik font-bold text-lg sm:text-2xl text-center mb-2 rounded-lg text-white bg-gradient-to-r from-darkpink to-lightbrown">
                            Students
                        </div>
                        <div className="text-base sm:text-base mb-2 text-gray-500">
                            Curious people who love to learn new things on the internet
                        </div>
                        <div className="bg-white rounded-lg">
                            <div className="text-base">
                                <p className="inline text-darkpink">▶</p> Save memos and tags on webpages to organize the information.
                            </div>
                            <div className="text-base">
                                <p className="inline text-darkpink">▶</p> Discuss the pages you've just visited with others.
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg md:w-[30%] max-md:mb-5 p-2 md:p-3 border-gray-300 border-2">
                        <div className="font-rubik font-bold  text-lg sm:text-2xl text-center mb-2 rounded-lg text-white bg-gradient-to-r from-lightbrown to-darkviolet">
                            Designers
                        </div>
                        <div className="text-base sm:text-base mb-2 text-gray-500">
                            People who need to gather references for their work
                        </div>
                        <div className="bg-white rounded-lg">
                            <div className="text-base">
                                <p className="inline text-lightbrown">▶</p> Neatly organize a lot of reference webpages.
                            </div>
                            <div className="text-base">
                                <p className="inline text-lightbrown">▶</p> Write memos about your new ideas related to the reference pages.
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg md:w-[30%] p-2 md:p-3 border-gray-300 border-2">
                        <div className="font-rubik font-bold text-lg sm:text-2xl text-center mb-2 rounded-lg text-white bg-gradient-to-r from-darkviolet to-pink">
                            Experts
                        </div>
                        <div className="text-base sm:text-base mb-2 text-gray-500">
                            People who need to constantly study their field
                        </div>
                        <div className="bg-white rounded-lg">
                            <div className="text-base">
                                <p className="inline text-darkviolet">▶</p> Save webpages with detailed information directly in your browser.
                            </div>
                            <div className="text-base">
                                <p className="inline text-darkviolet">▶</p> Write down insights on webpages as they come to mind.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}