'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Image from 'next/image';

const Menu = ({ isOpen, toggleMenu }: { isOpen: boolean; toggleMenu: () => void; }) => {
  const [isScrolledUp, setIsScrolledUp] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop < lastScrollTop) {
        // прокрутка вверх
        setIsScrolledUp(true);
      } else {
        // прокрутка вниз
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
    <header className={`fixed top-0 left-0 right-0 w-full bg-white/30 dark:bg-gray-900/30 backdrop-blur shadow z-50 transition-transform duration-300 ${isScrolledUp ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center h-full">
          <Image
            src="/img/logo/logo.png"
            alt="gagar1n Logo"
            layout="responsive"
            width={160}
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
            <li>
              <Link href="/" className="text-gray-600 dark:text-white hover:text-gray-800 dark:hover:text-white">Главная</Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-600 dark:text-white hover:text-gray-800 dark:hover:text-white">О нас</Link>
            </li>
            <li>
              <Link href="/services" className="text-gray-600 dark:text-white hover:text-gray-800 dark:hover:text-white">Сервисы</Link>
            </li>
            <li>
              <Link href="/contacts" className="text-gray-600 dark:text-white hover:text-gray-800 dark:hover:text-white">Контакты</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Transition
        show={isOpen}
        enter="transition duration-200 ease-out"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition duration-100 ease-in"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <div className="fixed inset-0 z-50 bg-black bg-opacity-75">
          <div className="flex flex-col items-center justify-center min-h-screen">
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-white focus:outline-none"
              aria-label="Close menu"
            >
              <XIcon className="w-8 h-8" />
            </button>
            <ul className="flex flex-col items-center space-y-6 text-white text-xl mt-16">
              <li>
                <Link href="/" onClick={toggleMenu} className="hover:text-gray-300">Главная</Link>
              </li>
              <li>
                <Link href="/about" onClick={toggleMenu} className="hover:text-gray-300">О нас</Link>
              </li>
              <li>
                <Link href="/services" onClick={toggleMenu} className="hover:text-gray-300">Сервисы</Link>
              </li>
              <li>
                <Link href="/contacts" onClick={toggleMenu} className="hover:text-gray-300">Контакты</Link>
              </li>
            </ul>
          </div>
        </div>
      </Transition>
    </header>
  );
};

export default Menu;
