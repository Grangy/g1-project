import React from 'react';
import Image from 'next/image';
import SwipeTeam from './swipe/Swipe_Team';

const TeamSlider = () => {
  const trainers = [
    { id: 1, name: "Надежда Овчаренко", img: "/img/trainers/trainer1.jpg" },
    { id: 2, name: "Алла Ходакова", img: "/img/trainers/trainer2.jpg" },
    { id: 3, name: "Тренер 3", img: "/img/trainers/trainer3.png" },
    { id: 4, name: "Тренер 4", img: "/img/trainers/trainer4.jpg" },
    { id: 5, name: "Тренер 5", img: "/img/trainers/trainer5.jpg" },
  ];

  return (
    <div className="max-w-7xl mx-auto p-4 mt-10">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Наша команда</h2>
      <SwipeTeam>
        {trainers.map(trainer => (
          <div key={trainer.id} className="w-full md:w-1/4 sm:w-1/2 flex-shrink-0 bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
            <div className="relative pb-[177.78%]"> {/* 16:9 aspect ratio */}
              <Image
                src={trainer.img}
                alt={trainer.name}
                layout="fill"
                objectFit="cover"
                className="absolute inset-0"
              />
            </div>
            <div className="p-4 text-center">
              <p className="text-gray-800 dark:text-white font-semibold">{trainer.name}</p>
            </div>
          </div>
        ))}
        <div className="w-full md:w-1/4 sm:w-1/2 flex-shrink-0 flex items-center justify-center bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
          <a href="/trainers" className="text-gray-800 dark:text-white font-semibold">
            Показать всех
          </a>
        </div>
      </SwipeTeam>
    </div>
  );
};

export default TeamSlider;
