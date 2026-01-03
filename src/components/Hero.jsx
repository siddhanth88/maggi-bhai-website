import { Vote } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700"></div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Vote className="w-5 h-5" />
              <span className="font-semibold">Shiv Sena Candidate</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              Maggi Bhai
            </h1>

            <div className="space-y-2 text-xl sm:text-2xl font-medium">
              <p>Ward Number 9</p>
              <p>Bhiwandi Municipal Corporation</p>
            </div>

            <p className="text-lg sm:text-xl leading-relaxed text-orange-50">
              Together, we will build a stronger, more prosperous Bhiwandi. Your trust, our commitment.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-50 transition-all transform hover:scale-105 shadow-xl">
                Support Our Vision
              </button>
              <button className="bg-orange-800/50 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-800/70 transition-all border-2 border-white/30">
                Learn More
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-400 to-yellow-300 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
            <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-2 shadow-2xl">
              <img
                src="/maggi-bhai-logo-removebg-preview.png"
                alt="Maggi Bhai"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
