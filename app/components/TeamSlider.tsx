"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import SwipeTeam from './swipe/Swipe_Team';
import axios from 'axios';

interface Trainer {
  _id: string;
  name: string;
  img: string;
}

const TeamSlider = () => {
  const [trainers, setTrainers] = useState<Trainer[]>([]);

  useEffect(() => {
    const fetchTrainers = async () => {
      const response = await axios.get('/api/trainers');
      setTrainers(response.data);
    };

    fetchTrainers();
  }, []);

  const shuffleArray = (array: Trainer[]): Trainer[] => {
    let shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  const shuffledTrainers = shuffleArray(trainers);

  return (
    <div className="max-w-7xl mx-auto p-4 mt-10">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Наша команда</h2>
      <SwipeTeam>
        {shuffledTrainers.map(trainer => (
          <div key={trainer._id} className="w-1/2 sm:w-1/2 md:w-1/4 flex-shrink-0 bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden snap-start">
            <div className="relative pb-[177.78%]"> {/* 16:9 aspect ratio */}
              <Image
                src={`/img/trainers/${trainer._id}.jpg`}
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
        <div className="w-1/2 sm:w-1/2 md:w-1/4 flex-shrink-0 flex items-center justify-center bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden snap-start">
          <a href="/trainers" className="text-gray-800 dark:text-white font-semibold">
            Показать всех
          </a>
        </div>
      </SwipeTeam>
    </div>
  );
};

export default TeamSlider;
