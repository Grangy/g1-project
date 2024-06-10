// app/components/Menu.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Transition } from '@headlessui/react';
import { MenuIcon, XIcon, PhoneIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import useSWR from 'swr';
import axios from 'axios';
import { FaTelegramPlane } from 'react-icons/fa';
import Popup from './Popup';  // Import the Popup component

const fetcher = (url: string) => axios.get(url).then(res => res.data);

const menuItems = [
  { href: "/", label: "Home" },
  { href: "/gfood", label: "GFood" },
  { href: "/grelka", label: "Grelka" }
];

const Menu = ({ isOpen, toggleMenu, routeConfig }: { isOpen: boolean; toggleMenu: () => void; routeConfig: any; }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
    if (isOpen) toggleMenu(); // Close the menu if it is open
  };

  const closePopup = () => setIsPopupOpen(false);

  const { data: menuData, mutate } = useSWR('/api/menu', fetcher);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 w-full bg-custom-gray dark:bg-gray-900/30 backdrop-blur shadow z-50 transition-transform duration-300`}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between py-6">
          <div className="flex items-center h-full justify-left md:justify-start w-full md:w-auto">
            <Image
              src={routeConfig.logo}
              alt="Logo"
              layout="fixed"
              width={50}
              height={50}
              objectFit="contain"
              className="animate-pulse"
            />
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex space-x-4">
              {menuItems.map((item) => (
                <Link key={item.href} href={item.href} className="text-white hover:text-gray-300">
                  {item.label}
                </Link>
              ))}
            </nav>
            <button onClick={openPopup} className="px-4 py-2 border border-white text-white rounded hover:bg-white hover:text-custom-red transition">
              Оставить заявку
            </button>
            <a href="tel:+1234567890" className="text-white hover:text-gray-300">
              <PhoneIcon className="h-6 w-6" />
            </a>
            <a href="https://telegram.me/yourchannel" className="text-white hover:text-gray-300">
              <FaTelegramPlane className="h-6 w-6" />
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-md"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <XIcon className="w-6 h-6" />
              ) : (
                <MenuIcon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      <Transition
        show={isOpen}
        enter="transition duration-200 ease-out"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition duration-100 ease-in"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex flex-col items-center justify-center">
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-white focus:outline-none"
            aria-label="Close menu"
          >
            <XIcon className="w-8 h-8" />
          </button>
          <ul className="flex flex-col items-center space-y-6 text-white text-xl">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={toggleMenu} className="hover:text-gray-300">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <button onClick={openPopup} className="px-4 py-2 border border-white text-white rounded hover:bg-white hover:text-custom-red transition mb-10">
                Оставить заявку
              </button>
            </li>
            <li>
              <a href="tel:+1234567890" className="flex items-center space-x-2">
                <PhoneIcon className="h-6 w-6" />
                <span className='text-sm'>Позвонить</span>
              </a>
            </li>
            <li>
              <a href="https://telegram.me/yourchannel" className="flex items-center space-x-2">
                <FaTelegramPlane className="h-6 w-6" />
                <span className='text-sm'>Наш Telegram</span>
              </a>
            </li>
          </ul>
        </div>
      </Transition>

      <Popup isOpen={isPopupOpen} closeModal={closePopup} />
    </>
  );
};

export default Menu;
