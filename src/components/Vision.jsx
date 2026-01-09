import { Building2, GraduationCap, HeartPulse, Droplets, Lightbulb, Shield, ArrowRight, Sparkles } from 'lucide-react';
import { whatsappPhoneNumber, whatsappSupportMessage } from '../utils/constants';
import { whatsappHandler } from '../utils/common';

const visionPoints = [
  {
    icon: Building2,
    title: 'Infrastructure Development',
    description: 'Modern roads, better drainage systems, and improved public facilities for Ward 9',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: GraduationCap,
    title: 'Quality Education',
    description: 'Enhanced educational facilities and support for students from all backgrounds',
    color: 'from-orange-500 to-amber-500'
  },
  {
    icon: HeartPulse,
    title: 'Healthcare Access',
    description: 'Improved medical facilities and affordable healthcare for every family',
    color: 'from-orange-600 to-orange-400'
  },
  {
    icon: Droplets,
    title: 'Clean Water Supply',
    description: '24/7 clean water supply and better sanitation infrastructure',
    color: 'from-orange-500 to-yellow-500'
  },
  {
    icon: Lightbulb,
    title: 'Skill Development',
    description: 'Training programs and employment opportunities for youth',
    color: 'from-amber-500 to-orange-500'
  },
  {
    icon: Shield,
    title: 'Safety & Security',
    description: 'Enhanced safety measures and better street lighting throughout the ward',
    color: 'from-orange-600 to-red-500'
  }
];

export default function Vision() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white" id="vision">
      {/* Ambient background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute rounded-full -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-orange-200/40 to-transparent blur-3xl animate-pulse" 
             style={{ animationDuration: '8s' }} />
        <div className="absolute rounded-full top-1/3 -right-32 w-80 h-80 bg-gradient-to-bl from-amber-200/30 to-transparent blur-3xl animate-pulse" 
             style={{ animationDuration: '10s', animationDelay: '2s' }} />
        <div className="absolute rounded-full -bottom-32 left-1/4 w-72 h-72 bg-gradient-to-tr from-orange-300/20 to-transparent blur-3xl animate-pulse" 
             style={{ animationDuration: '12s', animationDelay: '4s' }} />
      </div>

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.015]" 
           style={{ backgroundImage: 'radial-gradient(circle, #f97316 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      
      <div className="container relative z-10 px-4 py-20 mx-auto sm:px-6 lg:px-8 lg:py-4">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto mb-20 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 transition-all duration-300 border rounded-full shadow-sm bg-white/80 backdrop-blur-sm border-orange-200/50 hover:shadow-md hover:scale-105 group">
            <Sparkles className="w-4 h-4 text-orange-500 transition-transform duration-300 group-hover:rotate-12" />
            <span className="text-sm font-semibold tracking-wide text-orange-600 uppercase">Our Vision for Tomorrow</span>
          </div>

          {/* Main Heading */}
          <h2 className="mb-6 text-4xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-orange-900 to-slate-900 sm:text-5xl lg:text-6xl">
            Building a Better
            <br />
            <span className="relative inline-block mt-2">
              <span className="relative z-10 text-orange-600">Bhiwandi</span>
              <div className="absolute bottom-0 left-0 right-0 h-3 -z-0 bg-orange-200/40 blur-sm" />
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-lg leading-relaxed text-slate-600 sm:text-xl">
            Our commitment is to transform Ward 9 into a model of development, 
            <span className="font-semibold text-slate-700"> prosperity</span>, and 
            <span className="font-semibold text-slate-700"> community welfare</span>
          </p>
        </div>

        {/* Vision Cards Grid */}
        <div className="grid max-w-6xl gap-6 mx-auto mb-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          {visionPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="relative overflow-hidden transition-all duration-500 bg-white border shadow-lg group rounded-3xl hover:shadow-2xl hover:-translate-y-2"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                {/* Gradient border effect */}
                <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-br from-orange-500/20 via-transparent to-transparent rounded-3xl group-hover:opacity-100" />
                
                {/* Card content */}
                <div className="relative p-8">
                  {/* Icon container with gradient */}
                  <div className="relative mb-6 w-fit">
                    <div className={`absolute inset-0 bg-gradient-to-br ${point.color} rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500`} />
                    <div className={`relative flex items-center justify-center w-16 h-16 bg-gradient-to-br ${point.color} rounded-2xl shadow-lg transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                      <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                    </div>
                  </div>

                  {/* Text content */}
                  <h3 className="mb-3 text-xl font-bold transition-colors duration-300 text-slate-900 group-hover:text-orange-600">
                    {point.title}
                  </h3>

                  <p className="text-base leading-relaxed text-slate-600">
                    {point.description}
                  </p>

                  {/* Subtle hover indicator */}
                  <div className="flex items-center gap-1 mt-4 overflow-hidden text-sm font-semibold text-orange-600 transition-all duration-300 opacity-0 group-hover:opacity-100">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section - Premium Design */}
        <div className="relative max-w-5xl mx-auto overflow-hidden shadow-2xl rounded-3xl">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-orange-500 to-amber-500">
            <div className="absolute inset-0 opacity-30 bg-gradient-to-tr from-transparent via-white/10 to-transparent animate-pulse" 
                 style={{ animationDuration: '6s' }} />
          </div>
          
          {/* Pattern overlay */}
          <div className="absolute inset-0 opacity-5" 
               style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
          
          {/* Content */}
          <div className="relative z-10 px-8 py-16 text-center sm:px-12 lg:px-16 lg:py-20">
            <h3 className="mb-4 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              Together, We Will Make It Happen
            </h3>
            
            <p className="max-w-2xl mx-auto mb-10 text-lg leading-relaxed sm:text-xl text-orange-50">
              Your vote is your voice. Join us in building a brighter future for Ward 9 and Bhiwandi
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="inline-flex items-center gap-2 px-10 py-4 text-base font-bold text-orange-600 transition-all duration-300 transform bg-white shadow-xl rounded-2xl sm:text-lg hover:bg-orange-50 hover:scale-105 hover:shadow-2xl group" onClick={()=>whatsappHandler()}>
                <span>Join Our Campaign</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              
              <button className="inline-flex items-center gap-2 px-10 py-4 text-base font-bold text-white transition-all duration-300 border-2 border-white/30 backdrop-blur-sm rounded-2xl sm:text-lg bg-white/10 hover:bg-white/20 hover:border-white/50 hover:scale-105">
               <a
              href="/Ward_9_Manifesto.pdf"
              download="Ward_9_Manifesto.pdf"
              className="inline-flex items-center gap-2 px-10 py-4 text-base font-bold text-white border border-white/30 hover:bg-white hover:text-black transition"
              >
                View Manifesto
                </a>
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-8 mt-12 text-white/90">
              <div className="text-center">
                <div className="mb-1 text-3xl font-extrabold">10K+</div>
                <div className="text-sm font-medium text-white/70">Supporters</div>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div className="text-center">
                <div className="mb-1 text-3xl font-extrabold">6</div>
                <div className="text-sm font-medium text-white/70">Key Initiatives</div>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div className="text-center">
                <div className="mb-1 text-3xl font-extrabold">100%</div>
                <div className="text-sm font-medium text-white/70">Commitment</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animation Keyframes */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
