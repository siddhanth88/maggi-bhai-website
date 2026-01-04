import { Heart, Users, TrendingUp, Award, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white" id="about">
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
        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Image Grid - Left Side */}
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              {/* Column 1 */}
              <div className="flex flex-col gap-4">
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
                {/* <div className="relative overflow-hidden shadow-xl group rounded-2xl">
                  <img
                    src="/poster2.jpeg"
                    alt="Social Work"
                    className="object-cover w-full h-full transition-transform duration-500 sm:h-56 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-orange-900/60 to-transparent group-hover:opacity-100" />
                </div> */}
                <div className="relative overflow-hidden shadow-xl group rounded-2xl">
                  <img
                    src="/ig5.jpg"
                    alt="Community Engagement"
                    className="object-cover w-full h-56 transition-transform duration-500 sm:h-64 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-orange-900/60 to-transparent group-hover:opacity-100" />
                </div>
              </div>
              

              {/* Column 2 */}
              <div className="flex flex-col gap-4">
                <div className="relative overflow-hidden shadow-xl group rounded-2xl">
                  <img
                    src="/ig3.jpg"
                    alt="Community Work"
                    className="object-cover w-full transition-transform duration-500 h-72 sm:h-80 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-orange-900/60 to-transparent group-hover:opacity-100" />
                </div>
                
                <div className="relative p-4 overflow-hidden transition-all duration-300 bg-white border shadow-lg group rounded-2xl border-orange-200/50 hover:shadow-xl hover:-translate-y-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xl font-extrabold text-transparent sm:text-2xl bg-clip-text bg-gradient-to-br from-orange-600 to-orange-400">
                        10+ Years
                      </div>
                      <div className="mt-0.5 text-xs font-semibold text-slate-600 sm:text-sm">Public Service</div>
                    </div>
                    <div className="relative">
                      <div className="absolute inset-0 transition-opacity duration-500 bg-orange-500 rounded-xl blur-lg opacity-40 group-hover:opacity-60" />
                      <div className="relative flex items-center justify-center w-10 h-10 transition-transform duration-300 bg-orange-500 rounded-xl group-hover:scale-110 group-hover:rotate-3 sm:w-12 sm:h-12">
                        <Award className="w-5 h-5 text-white sm:w-6 sm:h-6" strokeWidth={2} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="relative overflow-hidden shadow-xl group rounded-2xl">
                  <img
                    src="/ig2.jpg"
                    alt="Community Engagement"
                    className="object-cover w-full h-56 transition-transform duration-500 sm:h-64 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-orange-900/60 to-transparent group-hover:opacity-100" />
                </div> */}
                <div className="relative overflow-hidden shadow-xl group rounded-2xl">
                  <img
                    src="/poster2.jpeg"
                    alt="Social Work"
                    className="object-cover w-full h-full transition-transform duration-500 sm:h-56 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-orange-900/60 to-transparent group-hover:opacity-100" />
                </div>
              </div>

              {/* Column 3 - Full width on mobile */}
              <div className="flex flex-col col-span-1 gap-4">
                {/* <div className="relative overflow-hidden shadow-xl group rounded-2xl">
                  <img
                    src="/poster2.jpeg"
                    alt="Social Work"
                    className="object-cover w-full h-full transition-transform duration-500 sm:h-56 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-orange-900/60 to-transparent group-hover:opacity-100" />
                </div> */}
                
                {/* <div className="relative p-4 overflow-hidden transition-all duration-300 bg-white border shadow-lg group rounded-2xl border-orange-200/50 hover:shadow-xl hover:-translate-y-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-extrabold text-transparent sm:text-3xl bg-clip-text bg-gradient-to-br from-orange-600 to-orange-400">
                        15+
                      </div>
                      <div className="mt-0.5 text-xs font-semibold text-slate-600 sm:text-sm">Years of Service</div>
                    </div>
                    <div className="relative">
                      <div className="absolute inset-0 transition-opacity duration-500 bg-orange-500 rounded-xl blur-lg opacity-40 group-hover:opacity-60" />
                      <div className="relative flex items-center justify-center w-10 h-10 transition-transform duration-300 bg-orange-500 rounded-xl group-hover:scale-110 group-hover:rotate-3 sm:w-12 sm:h-12">
                        <TrendingUp className="w-5 h-5 text-white sm:w-6 sm:h-6" strokeWidth={2} />
                      </div>
                    </div>
                  </div>
                </div> */}
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
// import { Heart, Users, TrendingUp, Award, Sparkles } from 'lucide-react';

// export default function About() {
//   // ============================================
//   // EASY TO EDIT CONFIGURATION
//   // ============================================
  
