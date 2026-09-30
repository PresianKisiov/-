import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#020806] text-zinc-100 font-sans selection:bg-[#10b981]/30 transition-colors duration-300 relative overflow-hidden">
      <Navbar />
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-8 flex flex-col min-h-screen relative z-10">
        <main className="flex-grow pt-16 sm:pt-28 pb-10 sm:pb-24">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
