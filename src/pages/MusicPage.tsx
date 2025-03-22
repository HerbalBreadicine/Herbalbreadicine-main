"use client"
import React from 'react';
import Sidebar from '../components/Sidebar';
import NowPlayingBar from '../components/NowPlayingBar';
import { PreFooter } from '../components/PreFooter';
import { Footer } from '../components/Footer';
import { Navigation } from '../components/Navigation';
import { Link } from 'react-router-dom';

const MusicPage: React.FC = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navigation />
      <div className="flex pt-24 mt-4">
      <Sidebar />
        <div className="flex-1 flex flex-col min-h-[calc(100vh-96px)]">
          <main className="flex-1 p-8 overflow-y-auto bg-black">
            {/* Featured Banner - Moooo Records */}
            <div className="mb-10 bg-gradient-to-r from-yellow-900/30 to-black border-2 border-yellow-400/50 rounded-lg overflow-hidden shadow-xl">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1515265705-cbcc6e6ba264?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Mooo Records" 
                  className="w-full h-40 md:h-52 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-black/75"></div>
                <div className="absolute inset-0 flex flex-col justify-center p-6 md:p-10">
                  <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">MOOOO RECORDS</h2>
                  <p className="text-white text-base md:text-xl max-w-lg">The finest western vinyl collection this side of the Mississippi. New releases every week!</p>
                  <button className="mt-4 bg-yellow-400 hover:bg-yellow-300 text-black px-4 py-2 rounded-md font-medium transition-colors self-start">
                    Featured Albums
                  </button>
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl font-bold text-white mb-12">Your Vinyl Collection</h1>
            
            {/* Vinyl Record Collection */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
              
              {/* Record 1 - Western Classics - Updated Image */}
              <div className="vinyl-record group relative">
                {/* Album Cover */}
                <div className="w-full aspect-square relative overflow-hidden rounded-lg shadow-xl mb-4 border-2 border-yellow-400">
                  <img 
                    src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                    alt="Western Classics" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                    <h2 className="text-xl font-semibold text-white">Western Classics</h2>
                    <p className="text-yellow-200 text-sm">32 tracks</p>
                  </div>
                  
                  {/* Vinyl peeking from behind cover */}
                  <div className="absolute -right-10 top-1/2 transform -translate-y-1/2 w-3/4 h-3/4 rounded-full bg-black group-hover:translate-x-6 transition-transform duration-700">
                    <div className="absolute inset-4 rounded-full bg-gradient-to-br from-gray-800 to-black"></div>
                    <div className="absolute inset-0 rounded-full flex items-center justify-center">
                      <div className="w-[40%] h-[40%] rounded-full bg-yellow-400 flex items-center justify-center relative">
                        <div className="w-[30%] h-[30%] rounded-full bg-black"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-yellow-400 hover:bg-yellow-300 text-black p-4 rounded-full z-10 shadow-xl transform transition-transform duration-300 hover:scale-110">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                {/* Record info below */}
                <div className="text-left">
                  <h2 className="text-xl font-semibold text-white">Western Classics</h2>
                  <p className="text-yellow-200 text-sm mt-1">Country and western hits from the golden era</p>
                  <div className="flex justify-between items-center mt-3">
                    <p className="text-white text-sm">32 tracks</p>
                    <button className="bg-yellow-400 hover:bg-yellow-500 text-black p-2 rounded-full">
                      ▶
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Record 2 - Cowboy Anthems - Horse Image */}
              <div className="vinyl-record group relative">
                {/* Album Cover */}
                <div className="w-full aspect-square relative overflow-hidden rounded-lg shadow-xl mb-4 border-2 border-yellow-400">
                  <img 
                    src="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" 
                    alt="Cowboy Anthems" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                    <h2 className="text-xl font-semibold text-white">Cowboy Anthems</h2>
                    <p className="text-yellow-200 text-sm">28 tracks</p>
                  </div>
                  
                  {/* Vinyl peeking from behind cover */}
                  <div className="absolute -right-10 top-1/2 transform -translate-y-1/2 w-3/4 h-3/4 rounded-full bg-black group-hover:translate-x-6 transition-transform duration-700">
                    <div className="absolute inset-4 rounded-full bg-gradient-to-br from-gray-800 to-black"></div>
                    <div className="absolute inset-0 rounded-full flex items-center justify-center">
                      <div className="w-[40%] h-[40%] rounded-full bg-yellow-400 flex items-center justify-center relative">
                        <div className="w-[30%] h-[30%] rounded-full bg-black"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-yellow-400 hover:bg-yellow-300 text-black p-4 rounded-full z-10 shadow-xl transform transition-transform duration-300 hover:scale-110">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                {/* Record info below */}
                <div className="text-left">
                  <h2 className="text-xl font-semibold text-white">Cowboy Anthems</h2>
                  <p className="text-yellow-200 text-sm mt-1">The best western trail riding songs</p>
                  <div className="flex justify-between items-center mt-3">
                    <p className="text-white text-sm">28 tracks</p>
                    <button className="bg-yellow-400 hover:bg-yellow-500 text-black p-2 rounded-full">
                      ▶
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Record 3 */}
              <div className="vinyl-record group relative">
                {/* Album Cover */}
                <div className="w-full aspect-square relative overflow-hidden rounded-lg shadow-xl mb-4 border-2 border-yellow-400">
                  <img 
                    src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                    alt="Top Hits 2023" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                    <h2 className="text-xl font-semibold text-white">Top Hits 2023</h2>
                    <p className="text-yellow-200 text-sm">50 tracks</p>
                  </div>
                  
                  {/* Vinyl peeking from behind cover */}
                  <div className="absolute -right-10 top-1/2 transform -translate-y-1/2 w-3/4 h-3/4 rounded-full bg-black group-hover:translate-x-6 transition-transform duration-700">
                    <div className="absolute inset-4 rounded-full bg-gradient-to-br from-gray-800 to-black"></div>
                    <div className="absolute inset-0 rounded-full flex items-center justify-center">
                      <div className="w-[40%] h-[40%] rounded-full bg-yellow-400 flex items-center justify-center relative">
                        <div className="w-[30%] h-[30%] rounded-full bg-black"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-yellow-400 hover:bg-yellow-300 text-black p-4 rounded-full z-10 shadow-xl transform transition-transform duration-300 hover:scale-110">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                {/* Record info below */}
                <div className="text-left">
                  <h2 className="text-xl font-semibold text-white">Top Hits 2023</h2>
                  <p className="text-yellow-200 text-sm mt-1">The most popular songs this year</p>
                  <div className="flex justify-between items-center mt-3">
                    <p className="text-white text-sm">50 tracks</p>
                    <button className="bg-yellow-400 hover:bg-yellow-500 text-black p-2 rounded-full">
                      ▶
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Record 4 */}
              <div className="vinyl-record group relative">
                {/* Album Cover */}
                <div className="w-full aspect-square relative overflow-hidden rounded-lg shadow-xl mb-4 border-2 border-yellow-400">
                  <img 
                    src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                    alt="New Releases" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                    <h2 className="text-xl font-semibold text-white">New Releases</h2>
                    <p className="text-yellow-200 text-sm">Updated weekly</p>
                  </div>
                  
                  {/* Vinyl peeking from behind cover */}
                  <div className="absolute -right-10 top-1/2 transform -translate-y-1/2 w-3/4 h-3/4 rounded-full bg-black group-hover:translate-x-6 transition-transform duration-700">
                    <div className="absolute inset-4 rounded-full bg-gradient-to-br from-gray-800 to-black"></div>
                    <div className="absolute inset-0 rounded-full flex items-center justify-center">
                      <div className="w-[40%] h-[40%] rounded-full bg-yellow-400 flex items-center justify-center relative">
                        <div className="w-[30%] h-[30%] rounded-full bg-black"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-yellow-400 hover:bg-yellow-300 text-black p-4 rounded-full z-10 shadow-xl transform transition-transform duration-300 hover:scale-110">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                {/* Record info below */}
                <div className="text-left">
                  <h2 className="text-xl font-semibold text-white">New Releases</h2>
                  <p className="text-yellow-200 text-sm mt-1">Fresh tracks from your favorite artists</p>
                  <div className="flex justify-between items-center mt-3">
                    <p className="text-white text-sm">Updated weekly</p>
                    <button className="bg-yellow-400 hover:bg-yellow-500 text-black p-2 rounded-full">
                      ▶
                    </button>
                  </div>
                </div>
              </div>
              
            </div>
            
            {/* Record Player Section - Western Themed */}
            <div className="mt-8 mx-auto max-w-sm">
              <div className="bg-gradient-to-r from-gray-900 to-black border-2 border-yellow-400/40 rounded-lg overflow-hidden shadow-xl">
                {/* Western Album Artwork - More Authentic */}
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=640&q=80" 
                    alt="Western Classics - Album Cover" 
                    className="w-full h-28 object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60"></div>
                  <div className="absolute top-0 left-0 right-0 p-2 flex justify-between items-center">
                    <div className="bg-yellow-400/90 text-black text-xs font-bold px-2 py-0.5 rounded">
                      NOW PLAYING
                    </div>
                    <div className="bg-black/70 text-yellow-400 text-xs px-2 py-0.5 rounded-sm border border-yellow-400/50">
                      32 tracks
                    </div>
                  </div>
                  <div className="absolute bottom-1 left-2 right-2 text-white text-xs">
                    <p className="font-medium text-yellow-200">Country and western hits from the golden era</p>
                  </div>
                </div>
                
                {/* Player Controls */}
                <div className="flex items-center p-2 bg-black/80">
                  {/* Vinyl Disc Icon - Western Styled */}
                  <div className="relative w-12 h-12 flex-shrink-0 mr-3 bg-black rounded-full border border-yellow-400/30 flex items-center justify-center">
                    <div className="w-5 h-5 rounded-full bg-yellow-400 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                    </div>
                    <div className="absolute inset-0 rounded-full border-2 border-yellow-400/20 border-t-yellow-400/80 animate-spin-slow"></div>
                  </div>
                  
                  {/* Track Info */}
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-0.5">
                      <div>
                        <p className="text-yellow-400 text-xs font-bold">Now Playing</p>
                        <p className="text-white text-sm font-semibold">Ghost Riders in the Sky</p>
                        <p className="text-gray-400 text-xs">Johnny Cash</p>
                      </div>
                      
                      <div className="flex space-x-1">
                        <button className="text-xs bg-yellow-400 text-black px-1.5 py-0.5 rounded-sm font-medium">33⅓</button>
                        <button className="text-xs bg-black text-yellow-400 border border-yellow-400/50 px-1.5 py-0.5 rounded-sm">45</button>
                      </div>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="flex items-center text-xs">
                      <span className="text-gray-400 text-xs w-8">1:24</span>
                      <div className="mx-1 flex-1 h-1 bg-gray-800 rounded-full">
                        <div className="h-full w-1/3 bg-yellow-400 rounded-full"></div>
                      </div>
                      <span className="text-gray-400 text-xs w-8 text-right">3:45</span>
                    </div>
                  </div>
                </div>
                
                {/* Simple Control Buttons */}
                <div className="flex justify-between items-center py-1.5 px-4 bg-gradient-to-r from-yellow-900/40 to-black border-t border-yellow-400/10">
                  <button className="text-gray-400 hover:text-yellow-400">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"></path>
                    </svg>
                  </button>
                  <button className="bg-yellow-400 text-black p-1.5 rounded-full hover:bg-yellow-300">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"></path>
                    </svg>
                  </button>
                  <button className="text-gray-400 hover:text-yellow-400">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 6h2v12h-2zm-3.5 6l-8.5 6V6z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
        </main>
        <NowPlayingBar />
        </div>
      </div>
      
      {/* Add PreFooter and Footer */}
      <div className="mt-20 pt-16">
        <PreFooter />
        <Footer />
      </div>
      
      {/* Privacy and Terms Links */}
      <div className="bg-black py-4 border-t border-yellow-900/20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center items-center text-xs text-gray-500 space-y-2 md:space-y-0 md:space-x-4">
          <p>© 2023 Creative Mush Western. All rights reserved.</p>
          <div className="flex space-x-4">
            <Link to="/privacy" className="hover:text-yellow-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-yellow-400 transition-colors">
              Terms & Conditions
            </Link>
            <a href="#" className="hover:text-yellow-400 transition-colors">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPage;