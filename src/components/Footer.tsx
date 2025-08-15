import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-12">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-10">

        <div className="flex flex-col md:flex-row md:justify-between gap-8">

          <div className="flex flex-col gap-4">
            <Image
              src="/Logo.svg"
              alt="Deepgram"
              width={160}
              height={40}
              className="w-auto h-auto"
            />
            <p className="text-gray-400 text-sm">
              Voice AI Platform for Enterprise Use Cases
            </p>
            <div className="flex gap-4 text-gray-400">

              <a href="#" aria-label="GitHub">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 hover:text-white transition"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.262.793-.582 0-.287-.012-1.243-.018-2.25-3.338.725-4.042-1.612-4.042-1.612-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.087 1.84 1.238 1.84 1.238 1.07 1.832 2.807 1.303 3.492.997.108-.774.418-1.303.76-1.603-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.304-.536-1.524.116-3.176 0 0 1.008-.323 3.3 1.23a11.52 11.52 0 013.004-.404c1.02.005 2.048.138 3.004.404 2.29-1.553 3.296-1.23 3.296-1.23.654 1.652.242 2.872.118 3.176.77.84 1.236 1.91 1.236 3.22 0 4.61-2.804 5.624-5.475 5.922.43.37.823 1.103.823 2.222 0 1.605-.015 2.896-.015 3.293 0 .322.19.7.8.58C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>

              <a href="#" aria-label="X / Twitter">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 hover:text-white transition"
                >
                  <path d="M17.524 3H20.676L14.42 10.3 21.84 21h-5.84l-4.46-6.46L6.524 21H3.372l6.78-7.92L2.16 3h6l4.04 5.74L17.524 3zm-1.02 16h1.68L8.944 5h-1.8l9.36 14z" />
                </svg>
              </a>

              <a href="#" aria-label="LinkedIn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 hover:text-white transition"
                >
                  <path d="M19 0h-14c-2.75 0-5 2.25-5 5v14c0 2.75 2.25 5 5 5h14c2.75 0 5-2.25 5-5v-14c0-2.75-2.25-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.3c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.3h-3v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96v5.7h-3v-10h2.88v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.6v5.6z" />
                </svg>
              </a>

              <a href="#" aria-label="YouTube">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 hover:text-white transition"
                >
                  <path d="M23.498 6.186a2.974 2.974 0 0 0-2.095-2.107C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.403.579A2.974 2.974 0 0 0 .502 6.186C0 8.09 0 12 0 12s0 3.91.502 5.814a2.974 2.974 0 0 0 2.095 2.107C4.495 20.5 12 20.5 12 20.5s7.505 0 9.403-.579a2.974 2.974 0 0 0 2.095-2.107C24 15.91 24 12 24 12s0-3.91-.502-5.814zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
                </svg>
              </a>

              <a href="#" aria-label="Facebook">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 hover:text-white transition"
                >
                  <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.333v21.334C0 23.403.597 24 1.325 24h11.495v-9.333H9.692v-3.642h3.128V8.333c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.098 2.794.142v3.24h-1.918c-1.505 0-1.797.715-1.797 1.763v2.31h3.588l-.467 3.642h-3.121V24h6.116C23.403 24 24 23.403 24 22.667V1.333C24 .597 23.403 0 22.675 0z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="max-w-sm w-full">
            <p className="font-semibold mb-3">Get news and product updates.</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Work Email*"
                className="flex-1 px-3 py-2 rounded-md bg-transparent border border-gray-700 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gray-400"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-black border border-green-500 rounded-md hover:bg-gray-900 shadow-[0_0_8px_#22c55e] text-sm font-semibold"
              >
                Submit
              </button>
            </form>
            <p className="mt-2 text-xs text-gray-500">
              By submitting this form, you are agreeing to our{" "}
              <a href="#" className="underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>

     
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-sm">

          <div>
            <h4 className="font-semibold mb-3">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#">Voice Agent API</a></li>
              <li><a href="#">Text-to-Speech API</a></li>
              <li><a href="#">Speech-to-Text API</a></li>
              <li><a href="#">Audio Intelligence API</a></li>
            </ul>
          </div>

       
          <div>
            <h4 className="font-semibold mb-3">Solutions</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#">Contact Centers</a></li>
              <li><a href="#">Speech Analytics</a></li>
              <li><a href="#">Conversational AI</a></li>
              <li><a href="#">Podcast Transcription</a></li>
              <li><a href="#">Medical Transcription</a></li>
              <li><a href="#">Startup Program</a></li>
            </ul>
          </div>


          <div>
            <h4 className="font-semibold mb-3">Developers</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Changelog</a></li>
              <li><a href="#">API Playground</a></li>
              <li><a href="#">Community</a></li>
              <li><a href="#">Self-hosted</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </div>

   
          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#">About</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Newsletter</a></li>
              <li><a href="#">Customers</a></li>
              <li><a href="#">Partners</a></li>
              <li><a href="#">Newsroom</a></li>
            </ul>
          </div>

    
          <div>
            <h4 className="font-semibold mb-3">Compare</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#">OpenAI Whisper vs Deepgram</a></li>
              <li><a href="#">Amazon Transcribe vs Deepgram</a></li>
              <li><a href="#">Google vs Deepgram</a></li>
              <li><a href="#">Microsoft Azure vs Deepgram</a></li>
              <li><a href="#">ASR Comparison Tool</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#">AI Apps</a></li>
              <li><a href="#">AI Glossary</a></li>
              <li><a href="#">AI Voice Generator Tool</a></li>
              <li><a href="#">Audio & Video Transcription Tool</a></li>
              <li><a href="#">Introducing Deepgram’s Voice Agent API</a></li>
              <li><a href="#">Deepgram and Amazon Connect Integration</a></li>
              <li><a href="#">The Best Speech-to-Text APIs in 2025</a></li>
            </ul>
          </div>
        </div>

   
        <div className="border-t border-gray-800 pt-4 text-xs text-gray-500 flex flex-col sm:flex-row sm:justify-between gap-2">
          <div className="flex gap-4">
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
          </div>
          <p>Copyright © 2025 Deepgram</p>
        </div>
      </div>
    </footer>
  );
}
