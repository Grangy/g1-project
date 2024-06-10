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

  const { data: menuData, error: menuError, isValidating: isMenuValidating } = useSWR('/api/menu', fetcher, {
    fallbackData: [],
    onError: (error) => {
      console.error("Error loading menu data:", error);
    },
  });
  const { data: trainerData, error: trainerError, isValidating: isTrainerValidating } = useSWR('/api/trainers', fetcher, {
    fallbackData: [],
    onError: (error) => {
      console.error("Error loading trainer data:", error);
    },
  });

  const loading = isMenuValidating || isTrainerValidating;

  // Determine if the current route is related to GFood based on the pathname
  const isGFood = pathname.includes("/gfood");

  useEffect(() => {
    // Log the current state of loading and errors
    console.log("Loading state:", loading);
    console.log("Menu data:", menuData);
    console.log("Trainer data:", trainerData);
    console.log("Menu error:", menuError);
    console.log("Trainer error:", trainerError);
  }, [loading, menuData, trainerData, menuError, trainerError]);

  if (loading) {
    console.log("Loading...");
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <Image
          src="/img/logo/logo1.png"
          alt="gagar1n Logo"
          width={100}
          height={100}
          className="spin pulse-fast"
        />
      </div>
    );
  }

  if (menuError || trainerError) {
    console.error("Error loading data. Menu error:", menuError, "Trainer error:", trainerError);
  }

  return (
    <>
      <Menu isOpen={isMenuOpen} toggleMenu={toggleMenu} isGFood={isGFood} />
      <div className={isMenuOpen ? 'blur-sm pointer-events-none' : ''}>
        {children}
      </div>
    </>
  );
}
