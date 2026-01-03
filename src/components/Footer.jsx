import { Vote, Heart, ArrowRight, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Sparkles } from 'lucide-react';
import { whatsappHandler } from '../utils/common';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Ambient background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-0 left-0 w-64 h-64 bg-orange-500 rounded-full sm:w-80 sm:h-80 lg:w-96 lg:h-96 blur-3xl opacity-20 animate-pulse" 
             style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full sm:w-80 sm:h-80 bg-amber-500 blur-3xl opacity-20 animate-pulse" 
             style={{ animationDuration: '10s', animationDelay: '2s' }} />
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" 
           style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="container relative z-10 px-4 py-12 mx-auto sm:px-6 sm:py-14 lg:px-8 lg:py-16 max-w-7xl">
        {/* Top CTA Banner */}
        <div className="relative p-6 mb-12 overflow-hidden shadow-xl sm:p-8 lg:p-10 sm:mb-14 rounded-2xl sm:rounded-3xl">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500">
            <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-transparent via-white/20 to-transparent animate-pulse" 
                 style={{ animationDuration: '6s' }} />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center">
            <div className="flex items-center justify-center mb-3">
              <Sparkles className="w-6 h-6 text-white sm:w-7 sm:h-7 lg:w-8 lg:h-8 animate-pulse" strokeWidth={2.5} />
            </div>
            <h3 className="mb-2 text-xl font-extrabold text-white sm:text-2xl lg:text-3xl sm:mb-3">
              Your Vote, Your Voice, Your Future
            </h3>
            <p className="max-w-2xl mx-auto mb-6 text-base sm:text-lg lg:text-xl text-orange-50">
              Together, we can build the Bhiwandi we've always dreamed of
            </p>
            <button className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-orange-600 transition-all duration-300 transform bg-white shadow-lg sm:px-8 sm:py-4 sm:text-base lg:text-lg rounded-xl sm:rounded-2xl hover:bg-orange-50 hover:scale-105 group" onClick={()=> whatsappHandler()}>
              <span>Join the Movement</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 sm:w-5 sm:h-5 group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid gap-8 mb-10 sm:grid-cols-2 lg:grid-cols-4 sm:gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="space-y-5 lg:col-span-1">
            <div className="inline-flex items-center gap-3 p-1 pr-5 transition-all duration-300 bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl hover:bg-white/10">
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-orange-500 rounded-lg opacity-50 sm:rounded-xl blur-lg animate-pulse" 
                     style={{ animationDuration: '3s' }} />
                <div className="relative flex items-center justify-center w-12 h-12 rounded-lg sm:w-14 sm:h-14 bg-gradient-to-br from-orange-500 to-orange-600 sm:rounded-xl">
                  <Vote className="w-6 h-6 text-white sm:w-7 sm:h-7" strokeWidth={2.5} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-white sm:text-2xl">Maggi Bhai</h3>
                <p className="text-xs font-bold text-orange-400 sm:text-sm">Shiv Sena</p>
              </div>
            </div>
            
            <p className="text-sm leading-relaxed sm:text-base text-slate-400">
              Working tirelessly for the development and prosperity of Ward 9, Bhiwandi. 
              <span className="text-slate-300"> Building tomorrow, together.</span>
            </p>

            {/* Mission Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-2 border rounded-full sm:px-4 bg-orange-500/10 border-orange-500/20">
              <Heart className="w-3 h-3 text-orange-400 sm:w-4 sm:h-4" fill="currentColor" />
              <span className="text-xs font-semibold text-orange-300 sm:text-sm">Serving with dedication</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-base font-bold text-white sm:text-lg sm:mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {['About Us', 'Our Vision', 'Manifesto', 'Gallery', 'Contact', 'Volunteer'].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="inline-flex items-center gap-2 text-sm transition-all duration-300 sm:text-base text-slate-400 group hover:text-orange-400 hover:translate-x-1"
                  >
                    <div className="w-1 h-1 transition-all duration-300 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:w-2" />
                    <span>{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 text-base font-bold text-white sm:text-lg sm:mb-5">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="flex-shrink-0 w-4 h-4 text-orange-400 sm:w-5 sm:h-5" strokeWidth={2} />
                <div>
                  <p className="text-xs leading-relaxed sm:text-sm">Ward Number 9, Bhiwandi</p>
                  <p className="text-xs sm:text-sm">Thane District, Maharashtra</p>
                </div>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Phone className="flex-shrink-0 w-4 h-4 text-orange-400 sm:w-5 sm:h-5" strokeWidth={2} />
                <span className="text-xs sm:text-sm">+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Mail className="flex-shrink-0 w-4 h-4 text-orange-400 sm:w-5 sm:h-5" strokeWidth={2} />
                <span className="text-xs break-all sm:text-sm">maggibhai.ward9@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h4 className="mb-4 text-base font-bold text-white sm:text-lg sm:mb-5">Stay Connected</h4>
            
            {/* Social Media */}
            <div className="flex gap-2.5 mb-5 sm:gap-3">
              <a 
                href="#" 
                className="relative flex items-center justify-center w-10 h-10 transition-all duration-300 rounded-lg sm:w-11 sm:h-11 sm:rounded-xl group hover:scale-110"
              >
                <div className="absolute inset-0 transition-opacity duration-300 bg-orange-500 rounded-lg sm:rounded-xl opacity-20 group-hover:opacity-100" />
                <Facebook className="relative w-4 h-4 transition-colors duration-300 sm:w-5 sm:h-5 text-slate-400 group-hover:text-white" strokeWidth={2} />
              </a>
              <a 
                href="#" 
                className="relative flex items-center justify-center w-10 h-10 transition-all duration-300 rounded-lg sm:w-11 sm:h-11 sm:rounded-xl group hover:scale-110"
              >
                <div className="absolute inset-0 transition-opacity duration-300 bg-orange-500 rounded-lg sm:rounded-xl opacity-20 group-hover:opacity-100" />
                <Twitter className="relative w-4 h-4 transition-colors duration-300 sm:w-5 sm:h-5 text-slate-400 group-hover:text-white" strokeWidth={2} />
              </a>
              <a 
                href="#" 
                className="relative flex items-center justify-center w-10 h-10 transition-all duration-300 rounded-lg sm:w-11 sm:h-11 sm:rounded-xl group hover:scale-110"
              >
                <div className="absolute inset-0 transition-opacity duration-300 bg-orange-500 rounded-lg sm:rounded-xl opacity-20 group-hover:opacity-100" />
                <Instagram className="relative w-4 h-4 transition-colors duration-300 sm:w-5 sm:h-5 text-slate-400 group-hover:text-white" strokeWidth={2} />
              </a>
            </div>

            {/* Campaign Slogan */}
            <div className="p-3 border sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-orange-500/10 to-amber-500/10 border-orange-500/20">
              <p className="text-xs font-bold leading-relaxed text-orange-300 sm:text-sm">
                "Vote for Progress<br />Vote for Development"
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t sm:pt-7 border-slate-700/50">
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row sm:gap-4">
            <div className="text-center sm:text-left">
              <p className="text-xs sm:text-sm text-slate-400">
                &copy; 2026 <span className="font-semibold text-slate-300">Maggi Bhai Campaign</span> - Ward 9, Bhiwandi
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Authorized by Shiv Sena Party | All rights reserved
              </p>
            </div>
            
            <div className="flex items-center gap-4 text-xs sm:gap-6 text-slate-500">
              <a href="#" className="transition-colors hover:text-orange-400">Privacy Policy</a>
              <span className="w-1 h-1 rounded-full bg-slate-600"></span>
              <a href="#" className="transition-colors hover:text-orange-400">Terms of Service</a>
            </div>
          </div>

          {/* Made with love indicator */}
          <div className="flex items-center justify-center gap-2 mt-5 text-xs text-slate-500">
            <span>Made with</span>
            <Heart className="w-3 h-3 text-orange-400 animate-pulse" fill="currentColor" />
            <span>for the people of Bhiwandi</span>
          </div>
        </div>
      </div>

      {/* Decorative bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 opacity-50 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
    </footer>
  );
} 