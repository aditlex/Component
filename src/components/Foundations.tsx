export default function FoundationsSection() {
  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <h2 className="text-3xl sm:text-4xl font-bold text-center">Voice AI foundations</h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mt-4">
          Our suite of voice AI tools is designed to transform how you interact with voice data,
          offering powerful APIs and models to unlock deeper insights and build seamless voice experiences.
        </p>  

       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 items-stretch">

          <article className="md:col-span-2 border border-gray-800 rounded-xl overflow-hidden transition hover:bg-[#3a3a3a] hover:border-gray-200">
            <div className="flex flex-col lg:flex-row h-full my-auto items-stretch">
   
              <div className="p-6 lg:p-8 lg:w-1/2 flex flex-col justify-center">
                <div className="inline-flex items-center gap-3">
                  <img src="/1 icon.svg" alt="voice icon" className="w-6 h-6" />
                  <span className="text-xs tracking-wide bg-[rgba(255,255,255,0.03)] px-3 py-1 rounded-full text-gray-300">
                    VOICE AGENT API
                  </span>
                </div>

                <h3 className="text-lg font-semibold mt-4 text-white">
                  A unified voice-to-voice API that enables natural-sounding conversations
                </h3>

                <p className="text-gray-300 mt-3 leading-relaxed">
                  A unified voice-to-voice API that enables natural-sounding conversations between humans and machines.
                </p>

                <a href="#" className="text-sky-400 mt-4 inline-block hover:underline">Learn More</a>
              </div>

               <div className="lg:w-1/2 flex items-center justify-center p-6 lg:p-0">
                <img src="/1 voice.svg" alt="voice animation" className="w-full max-w-xl object-contain" loading="lazy" />
              </div>
            </div>
          </article>

          <article className="border border-gray-800 rounded-xl p-6 flex flex-col justify-between transitionborder overflow-hidden transition hover:bg-[#3a3a3a] hover:border-gray-200">
            <div>
              <div className="inline-flex items-center gap-3">
                <img src="/2 icon.svg" alt="speech icon" className="w-5 h-5" />
                <span className="text-xs tracking-wide bg-[rgba(255,255,255,0.03)] px-3 py-1 rounded-full text-gray-300">
                  SPEECH TO TEXT API
                </span>
              </div>

              <h3 className="text-md font-semibold mt-4 text-white">
                Transcribe speech with unmatched accuracy, speed, and cost.
              </h3>

              <p className="text-gray-300 mt-3 text-sm">Transcribe speech with unmatched accuracy, speed, and cost.</p>
            </div>

            <div className="mt-4">
              <img src="/2 speech.svg" alt="speech preview" className="w-full object-contain rounded" loading="lazy" />
              <a href="#" className="text-sky-400 mt-4 inline-block hover:underline">Learn More</a>
            </div>
          </article>

          <article className="border border-gray-800 rounded-xl p-6 flex flex-col justify-between transition  overflow-hidden  hover:bg-[#3a3a3a] hover:border-gray-200">
            <div>
              <div className="inline-flex items-center gap-3">
                <img src="/3 icon.svg" alt="audio icon" className="w-5 h-5" />
                <span className="text-xs tracking-wide bg-[rgba(255,255,255,0.03)] px-3 py-1 rounded-full text-gray-300">
                  AUDIO INTELLIGENCE API
                </span>
              </div>

              <h3 className="text-md font-semibold mt-4 text-white">Advanced audio intelligence for Enterprise-scale analysis.</h3>
              <p className="text-gray-300 mt-3 text-sm">Advanced audio intelligence for Enterprise-scale analysis.</p>
            </div>

            <div className="mt-6">
              <img src="/3 audio.svg" alt="audio diagram" className="w-full object-contain rounded" loading="lazy" />
              <a href="#" className="text-sky-400 mt-4 inline-block hover:underline">Learn More</a>
            </div>
          </article>


          <article className="md:col-span-2 border  border-gray-800 rounded-xl overflow-hidden transition   hover:bg-[#3a3a3a] hover:border-gray-200">
            <div className="flex flex-col lg:flex-row h-full my-auto items-stretch">
              <div className="lg:w-1/2 flex items-center  justify-center p-6 lg:p-0 order-2 lg:order-1">
                <img src="/4 text.svg" alt="text to speech preview" className="w-full  max-w-lg object-contain" loading="lazy" />
              </div>

              <div className="p-6 lg:p-8 lg:w-1/2 flex flex-col justify-center order-1 lg:order-2">
                <div className="inline-flex items-center gap-3">
                  <img src="/4 icon.svg" alt="tts icon" className="w-6 h-6" />
                  <span className="text-xs tracking-wide bg-[rgba(255,255,255,0.03)] px-3 py-1 rounded-full text-gray-300">
                    TEXT TO SPEECH API
                  </span>
                </div>

                <h3 className="text-lg font-semibold mt-4 text-white">
                  Lightning fast, humanlike voice for real-time AI and high throughput applications.
                </h3>

                <p className="text-gray-300 mt-3 leading-relaxed">
                  Lightning fast, humanlike voice for real-time AI and high throughput applications.
                </p>

                <a href="#" className="text-sky-400 mt-4 inline-block hover:underline">Learn More</a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
