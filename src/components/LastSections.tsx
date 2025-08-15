export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center bg-gradient-to-b from-black to-[#002b1e] text-white py-32 px-4">
 
      <div className="absolute inset-0 overflow-hidden">
        <div className="stars absolute inset-0"></div>
      </div>

   
      <div className="relative z-10 max-w-7xl">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Unlock voice AI at scale with an API Call
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-3xl items-center mx-auto">
          Get conversational intelligence with transcription and understanding on the world's best speech AI platform.
        </p>

   
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center">
          <button className="bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition">
            Sign Up
          </button>
          <button className="bg-black border border-green-500 shadow-[0_0_8px_#22c55e] text-white font-semibold px-6 py-3 rounded-lg hover:bg-gray-900 transition">
            Book A Free Demo
          </button>
        </div>
      </div>
    </section>
  );
}
