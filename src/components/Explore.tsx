'use client'
import { useState } from "react";

export default function ExploreSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeCategory, setActiveCategory] = useState(0);

  const tabs = [
    { default: "/explore1.svg", active: "/explore1ac.svg", label: "Text to Speech" },
    { default: "/explore2.svg", active: "/explore2ac.svg", label: "Speech to Text" },
    { default: "/explore3.svg", active: "/explore3ac.svg", label: "Audio Intelligence" },
  ];

  const categories = [
    { name: "Try Your Text", text: "Type something here, and Aura will turn your text into a realistic human voice. AI matches what is written with how it should be said so your audio sounds natural and high-quality." },
    { name: "Healthcare", text: "Your lab results show elevated cholesterol levels of 240 mg/dL; I recommend starting Atorvastatin 10 mg daily and scheduling a follow-up in eight weeks to reassess." },
    { name: "Customer Service", text: "Thank you for your patience while we reviewed your account history; I've applied a loyalty discount of $45.75 to your next billing cycle. You can verify this adjustment by logging into your account with reference code CS-92140." },
    { name: "Sales", text: "Ms. Rodriguez, our enterprise analytics platform has helped companies like yours reduce operational costs by an average of 23.7%. Would you be available next Tuesday at 2:00 PM for a customized demonstration focused on your manufacturing sector?" },
    { name: "Food Ordering", text: "Yeah, I'd like to, uh, order a Double-Double Animal Style with, you know, well-done fries, and like, a Neapolitan shake, and could you, um, make my burger protein style? Also, like, can I get, uh, two packets of spread on the side?" },
  ];

  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
       
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Explore more Deepgram APIs
        </h2>
        <p className="text-gray-400 text-center mt-4 max-w-2xl mx-auto">
          Play around with human-like voice AI or transcribe sample audio files. Explore how our audio
          understanding models work.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap w-full items-center justify-center gap-4 mt-10">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex items-center gap-3 border rounded-lg pr-55 pl-5 py-6 w-full sm:w-auto transition ${
                activeTab === index ? "border-green-500" : "border-gray-700"
              }`}
            >
              <img
                src={activeTab === index ? tab.active : tab.default}
                alt={tab.label}
                className="w-6 h-6"
              />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

     
        <div className="mt-10 flex flex-col lg:flex-row w-full gap-8">
          
        
          <div className="flex-1 w-full border border-gray-700 rounded-lg p-6">
            
            <div className="flex flex-wrap gap-3">
              {categories.map((cat, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(index)}
                  className={`px-12 py-2 rounded-full border text-sm transition ${
                    activeCategory === index
                      ? "border-white text-white"
                      : "border-gray-500 text-gray-400"
                  } hover:border-white hover:text-white`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

         
            <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-6 items-start mt-6">
              
       
              <div className="border border-gray-700 rounded-lg p-6">
                <h3 className="text-gray-400 text-sm mb-3">TRANSCRIPT</h3>
                <p className="text-gray-300">{categories[activeCategory].text}</p>
                <div className="text-gray-500 text-sm mt-4">
                  {categories[activeCategory].text.length} / 2,000
                </div>
              </div>

         
              <div className="flex flex-col justify-between p-2 sm:p-4">

                <div className="flex justify-end mb-4">
                  <button className="text-sky-400 text-sm hover:underline flex items-center gap-1">
                    Show Voice Filters
                    
                  </button>
                </div>

           
                <div className="flex items-center gap-3">
                  <img src="/profile.svg" alt="profile" className="w-10 h-10 rounded-full" />
                  <select className="bg-transparent border border-gray-700 rounded px-3 py-2 text-sm w-full focus:outline-none focus:border-sky-400">
                    <option>Thalia feminine, English (US) us</option>
                    <option>Another voice example</option>
                  </select>
                </div>

                <div className="mt-6">
                  <button className="relative w-full py-[1px] px-[1px] rounded-md overflow-hidden group border border-transparent">
                    <span className="absolute inset-0 rounded-sm p-[1px] bg-gradient-to-r from-sky-400 to-green-400 group-hover:opacity-90 transition"></span>
                    <span className="relative z-10 flex items-center justify-center gap-2 bg-black rounded-md text-white py-2">
                      <img src="/play.svg" alt="play" className="w-4 h-4" />
                      Generate Speech
                    </span>
                  </button>
                </div>

          
                <div className="mt-4">
                  <button className="text-sky-400 text-sm hover:underline">
                    Explore More Voices →
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
