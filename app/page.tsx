"use client"
import Image from 'next/image'
import Header from '@/app/components/Header'
import Link from 'next/link'
import { useState, useEffect } from 'react';
import { FaYoutube, FaFacebook, FaInstagram, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Phone, Mail } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        {/* <DonateNowSection /> */}
        <AboutSection />
        <MissionSection />
        <GallerySection />
        <LocationSection />
        <DonateSection />
      </main>
      <Footer />
    </div>
  )
}

function HeroSection() {
  const images = [
    "/herobg/1.jpg",
    "/herobg/2.jpg",
    "/herobg/3.jpg",
    "/herobg/4.jpg",
    "/herobg/5.jpg",
    "/herobg/6.jpg",
    "/herobg/7.jpg",
    "/herobg/8.jpg",
    "/herobg/9.jpg",
    "/herobg/10.jpg",
    "/herobg/11.jpg",
    "/herobg/12.jpg",
    "/herobg/13.jpg",
    "/herobg/14.jpg",
    "/herobg/15.jpg",
    "/herobg/16.jpg",
    "/herobg/17.jpg",
    "/herobg/18.jpg",
    "/herobg/19.jpg",
    "/herobg/20.jpg",
    "/herobg/21.jpg",
    "/herobg/22.jpg",
    "/herobg/23.jpg",
    "/herobg/24.jpg",
    "/herobg/25.jpg",
    "/herobg/26.jpg",
    "/herobg/27.jpg",
    "/herobg/28.jpg",
    "/herobg/29.jpg",
    "/herobg2/1.jpg",
    "/herobg2/2.jpg",
    "/herobg2/3.jpg",
    "/herobg2/4.jpg",
    "/herobg2/5.jpg",
    "/herobg2/6.jpg",
    "/herobg2/7.jpg",
    "/herobg2/8.jpg",
    "/herobg2/9.jpg",
    "/herobg2/10.jpg",
    "/herobg2/11.jpg",
    "/herobg2/12.jpg",
    "/herobg2/13.jpg",
    "/herobg2/14.jpg",
    "/herobg2/15.jpg",
    "/herobg2/16.jpg",
  ];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2000); // Change image every 2 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  const handlePrev = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  return (
    <section id="home" className="relative h-[70vh] mt-[10vh] md:h-[80vh] flex items-center justify-center text-black overflow-hidden">
      <Image
        src={images[currentImage]}
        alt="SANKALPA Hero Image"
        fill
        className="object-cover transition-opacity duration-1000"
      />
      <div className="absolute inset-0 bg-white opacity-40"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-8xl font-[800] mb-4 text-[#0f2b40] drop-shadow-lg" style={{ fontFamily: "Zen Antique, serif" }}>SANKALPA</h1>
        <p className="text-xl md:text-xl text-[#2a6c9e] font-semibold drop-shadow-sm">A Non-Profitable Public Charitable Trust</p>
        <Link href="/donate">
          <div className="inline-block bg-[#046A38] text-white py-2 px-6 rounded-lg hover:bg-green-700 transition duration-300 mt-4 font-semibold ">
            Donate Now
          </div>
        </Link>
      </div>
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
        <button onClick={handlePrev} className="text-white bg-black bg-opacity-50 p-2 rounded-full">
          <FaArrowLeft size={24} />
        </button>
      </div>
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
        <button onClick={handleNext} className="text-white bg-black bg-opacity-50 p-2 rounded-full">
          <FaArrowRight size={24} />
        </button>
      </div>
    </section>
  )
}



