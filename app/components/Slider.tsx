// app/components/Slider.tsx
import Image from 'next/image';
import React from 'react';

const Slider = ({ routeConfig }: { routeConfig: any; }) => {
  if (!routeConfig || !routeConfig.slider) {
    return null; // or some fallback UI
  }

  return (
    <div className="relative h-[32rem] flex" style={routeConfig.slider.gradientStyle}>
      {/* Внешний контейнер для всего слайдера с отступами */}
      <div className="max-w-7xl mx-auto w-full h-full flex pt-20">
        {/* Блок для текста */}
        <div className="flex-grow flex flex-col justify-center items-start text-left px-12 py-4">
          <h1 className="text-4xl font-bold text-white mb-4">
            {routeConfig.slider.title}
          </h1>
          <p className="text-xl text-white">
            {routeConfig.slider.description}
          </p>
          <button className={`mt-4 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 group 
            ${routeConfig.slider.buttonStyle}`}>
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-opacity-0 group-hover:bg-opacity-0">
              Подробнее
            </span>
          </button>
        </div>

        {/* Блок для изображения */}
        <div className="flex-none w-1/2 relative h-full hidden sm:block">
          <Image
            src={routeConfig.slider.image}
            alt="Promotional Image"
            layout="fill"
            objectFit="contain"
            objectPosition="right"
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
