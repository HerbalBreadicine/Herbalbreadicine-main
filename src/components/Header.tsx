"use client"
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-black border-b border-yellow-400/50 text-white p-4 mt-6 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <div className="flex space-x-2">
          <button className="bg-black border border-yellow-400 rounded-full p-1 hover:bg-yellow-900/20">
            <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="bg-black border border-yellow-400 rounded-full p-1 hover:bg-yellow-900/20">
            <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input 
            type="search" 
            className="block w-64 p-2 pl-10 text-sm rounded-full bg-black border border-yellow-400 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-yellow-400/50" 
            placeholder="Search for songs, artists..."
          />
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="bg-yellow-400 text-black px-4 py-1 rounded-full font-medium text-sm hover:bg-yellow-300">
          Upgrade
        </button>
        <div className="bg-black border border-yellow-400 p-1 rounded-full">
          <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header; 