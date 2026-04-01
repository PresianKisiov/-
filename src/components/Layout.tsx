import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import Navbar from './Navbar';
import Footer from './Footer';
import PageLoader from './PageLoader';

export default function Layout() {
  const [isLoading, setIsLoading] = useState(false);

  const triggerLoading = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 800); // Simulate loading for 800ms
  };

  return (
    <div className="min-h-screen bg-[#020806] text-zinc-100 font-sans selection:bg-[#10b981]/30 transition-colors duration-300 relative overflow-hidden">
      <AnimatePresence>
        {isLoading && <PageLoader />}
      </AnimatePresence>
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 flex flex-col min-h-screen relative z-10">
        <Navbar onNavClick={triggerLoading} />
        <main className="flex-grow py-12">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
