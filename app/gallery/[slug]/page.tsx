import Image from 'next/image'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default async function GalleryPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const events = [
        {
            src: "/events/preexam.jpg", alt: "SANKALPA Activity 1", name: "প্রাক পরীক্ষা প্রস্তুতি", images: [
                "/events/exam/1.jpg",
                "/events/exam/2.jpg",
                "/events/exam/3.jpg",
                "/events/exam/4.jpg",
                "/events/exam/5.jpg",
                "/events/exam/6.jpg",
                "/events/exam/7.jpg",
                "/events/exam/8.jpg",
                "/events/exam/9.jpg",

            ]
        },
        {
            src: "/placeholder.svg?height=300&width=400", alt: "SANKALPA Activity 2", name: "দু'মুঠোর সঙ্কল্প", images: [
                "/events/food/1.jpg",
                "/events/food/4.jpg",
                "/events/food/5.jpg",
                "/events/food/6.jpg",
                "/events/food/7.jpg",
                "/events/food/8.jpg",
                "/events/food/9.jpg",
                "/events/food/2.jpg",
                "/events/food/3.jpg",

            ]
        },
        {
            src: "/events/sobujayon/2.jpg", alt: "SANKALPA Activity 3", name: "সবুজায়নের সঙ্কল্প", images: [
                "/events/sobujayon/1.jpg",
                "/events/sobujayon/2.jpg",
                "/events/sobujayon/3.jpg",
                "/events/sobujayon/4.jpg",
                "/events/sobujayon/5.jpg",
                "/events/sobujayon/6.jpg",
                "/events/sobujayon/7.jpg",
                "/events/sobujayon/8.jpg",
                "/events/sobujayon/9.jpg",
                "/events/sobujayon/10.jpg",
                "/events/sobujayon/11.jpg",
            ]
        },
        {
            src: "/events/sobujayon/1.jpg", alt: "SANKALPA Activity 4", name: "বিনা পয়সার বাজার", images: [
                "/events/bazar/1.jpg",
                "/events/bazar/2.jpg",
                "/events/bazar/3.jpg",
                "/events/bazar/4.jpg",
                "/events/bazar/5.jpg",
                "/events/bazar/6.jpg",
                "/events/bazar/7.jpg",
                "/events/bazar/8.jpg",
                "/events/bazar/9.jpg",
                "/events/bazar/10.jpg",
                "/events/bazar/11.jpg",
                "/events/bazar/12.jpg",

            ]
        },
        {
            src: "/placeholder.svg?height=300&width=400", alt: "SANKALPA Activity 5", name: "শিক্ষা সামগ্রী প্রদান", images: [
                "/events/study/1.jpg",
                "/events/study/2.jpg",
                "/events/study/3.jpg",
                "/events/study/4.jpg",
                "/events/study/5.jpg",
                "/events/study/6.jpg",
                "/events/study/7.jpg",
                "/events/study/8.jpg",
                "/events/study/9.jpg",
                "/events/study/10.jpg",
                "/events/study/11.jpg",
                "/events/study/12.jpg",
                "/events/study/13.jpg",
                "/events/study/14.jpg",
                "/events/study/15.jpg",
                "/events/study/16.jpg",

            ]
        },
        {
            src: "/placeholder.svg?height=300&width=400", alt: "SANKALPA Activity 9", name: "সচেতনতামূলক প্রচারাভিযান", images: [
                "/events/prochar/1.jpg",
                "/events/prochar/2.jpg",
                "/events/prochar/3.jpg",
                "/events/prochar/4.jpg",
                "/events/prochar/5.jpg",
                "/events/prochar/6.jpg",

            ]
        },
        {
            src: "/placeholder.svg?height=300&width=400", alt: "SANKALPA Activity 9", name: "জীবাণুনাশের সঙ্কল্প (স্যানিটাইজেশন)", images: [
                "/events/jibanu/1.jpg",
                "/events/jibanu/2.jpg",
                "/events/jibanu/3.jpg",
                "/events/jibanu/4.jpg",
                "/events/jibanu/5.jpg",
                "/events/jibanu/6.jpg",

            ]
        },

        {
            src: "/placeholder.svg?height=300&width=400", alt: "SANKALPA Activity 8", name: "সঙ্কল্প পরিধান (নুতন- দূর্গোৎসবের প্রাক্কালে)", images: ["/events/poridhan/1.jpg",
                "/events/poridhan/2.jpg",
                "/events/poridhan/3.jpg",
                "/events/poridhan/4.jpg",
                "/events/poridhan/5.jpg",
                "/events/poridhan/6.jpg",
                "/events/poridhan/7.jpg",
                "/events/poridhan/8.jpg",
                "/events/poridhan/9.jpg",
                "/events/poridhan/10.jpg",
                "/events/poridhan/11.jpg",
                "/events/poridhan/12.jpg",
                "/events/poridhan/13.jpg",]
        },
        {
            src: "/placeholder.svg?height=300&width=400", alt: "SANKALPA Activity 7", name: "শীতবস্ত্র প্রদান", images: [
                "/events/winterwear/1.jpg",
                "/events/winterwear/2.jpg",
                "/events/winterwear/3.jpg",
                "/events/winterwear/4.jpg",
                "/events/winterwear/5.jpg",
                "/events/winterwear/6.jpg",
                "/events/winterwear/7.jpg",
                "/events/winterwear/8.jpg",
                "/events/winterwear/9.jpg",

            ]
        },
        {
            src: "/placeholder.svg?height=300&width=400", alt: "SANKALPA Activity 6", name: "সাংস্কৃতিক অনুষ্ঠান", images: [
                "/events/function/1.jpg",
                "/events/function/2.jpg",
                "/events/function/3.jpg",
                "/events/function/4.jpg",
                "/events/function/5.jpg",
                "/events/function/6.jpg",
                "/events/function/7.jpg",
                "/events/function/8.jpg",
                "/events/function/9.jpg",
                "/events/function/10.jpg",
                "/events/function/11.jpg",

            ]
        },
        {
            src: "/events/dress/1.jpg", alt: "SANKALPA Activity 9", name: "সঙ্কল্প পরিধান (পুরাতন- শীতকালীন)", images: [
                "/events/dress/1.jpg",
                "/events/dress/2.jpg",
                "/events/dress/3.jpg",
                "/events/dress/4.jpg",
                "/events/dress/5.jpg",
                "/events/dress/6.jpg",
                "/events/dress/7.jpg",
                "/events/dress/8.jpg",
                "/events/dress/9.jpg",
                "/events/dress/10.jpg",
                "/events/dress/11.jpg",
                "/events/dress/12.jpg",
                "/events/dress/13.jpg",
                "/events/dress/14.jpg",

            ]
        },
        {
            src: "/events/prize/1.jpg", alt: "SANKALPA Activity 9", name: "পুরস্কার বিতরণ", images: [
                "/events/prize/1.jpg",
                "/events/prize/2.jpg",
                "/events/prize/3.jpg",
                "/events/prize/4.jpg",
                "/events/prize/5.jpg",
                "/events/prize/6.jpg",
                "/events/prize/7.jpg",
                "/events/prize/8.jpg",
                "/events/prize/9.jpg",
                "/events/prize/10.jpg",

            ]
        },
    ]
    const slug = parseInt((await params).slug, 10)
    return (

        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow mt-10">
                <section className="py-16 px-4">
                    <div className="container mx-auto">
                        <h1 className="text-4xl font-bold mb-8 text-center">
                            &quot;{events[slug].name}&quot;</h1>
                        <div className="flex flex-wrap justify-center gap-4">
                            {(events[slug]).images.map((image, index) => (
                                <div key={index} className="relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-48 sm:h-48 md:h-64 lg:h-72">
                                    <Image
                                        src={image}
                                        alt={`Image ${index + 1}`}
                                        fill
                                        className="object-cover rounded-lg shadow-md"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

