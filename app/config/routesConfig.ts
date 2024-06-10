interface Section {
    href: string;
    imgSrc: string;
    alt: string;
    title: string;
  }
  
  interface SliderConfig {
    gradientStyle: { backgroundImage: string };
    title: string;
    description: string;
    buttonStyle: string;
    image: string;
  }
  
  export interface RouteConfig {
    logo: string;
    slider: SliderConfig;
    mainTitle: string;
    sections: Section[];
    colorClass: string;
  }
  
  export const routesConfig: { [key: string]: RouteConfig } = {
    "/": {
      logo: "/img/logo/logo1.png",
      slider: {
        gradientStyle: { backgroundImage: 'linear-gradient(to right, #363636, #8b0000, #FF1010)' },
        title: "ТРЕНИРУЙСЯ С G1",
        description: "Получите выгоду до 30% на годовой абонемент",
        buttonStyle: 'bg-gradient-to-br from-red-900 to-red-800 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800',
        image: "/img/john2.png"
      },
      mainTitle: "Наши направления:",
      sections: [
        { href: "/group", imgSrc: "/img/main/1.png", alt: "Групповые занятия", title: "Групповые занятия" },
        { href: "/personal", imgSrc: "/img/main/2.png", alt: "Персональные тренировки", title: "Персональные тренировки" },
        { href: "/krossfit", imgSrc: "/img/main/3.png", alt: "KROSSFIT", title: "KROSSFIT" },
        { href: "/cycle", imgSrc: "/img/main/4.png", alt: "CYCLE", title: "CYCLE" }
      ],
      colorClass: "bg-red-800/75"
    },
    "/gfood": {
      logo: "/img/logo/logo2.png",
      slider: {
        gradientStyle: { backgroundImage: 'linear-gradient(to right, #1d4d00, #3ab54a, #76ff7b)' },
        title: "РАЦИОНЫ НА ЛЮБОЙ ВКУС",
        description: "Детокс, набор массы, для похудения в GFOOD",
        buttonStyle: 'bg-gradient-to-br from-green-500 to-green-400 group-hover:from-green-500 group-hover:to-green-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800',
        image: "/img/food.png"
      },
      mainTitle: "Наши услуги:",
      sections: [
        { href: "/gfood/rations", imgSrc: "/img/gfood/gfood1.png", alt: "Рационы", title: "Рационы" },
        { href: "/gfood/lunches", imgSrc: "/img/gfood/gfood2.png", alt: "Ланчи", title: "Ланчи" },
        { href: "/gfood/breakfasts", imgSrc: "/img/gfood/gfood3.png", alt: "Завтраки", title: "Завтраки" },
        { href: "/gfood/catering", imgSrc: "/img/gfood/gfood4.png", alt: "Кейтеринг", title: "Кейтеринг" }
      ],
      colorClass: "bg-green-800/75"
    },
    "/grelka": {
      logo: "/img/logo/logo1.png",
      slider: {
        gradientStyle: { backgroundImage: 'linear-gradient(to right, #005c4b, #00a98e, #00ffdf)' },
        title: "SPA зона в GAGAR1N",
        description: "Порадуй себя и тело",
        buttonStyle: 'bg-gradient-to-br from-cyan-500 to-teal-400 group-hover:from-teal-500 group-hover:to-teal-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-teal-800',
        image: "/img/spa.png"
      },
      mainTitle: "Наши услуги:",
      sections: [
        { href: "/grelka/hamam", imgSrc: "/img/spa/spa1.png", alt: "Хамам зона", title: "Хамам зона" },
        { href: "/grelka/jacuzzi", imgSrc: "/img/spa/spa2.png", alt: "Зона джакузи", title: "Зона джакузи" },
        { href: "/grelka/massage", imgSrc: "/img/spa/spa3.png", alt: "Зона СПА-массажа", title: "Зона СПА-массажа" },
        { href: "/grelka/relax", imgSrc: "/img/spa/spa4.png", alt: "Зоны отдыха", title: "Зоны отдыха" }
      ],
      colorClass: "bg-teal-800/75"
    }
  };
  