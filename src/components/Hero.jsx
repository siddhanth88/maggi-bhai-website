import { ChevronRight, ExternalLink, Vote } from "lucide-react";
import { whatsappHandler } from "../utils/common";
import { AnimatedGradientText } from "./ui/animated-gradient-text";
import { SparklesText } from "./ui/sparkles-text";
import { RainbowButton } from "./ui/rainbow-button";
import { cn } from "../lib/utils";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden" id="home">
      {/* =============== DESKTOP (OLD CODE – UNCHANGED) =============== */}
      <div className="hidden lg:block">
        {/* Background image */}
        <img
          src="/logo3.png"
          alt="Hero Background"
          className="absolute w-full h-full"
        />

        {/* Overlay */}
        <div className="absolute inset-0" />

        {/* Content */}
        <div className="relative z-10 px-6 mx-auto max-w-7xl">
          <div className="grid items-center min-h-screen grid-cols-1 lg:grid-cols-2">
            <div className="space-y-2 text-white pt-44 lg:pt-48">
              <div className="inline-flex items-center gap-2 px-4 py-2 mt-8 rounded-full bg-white/20 backdrop-blur">
                <Vote className="w-5 h-5" />
                <span className="font-semibold">Shiv Sena Candidate</span>
              </div>

              
              <SparklesText sparklesCount={10} className="text-5xl">
                पालीवाल मंगिलाल तुलसीराम
              </SparklesText>

              <div className="font-sans text-lg font-semibold underline decoration-black-500 decoration-1 underline-offset-2">
                <p>Ward Number 9</p>
                <p>Bhiwandi Municipal Corporation</p>
              </div>

              <p className="max-w-xl mb-2 text-sm text-white/90">
                Together, we will build a stronger, more prosperous Bhiwandi.
                Your trust, our commitment.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => whatsappHandler()}
                  className="px-3 py-3 text-lg font-bold text-orange-700 bg-white rounded-lg shadow-lg"
                >
                  Support Our Vision
                </button>
                <button className="px-3 py-3 text-lg font-bold text-white border-2 rounded-lg border-white/40 hover:bg-white/10">
                  Learn More
                </button>
              </div>
            </div>

            <div className="hidden lg:block" />
          </div>
        </div>
      </div>

      {/* ================= MOBILE (NEW CLEAN DESIGN) ================= */}
      <div className="flex flex-col h-screen overflow-y-auto bg-white lg:hidden">
        {/* IMAGE */}
        <div className="relative w-full h-[70vh] bg-gray-100">
          <img
            // src="/mobile-hero1.png"
            // src="/maggibhia.jpeg"
            src="/mobile-hero2.png"
            alt="Maggi Bhai"
            className="object-cover object-top w-full h-full"
          />
          <div className="absolute inset-x-0 bottom-0 h-40 pointer-events-none bg-gradient-to-t from-black/90 via-black/50 to-transparent" />{" "}
          <div className="absolute inset-x-0 bottom-0 h-40 pointer-events-none bg-gradient-to-t from-black/90 via-black/50 to-transparent">
            <div className="absolute max-w-md mx-4 mx-auto my-2 space-y-2">
              <div className="inline-flex items-center gap-1 px-4 py-2 text-xs font-semibold text-orange-600 rounded-full bg-orange-50">
                <Vote className="w-4 h-4" />
                Shiv Sena Candidate
              </div>

              
              <SparklesText sparklesCount={6} className="text-3xl text-white">
                पालीवाल मंगिलाल तुलसीराम
              </SparklesText>
              <div className="flex justify-center">
                <span className="text-lg text-white">MAGGI BHAI</span>
              </div>
              
              <p className="text-xs font-semibold tracking-wide text-white underline uppercase decoration-black-500 decoration-1">
                Ward 9 · Bhiwandi Municipal Corporation
              </p>
              <div className="w-10 h-1 bg-orange-500 rounded-full" />
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="px-5 py-6">
          <div className="max-w-md mx-auto space-y-4">
            <div className="hidden">
              <div className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-orange-600 rounded-full bg-orange-50">
                <Vote className="w-4 h-4" />
                Shiv Sena Candidate
              </div>

              {/* <h1 className="text-3xl font-extrabold text-gray-900">
              Maggi Bhai
            </h1> */}
              {/* <SparklesText sparklesCount={4} className="text-4xl">Maggi Bhai</SparklesText> */}
              <SparklesText sparklesCount={4} className="text-4xl">
                पालीवाल मंगिलाल तुलसीराम
              </SparklesText>

              <p className="text-xs font-semibold tracking-wide text-gray-600 underline uppercase decoration-black-500 decoration-1">
                Ward 9 · Bhiwandi Municipal Corporation
              </p>

              <div className="w-10 h-1 bg-orange-500 rounded-full" />
            </div>

            <p className="text-sm leading-relaxed text-gray-700">
              Together, we will build a{" "}
              <span className="font-semibold text-orange-600">stronger</span>,
              more{" "}
              <span className="font-semibold text-orange-600">prosperous</span>{" "}
              Bhiwandi.
            </p>

            <div className="flex flex-col gap-6 pt-2">
              {/* <button
                onClick={() => whatsappHandler()}
                className="w-full py-3 rounded-xl bg-orange-600 text-white font-bold text-base active:scale-[0.98]"
              >
                Support Our Vision
              </button> */}
              <RainbowButton
                className="w-full bg-orange-600"
                variant={"outline"}
                onClick={() => whatsappHandler()}
              >
                Support Our Vision
                <span>
                  <ExternalLink className="w-4 h-4" />
                </span>
              </RainbowButton>
              {/* <RainbowButton className="w-full bg-orange-600">Learn More</RainbowButton> */}
              {/* <button className="w-1/3 py-1 text-base font-bold border-2 border-gray-200 rounded-sm text-black-600">
                Learn More
              </button> */}
            </div>

            <p className="pt-2 text-[11px] text-center text-gray-500">
              Official Campaign · Verified Representative
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
