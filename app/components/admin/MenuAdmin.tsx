'use client';
import { useState } from 'react';
import axios from 'axios';
import useSWR from 'swr';

const fetcher = (url: string) => axios.get(url).then(res => res.data);

const MenuAdmin = () => {
  const [newMenuItem, setNewMenuItem] = useState({ title: '', href: '' });
  const { data: menuItems, mutate: mutateMenu } = useSWR('/api/menu', fetcher);

  const addMenuItem = async () => {
    if (newMenuItem.title && newMenuItem.href) {
      await axios.post('/api/menu', newMenuItem);
      setNewMenuItem({ title: '', href: '' });
      mutateMenu();
    }
  };

  const deleteMenuItem = async (id: string) => {
    try {
      await axios.delete('/api/menu', {
        data: { id },
        headers: {
          'Content-Type': 'application/json',
        },
      });
      mutateMenu();
    } catch (error) {
      console.error('Error deleting menu item:', error);
    }
  };

  return (
    <div>
      <div className="mb-4 flex flex-col items-center">
        <input
          type="text"
          value={newMenuItem.title}
          onChange={(e) => setNewMenuItem({ ...newMenuItem, title: e.target.value })}
          placeholder="New menu item title"
          className="border p-2 mb-2 w-full md:w-1/3"
        />
        <input
          type="text"
          value={newMenuItem.href}
          onChange={(e) => setNewMenuItem({ ...newMenuItem, href: e.target.value })}
          placeholder="New menu item href"
          className="border p-2 mb-2 w-full md:w-1/3"
        />
        <button onClick={addMenuItem} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">Add</button>
      </div>
      <ul className="space-y-2">
        {menuItems && menuItems.map((item: any) => (
          <li key={item._id} className="flex justify-between border-b p-2 bg-white rounded-lg shadow-md">
            <span>{item.title}</span>
            <button onClick={() => deleteMenuItem(item._id)} className="text-red-500 hover:text-red-700 transition">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuAdmin;
