'use client';
import { useState } from 'react';
import MenuAdmin from '../components/admin/MenuAdmin';
import TrainerAdmin from '../components/admin/TrainerAdmin';

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState('menu');

  return (
    <div className="min-h-screen bg-gray-100 p-4 mt-20">
      <div className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
        <h1 className="text-3xl font-bold p-4 text-center">Admin Panel</h1>
        <div className="flex justify-center space-x-4 mb-4">
          <button onClick={() => setActiveTab('menu')} className={`px-4 py-2 rounded-t-lg ${activeTab === 'menu' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}>Menu Items</button>
          <button onClick={() => setActiveTab('trainers')} className={`px-4 py-2 rounded-t-lg ${activeTab === 'trainers' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}>Trainers</button>
        </div>
      </div>
      <div className="pt-20">
        {activeTab === 'menu' && <MenuAdmin />}
        {activeTab === 'trainers' && <TrainerAdmin />}
      </div>
    </div>
  );
};

export default AdminPage;
