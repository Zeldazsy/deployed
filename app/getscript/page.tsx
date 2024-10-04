'use client';
import { useState } from 'react';
import Link from 'next/link';
import './index.css';
import bg from './bg.svg';

export default function HomePage() {
  const [buttonText, setButtonText] = useState('Copy Script');

  const copyKey = () => {
    const loadstring = "loadstring(game:HttpGet('https://raw.githubusercontent.com/Zeldazsy/luaion/refs/heads/main/Initialization.lua'))()";

    navigator.clipboard.writeText(loadstring)
      .then(() => {
        setButtonText('Copied!');
        setTimeout(() => {
          setButtonText('Copy Script Again');
        }, 2000);
      })
      .catch(error => {
        console.error('Failed to copy text: ', error);
      });
  };

  return (
    <div className="outline-gray-500 font-sans text-white h-screen flex flex-col md:flex-row relative outline-white">
      <a
        href="https://discord.com/users/1226056039904972831"
        target="_blank"
        rel="noopener noreferrer" // Added for security
        className="absolute top-4 right-4 bg-white-700 hover:bg-white text-white font-bold py-2 px-4 rounded-full flex items-center hover:text-gray-500"
      >
        My Discord
      </a>

      <div className="lines">
        {[...Array(3)].map((_, n) => (
          <div key={n} className="line"></div>
        ))}
      </div>

      <div className="left-half w-full md:w-1/2 h-full flex items-center justify-center p-4 md:p-0">
        <div className="text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">ZENCO CHEAT</h1>
          <p id="t2" className="text-xl md:text-3xl mb-4 text-gray-500 font-mono">
            <span className="font-mono inline-flex"> What Is Zenco Cheat? </span>
          </p>
          <p id="t3" className="text-lg md:text-2xl mb-4 text-gray-500 font-mono">
            <span className="font-mono inline-flex"> - Zenco Cheat is a powerful script that offers a wide range of </span>
          </p>
          <button
            onClick={copyKey}
            className="w-full bg-transparent hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            {buttonText}
          </button>
        </div>
      </div>

      <div className="hidden md:block absolute left-1/2 top-0 w-px h-full bg-slate-700"></div>

      <div
        className="right-half w-full md:w-1/2 h-full flex items-center justify-center p-4 md:p-0"
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: 'cover',
        }}
      >
        <div className="font-mono">
          <h2 className="text-xl md:text-6xl mb-4">Script Information</h2>
          <h2 className="text-lg md:text-4xl mb-1">SUPPORTED MAP</h2>
          <div>
            <Link className="text-white hover:text-gray-500 font-bold md:text-2xl" href="https://www.roblox.com/games/18138547215/EVOLUTIONS-Anime-Card-Battle">
              - Anime Card Battle
            </Link>
          </div>
          <hr className="h-px my-1 bg-white border-0 dark:bg-white" />
          <div>
            <Link className="text-white hover:text-gray-500 font-bold md:text-2xl" href="https://www.roblox.com/games/18689166229/Granzel-Parkour-stuff">
              - Granzel Parkour stuff
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
