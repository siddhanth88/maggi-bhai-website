import { Vote } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background image */}
      <img
        src="/logo3.png"
        alt="Hero Background"
        // className="absolute inset-0 object-cover object-top w-full h-full"
        className="absolute w-full h-full"
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 " />

      {/* Content */}
      <div className="relative z-10 px-6 mx-auto max-w-7xl">
        <div className="grid items-center min-h-screen grid-cols-1 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          {/* <div className="space-y-2 text-white pt-44 lg:pt-48">
            <div className="inline-flex items-center gap-2 px-4 py-2 mt-8 rounded-full bg-white/20 backdrop-blur">
              <Vote className="w-5 h-5" />
              <span className="font-semibold">Shiv Sena Candidate</span>
            </div>

            <h1 className="text-5xl font-extrabold leading-tight sm:text-6xl lg:text-7xl">
              Maggi Bhai
            </h1>

            <div className="text-xl font-medium sm:text-2xl">
              <p>Ward Number 9</p>
              <p>Bhiwandi Municipal Corporation</p>
            </div>

            <p className="max-w-xl text-lg leading-relaxed text-orange-100">
              Together, we will build a stronger, more prosperous Bhiwandi.
              Your trust, our commitment.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 text-lg font-bold text-orange-700 bg-white rounded-lg shadow-lg">
                Support Our Vision
              </button>
              <button className="px-8 py-4 text-lg font-bold text-white border-2 rounded-lg border-white/40 hover:bg-white/10">
                Learn More
              </button>
            </div>
          </div> */}
          <div className="relative px-6 pt-40 text-white lg:pt-48 sm:px-12">
            {/* Candidate Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-full shadow-sm bg-white/20 backdrop-blur-sm sm:text-base">
              <Vote className="w-5 h-5 text-white" />
              <span>Shiv Sena Candidate</span>
            </div>
           <h2 className="relative mt-6 text-4xl font-extrabold leading-tight text-white/80 sm:text-5xl lg:text-6xl" style={{
  WebkitTextStroke: '1.5px white',
  WebkitTextFillColor: 'black'
}}>
  Maggi Bhai
</h2>



            <div className="mt-2 text-lg sm:text-xl font-medium space-y-0.5 text-orange-100">
              <p>Ward Number 9</p>
              <p>Bhiwandi Municipal Corporation</p>
            </div>
            {/* Tagline */}
            <p className="max-w-lg mt-4 text-base leading-relaxed sm:text-lg text-orange-100/90">
              Together, we will build a stronger, more prosperous Bhiwandi. Your
              trust, our commitment.
            </p>
            {/* Buttons */}
            <div className="flex flex-wrap gap-3 mt-6">
              <button className="px-6 py-3 font-semibold text-orange-700 transition transform bg-white rounded-lg shadow-sm hover:shadow-md hover:scale-105">
                Support Our Vision
              </button>
              <button className="px-6 py-3 font-semibold text-white transition border-2 rounded-lg border-white/40 hover:bg-white/10">
                Learn More
              </button>
            </div>
          </div>

          {/* RIGHT SIDE — intentionally empty (person lives here) */}
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
}
