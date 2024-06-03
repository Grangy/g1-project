'use client';

import React from 'react';
import { useInView } from 'react-intersection-observer';
import classNames from 'classnames';

interface ParallaxProps {
  children: React.ReactNode;
  className?: string;
  offset?: number;
}

const Parallax = ({ children, className, offset = 100 }: ParallaxProps) => { // Увеличен offset до 50
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
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
      style={{ transform: inView ? 'translateY(0)' : `translateY(${offset}px)` }} // Добавлен стиль transform для более плавного эффекта
    >
      {children}
    </div>
  );
};

export default Parallax;
