import Image from "next/image";
import React from "react";

const Slider = () => {
  // CSS для градиента с тремя цветами
  const gradientStyle = {
    backgroundImage: "linear-gradient(to right, #363636, #8b0000, #FF1010)",
  };

  return (
    <div className="relative h-[32rem] flex" style={gradientStyle}>
      {/* Внешний контейнер для всего слайдера с отступами */}
      <div className="max-w-7xl mx-auto w-full h-full flex pt-20">
        {/* Блок для текста */}
        <div className="flex-grow flex flex-col justify-center items-start text-left px-12 py-4">
          <h1 className="text-4xl font-bold text-white mb-4">
            ТРЕНИРУЙСЯ С G1
          </h1>
          <p className="text-xl text-white">
            Получи выгоду до 30% на годовой абонемент
          </p>
          <button className="mt-4 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 group bg-gradient-to-br from-red-900 to-red-800 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-opacity-0 group-hover:bg-opacity-0">
              Подробнее
            </span>
          </button>
        </div>

        {/* Блок для изображения */}
        <div className="flex-none w-1/2 relative h-full hidden sm:block">
          <Image
            src="/img/john2.png" // Обновите путь к вашему изображению
            alt="Promotional Image"
            layout="fill"
            objectFit="contain" // Изменено на contain для полной видимости изображения
            objectPosition="right" // Выравнивание изображения по правой стороне
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
