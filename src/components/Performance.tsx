'use client'
import React from "react";

export default function PerformanceSection() {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
    
        <div className="text-center max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Unbeatable value, unmatched
            <br className="hidden md:inline" /> performance
          </h2>

          <p className="mt-4 text-gray-400 text-sm sm:text-base">
            Extract the most value with speech-to-text and Language AI.
          </p>

          <div className="mt-5">
            <a href="#" className="text-sky-400 text-sm hover:underline">
              View Pricing
            </a>
          </div>
        </div>

        <div className="relative mt-12 flex justify-center items-center">

          <span className="pointer-events-none absolute w-[520px] h-[520px] rounded-full bg-gradient-to-r from-transparent via-sky-900/10 to-emerald-900/10 blur-3xl opacity-40"></span>
          <span className="pointer-events-none absolute w-[360px] h-[360px] rounded-full ring-1 ring-slate-800/60"></span>

          <div className="relative z-10 w-full max-w-[1260px]">
            <img
              src="/performance.svg"
              alt="Performance illustration"
              className="w-full h-auto object-contain"
              loading="lazy"
            />
          </div>
        </div>


        <div className="mt-12 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 rounded-lg border border-gray-800 bg-[rgba(255,255,255,0.01)] hover:bg-[rgba(255,255,255,0.02)] transition">
              <h4 className="text-lg font-semibold text-white">30% more accurate</h4>
              <p className="text-gray-400 mt-3 text-sm">
                Deepgram leads the industry with the most accurate models in the market across use case categories.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-gray-800 bg-[rgba(255,255,255,0.01)] hover:bg-[rgba(255,255,255,0.02)] transition">
              <h4 className="text-lg font-semibold text-white">3–5x cheaper</h4>
              <p className="text-gray-400 mt-3 text-sm">
                Our GPU infrastructure optimizes speech and language models for superior, cost-effective performance.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-gray-800 bg-[rgba(255,255,255,0.01)] hover:bg-[rgba(255,255,255,0.02)] transition">
              <h4 className="text-lg font-semibold text-white">Up to 40x faster</h4>
              <p className="text-gray-400 mt-3 text-sm">
                Transcribe in real-time or an hour of pre-recorded audio in about 12 seconds.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
