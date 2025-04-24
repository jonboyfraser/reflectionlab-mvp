import React, { useEffect, useState } from 'react';
import { Plus } from 'lucide-react';
import { JournalCard } from '../components/JournalCard';
import { fetchJournals } from '../lib/api';

interface Journal {
  id: string;
  title: string;
  entryCount: number;
}

const Dashboard = () => {
  const [journals, setJournals] = useState<Journal[]>([]);

  useEffect(() => {
    fetchJournals()
      .then((res) => setJournals(res.data))
      .catch(() => setJournals([{ id: 'sample', title: 'Sample Journal', entryCount: 0 }]));
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] p-4">
        <h1 className="text-white text-2xl font-semibold">My Journals</h1>
      </header>
      <main className="flex-1 p-4 space-y-4">
        {journals.map((j) => (
          <JournalCard key={j.id} id={j.id} title={j.title} entryCount={j.entryCount} />
        ))}
      </main>
      <button
        className="fixed bottom-6 right-6 bg-[#60A5FA] p-4 rounded-full shadow-lg transform transition-transform hover:scale-105"
        onClick={() => {
          /* navigate to /journals/new */
        }}
      >
        <Plus size={24} color="white" />
      </button>
    </div>
  );
};

export default Dashboard;
