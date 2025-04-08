"use client";

import { useState } from 'react';
import { PieChart, Pie, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell, ResponsiveContainer } from 'recharts';
import { Bungee_Spice, Roboto } from 'next/font/google';

// Load Google Fonts
const bungeeShade = Bungee_Spice({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

type PoutineType = {
  id: string;
  name: string;
  description: string;
  votes: number;
  color: string;
};

export default function PoutineVotingDashboard() {
  const [poutines, setPoutines] = useState<PoutineType[]>([
    {
      id: 'classic',
      name: 'Classic Poutine',
      description: 'Fries, cheese curds, and Smoke\'s signature brown gravy',
      votes: 0,
      color: '#dc2626'
    },
    {
      id: 'italian',
      name: 'Italian Poutine',
      description: 'Fries, cheese curds, and marinara sauce',
      votes: 0,
      color: '#ef4444'
    },
    {
      id: 'bbq',
      name: 'BBQ Poutine',
      description: 'Fries, cheese curds, and BBQ sauce with pulled pork',
      votes: 0,
      color: '#f87171'
    }
  ]);
  const [submitted, setSubmitted] = useState(false);

  const incrementVote = (id: string) => {
    setPoutines(poutines.map(poutine => 
      poutine.id === id ? { ...poutine, votes: poutine.votes + 1 } : poutine
    ));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    setPoutines(poutines.map(poutine => ({ ...poutine, votes: 0 })));
  };

  return (
    <div className={`min-h-screen bg-red-50 p-8 md:p-12 w-full ${roboto.className}`}>
      <div className="max-w-8xl mx-auto">
        <header className="mb-12 text-center relative px-4">
         
          <div className="my-8">
            <h1 className={`text-4xl md:text-5xl font-bold text-red-800 mb-4 tracking-tight ${bungeeShade.className}`}>
              <span className="bg-white px-8 py-3 rounded-full shadow-lg inline-block">
                Smoke's Poutinerie Preference Poll
              </span>
            </h1>
          </div>
          
          <div className="flex justify-center items-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-full px-6 py-2 inline-flex items-center border border-red-100">
              <span className="text-2xl mr-3">🍟</span>
              <p className="text-lg text-red-600 font-medium ${bungeeShade.className}">
                Vote for your favorite poutine!
              </p>
              <span className="text-2xl ml-3">🧀</span>
            </div>
          </div>

          
        </header>

        <div className="bg-white rounded-2xl shadow-xl overflow-visible w-full max-w-[120rem] mx-auto px-4">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="p-8 md:p-12 ">
              <h2 className="text-3xl font-semibold text-red-700 mb-12">Cast Your Votes!</h2>
              
              <div className="space-y-8 mb-12 max-w-[90rem] mx-auto px-4">
                {poutines.map((poutine) => (
                  <div key={poutine.id} className="border-2 border-red-100 rounded-xl p-6 hover:bg-red-50 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                      <div>
                        <h3 className="text-xl font-medium text-red-900">{poutine.name}</h3>
                        <p className="text-base text-red-600">{poutine.description}</p>
                      </div>
                      <div className="flex items-center gap-6">
                        <input
                          type="number"
                          min="0"
                          value={poutine.votes}
                          onChange={(e) => setPoutines(poutines.map(p => 
                            p.id === poutine.id ? { ...p, votes: parseInt(e.target.value) || 0 } : p
                          ))}
                          className="w-24 px-4 py-3 border-2 border-red-200 rounded-lg text-lg text-red-900 focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                        <button
                          type="button"
                          onClick={() => incrementVote(poutine.id)}
                          className="px-6 py-3 bg-red-100 text-lg text-red-700 rounded-lg hover:bg-red-200 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
                        >
                          +1
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-8 py-4 text-lg bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  Show Results
                </button>
              </div>
            </form>
          ) : (
            <div className="p-8 md:p-12">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-semibold text-red-700 mb-12">Voting Results</h2>
                <button
                  onClick={resetForm}
                  className="px-6 py-3 mb-12 text-lg bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  Back to Voting
                </button>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="h-[30rem]">
                  <h3 className="text-xl font-medium text-red-800 mb-6 text-center">Vote Distribution</h3>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={poutines}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={150}
                        fill="#8884d8"
                        dataKey="votes"
                        nameKey="name"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {poutines.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`${value} votes`, 'Votes']} />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                <div className="h-[30rem]">
                  <h3 className="text-xl font-medium text-red-800 mb-6 text-center">Vote Count</h3>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={poutines}
                      margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#fecaca" />
                      <XAxis dataKey="name" stroke="#991b1b" />
                      <YAxis stroke="#991b1b" />
                      <Tooltip formatter={(value) => [`${value} votes`, 'Votes']} />
                      <Bar dataKey="votes" name="Votes" barSize={50}>
                        {poutines.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="mt-16 bg-red-50 p-6 rounded-xl">
                <h3 className="text-xl font-medium text-red-800 mb-4">Summary</h3>
                <ul className="space-y-2 text-lg">
                  {poutines.map((poutine) => {
                    const totalVotes = poutines.reduce((acc, curr) => acc + curr.votes, 0);
                    const percentage = totalVotes > 0 
                      ? Math.round((poutine.votes / totalVotes) * 10000) / 100
                      : 0;
                    
                    return (
                      <li key={poutine.id} className="text-red-700">
                        <span className="font-medium">{poutine.name}:</span> {poutine.votes} votes ({percentage}%)
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          )}
        </div>

        <footer className="mt-12 text-center text-lg text-red-600">
          <p>&copy; {new Date().getFullYear()} Smoke's Poutinerie. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
}