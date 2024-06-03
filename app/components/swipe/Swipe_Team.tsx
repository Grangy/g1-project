'use client';

import React, { useRef, ReactNode, useState, useEffect } from 'react';

interface SwipeTeamProps {
  children: ReactNode;
}

const SwipeTeam = ({ children }: SwipeTeamProps) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    if (sliderRef.current) {
      const slider = sliderRef.current;

      const handleScroll = () => {
        const childWidth = slider.clientWidth / 2;
        const index = Math.round(slider.scrollLeft / childWidth);
        slider.scrollTo({
          left: index * childWidth,
          behavior: 'smooth',
        });
      };

      slider.addEventListener('scroll', handleScroll);

      return () => {
        slider.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: sliderRef.current.clientWidth / 2,
        behavior: 'smooth',
      });
    }
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -sliderRef.current.clientWidth / 2,
        behavior: 'smooth',
      });
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (sliderRef.current) {
      setIsDragging(true);
      setStartX(e.pageX - sliderRef.current.offsetLeft);
      setScrollLeft(sliderRef.current.scrollLeft);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    if (sliderRef.current) {
      const x = e.pageX - sliderRef.current.offsetLeft;
      const walk = (x - startX) * 2;
      sliderRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (sliderRef.current) {
      setIsDragging(true);
      setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft);
      setScrollLeft(sliderRef.current.scrollLeft);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    if (sliderRef.current) {
      const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
      const walk = (x - startX) * 2;
      sliderRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div className="relative">
      <div
        className="overflow-hidden scroll-container"
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="flex space-x-4 snap-x">
          {children}
        </div>
      </div>
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-red-600 text-white p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-red-800 hover:bg-red-700 animate-pulse"
      >
        &lt;
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-red-600 text-white p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-red-800 hover:bg-red-700 animate-pulse"
      >
        &gt;
      </button>
    </div>
  );
};

export default SwipeTeam;
