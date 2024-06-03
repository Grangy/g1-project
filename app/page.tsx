"use client"
import { useState } from 'react';
import Menu from "./components/Menu";
import Slider from "./components/Slider";
import Main from "./components/Main";
import Legend from "./components/Legend";
import TeamSlider from "./components/TeamSlider";
import Pricing from "./components/Pricing";
import ContactForm from "./components/ContactForm";
import Parallax from "./components/Parallax";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  return (
    <div className={`dark:bg-custom-dark-gray min-h-screen ${isMenuOpen ? 'backdrop-blur-lg' : ''}`}>
      <Menu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <div className={isMenuOpen ? 'blur-sm pointer-events-none' : ''}>
        <Slider /> {/* Этот блок загружается сразу */}
        <Parallax>
          <Main />
        </Parallax>
        <Parallax>
          <Legend />
        </Parallax>
        <Parallax>
          <TeamSlider />
        </Parallax>
        <Parallax>
          <Pricing />
        </Parallax>
        <Parallax>
          <ContactForm />
        </Parallax>
        <footer className="bg-white dark:bg-gray-900 shadow py-6 mt-4">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-gray-600 dark:text-gray-300">
              © 2023 Ваша компания
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
