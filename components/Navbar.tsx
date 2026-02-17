"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    // z-[9999] strictly forces this to the very front of the screen
    <nav className="fixed top-6 left-1/2 z-[9999] -translate-x-1/2 w-[90%] max-w-max">
      
      {/* The Glass Container */}
      <div className="flex items-center justify-center gap-6 sm:gap-8 rounded-full border border-white/20 bg-white/10 px-8 py-4 backdrop-blur-md text-white shadow-[0_0_15px_rgba(0,0,0,0.5)]">
        <Link href="/" className="text-sm font-black uppercase tracking-widest text-white transition-colors hover:text-blue-400"> Varun </Link>
<div className="h-4 w-[1px] bg-white/30" /> {/* Divider */}
        <Link href="/" className="text-sm font-medium transition-colors hover:text-blue-400">
          Home
        </Link>
        <Link href="#about" className="text-sm font-medium transition-colors hover:text-blue-400">
          About
        </Link>
        
        {/* Subtle Divider Line */}
        <div className="h-4 w-[1px] bg-white/30" /> 
        
        <Link href="#projects" className="text-sm font-medium transition-colors hover:text-blue-400">
          Projects
        </Link>
        <Link href="#contact" className="text-sm font-medium transition-colors hover:text-blue-400">
          Contact
        </Link>
        
      </div>
    </nav>
  );
};

export default Navbar;