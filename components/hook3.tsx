'use client'

export default function Hook2() {
    return (
        <section className="relative">
            {/* Section content */}
            < div className="mt-[5rem] mx-5 md:mx-auto max-w-3xl md:flex md:flex-row md:items-center" >
                {/* Hook */}
                < div className="md:w-full mx-auto mb-10 md:mb-0" >
                    <div className="md:text-right text-2xl mb-[1.5rem] md:mb-[3rem]" data-aos="zoom-y-out">
                        Do you ever forget what a web page was about after saving it with a bookmark?
                    </div>
                    <div className="md:text-right text-lg text-gray-600" data-aos="zoom-y-out" data-aos-delay="300">
                        Piazza allows you to save web pages with tags and memos.
                    </div>
                </div >
                {/* Img */}
                < div className="md:w-full" data-aos="zoom-y-out">
                    <video loop controls autoPlay playsInline muted className='max-md:mx-auto md:ml-auto md:w-img w-smimg md:h-img h-smimg' >
                        <source src="/videos/home-tags.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div >
            </div >
        </section>
    )
}