function AboutSection() {
  return (
    <section id="about" className="py-16 px-4 bg-white text-black">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">About SANKALPA</h2>
        <p className="text-lg mb-4">
          The name of the Trust is &quot;SANKALPA&quot; (A Non-Profitable Non-Commercial Public Charitable Trust) and the Office of the Trust is situated at: Village Yugalpara, Post Office Aranghata, Police Station Dhantala, District- Nadia, Pin-741501, West Bengal, which may be shifted from time to time to such other place or places as the Trustees may deem fit and proper at their discretion only for official correspondence and it is not the Trust property.
        </p>
        <p className="text-lg mb-4">
          SANKALPA is a charitable Trust for promoting harmonious renaissance of ideas through simple technological initiatives in relatively backward and underdeveloped regions, for enhancing capabilities of local development organizations and providing financial inclusions for the rural people at large for greater financial sustenance and other charitable objects and purposes in India, hereinafter expressed for charitable purpose including relief to the poor, education, medical relief and advancement of any other object of general public utility not involving or carrying on of any activity for profit all over India and for this he is desirous of setting up a Public Charitable Trust for the advancement of the said object in India.
        </p>
        <p className="text-lg mb-4 font-semibold flex justify-between">
          <div> (Registration No. IV-1902-01361/2023)</div>
          <div> (NITI Aayog No. WB/2023/0367402)</div>
          <div> (80G - ABHTS6398HF20231)</div>
          <div> (12A - ABHTS6398HE20231)</div>
        </p>
      </div>
    </section>
  )
}

