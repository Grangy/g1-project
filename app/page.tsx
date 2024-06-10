// g1-project\app\page.tsx
"use client";
import Slider from "./components/Slider";
import Main from "./components/Main";
import Legend from "./components/Legend";
import TeamSlider from "./components/TeamSlider";
import Pricing from "./components/Pricing";
import ContactForm from "./components/ContactForm";
import Parallax from "./components/Parallax";
import { getRouteConfig } from './utils/getRouteConfig';
import { usePathname } from 'next/navigation';
import { routesConfig } from './config/routesConfig';

export default function Home() {
  const pathname = usePathname();
  const routeConfig = getRouteConfig(pathname) || routesConfig["/"];

  return (
    <div className="dark:bg-custom-dark-gray min-h-screen">
      <Slider routeConfig={routeConfig} />
      <Parallax>
        <Main routeConfig={routeConfig} />
      </Parallax>
      <Parallax>
        <Legend />
      </Parallax>
      <Parallax>
        <TeamSlider />
      </Parallax>
      <Parallax>
        <Pricing />
      </Parallax>
      <Parallax>
        <ContactForm />
      </Parallax>
      <footer className="bg-white dark:bg-gray-900 shadow py-6 mt-4">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            © 2023 Ваша компания
          </p>
        </div>
      </footer>
    </div>
  );
}
