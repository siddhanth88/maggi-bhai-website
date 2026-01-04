
// import { Heart, Users, TrendingUp, Award } from 'lucide-react';

// export default function About() {
//   return (
//     <section className="relative flex items-center min-h-screen overflow-hidden bg-gradient-to-br from-white via-orange-50 to-white">
//       <div className="absolute top-0 right-0 bg-orange-100 rounded-full w-96 h-96 blur-3xl opacity-60" />
//       <div className="absolute bottom-0 left-0 bg-orange-200 rounded-full w-80 h-80 blur-3xl opacity-40" />
      
//       <div className="container relative z-10 px-6 py-20 mx-auto">
//         <div className="grid items-center gap-12 md:grid-cols-2">
//           <div className="relative">
//             <div className="grid grid-cols-2 gap-4">
//               <div className="space-y-4">
//                 <img
//                   src="/maggibhia.jpeg"
//                   alt="Maggi Bhai Campaign"
//                   className="object-cover w-full h-64 transition-transform duration-300 shadow-xl rounded-2xl hover:scale-105"
//                 />
//                 <div className="p-6 text-white shadow-xl bg-gradient-to-br from-orange-600 to-orange-500 rounded-2xl">
//                   <div className="text-3xl font-bold">Ward 9</div>
//                   <div className="mt-1 text-orange-100">Bhiwandi Municipal Corporation</div>
//                 </div>
//               </div>
//               <div className="pt-8 space-y-4">
//                 <img
//                   src="/poster2.jpeg"
//                   alt="Community Work"
//                   className="object-cover w-full transition-transform duration-300 shadow-xl h-80 rounded-2xl hover:scale-105"
//                 />
//                 <div className="p-4 bg-white border-2 border-orange-100 shadow-lg rounded-xl">
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <div className="text-2xl font-bold text-orange-600">1000+</div>
//                       <div className="text-sm font-medium text-gray-600">Happy Families</div>
//                     </div>
//                     <Heart className="w-6 h-6 p-2 text-white bg-orange-500 rounded-lg" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="space-y-6">
//             <div className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold text-orange-700 bg-orange-100 border border-orange-200 rounded-full">
//               <div className="w-2 h-2 bg-orange-600 rounded-full animate-pulse" />
//               About Maggi Bhai
//             </div>

//             <h2 className="text-5xl font-bold text-gray-900">
//               A Leader Who
//               <span className="block text-orange-600">Serves the People</span>
//             </h2>

//             <div className="space-y-3">
//               <p className="text-lg leading-relaxed text-gray-700">
//                 With years of dedicated service to the people of Bhiwandi, Maggi Bhai has been at the forefront of community development and social welfare. As a proud member of <span className="font-semibold text-orange-600">Shiv Sena</span>, he embodies the values of service, integrity, and progress.
//               </p>
//               <p className="text-lg leading-relaxed text-gray-700">
//                 From ensuring basic infrastructure to championing education and healthcare, his commitment to Ward 9 has transformed countless lives. His door is always open to the people, and their voices always heard.
//               </p>
//             </div>

//             <div className="grid grid-cols-2 gap-3 pt-4">
//               <div className="flex items-start p-4 space-x-3 bg-white border-2 border-orange-100 rounded-xl shadow-md hover:shadow-lg hover:border-orange-300 transition-all hover:-translate-y-0.5">
//                 <Heart className="flex-shrink-0 w-5 h-5 p-1 text-white bg-orange-500 rounded" />
//                 <div>
//                   <h4 className="font-bold text-gray-900">Community First</h4>
//                   <p className="text-xs text-gray-600 mt-0.5">Always putting people's needs above everything</p>
//                 </div>
//               </div>

//               <div className="flex items-start p-4 space-x-3 bg-white border-2 border-orange-100 rounded-xl shadow-md hover:shadow-lg hover:border-orange-300 transition-all hover:-translate-y-0.5">
//                 <Users className="flex-shrink-0 w-5 h-5 p-1 text-white bg-orange-500 rounded" />
//                 <div>
//                   <h4 className="font-bold text-gray-900">Inclusive Growth</h4>
//                   <p className="text-xs text-gray-600 mt-0.5">Development for all sections of society</p>
//                 </div>
//               </div>

