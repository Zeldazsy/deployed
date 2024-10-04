'use client';
import React, { useEffect, useState } from 'react';
import './index.css';

function HomePage() {
  const texts = ['DEVELOPER', 'PROGRAMMER', 'FREELANCER'];
  const speed = 50;
  const [loopIndex, setLoopIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const typeWriter = () => {
      const currentText = texts[loopIndex % texts.length];

      if (!isDeleting) {
        setDisplayText(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        if (charIndex + 1 === currentText.length) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setDisplayText(currentText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        if (charIndex === 0) {
          setIsDeleting(false);
          setLoopIndex(loopIndex + 1);
        }
      }
    };

    const typingInterval = setTimeout(typeWriter, speed);
    return () => clearTimeout(typingInterval);
  }, [charIndex, isDeleting, loopIndex]);

  return (
    <div className="font-sans text-white relative">
      <div className="lines">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="line"></div>
        ))}
      </div>
      
      {/* Contact Information Section */}
      <div className="absolute right-0 top-10 w-1/4 h-full flex items-start justify-center font-mono">
        <div className="text-center">
          <h2 className="text-2xl mb-4">Contact Information</h2>
          <p>Discord ID: 1226056039904972831</p>
          <div className="mt-4">
            <a href="https://www.instagram.com/zcel.daaa/" className="text-blue-400 hover:text-blue-300">
              Instagram
            </a>
            <span className="mx-2">|</span>
            <a href="https://github.com/zeldazsy" className="text-blue-400 hover:text-blue-300">
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="w-full h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-7xl font-bold mb-10 text-purple-600">Zelda Cenzo</h1>
          <p className="text-2xl mb-4 uppercase text-purple-300 font-mono">
            I AM <span className="inline-flex font-mono" aria-live="polite">{displayText}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
