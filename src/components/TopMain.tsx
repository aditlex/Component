export default function TopMain() {
  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-6 px-3">
        
        {/* Text Section */}
        <div className="flex-1">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
            The <span className="bg-gradient-to-r from-sky-400 to-green-400 bg-clip-text text-transparent">Voice AI</span>
            platform for<br />
            enterprise use cases
          </h1>
          <p className="text-gray-100/50 mt-6 text-lg sm:text-xl max-w-xl">
            Deepgram’s voice AI platform provides APIs for speech-to-text, text-to-speech, and 
            full speech-to-speech voice agents. Over 200,000+ developers use Deepgram to build 
            voice AI products and features.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full">
            <button className="w-full sm:w-auto px-6 py-3 bg-white text-black font-medium rounded-sm hover:bg-gray-200 transition">
              Try It Free
            </button>
            <button className="w-full sm:w-auto px-[1px] py-[1px] font-medium rounded-sm bg-black border border-transparent relative overflow-hidden group">
              <span className="absolute inset-0 rounded-md p-[1px] bg-gradient-to-r from-sky-400 to-green-400"></span>
              <span className="relative z-10 block bg-black rounded-md group-hover:bg-gray-900 px-6 py-3">
                View Pricing
              </span>
            </button>
          </div>
        </div>

        {/* Video */}
        <video src="/VideoMain.mp4" autoPlay muted loop className="w-full lg:w-[500px] rounded-md" />
      </div>
    </section>
  );
}
