"use client";
import { useState } from 'react';
import Menu from "./components/Menu";
import { ClipLoader } from "react-spinners";
import useSWR from 'swr';
import axios from 'axios';

const fetcher = (url: string) => axios.get(url).then(res => res.data);

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const { data: menuData, error: menuError } = useSWR('/api/menu', fetcher);
  const { data: trainerData, error: trainerError } = useSWR('/api/trainers', fetcher);

  const loading = !menuData || !trainerData;

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <ClipLoader size={150} color="#3498db" cssOverride={{ border: '5px solid #3498db', borderRadius: '50%' }} />
      </div>
    );
  }

  if (menuError || trainerError) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Error loading data</p>
      </div>
    );
  }

  return (
    <>
      <Menu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <div className={isMenuOpen ? 'blur-sm pointer-events-none' : ''}>
        {children}
      </div>
    </>
  );
}
