'use client'


export default function Users() {
    return (
        <section className='relative'>
            <div className="mt-[5rem] md:mt-[10rem] px-5 md:mx-auto max-w-5xl">
                <div className='md:text-center text-gray-800 font-extrabold leading-tighter tracking-tighter md:text-center text-2xl md:text-4xl mb-[2rem] md:mb-[3rem]' data-aos="zoom-y-out">
                    Who can gain the most benefit from the piazza?
                </div>
                <div className="flex md:flex-row max-md:flex-col justify-between w-full" data-aos="zoom-y-out">
                    <div className="rounded-lg md:w-[30%] max-md:mb-5 p-2 md:p-3 border-gray-300 border-2">
                        <div className="font-extrabold text-lg sm:text-2xl text-center mb-2 bg-brown rounded-lg text-white">
                            Students
                        </div>
                        <div className="text-base sm:text-base mb-2 text-gray-500">
                            Curious people who love to learn new things on the internet
                        </div>
                        <div className="bg-white rounded-lg">
                            <div className="text-base">
                                <p className="inline text-brown">▶</p> Save memos and tags on web pages to organize the information you've learned.
                            </div>
                            <div className="text-base">
                                <p className="inline text-brown">▶</p> Discuss the web pages you've just visited with others.
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg md:w-[30%] max-md:mb-5 p-2 md:p-3 border-gray-300 border-2">
                        <div className="font-extrabold text-lg sm:text-2xl text-center mb-2 bg-darkpink rounded-lg text-white">
                            Designers
                        </div>
                        <div className="text-base sm:text-base mb-2 text-gray-500">
                            People who need to gather references for their work
                        </div>
                        <div className="bg-white rounded-lg">
                            <div className="text-base">
                                <p className="inline text-darkpink">▶</p> Neatly organize a lot of reference web pages.
                            </div>
                            <div className="text-base">
                                <p className="inline text-darkpink">▶</p> Write memos about your new ideas related to the reference pages.
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg md:w-[30%] p-2 md:p-3 border-gray-300 border-2">
                        <div className="font-extrabold text-lg sm:text-2xl text-center mb-2 bg-darkviolet rounded-lg text-white">
                            Experts
                        </div>
                        <div className="text-base sm:text-base mb-2 text-gray-500">
                            People who need to constantly study their field
                        </div>
                        <div className="bg-white rounded-lg">
                            <div className="text-base">
                                <p className="inline text-darkviolet">▶</p> Save web pages with important information directly in your browser.
                            </div>
                            <div className="text-base">
                                <p className="inline text-darkviolet">▶</p> Write down insights immediately as they come to mind while reading a web page.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}