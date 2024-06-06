'use client';
import { useState } from 'react';
import axios from 'axios';
import useSWR from 'swr';
import Image from 'next/image';

const fetcher = (url: string) => axios.get(url).then(res => res.data);

const TrainerAdmin = () => {
  const [newTrainer, setNewTrainer] = useState({ name: '', img: '' });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { data: trainers, mutate: mutateTrainers } = useSWR('/api/trainers', fetcher);

  const addTrainer = async () => {
    if (newTrainer.name && selectedFile) {
      const response = await axios.post('/api/trainers', newTrainer);
      const trainerId = response.data.id;
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('trainerId', trainerId);

      await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setNewTrainer({ name: '', img: '' });
      setSelectedFile(null);
      mutateTrainers();
    }
  };

  const deleteTrainer = async (id: string) => {
    try {
      await axios.delete('/api/trainers', {
        data: { id },
        headers: {
          'Content-Type': 'application/json',
        },
      });
      mutateTrainers();
    } catch (error) {
      console.error('Error deleting trainer:', error);
    }
  };

  return (
    <div>
      <div className="mb-4 flex flex-col items-center">
        <input
          type="text"
          value={newTrainer.name}
          onChange={(e) => setNewTrainer({ ...newTrainer, name: e.target.value })}
          placeholder="Trainer name"
          className="border p-2 mb-2 w-full md:w-1/3"
        />
        <input
          type="file"
          onChange={(e) => setSelectedFile(e.target.files ? e.target.files[0] : null)}
          className="border p-2 mb-2 w-full md:w-1/3"
        />
        <button onClick={addTrainer} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">Add</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {trainers && trainers.map((trainer: any) => (
          <div key={trainer._id} className="flex flex-col items-center border p-4 bg-white rounded-lg shadow-md">
            <div className="w-24 h-24 relative mb-2">
              <Image src={`/img/trainers/${trainer._id}.jpg`} alt={trainer.name} layout="fill" objectFit="cover" className="rounded-full" />
            </div>
            <span className="text-lg font-semibold">{trainer.name}</span>
            <button onClick={() => deleteTrainer(trainer._id)} className="text-red-500 mt-2 hover:text-red-700 transition">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainerAdmin;
