// app/ClientLayout.tsx
"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Menu from "./components/Menu";
import useSWR from 'swr';
import axios from 'axios';
import { usePathname } from 'next/navigation';
import { getRouteConfig } from './utils/getRouteConfig';
import { routesConfig } from './config/routesConfig';
import React from 'react';

const fetcher = (url: string) => axios.get(url).then(res => res.data);

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const routeConfig = getRouteConfig(pathname) || routesConfig["/"];

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
    onError: (error) => {
      console.error("Error loading menu data:", error);
    },
  });
  const { data: trainerData, error: trainerError, isValidating: isTrainerValidating } = useSWR('/api/trainers', fetcher, {
    onError: (error) => {
      console.error("Error loading trainer data:", error);
    },
  });

  const loading = isMenuValidating || isTrainerValidating;

  useEffect(() => {
    console.log("Pathname:", pathname);
    console.log("Route Config:", routeConfig);
    console.log("Loading state:", loading);
    console.log("Menu data:", menuData);
    console.log("Trainer data:", trainerData);
    console.log("Menu error:", menuError);
    console.log("Trainer error:", trainerError);
  }, [pathname, routeConfig, loading, menuData, trainerData, menuError, trainerError]);

  if (loading) {
    console.log("Loading...");
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <Image
          src={routeConfig.logo}
          alt="gagar1n Logo"
          width={100}
          height={100}
          className="spin pulse-fast"
        />
      </div>
    );
  }

  return (
    <>
      <Menu isOpen={isMenuOpen} toggleMenu={toggleMenu} routeConfig={routeConfig} />
      <div className={isMenuOpen ? 'blur-sm pointer-events-none' : ''}>
        {React.cloneElement(children as React.ReactElement, { routeConfig })}  {/* Pass routeConfig to children */}
      </div>
    </>
  );
}
