import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import PromptCard from '../components/PromptCard';
import PrimaryButton from '../components/PrimaryButton';
import { postEntry } from '../lib/api';

type TabType = 'free' | 'prompted';

const ComposerPage: React.FC = () => {
  const { jid } = useParams();
  const [tab, setTab] = useState<TabType>('free');
  const [text, setText] = useState('');

  const mockPrompts = [
    'What was the highlight of your day?',
    'Did anything challenge you today?',
    "What's one small win you had?",
  ];

  const handleSave = async () => {
    if (!jid) return;

    try {
      await postEntry({ journal_id: jid, body: text });
      alert('Saved!');
    } catch (e) {
      alert('Failed to save entry');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="p-4 border-b">
        <div className="flex gap-4">
          <button
            onClick={() => setTab('free')}
            className={`pb-2 border-b-2 ${
              tab === 'free' ? 'border-blue-500 font-semibold' : 'border-transparent'
            }`}
          >
            Free Write
          </button>
          <button
            onClick={() => setTab('prompted')}
            className={`pb-2 border-b-2 ${
              tab === 'prompted' ? 'border-blue-500 font-semibold' : 'border-transparent'
            }`}
          >
            Prompted
          </button>
        </div>
      </header>
      <main className="flex-1 p-4 space-y-4 overflow-auto">
        {tab === 'free' && (
          <textarea
            className="w-full border border-gray-300 rounded-lg p-4 min-h-[200px]"
            placeholder="Speak your mind…"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        )}
        {tab === 'prompted' &&
          mockPrompts.map((p, i) => (
            <PromptCard key={i} promptText={p} onClick={() => setText(p)} />
          ))}
      </main>
      <div className="p-4 border-t">
        <PrimaryButton label="Save Entry" onClick={handleSave} />
      </div>
    </div>
  );
};

export default ComposerPage;
