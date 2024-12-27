"use client"
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Heart } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { FaBars, FaTimes } from 'react-icons/fa'
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const router = useRouter();
  const scrollToSection = (id : string) => {
   router.push(`/#${id}`);
    setIsOpen(false);
  };

  return (
    <header className="bg-black shadow-md fixed w-full z-50">
      <nav className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3">
          <Image src="/sankalpa.png" alt="SANKALPA Logo" width={60} height={60} />
          <span className="self-center text-2xl font-bold text-white"><div>
            SANKALPA
          </div>
            <div className='text-xs ml-1 font-normal'>Ever Inspiring</div>
          </span>
        </Link>
        <button onClick={toggleMenu} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
          <span className="sr-only">Open main menu</span>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        <div className={`w-full md:block md:w-auto ${isOpen ? 'block' : 'hidden'}`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-black dark:bg-gray-800 md:dark:bg-black dark:border-gray-700">
            <li><a onClick={() => scrollToSection('home')} className="block py-2 px-3 text-white hover:text-green-400 cursor-pointer">Home</a></li>
            <li><a onClick={() => scrollToSection('about')} className="block py-2 px-3 text-white hover:text-green-400 cursor-pointer">About</a></li>
            <li><a onClick={() => scrollToSection('mission')} className="block py-2 px-3 text-white hover:text-green-400 cursor-pointer">Mission</a></li>
            <li><a onClick={() => scrollToSection('gallery')} className="block py-2 px-3 text-white hover:text-green-400 cursor-pointer">Gallery</a></li>
            <li><a onClick={() => scrollToSection('location')} className="block py-2 px-3 text-white hover:text-green-400 cursor-pointer">Location</a></li>
            <li><a onClick={() => scrollToSection('contact')} className="block py-2 px-3 text-white hover:text-green-400 cursor-pointer">Contact</a></li>
          </ul>
        </div>
        <div className="hidden md:flex space-x-4 items-center">
          {/* <Link href="https://youtube.com/@sankalpa-nh5yo?si=llz7wTW9CtkzrEb3" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="text-white hover:text-red-500" size={24} />
          </Link>
          <Link href="https://www.facebook.com/Sankalpian?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-white hover:text-blue-500" size={24} />
          </Link>
          <Link href="https://www.instagram.com/sankalpa2014" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-white hover:text-pink-500" size={24} />
          </Link> */}
          <Link href="/donate">
            <div className="bg-[#046A38] text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-700 transition duration-300 flex gap-1.5 items-center">
              <Heart size={20} className="inline-block" fill='#fff' />
              Donate Now
            </div>
          </Link>
        </div>
      </nav>
    </header>
  )
}