//   // Gallery Images - Add or remove images here
//   const galleryImages = [
//     {
//       src: '/head.logo.png',
//       alt: 'Maggi Bhai Campaign',
//       aspectRatio: 'tall', // Options: 'tall', 'medium', 'square'
//       orientation: 'potraid', // Options: 'portrait' or 'landscape'
//       span: 1 // Grid span: 1 (normal) or 2 (double width)
//     },
//     {
//       src: '/ig3.jpg',
//       alt: 'Community Work',
//       aspectRatio: 'tall',
//       orientation: 'portrait',
//       span: 1
//     },
//     {
//       src: '/ig2.jpg',
//       alt: 'Community Engagement',
//       aspectRatio: 'medium',
//       orientation: 'landscape',
//       span: 2 // This will span 2 columns
//     },
//     {
//       src: '/poster2.jpeg',
//       alt: 'Social Work',
//       aspectRatio: 'tall',
//       orientation: 'portrait',
//       span: 1
//     }
//   ];

//   // Statistics Cards - Modify numbers and labels here
//   const statsCards = [
//     {
//       number: '1000+',
//       label: 'Happy Families',
//       icon: Heart,
//       span: 1 // Grid span: 1 (normal) or 2 (double width)
//     },
//     {
//       number: '50+',
//       label: 'Projects Completed',
//       icon: Award,
//       span: 1
//     },
//     {
//       number: '15+',
//       label: 'Years of Service',
//       icon: TrendingUp,
//       span: 1
//     }
//   ];

//   // Ward Information
//   const wardInfo = {
//     ward: 'Ward 9',
//     area: 'Bhiwandi Municipal Corporation',
//     span: 1 // Grid span: 1 (normal) or 2 (double width)
//   };

//   // Content Section
//   const content = {
//     badge: 'About Maggi Bhai',
//     heading: 'A Leader Who',
//     headingHighlight: 'Serves the People',
//     description: [
//       {
//         text: 'With years of dedicated service to the people of Bhiwandi, Maggi Bhai has been at the forefront of community development and social welfare. As a proud member of ',
//         highlight: 'Shiv Sena',
//         suffix: ', he embodies the values of service, integrity, and progress.'
//       },
//       {
//         text: 'From ensuring basic infrastructure to championing education and healthcare, his commitment to Ward 9 has transformed countless lives. His door is always open to the people, and their voices always heard.'
//       }
//     ],
//     features: [
//       {
//         icon: Heart,
//         title: 'Community First',
//         description: 'Always putting people\'s needs above everything'
//       },
//       {
//         icon: Users,
//         title: 'Inclusive Growth',
//         description: 'Development for all sections of society'
//       },
//       {
//         icon: TrendingUp,
//         title: 'Progress & Jobs',
//         description: 'Creating opportunities for youth'
//       },
//       {
//         icon: Award,
//         title: 'Proven Track Record',
//         description: 'Years of dedicated service'
//       }
//     ]
//   };

//   // ============================================
//   // COMPONENT RENDER
//   // ============================================

//   return (
//     <section className="relative min-h-screen overflow-hidden bg-white" id="about">
//       {/* Ambient background effects */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div 
//           className="absolute rounded-full -top-32 -right-32 w-80 h-80 bg-gradient-to-br from-orange-200/40 to-transparent blur-3xl animate-pulse" 
//           style={{ animationDuration: '8s' }} 
//         />
//         <div 
//           className="absolute rounded-full -bottom-32 -left-32 w-72 h-72 bg-gradient-to-tr from-amber-200/30 to-transparent blur-3xl animate-pulse" 
//           style={{ animationDuration: '10s', animationDelay: '2s' }} 
//         />
//       </div>

//       {/* Subtle grid pattern */}
//       <div 
//         className="absolute inset-0 opacity-[0.015]" 
//         style={{ 
//           backgroundImage: 'radial-gradient(circle, #f97316 1px, transparent 1px)', 
//           backgroundSize: '32px 32px' 
//         }} 
//       />
      
//       <div className="container relative z-10 px-4 py-16 mx-auto sm:px-6 lg:px-8 lg:py-24">
//         <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          
//           {/* ============================================ */}
//           {/* IMAGE GALLERY - LEFT SIDE */}
//           {/* ============================================ */}
//           <div className="relative order-2 lg:order-1">
//             <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2">
              
//               {/* Ward Info Card - Always First */}
//               <div 
//                 className={`relative p-5 overflow-hidden text-white shadow-xl rounded-2xl group ${
//                   wardInfo.span === 2 ? 'sm:col-span-2 md:col-span-2 lg:col-span-2' : 'sm:col-span-1'
//                 }`}
//               >
//                 <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-orange-500">
//                   <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-tr from-orange-400/20 to-transparent group-hover:opacity-100" />
//                 </div>
//                 <div className="relative">
//                   <div className="text-2xl font-extrabold sm:text-3xl">{wardInfo.ward}</div>
//                   <div className="mt-1 text-sm font-medium text-orange-100">{wardInfo.area}</div>
//                 </div>
//               </div>

