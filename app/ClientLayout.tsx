// app/ClientLayout.tsx
"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Menu from "./components/Menu";
import useSWR from 'swr';
import axios from 'axios';
import { usePathname } from 'next/navigation';

const fetcher = (url: string) => axios.get(url).then(res => res.data);

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogoLoaded, setIsLogoLoaded] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const { data: menuData, error: menuError } = useSWR('/api/menu', fetcher);
  const { data: trainerData, error: trainerError } = useSWR('/api/trainers', fetcher);

  const loading = !menuData || !trainerData;

  // Determine if the current route is related to GFood based on the pathname
  const isGFood = pathname.includes("/gfood");

  useEffect(() => {
    // Reset logo loaded state when pathname changes
    setIsLogoLoaded(false);
  }, [pathname]);

  const handleLogoLoad = () => {
    setIsLogoLoaded(true);
  };

  if (loading || !isLogoLoaded) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <Image
          src={isGFood ? "/img/logo/logo2.png" : "/img/logo/logo.png"}
          alt="gagar1n Logo"
          width={100}
          height={100}
          className="spin pulse-fast"
          onLoadingComplete={handleLogoLoad}
        />
      </div>
    );
  }

  if (menuError || trainerError) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <p className="text-white">Error loading data</p>
      </div>
    );
  }

  return (
    <>
      <Menu isOpen={isMenuOpen} toggleMenu={toggleMenu} isGFood={isGFood} onLogoLoad={handleLogoLoad} />
      <div className={isMenuOpen ? 'blur-sm pointer-events-none' : ''}>
        {children}
      </div>
    </>
  );
}
