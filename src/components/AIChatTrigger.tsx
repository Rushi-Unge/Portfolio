'use client';

import { useEffect, useState, useRef } from 'react';
import { FaRobot } from 'react-icons/fa';

// Extend the window interface to declare Chatbase
declare global {
  interface Window {
    Chatbase?: {
      open?: () => void;
      close?: () => void;
    };
  }
}

const AIChatTrigger = () => {
  const [chatReady, setChatReady] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (typeof window !== 'undefined' && window.Chatbase) {
        setChatReady(true);
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const handleOpen = () => {
    if (chatReady) {
      window.Chatbase?.open?.(); // ✅ FIXED HERE
      setIsOpen(true);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const iframe = document.querySelector('iframe[src*="chatbase"]');
      const chatFrame = iframe?.parentElement;
      if (
        isOpen &&
        chatFrame &&
        !chatFrame.contains(event.target as Node) &&
        !buttonRef.current?.contains(event.target as Node)
      ) {
        window.Chatbase?.close?.();
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <button
      ref={buttonRef}
      onClick={handleOpen}
      className="fixed bottom-6 right-6 bg-gradient-to-r from-cyan-400 to-green-300 text-black font-semibold px-4 py-3 rounded-full shadow-lg hover:scale-105 transition z-50 flex items-center gap-2"
      title="Chat with AI"
    >

    </button>
  );
};

export default AIChatTrigger;
