'use client'
import React from "react";

export default function SolutionsSection() {
  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-2xl border border-gray-800 p-6 lg:p-12">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-900/20 to-slate-900/60 pointer-events-none"></div>

  
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            <div className="order-1 lg:order-2 flex items-center justify-center lg:justify-end">
              <div className="w-full max-w-[560px]">
                <img
                  src="/solutions.webp"
                  alt="Solutions illustration"
                  className="w-full h-auto object-contain rounded-md drop-shadow-[0_30px_60px_rgba(2,6,23,0.7)]"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="order-2 lg:order-1 flex flex-col gap-6 items-center lg:items-start text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                Solutions that scale
              </h2>

              <p className="text-gray-300 max-w-xl leading-relaxed">
                As the industry's voice AI leader, Deepgram drives better outcomes with enterprise solutions that deliver
                intelligent voice experiences safely, securely, and at scale.
              </p>

              
              <div className="mt-2 w-full lg:w-auto flex justify-center lg:justify-start">
                <a
                  href="#"
                  className="relative inline-block rounded-lg p-[2px] group"
                  aria-label="View Enterprise Solutions"
                >
             
                  <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-sky-400 to-emerald-400 opacity-100 filter blur-[0.6px] group-hover:blur-[1px] transition"></span>

          
                  <span className="relative inline-flex items-center justify-center gap-3 bg-black border border-transparent rounded-lg px-6 py-3 text-white font-medium shadow-[0_20px_40px_rgba(2,6,23,0.6)] group-hover:shadow-[0_24px_60px_rgba(34,197,94,0.12)] transition">
                    View Enterprise Solutions
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
