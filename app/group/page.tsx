"use client";
import Image from "next/image";
import Link from "next/link";
import Parallax from "../components/Parallax";

export default function GroupPrograms() {
  return (
    <div className="dark:bg-custom-dark-gray min-h-screen text-white pt-24">
      <header className="bg-custom-gray p-6 relative flex flex-col items-center space-y-4">
        <div className="w-full flex flex-col items-start px-4 space-y-2 md:ml-10">
          <nav className="overflow-x-auto whitespace-nowrap">
            <Link href="/" className="text-custom-light-red hover:underline text-sm">
              Главная
            </Link>
            <span className="text-white mx-2 text-sm">/</span>
            <span className="text-white text-sm">Групповые программы</span>
          </nav>
          <h1 className="text-4xl font-bold text-white mt-4">ГРУППОВЫЕ ПРОГРАММЫ</h1>
        </div>
      </header>
      <div className="container mx-auto px-4 py-0 mt-2 grid grid-cols-1 md:grid-cols-2 gap-12">
        <Parallax className="mb-4">
          <section className="p-8 bg-custom-dark-gray2 rounded-lg shadow-lg h-full">
            <Image
              src="https://loremflickr.com/640/480/yoga"
              alt="Занятия йогой"
              width={640}
              height={480}
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h2 className="text-3xl font-semibold text-white mb-2">Занятия йогой</h2>
            <p>
              Присоединяйтесь к нашим расслабляющим и омолаживающим занятиям йогой,
              предназначенным для всех уровней. Наши опытные инструкторы проведут вас
              через серию поз, чтобы улучшить гибкость, силу и осознанность.
            </p>
          </section>
        </Parallax>
        <Parallax className="mb-4">
          <section className="p-8 bg-custom-dark-gray rounded-lg shadow-lg h-full">
            <Image
              src="https://loremflickr.com/640/480/pilates"
              alt="Сеансы пилатеса"
              width={640}
              height={480}
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h2 className="text-3xl font-semibold text-white mb-2">Сеансы пилатеса</h2>
            <p>
              Укрепите ядро и стабильность с нашими сеансами пилатеса. Идеально подходит
              для тех, кто хочет улучшить осанку, баланс и общее состояние.
            </p>
          </section>
        </Parallax>
        <Parallax className="mb-4">
          <section className="p-8 bg-custom-dark-gray2 rounded-lg shadow-lg h-full">
            <Image
              src="https://loremflickr.com/640/480/cardio"
              alt="Кардио тренировки"
              width={640}
              height={480}
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h2 className="text-3xl font-semibold text-white mb-2">Кардио тренировки</h2>
            <p>
              Заставьте сердце биться быстрее с нашими энергичными кардио тренировками.
              Эти сеансы предназначены для сжигания калорий, улучшения сердечно-сосудистой
              системы и увеличения выносливости.
            </p>
          </section>
        </Parallax>
        <Parallax className="mb-4">
          <section className="p-8 bg-custom-dark-gray rounded-lg shadow-lg h-full">
            <Image
              src="https://loremflickr.com/640/480/strength"
              alt="Силовые тренировки"
              width={640}
              height={480}
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h2 className="text-3xl font-semibold text-white mb-2">Силовые тренировки</h2>
            <p>
              Наращивайте мышцы и увеличивайте силу с нашими направленными силовыми
              тренировками. Подходит для всех уровней подготовки, наши тренеры помогут
              вам достичь ваших личных фитнес-целей.
            </p>
          </section>
        </Parallax>
      </div>
      <footer className="bg-custom-gray p-6 text-center mt-4">
        <p className="text-custom-light-red">
          © 2023 Ваша компания. Все права защищены.
        </p>
      </footer>
    </div>
  );
}
