'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import useSWR from 'swr';
import axios from 'axios';

const fetcher = (url: string) => axios.get(url).then(res => res.data);

const Menu = ({ isOpen, toggleMenu }: { isOpen: boolean; toggleMenu: () => void; }) => {
  const [isScrolledUp, setIsScrolledUp] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const { data: menuItems, mutate } = useSWR('/api/menu', fetcher);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop < lastScrollTop) {
        setIsScrolledUp(true);
      } else {
        setIsScrolledUp(false);
      }

      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 w-full bg-custom-gray dark:bg-gray-900/30 backdrop-blur shadow z-50 transition-transform duration-300 ${isScrolledUp ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center h-full justify-left md:justify-start w-full md:w-auto">
            <Image
              src="/img/logo/logo.png"
              alt="gagar1n Logo"
              layout="fixed"
              width={50}
              height={50}
              objectFit="contain"
              className="animate-pulse"
            />
          </div>
          <nav className="flex justify-between items-center py-8 px-4 md:px-8">
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-md"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <XIcon className="w-6 h-6" />
                ) : (
                  <MenuIcon className="w-6 h-6" />
                )}
              </button>
            </div>
            <ul className="hidden md:flex space-x-4">
              {menuItems && menuItems.map((item: any) => (
                <li key={item._id}>
                  <Link href={item.href} className="text-gray-600 dark:text-white hover:text-gray-800 dark:hover:text-white">{item.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
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
            {menuItems && menuItems.map((item: any) => (
              <li key={item._id}>
                <Link href={item.href} onClick={toggleMenu} className="hover:text-gray-300">{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </Transition>
    </>
  );
};

export default Menu;
