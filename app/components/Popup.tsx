// app/components/Popup.tsx
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { XIcon } from '@heroicons/react/solid';

export default function Popup({ isOpen, closeModal }: { isOpen: boolean; closeModal: () => void; }) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all relative">
                <button
                  type="button"
                  className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                  onClick={closeModal}
                >
                  <XIcon className="w-6 h-6" />
                </button>
                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                  Получить больше информации
                </Dialog.Title>
                <div className="mt-2">
                  <form>
                    <div className="mb-4">
                      <label htmlFor="name" className="sr-only">Имя</label>
                      <input type="text" id="name" name="name" placeholder="Имя*" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600" />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="phone" className="sr-only">Телефон</label>
                      <input type="text" id="phone" name="phone" placeholder="+7 (___) ___-__-__" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600" />
                    </div>
                    <div className="mb-4">
                      <button type="submit" className="w-full px-4 py-2 bg-red-600 text-white rounded-lg">Отправить</button>
                    </div>
                  </form>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
