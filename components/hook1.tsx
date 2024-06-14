'use client'

export default function Hook1() {
    return (
        <section className="relative">
            {/* Section content */}
            <div className="mx-5 md:mx-auto max-w-3xl" >
                <div className="md:text-center text-2xl mb-[1.5rem] md:mb-[3rem]" data-aos="zoom-y-out">
                    Do you use a separate app to write and share about web pages?
                </div>
                <div className="md:text-center text-lg text-gray-600" data-aos="zoom-y-out" data-aos-delay="300">
                    Writing within this browser is a better way to keep memos or share web pages.
                </div>
            </div >
        </section>
    )
}