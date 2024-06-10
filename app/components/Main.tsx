// app/components/Main.tsx
'use client'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getRouteConfig } from '../utils/getRouteConfig';
import { routesConfig } from '../config/routesConfig';

const Main = ({ routeConfig }: { routeConfig: any; }) => {
  if (!routeConfig || !routeConfig.sections) {
    return null; // or some fallback UI
  }

  return (
    <main className="max-w-7xl mx-auto dark:bg-gray-800 shadow-lg rounded-lg p-6">
      <section className="mt-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{routeConfig.mainTitle}</h2>
      </section>

      {/* Категории с изображениями */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {routeConfig.sections.map((section: any) => (
          <Link href={section.href} className="relative aspect-w-16 aspect-h-9 min-h-[300px] group block" key={section.href}>
            <Image
              src={section.imgSrc}
              alt={section.alt}
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-0 transition-opacity duration-200"></div>
            <div className={`absolute bottom-0 left-0 ${routeConfig.colorClass} text-white p-4`}>{section.title}</div>
          </Link>
        ))}
      </section>
    </main>
  );
};

export default Main;
