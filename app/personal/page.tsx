"use client";
import Image from "next/image";
import Link from "next/link";
import Parallax from "../components/Parallax";

export default function PersonalTraining() {
  return (
    <div className="dark:bg-custom-dark-gray min-h-screen text-white pt-24">
      <header className="bg-custom-gray p-6 relative flex flex-col items-center space-y-4">
        <div className="w-full flex flex-col items-start px-4 space-y-2 md:ml-10">
          <nav className="overflow-x-auto whitespace-nowrap">
            <Link href="/" className="text-custom-light-red hover:underline text-sm">
              Главная
            </Link>
            <span className="text-white mx-2 text-sm">/</span>
            <span className="text-white text-sm">Персональные тренировки</span>
          </nav>
          <h1 className="text-4xl font-bold text-white mt-4">ПЕРСОНАЛЬНЫЕ ТРЕНИРОВКИ</h1>
        </div>
      </header>
      <div className="container mx-auto px-4 py-0 mt-2 grid grid-cols-1 md:grid-cols-2 gap-12">
        <Parallax className="mb-4">
          <section className="p-8 bg-custom-dark-gray2 rounded-lg shadow-lg h-full">
            <Image
              src="https://loremflickr.com/640/480/personal-training"
              alt="Персональные тренировки"
              width={640}
              height={480}
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h2 className="text-3xl font-semibold text-white mb-2">Индивидуальные тренировки</h2>
            <p>
              Наши индивидуальные тренировки помогут вам достичь ваших фитнес-целей быстрее и эффективнее.
              Под руководством нашего опытного тренера, вы получите персонализированные программы тренировок,
              адаптированные под ваши нужды и цели.
            </p>
          </section>
        </Parallax>
        <Parallax className="mb-4">
          <section className="p-8 bg-custom-dark-gray rounded-lg shadow-lg h-full">
            <Image
              src="https://loremflickr.com/640/480/strength-training"
              alt="Силовые тренировки"
              width={640}
              height={480}
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h2 className="text-3xl font-semibold text-white mb-2">Силовые тренировки</h2>
            <p>
              Силовые тренировки для улучшения ваших физических возможностей и наращивания мышечной массы.
              Индивидуальный подход обеспечит оптимальные результаты и безопасность.
            </p>
          </section>
        </Parallax>
        <Parallax className="mb-4">
          <section className="p-8 bg-custom-dark-gray2 rounded-lg shadow-lg h-full">
            <Image
              src="https://loremflickr.com/640/480/cardio-training"
              alt="Кардио тренировки"
              width={640}
              height={480}
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h2 className="text-3xl font-semibold text-white mb-2">Кардио тренировки</h2>
            <p>
              Повышайте свою выносливость и улучшайте сердечно-сосудистую систему с нашими индивидуальными
              кардио тренировками. Тренировки адаптированы под ваш уровень подготовки и цели.
            </p>
          </section>
        </Parallax>
        <Parallax className="mb-4">
          <section className="p-8 bg-custom-dark-gray rounded-lg shadow-lg h-full">
            <Image
              src="https://loremflickr.com/640/480/stretching"
              alt="Стретчинг"
              width={640}
              height={480}
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h2 className="text-3xl font-semibold text-white mb-2">Стретчинг</h2>
            <p>
              Улучшите гибкость и подвижность с нашими индивидуальными занятиями по стретчингу.
              Наши тренеры помогут вам достичь максимальных результатов и предотвратить травмы.
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