//               <div className="flex items-start p-4 space-x-3 bg-white border-2 border-orange-100 rounded-xl shadow-md hover:shadow-lg hover:border-orange-300 transition-all hover:-translate-y-0.5">
//                 <TrendingUp className="flex-shrink-0 w-5 h-5 p-1 text-white bg-orange-500 rounded" />
//                 <div>
//                   <h4 className="font-bold text-gray-900">Progress & Jobs</h4>
//                   <p className="text-xs text-gray-600 mt-0.5">Creating opportunities for youth</p>
//                 </div>
//               </div>

//               <div className="flex items-start p-4 space-x-3 bg-white border-2 border-orange-100 rounded-xl shadow-md hover:shadow-lg hover:border-orange-300 transition-all hover:-translate-y-0.5">
//                 <Award className="flex-shrink-0 w-5 h-5 p-1 text-white bg-orange-500 rounded" />
//                 <div>
//                   <h4 className="font-bold text-gray-900">Proven Track Record</h4>
//                   <p className="text-xs text-gray-600 mt-0.5">Years of dedicated service</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import { Heart, Users, TrendingUp, Award, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white"  id="about">
      {/* Ambient background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute rounded-full -top-32 -right-32 w-80 h-80 bg-gradient-to-br from-orange-200/40 to-transparent blur-3xl animate-pulse" 
             style={{ animationDuration: '8s' }} />
        <div className="absolute rounded-full -bottom-32 -left-32 w-72 h-72 bg-gradient-to-tr from-amber-200/30 to-transparent blur-3xl animate-pulse" 
             style={{ animationDuration: '10s', animationDelay: '2s' }} />
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.015]" 
           style={{ backgroundImage: 'radial-gradient(circle, #f97316 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      
      <div className="container relative z-10 px-4 py-16 mx-auto sm:px-6 lg:px-8 lg:py-24">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Image Grid - Left Side */}
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              {/* Left Column */}
              <div className="space-y-4">
                <div className="relative overflow-hidden shadow-xl group rounded-2xl">
                  <img
                    src="/head.logo.png"
                    alt="Maggi Bhai Campaign"
                    className="object-cover w-full h-56 transition-transform duration-500 sm:h-64 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-orange-900/60 to-transparent group-hover:opacity-100" />
                </div>
                
                <div className="relative p-5 overflow-hidden text-white shadow-xl rounded-2xl group">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-orange-500">
                    <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-tr from-orange-400/20 to-transparent group-hover:opacity-100" />
                  </div>
                  <div className="relative">
                    <div className="text-2xl font-extrabold sm:text-3xl">Ward 9</div>
                    <div className="mt-1 text-sm font-medium text-orange-100">Bhiwandi Municipal Corporation</div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="pt-8 space-y-4">
                <div className="relative overflow-hidden shadow-xl group rounded-2xl">
                  <img
                    src="/poster2.jpeg"
                    alt="Community Work"
                    className="object-cover w-full transition-transform duration-500 h-72 sm:h-80 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-orange-900/60 to-transparent group-hover:opacity-100" />
                </div>
                
                <div className="relative p-4 overflow-hidden transition-all duration-300 bg-white border shadow-lg group rounded-2xl border-orange-200/50 hover:shadow-xl hover:-translate-y-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-extrabold text-transparent sm:text-3xl bg-clip-text bg-gradient-to-br from-orange-600 to-orange-400">
                        1000+
                      </div>
                      <div className="mt-0.5 text-xs font-semibold text-slate-600 sm:text-sm">Happy Families</div>
                    </div>
                    <div className="relative">
                      <div className="absolute inset-0 transition-opacity duration-500 bg-orange-500 rounded-xl blur-lg opacity-40 group-hover:opacity-60" />
                      <div className="relative flex items-center justify-center w-10 h-10 transition-transform duration-300 bg-orange-500 rounded-xl group-hover:scale-110 group-hover:rotate-3 sm:w-12 sm:h-12">
                        <Heart className="w-5 h-5 text-white sm:w-6 sm:h-6" fill="currentColor" strokeWidth={2} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content - Right Side */}
          <div className="order-1 space-y-6 lg:order-2">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 transition-all duration-300 border rounded-full shadow-sm bg-white/80 backdrop-blur-sm border-orange-200/50 hover:shadow-md hover:scale-105 group">
              <Sparkles className="w-4 h-4 text-orange-500 transition-transform duration-300 group-hover:rotate-12" />
              <span className="text-sm font-semibold tracking-wide text-orange-600 uppercase">About Maggi Bhai</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
              A Leader Who
              <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500">
                Serves the People
              </span>
            </h2>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-base leading-relaxed sm:text-lg text-slate-700">
                With years of dedicated service to the people of Bhiwandi, Maggi Bhai has been at the forefront of community development and social welfare. As a proud member of <span className="font-bold text-orange-600">Shiv Sena</span>, he embodies the values of service, integrity, and progress.
              </p>
              <p className="text-base leading-relaxed sm:text-lg text-slate-700">
                From ensuring basic infrastructure to championing education and healthcare, his commitment to Ward 9 has transformed countless lives. His door is always open to the people, and their voices always heard.
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2">
              <div className="relative p-4 overflow-hidden transition-all duration-300 bg-white border shadow-md group rounded-xl border-orange-200/50 hover:shadow-lg hover:-translate-y-1">
                <div className="flex items-start gap-3">
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 transition-opacity duration-500 bg-orange-500 rounded-lg blur-lg opacity-30 group-hover:opacity-50" />
                    <div className="relative flex items-center justify-center w-10 h-10 transition-transform duration-300 bg-orange-500 rounded-lg group-hover:scale-110 group-hover:rotate-3">
                      <Heart className="w-5 h-5 text-white" strokeWidth={2.5} />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-slate-900">Community First</h4>
                    <p className="mt-1 text-xs leading-snug sm:text-sm text-slate-600">Always putting people's needs above everything</p>
                  </div>
                </div>
              </div>

              <div className="relative p-4 overflow-hidden transition-all duration-300 bg-white border shadow-md group rounded-xl border-orange-200/50 hover:shadow-lg hover:-translate-y-1">
                <div className="flex items-start gap-3">
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 transition-opacity duration-500 bg-orange-500 rounded-lg blur-lg opacity-30 group-hover:opacity-50" />
                    <div className="relative flex items-center justify-center w-10 h-10 transition-transform duration-300 bg-orange-500 rounded-lg group-hover:scale-110 group-hover:rotate-3">
                      <Users className="w-5 h-5 text-white" strokeWidth={2.5} />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-slate-900">Inclusive Growth</h4>
                    <p className="mt-1 text-xs leading-snug sm:text-sm text-slate-600">Development for all sections of society</p>
                  </div>
                </div>
              </div>

              <div className="relative p-4 overflow-hidden transition-all duration-300 bg-white border shadow-md group rounded-xl border-orange-200/50 hover:shadow-lg hover:-translate-y-1">
                <div className="flex items-start gap-3">
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 transition-opacity duration-500 bg-orange-500 rounded-lg blur-lg opacity-30 group-hover:opacity-50" />
                    <div className="relative flex items-center justify-center w-10 h-10 transition-transform duration-300 bg-orange-500 rounded-lg group-hover:scale-110 group-hover:rotate-3">
                      <TrendingUp className="w-5 h-5 text-white" strokeWidth={2.5} />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-slate-900">Progress & Jobs</h4>
                    <p className="mt-1 text-xs leading-snug sm:text-sm text-slate-600">Creating opportunities for youth</p>
                  </div>
                </div>
              </div>

              <div className="relative p-4 overflow-hidden transition-all duration-300 bg-white border shadow-md group rounded-xl border-orange-200/50 hover:shadow-lg hover:-translate-y-1">
                <div className="flex items-start gap-3">
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 transition-opacity duration-500 bg-orange-500 rounded-lg blur-lg opacity-30 group-hover:opacity-50" />
                    <div className="relative flex items-center justify-center w-10 h-10 transition-transform duration-300 bg-orange-500 rounded-lg group-hover:scale-110 group-hover:rotate-3">
                      <Award className="w-5 h-5 text-white" strokeWidth={2.5} />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-slate-900">Proven Track Record</h4>
                    <p className="mt-1 text-xs leading-snug sm:text-sm text-slate-600">Years of dedicated service</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}