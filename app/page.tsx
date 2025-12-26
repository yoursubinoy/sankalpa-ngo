"use client";
import Image from "next/image";
import Header from "@/app/components/Header";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import { Phone, Mail } from "lucide-react";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";
import { useCounter } from "@/app/hooks/useCounter";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <MissionSection />
        <GallerySection />
        <ImpactSection />
        <LocationSection />
        <DonateSection />
      </main>
      <Footer />
    </div>
  );
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
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        setIsTransitioning(false);
      }, 500); // Half of transition duration
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  const handlePrev = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImage(
        (prevImage) => (prevImage - 1 + images.length) % images.length
      );
      setIsTransitioning(false);
    }, 300);
  };

  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <section
      id="home"
      className="relative h-[70vh] mt-[10vh] md:h-[80vh] flex items-center justify-center text-black dark:text-white overflow-hidden"
    >
      <Image
        src={images[currentImage]}
        alt="SANKALPA Hero Image"
        fill
        className={`object-cover transition-all duration-1000 ${
          isTransitioning ? "opacity-0 scale-110" : "opacity-100 scale-100"
        }`}
      />
      <div className="absolute inset-0 bg-white dark:bg-black opacity-40"></div>
      <div className="relative z-10 text-center px-4 flex flex-col items-center">
        <h1
          className="text-5xl md:text-8xl font-[800] mb-4 text-slate-800 dark:text-emerald-50 drop-shadow-2xl animate-fade-in select-none"
          style={{ fontFamily: "Zen Antique, serif" }}
        >
          SANKALPA
        </h1>
        <p className="max-w-[80%] text-base md:text-xl text-slate-700 dark:text-emerald-100 font-bold drop-shadow-lg animate-fade-in animate-delay-300 select-none">
          A Non-Profitable Public Charitable Trust
        </p>
        <Link href="/donate">
          <div className="inline-block bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 px-8 rounded-lg hover:from-emerald-700 hover:to-teal-700 shadow-lg hover:shadow-xl transition-all duration-300 mt-4 font-semibold animate-fade-in animate-delay-500 hover-scale hover-glow select-none cursor-pointer">
            Donate Now →
          </div>
        </Link>
      </div>
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
        <button
          onClick={handlePrev}
          className="text-white bg-black bg-opacity-50 p-2 rounded-full"
        >
          <FaArrowLeft size={24} />
        </button>
      </div>
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
        <button
          onClick={handleNext}
          className="text-white bg-black bg-opacity-50 p-2 rounded-full"
        >
          <FaArrowRight size={24} />
        </button>
      </div>
    </section>
  );
}

function AboutSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: subtitleRef, isVisible: subtitleVisible } = useScrollAnimation();
  const { ref: para1Ref, isVisible: para1Visible } = useScrollAnimation();
  const { ref: para2Ref, isVisible: para2Visible } = useScrollAnimation();
  const { ref: para3Ref, isVisible: para3Visible } = useScrollAnimation();

  return (
    <section
      id="about"
      className="py-20 px-4 relative pattern-slate text-slate-800"
    >
      <div className="container mx-auto relative z-10">
        <h2
          ref={titleRef}
          className={`text-4xl md:text-5xl font-bold mb-12 text-center text-emerald-700 animate-on-scroll select-none ${
            titleVisible ? "visible animate-slide-up" : ""
          }`}
        >
          About SANKALPA
        </h2>
        <p
          ref={subtitleRef}
          className={`text-center text-lg text-slate-600 mb-12 max-w-3xl mx-auto animate-on-scroll select-none ${
            subtitleVisible ? "visible animate-fade-in" : ""
          }`}
        >
          Dedicated to empowering communities and preserving nature since 2014
        </p>

        <div className="max-w-4xl mx-auto mb-12">
          <div
            ref={para1Ref}
            className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-6 border-l-4 border-emerald-600 animate-on-scroll ${
              para1Visible ? "visible animate-slide-up" : ""
            }`}
          >
            <h3 className="text-2xl font-black text-emerald-700 mb-4 select-none">
              Our Identity
            </h3>
            <p className="text-lg leading-relaxed select-none">
              The name of the Trust is &quot;SANKALPA&quot; (A Non-Profitable
              Non-Commercial Public Charitable Trust) and the Office of the
              Trust is situated at: Village Yugalpara, Post Office Aranghata,
              Police Station Dhantala, District- Nadia, Pin-741501, West Bengal,
              which may be shifted from time to time to such other place or
              places as the Trustees may deem fit and proper at their discretion
              only for official correspondence and it is not the Trust property.
            </p>
          </div>

          <div
            ref={para2Ref}
            className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-6 border-l-4 border-teal-600 animate-on-scroll ${
              para2Visible ? "visible animate-slide-up" : ""
            }`}
          >
            <h3 className="text-2xl font-black text-teal-700 mb-4 select-none">
              Our Purpose
            </h3>
            <p className="text-lg leading-relaxed select-none">
              SANKALPA is a charitable Trust for promoting harmonious
              renaissance of ideas through simple technological initiatives in
              relatively backward and underdeveloped regions, for enhancing
              capabilities of local development organizations and providing
              financial inclusions for the rural people at large for greater
              financial sustenance and other charitable objects and purposes in
              India, hereinafter expressed for charitable purpose including
              relief to the poor, education, medical relief and advancement of
              any other object of general public utility not involving or
              carrying on of any activity for profit all over India and for this
              he is desirous of setting up a Public Charitable Trust for the
              advancement of the said object in India.
            </p>
          </div>
        </div>

        <div
          ref={para3Ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto animate-on-scroll ${
            para3Visible ? "visible" : ""
          }`}
        >
          <div
            className={`bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg p-4 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
              para3Visible ? "animate-scale-in" : "opacity-0"
            }`}
            style={{ animationDelay: "0ms" }}
          >
            <div className="font-bold text-sm text-slate-600 mb-1 select-none">
              Registration No.
            </div>
            <div className="text-emerald-700 font-semibold select-none">
              IV-1902-01361/2023
            </div>
          </div>
          <div
            className={`bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg p-4 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
              para3Visible ? "animate-scale-in" : "opacity-0"
            }`}
            style={{ animationDelay: "100ms" }}
          >
            <div className="font-bold text-sm text-slate-600 mb-1">
              NITI Aayog No.
            </div>
            <div className="text-teal-700 font-semibold">WB/2023/0367402</div>
          </div>
          <div
            className={`bg-gradient-to-br from-cyan-50 to-emerald-50 rounded-lg p-4 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
              para3Visible ? "animate-scale-in" : "opacity-0"
            }`}
            style={{ animationDelay: "200ms" }}
          >
            <div className="font-bold text-sm text-slate-600 mb-1">80G</div>
            <div className="text-cyan-700 font-semibold">ABHTS6398HF20231</div>
          </div>
          <div
            className={`bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg p-4 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
              para3Visible ? "animate-scale-in" : "opacity-0"
            }`}
            style={{ animationDelay: "300ms" }}
          >
            <div className="font-bold text-sm text-slate-600 mb-1">12A</div>
            <div className="text-cyan-700 font-semibold">ABHTS6398HE20231</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MissionSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: subtitleRef, isVisible: subtitleVisible } = useScrollAnimation();
  const { ref: listRef, isVisible: listVisible } =
    useScrollAnimation<HTMLUListElement>();

  const objectives = [
    "To make women empowerment with environmental issues: which helps them to take their own decisions by breaking all personal limitations of the society and family.",
    "To create awareness on Digital India for reducing environmental degradation.",
    "To help the physically and financially weak and needy students, members, and other people of all communities. To help the aged, sick, helpless person through sports like yoga, physiotherapy, physical training, martial arts, etc.",
    "To arrange and provide medical aid and other assistance necessary for living to the needy people who are incapable or handicapped or mentally/physically retarded and financially unfit.",
    "Work on conservations of land, river, wetlands, water bodies, forests, land habitats and water habitats and flaura & fauna in India.",
    "Envisioned to preserve India's rich natural heritage. Work jointly with public and private parties for conserve of our rich biodiversity and wild life among people from various fields in life and students.",
    "To spread and promote awareness about importance of conservation, Eco- system and sustainable likelihood.",
    "To help promoting and selling products of self-help group of indigenous habitants from various part of the country also organize eco tours and walk to spread awareness about our diversity.",
    "Take independent projects on nature conservation, biodiversity and sustainable livelihood. Our focus is on strengthening sustainable ecosystems that will continue to serve wildlife and communities in the longterm. To achieve this, we work closely with government bodies and local NGO's, providing funding, technical support and consultancy",
    "Trust shall work with-Non-Government Organizations (NGOs), Community based Organizations (CBOs), Government agencies (such as national parks agencies), Research institutions for conservation of nature and wild, promoting sustainable conservation of nature and wild, promoting sustainable conservation and livelihood and protect our biodiversity.",
  ];

  return (
    <section
      id="mission"
      className="py-20 px-4 relative pattern-emerald text-slate-800"
    >
      <div className="container mx-auto relative z-10">
        <h2
          ref={titleRef}
          className={`text-4xl md:text-5xl font-bold mb-6 text-center text-emerald-700 animate-on-scroll select-none ${
            titleVisible ? "visible animate-slide-up" : ""
          }`}
        >
          Our Mission & Objectives
        </h2>
        <p
          ref={subtitleRef}
          className={`text-center text-lg text-slate-600 mb-12 max-w-3xl mx-auto animate-on-scroll select-none ${
            subtitleVisible ? "visible animate-fade-in" : ""
          }`}
        >
          Empowering communities through sustainable development, education, and
          environmental conservation
        </p>
        <ul
          ref={listRef}
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto animate-on-scroll ${
            listVisible ? "visible animate-slide-up" : ""
          }`}
        >
          {objectives.map((objective, index) => (
            <li
              key={index}
              className="flex items-start bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-emerald-100"
            >
              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mr-4 mt-1">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <span className="text-slate-700 leading-relaxed select-none">
                {objective}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// Counter Card Component
function CounterCard({
  number,
  suffix,
  label,
  color,
  index,
  isVisible,
}: {
  number: number;
  suffix: string;
  label: string;
  color: string;
  index: number;
  isVisible: boolean;
}) {
  const count = useCounter({
    end: number,
    duration: 2500,
    isVisible: isVisible,
  });

  return (
    <div
      className={`bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 ${
        isVisible ? "animate-scale-in" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div
        className={`text-5xl md:text-6xl font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent mb-2`}
      >
        {count}
        {suffix}
      </div>
      <div className="text-slate-600 font-medium text-sm md:text-base select-none">
        {label}
      </div>
    </div>
  );
}

function ImpactSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: subtitleRef, isVisible: subtitleVisible } = useScrollAnimation();
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();

  const stats = [
    {
      number: 5000,
      suffix: "+",
      label: "Lives Touched",
      color: "from-blue-500 to-cyan-500",
    },
    {
      number: 150,
      suffix: "+",
      label: "Events Organized",
      color: "from-green-500 to-emerald-500",
    },
    {
      number: 200,
      suffix: "+",
      label: "Active Volunteers",
      color: "from-purple-500 to-pink-500",
    },
    {
      number: 25,
      suffix: "+",
      label: "Communities Served",
      color: "from-orange-500 to-red-500",
    },
  ];

  const impacts = [
    {
      title: "Education Support",
      description:
        "Provided educational materials and scholarships to underprivileged students",
      icon: "📚",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Environmental Care",
      description:
        "Planted trees and conducted awareness programs for sustainable living",
      icon: "🌱",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Community Health",
      description: "Organized medical camps and health awareness programs",
      icon: "❤️",
      color: "from-red-500 to-pink-500",
    },
    {
      title: "Women Empowerment",
      description:
        "Skills training and support for women's financial independence",
      icon: "👩",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-emerald-50 text-slate-800">
      <div className="container mx-auto">
        <h2
          ref={titleRef}
          className={`text-4xl md:text-5xl font-bold mb-6 text-center text-emerald-700 animate-on-scroll select-none ${
            titleVisible ? "visible animate-slide-up" : ""
          }`}
        >
          Our Impact
        </h2>
        <p
          ref={subtitleRef}
          className={`text-center text-lg text-slate-600 mb-12 max-w-3xl mx-auto animate-on-scroll select-none ${
            subtitleVisible ? "visible animate-fade-in" : ""
          }`}
        >
          Creating lasting change in communities across West Bengal
        </p>

        {/* Statistics Section with Counter Effect */}
        <div
          ref={statsRef}
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 animate-on-scroll ${
            statsVisible ? "visible" : ""
          }`}
        >
          {stats.map((stat, index) => (
            <CounterCard
              key={index}
              number={stat.number}
              suffix={stat.suffix}
              label={stat.label}
              color={stat.color}
              index={index}
              isVisible={statsVisible}
            />
          ))}
        </div>

        <div
          ref={cardsRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-on-scroll ${
            cardsVisible ? "visible" : ""
          }`}
        >
          {impacts.map((impact, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group ${
                cardsVisible ? "animate-slide-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${impact.color} rounded-full flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                {impact.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3 select-none">
                {impact.title}
              </h3>
              <p className="text-slate-600 leading-relaxed select-none">
                {impact.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LocationSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: subtitleRef, isVisible: subtitleVisible } = useScrollAnimation();
  const { ref: mapRef, isVisible: mapVisible } = useScrollAnimation();
  const { ref: addressRef, isVisible: addressVisible } = useScrollAnimation();

  return (
    <section
      id="location"
      className="py-20 px-4 bg-gradient-to-b from-emerald-50 to-white text-slate-800"
    >
      <div className="container mx-auto relative z-10">
        <h2
          ref={titleRef}
          className={`text-4xl md:text-5xl font-bold mb-6 text-center text-emerald-700 animate-on-scroll select-none ${
            titleVisible ? "visible animate-slide-up" : ""
          }`}
        >
          Our Location
        </h2>
        <p
          ref={subtitleRef}
          className={`text-center text-lg text-slate-600 mb-12 max-w-3xl mx-auto animate-on-scroll select-none ${
            subtitleVisible ? "visible animate-fade-in" : ""
          }`}
        >
          Visit us or reach out for collaboration and support
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div
            ref={mapRef}
            className={`md:w-1/2 w-full animate-on-scroll ${
              mapVisible ? "visible animate-slide-in-left" : ""
            }`}
          >
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.123456789012!2d88.608694!3d23.240472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1234567890123456!2sSANKALPA!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin&maptype=satellite"
                width="100%"
                height="400"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div
            ref={addressRef}
            className={`md:w-1/2 w-full animate-on-scroll ${
              addressVisible ? "visible animate-slide-in-right" : ""
            }`}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-emerald-700">
                Office Address:
              </h3>
              <div className="space-y-3 text-slate-700">
                <p className="flex items-start">
                  <span className="font-semibold min-w-[120px]">Village:</span>
                  <span>Aranghata Jugalpara</span>
                </p>
                <p className="flex items-start">
                  <span className="font-semibold min-w-[120px]">
                    Post Office:
                  </span>
                  <span>Aranghata</span>
                </p>
                <p className="flex items-start">
                  <span className="font-semibold min-w-[120px]">
                    Police Station:
                  </span>
                  <span>Dhantala</span>
                </p>
                <p className="flex items-start">
                  <span className="font-semibold min-w-[120px]">District:</span>
                  <span>Nadia</span>
                </p>
                <p className="flex items-start">
                  <span className="font-semibold min-w-[120px]">State:</span>
                  <span>West Bengal</span>
                </p>
                <p className="flex items-start">
                  <span className="font-semibold min-w-[120px]">Pin:</span>
                  <span>741501</span>
                </p>
              </div>
              <div className="mt-6 p-4 bg-slate-50 rounded-lg">
                <p className="text-sm text-slate-600">
                  Note: This address is for official correspondence only and is
                  not the Trust property.
                </p>
              </div>
              <a
                href="https://maps.app.goo.gl/tHfreF9jfHHGVpna6?g_st=iw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
              >
                View on Google Maps →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GalleryItem({
  event,
  index,
}: {
  event: { src: string; alt: string; name: string };
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <Link href="/gallery/[slug]" as={`/gallery/${index}`}>
      <div
        ref={ref}
        className={`group relative h-72 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 animate-on-scroll ${
          isVisible ? "visible animate-fade-in" : ""
        }`}
      >
        <Image
          src={event.src}
          alt={event.alt}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end rounded-2xl group-hover:from-emerald-900/80 group-hover:via-teal-900/40 transition-all duration-500">
          <div className="p-6 w-full">
            <span className="text-white text-lg font-bold text-center block drop-shadow-lg group-hover:text-emerald-100 transition-colors duration-300 select-none">
              {event.name}
            </span>
            <div className="mt-2 h-1 w-0 bg-gradient-to-r from-emerald-400 to-teal-400 group-hover:w-full transition-all duration-500 mx-auto"></div>
          </div>
        </div>
      </div>
    </Link>
  );
}

function GallerySection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: subtitleRef, isVisible: subtitleVisible } = useScrollAnimation();

  const events = [
    {
      src: "/events/preexam.jpg",
      alt: "SANKALPA Activity 1",
      name: "প্রাক পরীক্ষা প্রস্তুতি",
    },
    {
      src: "/events/food/1.jpg",
      alt: "SANKALPA Activity 2",
      name: "দু'মুঠোর সঙ্কল্প",
    },
    {
      src: "/events/sobujayon/11.jpg",
      alt: "SANKALPA Activity 3",
      name: "সবুজায়নের সঙ্কল্প",
    },
    {
      src: "/events/bazar/6.jpg",
      alt: "SANKALPA Activity 4",
      name: "বিনা পয়সার বাজার",
    },
    {
      src: "/events/study/6.jpg",
      alt: "SANKALPA Activity 5",
      name: "শিক্ষা সামগ্রী প্রদান",
    },
    {
      src: "/events/prochar/2.jpg",
      alt: "SANKALPA Activity 9",
      name: "সচেতনতামূলক প্রচারাভিযান",
    },
    {
      src: "/events/jibanu/4.jpg",
      alt: "SANKALPA Activity 9",
      name: "জীবাণুনাশের সঙ্কল্প (স্যানিটাইজেশন)",
    },
    {
      src: "/events/poridhan/4.jpg",
      alt: "SANKALPA Activity 8",
      name: "সঙ্কল্প পরিধান (নুতন- দূর্গোৎসবের প্রাক্কালে)",
    },
    {
      src: "/events/winterwear/1.jpg",
      alt: "SANKALPA Activity 7",
      name: "শীতবস্ত্র প্রদান",
    },
    {
      src: "/events/function/8.jpg",
      alt: "SANKALPA Activity 6",
      name: "সাংস্কৃতিক অনুষ্ঠান",
    },
    {
      src: "/events/dress/2.jpg",
      alt: "SANKALPA Activity 9",
      name: "সঙ্কল্প পরিধান (পুরাতন- শীতকালীন)",
    },
    {
      src: "/events/prize/10.jpg",
      alt: "SANKALPA Activity 9",
      name: "পুরস্কার বিতরণ",
    },
  ];

  return (
    <section
      id="gallery"
      className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white text-slate-800"
    >
      <div className="container mx-auto">
        <h2
          ref={titleRef}
          className={`text-4xl md:text-5xl font-bold mb-6 text-center text-emerald-700 animate-on-scroll select-none ${
            titleVisible ? "visible animate-slide-up" : ""
          }`}
        >
          Our Work in Action
        </h2>
        <p
          ref={subtitleRef}
          className={`text-center text-lg text-slate-600 mb-12 max-w-3xl mx-auto animate-on-scroll select-none ${
            subtitleVisible ? "visible animate-fade-in" : ""
          }`}
        >
          Witness the impact of our initiatives across various communities
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {events.map((event, index) => (
            <GalleryItem key={index} event={event} index={index} />
          ))}
        </div>
        {/* <div className="text-center mt-5">
          <Link href="/gallery" className="inline-block bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition duration-300">
            View All Events
          </Link>
        </div> */}
      </div>
    </section>
  );
}

function DonateSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: paraRef, isVisible: paraVisible } = useScrollAnimation();
  const { ref: buttonRef, isVisible: buttonVisible } = useScrollAnimation();

  return (
    <section className="py-20 px-4 relative pattern-teal text-slate-800">
      <div className="container mx-auto text-center relative z-10 max-w-4xl">
        <h2
          ref={titleRef}
          className={`text-4xl md:text-5xl font-bold mb-6 text-emerald-700 animate-on-scroll ${
            titleVisible ? "visible animate-slide-up" : ""
          }`}
        >
          Support Our Cause
        </h2>
        <p
          ref={paraRef}
          className={`text-xl mb-10 leading-relaxed text-slate-700 animate-on-scroll ${
            paraVisible ? "visible animate-fade-in" : ""
          }`}
        >
          Your generous donations help us continue our mission to provide relief
          to the poor, support education, offer medical relief, and advance
          other charitable purposes. Every contribution makes a difference.
        </p>
        <Link href="/donate">
          <div
            ref={buttonRef}
            className={`inline-block bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-4 px-12 rounded-xl text-lg hover:from-emerald-700 hover:to-teal-700 shadow-xl hover:shadow-2xl transition-all duration-300 font-bold hover-scale hover-glow animate-on-scroll ${
              buttonVisible ? "visible animate-scale-in" : ""
            }`}
          >
            Donate Now →
          </div>
        </Link>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      className="bg-gradient-to-b from-slate-900 to-slate-950 text-slate-100 py-8"
      id="contact"
    >
      <div className="container mx-auto text-center">
        <div className="flex mb-4 items-center justify-center animate-scale-in">
          <Image
            src="/sankalpa.png"
            alt="SANKALPA Logo"
            width={70}
            height={70}
            className=""
          />
        </div>
        <div className="text-white px-4 rounded-lg animate-fade-in animate-delay-200">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg mb-4 flex justify-center items-center gap-2 transition-all duration-300 hover:scale-105">
            <Phone className="text-emerald-400" />{" "}
            <a
              href="tel:+918768908769"
              className="text-teal-400 hover:text-teal-300 underline transition-colors duration-300"
            >
              +91 87689 08769
            </a>
          </p>
          <p className="text-lg mb-4 flex justify-center items-center gap-2 transition-all duration-300 hover:scale-105">
            <Mail className="text-emerald-400" />{" "}
            <a
              href="mailto:officialsankalpa@gmail.com"
              className="text-teal-400 hover:text-teal-300 underline transition-colors duration-300"
            >
              officialsankalpa@gmail.com
            </a>
          </p>
        </div>
        <div className="flex justify-center space-x-4 mb-2 animate-slide-up animate-delay-400">
          <Link
            href="https://youtube.com/@sankalpa-nh5yo?si=llz7wTW9CtkzrEb3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube
              className="text-red-500 hover:text-red-600 transition-all duration-300 hover:scale-125"
              size={32}
            />
          </Link>
          <Link
            href="https://www.facebook.com/Sankalpian?mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook
              className="text-blue-500 hover:text-blue-600 transition-all duration-300 hover:scale-125"
              size={32}
            />
          </Link>
          <Link
            href="https://www.instagram.com/sankalpa2014"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram
              className="text-pink-500 hover:text-pink-600 transition-all duration-300 hover:scale-125"
              size={32}
            />
          </Link>
        </div>
        <p className="mt-8">
          &copy; {new Date().getFullYear()} SANKALPA. All rights reserved.
        </p>
        <p className="mt-8 text-slate-300"> Developed by</p>
        <p className="text-xl mt-2 text-slate-200 font-semibold">
          {" "}
          TAPABRATA LASKAR & SUBINOY BISWAS
        </p>
      </div>
    </footer>
  );
}
