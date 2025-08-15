// components/Header.js
"use client";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#111] text-white sticky top-0 z-100">
      <div className="max-w-[1300px] mx-auto flex items-center justify-between px-6 lg:px-12 py-4">
  
        <div className="flex items-center gap-10">
          <img
            src={"Logo.svg"}
            alt="Deepgram Logo"
            className="w-[130px] h-[50px]"
          />

          <nav className="hidden lg:flex items-center font-medium gap-8 text-base text-gray-100/50">
            <a href="#" className="hover:text-white transition">Products</a>
            <a href="#" className="hover:text-white transition">Solutions</a>
            <a href="#" className="hover:text-white transition">Resources</a>
            <a href="#" className="hover:text-white transition">Developers</a>
            <a href="#" className="hover:text-white transition">Enterprise</a>
            <a href="#" className="hover:text-white transition">Pricing</a>
          </nav>
        </div>

      
        <div className="flex items-center gap-5">
       
          <img
            src={"Search.svg"}
            alt="Search"
            className="w-[22px] h-[22px]"
          />

        
          <div className="hidden lg:flex items-center gap-3">
            <button className="px-[1px] py-[1px] font-medium rounded-sm bg-black border border-transparent relative overflow-hidden group">
              <span className="absolute inset-0 rounded-sm p-[1px] bg-gradient-to-r from-sky-400 to-green-400"></span>
              <span className="relative z-10 block bg-black rounded-sm group-hover:bg-gray-900 px-6 py-1">
                View Pricing
              </span>
            </button>
            <button className="px-4 py-1 bg-white font-bold text-black rounded-md hover:bg-gray-100">
              Sign Up Free
            </button>
          </div>

          <button
            className="lg:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-[#111] border-t border-gray-800">
          <nav className="flex flex-col p-4 gap-3 text-gray-00">
            <a href="#">Products</a>
            <a href="#">Solutions</a>
            <a href="#">Resources</a>
            <a href="#">Developers</a>
            <a href="#">Enterprise</a>
            <a href="#">Pricing</a>
            <button className="px-4 py-1 bg-black border border-green-500 rounded-md">
              Get A Demo
            </button>
            <button className="px-4 py-1 bg-white text-black rounded-md">
              Sign Up Free
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
