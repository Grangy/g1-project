import React from 'react';

const Pricing = () => {
  const plans = [
    {
      name: 'Light',
      price: '1 700 ₽ в месяц',
      features: [
        'безлимитный доступ в клуб',
        'тренажерный зал',
        'анализ состава тела InBody',
        'бесплатные тренировки с тренером (Smart Start)',
        'мобильное приложение',
      ],
      missingFeatures: [
        'групповые занятия',
        'СПА зона',
        'доступ во все клубы сети',
        'доступ для друзей',
        'семейный доступ',
      ],
      color: 'red',
    },
    {
      name: 'Infinity',
      price: '2 300 ₽ в месяц',
      features: [
        'безлимитный доступ во все клубы сети',
        'доступ для друзей',
        'семейный доступ',
        'тренажерный зал',
        'анализ состава тела InBody',
        'бесплатные тренировки с тренером (Smart Start)',
        'мобильное приложение',
        'групповые занятия',
        'СПА зона',
      ],
      missingFeatures: [],
      color: 'red',
    },
    {
      name: 'Smart',
      price: '2 000 ₽ в месяц',
      features: [
        'безлимитный доступ в клуб',
        'тренажерный зал',
        'анализ состава тела InBody',
        'бесплатные тренировки с тренером (Smart Start)',
        'мобильное приложение',
        'групповые занятия',
      ],
      missingFeatures: [
        'СПА зона',
        'доступ во все клубы сети',
        'доступ для друзей',
        'семейный доступ',
      ],
      color: 'red',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-red-800 dark:text-white mb-10">Выбери свой фитнес</h2>
      <div className="flex flex-col lg:flex-row gap-6">
        {plans.map((plan) => (
          <div key={plan.name} className="flex-1 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
            <div className="text-center mb-6">
              <h3 className={`text-2xl font-bold text-white`}>{plan.name}</h3>
              <p className="mt-2 text-gray-800 dark:text-white text-lg">{plan.price}</p>
            </div>
            <ul className="mb-6">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-800 dark:text-white mb-2">
                  <svg
                    className="w-6 h-6 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
              {plan.missingFeatures.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-400 mb-2">
                  <svg
                    className="w-6 h-6 text-gray-400 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <button className={`w-full py-2 px-4 bg-custom-red text-white rounded-lg hover:bg-${plan.color}-700`}>
              Купить
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
