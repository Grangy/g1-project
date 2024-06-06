import Image from 'next/image';
import Link from 'next/link';

const Main = () => {
  return (
    <main className="max-w-7xl mx-auto dark:bg-gray-800 shadow-lg rounded-lg p-6">
      <section className="mt-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Наши направления:</h2>
      </section>

      {/* Категории с изображениями */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <Link href="/group" className="relative aspect-w-16 aspect-h-9 min-h-[300px] group block">
          <Image
            src="/img/main/1.png"
            alt="Групповые занятия"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-0 transition-opacity duration-200"></div>
          <div className="absolute bottom-0 left-0 bg-red-800/75 text-white p-4">Групповые занятия</div>
        </Link>
        <Link href="/personal" className="relative aspect-w-16 aspect-h-9 min-h-[300px] group block">
          <Image
            src="/img/main/2.png"
            alt="Персональные тренировки"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-0 transition-opacity duration-200"></div>
          <div className="absolute bottom-0 left-0 bg-red-800/75 text-white p-4">Персональные тренировки</div>
        </Link>
        <div className="relative aspect-w-16 aspect-h-9 min-h-[300px] group">
          <Image
            src="/img/main/3.png"
            alt="KROSSFIT"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-0 transition-opacity duration-200"></div>
          <div className="absolute bottom-0 left-0 bg-red-800/75 text-white p-4">KROSSFIT</div>
        </div>
        <div className="relative aspect-w-16 aspect-h-9 min-h-[300px] group">
          <Image
            src="/img/main/4.png"
            alt="CYCLE"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-0 transition-opacity duration-200"></div>
          <div className="absolute bottom-0 left-0 bg-red-800/75 text-white p-4">CYCLE</div>
        </div>
      </section>
    </main>
  );
};

export default Main;
