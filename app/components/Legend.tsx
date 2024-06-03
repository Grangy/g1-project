import Image from "next/image";
import React from "react";
import Parallax from "./Parallax";

const Legend = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto p-5 bg-white dark:bg-gray-800 py-6 px-4 mt-8 shadow-lg rounded-lg">
      <div className="w-full md:w-1/2 text-left">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">ФИТНЕС ПАРК «G1»</h1>
        <p className="text-lg text-gray-600 dark:text-gray-200">
          ФИТНЕС ПАРК «G1» — пионер среди спортивно-досуговых комплексов.
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-200 mt-4">
          G1 - новая комплексная платформа для Вас, ваших детей и родителей: просторный фитнес клуб G1, спортивный и
          детский бассейны, детский развивающий центр GUN1OR, термальная зона, место правильного питания и студия красоты.
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-200 mt-4">
          Мы превратили территорию бывшего дворца спорта Дома культуры профсоюзов в место, где здоровый образ
          жизни стал проще и приятнее, чем где-либо.
        </p>
        <button className="mt-4 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 group bg-gradient-to-br from-red-900 to-red-800 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-opacity-0 group-hover:bg-opacity-0">
            Подробнее
          </span>
        </button>
      </div>
      <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-end relative h-auto md:h-[20rem] mt-4 md:mt-0">
        <Parallax offset={10} className="relative md:absolute md:right-0 md:top-0 md:-mr-4 mb-4 md:mb-0">
          <Image src="/img/legend1.png" alt="Legend 1" width={300} height={300} />
        </Parallax>
        <Parallax offset={20} className="relative md:absolute md:left-20 md:top-20 mb-4 md:mb-0">
          <Image src="/img/legend2.png" alt="Legend 2" width={300} height={300} />
        </Parallax>
        <Parallax offset={30} className="relative md:absolute md:right-10 md:top-60 md:-mr-4">
          <Image src="/img/legend3.png" alt="Legend 3" width={300} height={500} />
        </Parallax>
      </div>
    </div>
  );
};

export default Legend;
