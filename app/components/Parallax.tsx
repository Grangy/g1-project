'use client';

import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import classNames from 'classnames';

interface ParallaxProps {
  children: React.ReactNode;
  className?: string;
  offset?: number;
}

const Parallax = ({ children, className, offset = 40 }: ParallaxProps) => {
  const [threshold, setThreshold] = useState(0.1);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const handleChange = () => {
      setThreshold(mediaQuery.matches ? 0.05 : 0.1);
    };

    handleChange();
    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold,
  });

  return (
    <div
      ref={ref}
      className={classNames(
        'transform transition-all duration-1000 ease-in-out',
        {
          'opacity-0': !inView,
          'opacity-100 translate-y-0': inView,
        },
        className
      )}
      style={{ transform: inView ? 'translateY(0)' : `translateY(${offset}px)` }}
    >
      {children}
    </div>
  );
};

export default Parallax;