function MissionSection() {
  const objectives = [
    "Promote technological initiatives in underdeveloped regions",
    "Enhance capabilities of local development organizations",
    "Provide financial inclusions for rural people",
    "Offer relief to the poor",
    "Support education initiatives",
    "Provide medical relief",
    "Advance objects of general public utility",
    "To make women empowerment with environmental issues: which helps them to take their own decisions by breaking all personal limitations of the society and family.",
    "To create awareness on Digital India for reducing environmental degradation.",
    "To help the physically and financially weak and needy students, members, and other people of all communities. To help the aged, sick, helpless person through sports like yoga, physiotherapy, physical training, martial arts, etc.",
    "To arrange and provide medical aid and other assistance necessary for living to the needy people who are incapable or handicapped or mentally/physically retarded and financially unfit.",
    "Work on conservations of land, river, wetlands, water bodies, forests, land habitats and water habitats and flaura & fauna in India.",
    "Envisioned to preserve India's rich natural heritage. Work jointly with public and private parties for conserve of our rich biodiversity and wild life among people from various fields in life and students.",
    "To spread and promote awareness about importance of conservation, Eco- system and sustainable likelihood.",
    "To help promoting and selling products of self-help group of indigenous habitants from various part of the country also organize eco tours and walk to spread awareness about our diversity.",
    "Take independent projects on nature conservation, biodiversity and sustainable livelihood. Our focus is on strengthening sustainable ecosystems that will continue to serve wildlife and communities in the longterm. To achieve this, we work closely with government bodies and local NGO's, providing funding, technical support and consultancy",
    "Trust shall work with-Non-Government Organizations (NGOs), Community based Organizations (CBOs), Government agencies (such as national parks agencies), Research institutions for conservation of nature and wild, promoting sustainable conservation of nature and wild, promoting sustainable conservation and livelihood and protect our biodiversity."
  ]

  return (
    <section id="mission" className="py-16 px-4 bg-gray-200 text-black">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Mission & Objectives</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {objectives.map((objective, index) => (
            <li key={index} className="flex items-start">
              <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>{objective}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function LocationSection() {
  return (
    <section id="location" className="py-16 px-4 bg-white text-black">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Location</h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <div className="mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.123456789012!2d88.608694!3d23.240472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1234567890123456!2sSANKALPA!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin&maptype=satellite"
                width="100%"
                height="300"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold mb-4">Office Address:</h3>
            <p className="mb-2">Village: Aranghata Jugalpara</p>
            <p className="mb-2">Post Office: Aranghata</p>
            <p className="mb-2">Police Station: Dhantala</p>
            <p className="mb-2">District: Nadia</p>
            <p className="mb-2">State: West Bengal</p>
            <p className="mb-2">Pin: 741501</p>
            <p className="mt-4 text-sm text-gray-600">
              Note: This address is for official correspondence only and is not the Trust property.
            </p>
            <p className="mt-4">
              <a href="https://maps.app.goo.gl/tHfreF9jfHHGVpna6?g_st=iw" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                View on Google Maps
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function GallerySection() {
  const events = [
    { src: "/events/preexam.jpg", alt: "SANKALPA Activity 1", name: "প্রাক পরীক্ষা প্রস্তুতি" },
    { src: "/events/food/1.jpg", alt: "SANKALPA Activity 2", name: "দু'মুঠোর সঙ্কল্প" },
    { src: "/events/sobujayon/11.jpg", alt: "SANKALPA Activity 3", name: "সবুজায়নের সঙ্কল্প" },
    { src: "/events/bazar/6.jpg", alt: "SANKALPA Activity 4", name: "বিনা পয়সার বাজার" },
    { src: "/events/study/6.jpg", alt: "SANKALPA Activity 5", name: "শিক্ষা সামগ্রী প্রদান" },
    { src: "/events/prochar/2.jpg", alt: "SANKALPA Activity 9", name: "সচেতনতামূলক প্রচারাভিযান" },
    { src: "/events/jibanu/4.jpg", alt: "SANKALPA Activity 9", name: "জীবাণুনাশের সঙ্কল্প (স্যানিটাইজেশন)" },
    { src: "/events/poridhan/4.jpg", alt: "SANKALPA Activity 8", name: "সঙ্কল্প পরিধান (নুতন- দূর্গোৎসবের প্রাক্কালে)" },
    { src: "/events/winterwear/1.jpg", alt: "SANKALPA Activity 7", name: "শীতবস্ত্র প্রদান" },
    { src: "/events/function/8.jpg", alt: "SANKALPA Activity 6", name: "সাংস্কৃতিক অনুষ্ঠান" },
    { src: "/events/dress/2.jpg", alt: "SANKALPA Activity 9", name: "সঙ্কল্প পরিধান (পুরাতন- শীতকালীন)" },
    { src: "/events/prize/10.jpg", alt: "SANKALPA Activity 9", name: "পুরস্কার বিতরণ" },
  ]

  return (
    <section id="gallery" className="py-16 px-4 bg-white text-black">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Work in Action</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {events.map((event, index) => (
            <Link key={index} href="/gallery/[slug]" as={`/gallery/${index}`}>
              <div key={index} className="relative h-64 rounded-md overflow-hidden">
                <Image
                  src={event.src}
                  alt={event.alt}
                  fill
                  className="object-cover rounded-lg shadow-md"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-md">
                  <span className="text-white text-center px-2">{event.name}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {/* <div className="text-center mt-5">
          <Link href="/gallery" className="inline-block bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition duration-300">
            View All Events
          </Link>
        </div> */}
      </div>
    </section>
  )
}

function DonateSection() {
  return (
    <section className="py-16 px-4 bg-green-100 text-black">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Support Our Cause</h2>
        <p className="text-lg mb-8">
          Your generous donations help us continue our mission to provide relief to the poor, support education, offer medical relief, and advance other charitable purposes.
        </p>
        <Link href="/donate">
          <div className="inline-block bg-[#046A38] text-white py-2 px-6 rounded-lg hover:bg-green-700 transition duration-300">
            Donate Now
          </div>
        </Link>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-black text-white py-8" id="contact">
      <div className="container mx-auto text-center">
        <div className="flex mb-4 items-center justify-center">
          <Image src="/sankalpa.png" alt="SANKALPA Logo" width={70} height={70} className="" />
        </div>
        <div className="text-white px-4 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg mb-4 flex justify-center items-center gap-2"><Phone /> <a href="tel:+918768908769" className="text-blue-500 underline">+91 87689 08769</a></p>
          <p className="text-lg mb-4 flex justify-center items-center gap-2"><Mail /> <a href="mailto:officialsankalpa@gmail.com" className="text-blue-500 underline">officialsankalpa@gmail.com</a></p>
        </div>
        <div className="flex justify-center space-x-4 mb-2">
          <Link href="https://youtube.com/@sankalpa-nh5yo?si=llz7wTW9CtkzrEb3" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="text-red-500 hover:text-red-700" size={32} />
          </Link>
          <Link href="https://www.facebook.com/Sankalpian?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-blue-500 hover:text-blue-700" size={32} />
          </Link>
          <Link href="https://www.instagram.com/sankalpa2014" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-pink-500 hover:text-pink-700" size={32} />
          </Link>
        </div>
        <p className="mt-8">&copy; {new Date().getFullYear()} SANKALPA. All rights reserved.</p>
      </div>
    </footer>
  )
}

