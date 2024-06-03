'use client';

import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [agreement1, setAgreement1] = useState(false);
  const [agreement2, setAgreement2] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex-1 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">Получить больше информации</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-6 sm:space-y-0">
          <input
            type="text"
            placeholder="Имя*"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="flex-1 px-4 py-3 rounded-lg bg-gray-200 dark:bg-custom-dark-gray2 text-gray-800 dark:text-white focus:outline-none"
          />
          <input
            type="tel"
            placeholder="+7 (___) ___-__-__"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="flex-1 px-4 py-3 rounded-lg bg-gray-200 dark:bg-custom-dark-gray2 text-gray-800 dark:text-white focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 px-6 rounded-lg bg-custom-red text-white text-lg font-semibold hover:bg-custom-red"
        >
          Отправить
        </button>
        <div className="flex flex-col space-y-4">
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={agreement1}
              onChange={(e) => setAgreement1(e.target.checked)}
              className="form-checkbox h-5 w-5 text-custom-red rounded focus:outline-none"
            />
            <span className="text-gray-800 dark:text-white">
              Я согласен с публичным <a href="#" className="text-custom-light-red">договором-офертой</a> и <a href="#" className="text-custom-light-red">политикой обработки персональных данных</a>
            </span>
          </label>
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={agreement2}
              onChange={(e) => setAgreement2(e.target.checked)}
              className="form-checkbox h-5 w-5 text-custom-light-red rounded focus:outline-none"
            />
            <span className="text-gray-800 dark:text-white">
              Я согласен(а) на <a href="#" className="text-custom-light-red">рассылку новостей и предложений DDX Fitness</a>
            </span>
          </label>
        </div>
      </form>
      </div>
    </div>
  );
};

export default ContactForm;
