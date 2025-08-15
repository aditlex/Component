'use client'

export default function DiscountBanner() {
  return (
    <section className="bg-black py-12 sm:py-16 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          className="relative overflow-hidden rounded-2xl border border-gray-700/60"
          aria-hidden={false}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-800 via-emerald-700 to-slate-900 opacity-50"></div>
          <div className="absolute inset-0 pointer-events-none mix-blend-overlay bg-gradient-to-br from-emerald-900/10 to-transparent"></div>

          <div className="relative z-10 px-6 py-8 sm:px-10 sm:py-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="max-w-3xl">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-gray-400/95">
                  Get $200 in free credits!
                </h3>

                <p className="mt-4 text-gray-400 text-sm sm:text-base max-w-2xl">
                  That can fuel transcription for 750 hours, or generate text-to-speech audio for ~200 hours.
                  <strong className="text-gray-400 font-bold"><br /> No credit card needed.</strong>
                </p>
              </div>

         
              <div className="w-full sm:flex-shrink-0 sm:w-auto flex justify-center md:justify-end">
                <a
                  href="#"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-black font-medium rounded-md px-5 py-3 shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                >
                  <span>Sign Up Free</span>
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-0 rounded-2xl border border-white/5"></div>
        </div>
      </div>
    </section>
  )
}