//               {/* Gallery Images */}
//               {galleryImages.map((image, index) => (
//                 <div 
//                   key={index} 
//                   className={`relative overflow-hidden shadow-xl group rounded-2xl ${
//                     image.span === 2 ? 'sm:col-span-2 md:col-span-2 lg:col-span-2' : 'sm:col-span-1'
//                   }`}
//                 >
//                   <img
//                     src={image.src}
//                     alt={image.alt}
//                     className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
//                       image.orientation === 'landscape' 
//                         ? image.aspectRatio === 'tall' ? 'h-40 sm:h-48' :
//                           image.aspectRatio === 'medium' ? 'h-32 sm:h-40' :
//                           'h-28 sm:h-32'
//                         : image.aspectRatio === 'tall' ? 'h-56 sm:h-64' : 
//                           image.aspectRatio === 'medium' ? 'h-48 sm:h-56' : 
//                           'h-40 sm:h-48'
//                     }`}
//                   />
//                   <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-orange-900/60 to-transparent group-hover:opacity-100" />
//                 </div>
//               ))}

//               {/* Stats Cards */}
//               {statsCards.map((stat, index) => {
//                 const Icon = stat.icon;
//                 return (
//                   <div 
//                     key={index} 
//                     className={`relative p-4 overflow-hidden transition-all duration-300 bg-white border shadow-lg group rounded-2xl border-orange-200/50 hover:shadow-xl hover:-translate-y-1 ${
//                       stat.span === 2 ? 'sm:col-span-2 md:col-span-2 lg:col-span-2' : 'sm:col-span-1'
//                     }`}
//                   >
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <div className="text-2xl font-extrabold text-transparent sm:text-3xl bg-clip-text bg-gradient-to-br from-orange-600 to-orange-400">
//                           {stat.number}
//                         </div>
//                         <div className="mt-0.5 text-xs font-semibold text-slate-600 sm:text-sm">
//                           {stat.label}
//                         </div>
//                       </div>
//                       <div className="relative">
//                         <div className="absolute inset-0 transition-opacity duration-500 bg-orange-500 rounded-xl blur-lg opacity-40 group-hover:opacity-60" />
//                         <div className="relative flex items-center justify-center w-10 h-10 transition-transform duration-300 bg-orange-500 rounded-xl group-hover:scale-110 group-hover:rotate-3 sm:w-12 sm:h-12">
//                           <Icon className="w-5 h-5 text-white sm:w-6 sm:h-6" strokeWidth={2} />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* ============================================ */}
//           {/* CONTENT - RIGHT SIDE */}
//           {/* ============================================ */}
//           <div className="order-1 space-y-6 lg:order-2">
            
//             {/* Badge */}
//             <div className="inline-flex items-center gap-2 px-4 py-2 transition-all duration-300 border rounded-full shadow-sm bg-white/80 backdrop-blur-sm border-orange-200/50 hover:shadow-md hover:scale-105 group">
//               <Sparkles className="w-4 h-4 text-orange-500 transition-transform duration-300 group-hover:rotate-12" />
//               <span className="text-sm font-semibold tracking-wide text-orange-600 uppercase">
//                 {content.badge}
//               </span>
//             </div>

//             {/* Heading */}
//             <h2 className="text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
//               {content.heading}
//               <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500">
//                 {content.headingHighlight}
//               </span>
//             </h2>

//             {/* Description */}
//             <div className="space-y-4">
//               {content.description.map((paragraph, index) => (
//                 <p key={index} className="text-base leading-relaxed sm:text-lg text-slate-700">
//                   {paragraph.text}
//                   {paragraph.highlight && (
//                     <span className="font-bold text-orange-600">{paragraph.highlight}</span>
//                   )}
//                   {paragraph.suffix}
//                 </p>
//               ))}
//             </div>

//             {/* Feature Grid */}
//             <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2">
//               {content.features.map((feature, index) => {
//                 const Icon = feature.icon;
//                 return (
//                   <div 
//                     key={index}
//                     className="relative p-4 overflow-hidden transition-all duration-300 bg-white border shadow-md group rounded-xl border-orange-200/50 hover:shadow-lg hover:-translate-y-1"
//                   >
//                     <div className="flex items-start gap-3">
//                       <div className="relative flex-shrink-0">
//                         <div className="absolute inset-0 transition-opacity duration-500 bg-orange-500 rounded-lg blur-lg opacity-30 group-hover:opacity-50" />
//                         <div className="relative flex items-center justify-center w-10 h-10 transition-transform duration-300 bg-orange-500 rounded-lg group-hover:scale-110 group-hover:rotate-3">
//                           <Icon className="w-5 h-5 text-white" strokeWidth={2.5} />
//                         </div>
//                       </div>
//                       <div className="flex-1 min-w-0">
//                         <h4 className="font-bold text-slate-900">{feature.title}</h4>
//                         <p className="mt-1 text-xs leading-snug sm:text-sm text-slate-600">
//                           {feature.description}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }