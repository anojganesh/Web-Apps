"use client";
import { useState, useRef, useEffect } from 'react';
import Head from 'next/head';

type Message = {
  id: number;
  text: string;
  sender: 'user' | 'other';
  timestamp: Date;
  avatar?: string;
  name?: string;
};

export default function GroupChat() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Hey everyone! Welcome to the group chat!',
      sender: 'other',
      name: 'Vanessa Hudgins',
      avatar: 'https://randomuser.me/api/portraits/women/47.jpg',
      timestamp: new Date(Date.now() - 3600000),
    },
    {
      id: 2,
      text: 'Thanks for adding me to the group! 😊',
      sender: 'other',
      name: 'Jeremey Phillips',
      avatar: 'https://randomuser.me/api/portraits/men/33.jpg',
      timestamp: new Date(Date.now() - 1800000),
    },
    {
      id: 3,
      text: 'What is everyone up to today? Any plans?',
      sender: 'other',
      name: 'Emma Chamberlain',
      avatar: 'https://randomuser.me/api/portraits/women/67.jpg',
      timestamp: new Date(Date.now() - 900000),
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessage: Message = {
      id: Date.now() + 1,
      text: input,
      sender: 'user',
      name: 'You',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      timestamp: new Date(),
    };

    setMessages([...messages, newMessage]);
    setInput('');

    setTimeout(() => {
      const responses = [
        { text: "That's interesting! Tell me more.", name: 'Vanessa Hudgins', avatar: 'https://randomuser.me/api/portraits/women/47.jpg' },
        { text: "I completely agree with you.", name: 'Jeremey Phillips', avatar: 'https://randomuser.me/api/portraits/men/33.jpg' },
        { text: "Could you clarify what you mean by that?", name: 'Emma Chamberlain', avatar: 'https://randomuser.me/api/portraits/women/67.jpg' },
        { text: "Nice one! 😄", name: 'Vanessa Hudgins', avatar: 'https://randomuser.me/api/portraits/women/47.jpg' },
        { text: "Let's discuss this more in depth tomorrow.", name: 'Jeremey Phillips', avatar: 'https://randomuser.me/api/portraits/men/33.jpg' },
        { text: "Anyone else want to share their thoughts?", name: 'Emma Chamberlain', avatar: 'https://randomuser.me/api/portraits/women/67.jpg' },
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      const responseMessage: Message = {
        id: messages.length + 2,
        text: randomResponse.text,
        sender: 'other',
        name: randomResponse.name,
        avatar: randomResponse.avatar,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, responseMessage]);
    }, 1000 + Math.random() * 2000);
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString([], { weekday: 'long', month: 'short', day: 'numeric' });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Segoe+UI:wght@600&display=swap" rel="stylesheet" />
      </Head>

      <style jsx global>{`
        .facebook-logo {
          font-family: 'Segoe UI', Roboto, sans-serif;
          font-weight: 600;
          letter-spacing: -0.5px;
        }
        .message-enter {
          animation: messageEnter 0.3s ease-out forwards;
        }
        @keyframes messageEnter {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <header className="bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg">
        <div className="container mx-auto px-4 py-3 flex items-center">
          <h1 className="text-3xl facebook-logo">facebook</h1>
          <nav className="ml-auto flex items-center space-x-3">
            <button className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-700 hover:bg-blue-800 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <button className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-700 hover:bg-blue-800 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </button>
            <button className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-md font-medium flex items-center transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              Group Info
            </button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 flex flex-col h-[calc(100vh-120px)]">
        <div className="flex-1 bg-white rounded-xl shadow-lg overflow-hidden flex flex-col border border-gray-200">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 px-6 py-4 border-b border-gray-200 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Awesome Group Chat Demo</h2>
              <div className="flex items-center mt-1">
                <div className="flex -space-x-2">
                  <img className="w-6 h-6 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/47.jpg" alt="Sarah" />
                  <img className="w-6 h-6 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/men/33.jpg" alt="Michael" />
                  <img className="w-6 h-6 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/67.jpg" alt="Emma" />
                </div>
                <span className="ml-2 text-sm font-medium text-gray-600">3 friends online</span>
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="p-2 rounded-full hover:bg-gray-200 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </button>
              <button className="p-2 rounded-full hover:bg-gray-200 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </button>
              <button className="p-2 rounded-full hover:bg-gray-200 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex-1 p-6 overflow-y-auto bg-gray-50">
            <div className="space-y-4">
              {messages.map((message, index) => {
                const showDate = index === 0 || 
                  new Date(messages[index].timestamp).toDateString() !== 
                  new Date(messages[index - 1].timestamp).toDateString();
                
                return (
                  <div key={message.id} className="message-enter">
                    {showDate && (
                      <div className="flex justify-center my-4">
                        <div className="bg-gray-200 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">
                          {formatDate(message.timestamp)}
                        </div>
                      </div>
                    )}
                    <div className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                      {message.sender === 'other' && (
                        <img 
                          src={message.avatar} 
                          alt={message.name} 
                          className="w-10 h-10 rounded-full mr-3 self-end mb-1"
                        />
                      )}
                      <div className="flex flex-col max-w-xs md:max-w-md lg:max-w-lg">
                        {message.sender === 'other' && (
                          <span className="text-xs font-semibold text-gray-700 mb-1">{message.name}</span>
                        )}
                        <div
                          className={`rounded-2xl px-4 py-2 ${
                            message.sender === 'user'
                              ? 'bg-blue-500 text-white rounded-br-none'
                              : 'bg-white text-gray-800 rounded-bl-none shadow-sm border border-gray-200'
                          }`}
                        >
                          <p className="whitespace-pre-wrap">{message.text}</p>
                          <p
                            className={`text-xs mt-1 text-right ${
                              message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                            }`}
                          >
                            {formatTime(message.timestamp)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div ref={messagesEndRef} />
            </div>
          </div>

          <div className="border-t border-gray-200 p-4 bg-white">
            <form onSubmit={handleSubmit} className="flex gap-2 items-center">
              <button type="button" className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
              <button type="button" className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                </svg>
              </button>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Write a message..."
                className="text-black flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className={`p-2 rounded-full ${input.trim() ? 'bg-blue-500 hover:bg-blue-600 text-white' : 'bg-gray-200 text-gray-400 cursor-not-allowed'} transition-colors`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 py-4">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Facebook, Inc. For demo purposes only.
        </div>
      </footer>
    </div>
  );
}