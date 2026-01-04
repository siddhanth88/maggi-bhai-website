import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Send,
  MessageCircle,
  Users,
  ArrowRight,
} from "lucide-react";
import { whatsappPhoneNumber } from "../utils/constants";
import { whatsappHandler } from "../utils/common";

export default function Contact() {
  return (
    <section
      className="relative py-12 overflow-hidden sm:py-16 lg:py-20 bg-gradient-to-br from-white via-slate-50 to-orange-50/20"
      id="contact"
    >
      {/* Ambient background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-64 h-64 rounded-full sm:w-80 sm:h-80 lg:w-96 lg:h-96 top-10 sm:top-20 -left-20 sm:-left-32 bg-gradient-to-br from-orange-200/30 to-transparent blur-3xl animate-pulse"
          style={{ animationDuration: "10s" }}
        />
        <div
          className="absolute w-64 h-64 rounded-full sm:w-80 sm:h-80 lg:w-96 lg:h-96 -bottom-20 sm:-bottom-32 -right-20 sm:-right-32 bg-gradient-to-tl from-amber-200/25 to-transparent blur-3xl animate-pulse"
          style={{ animationDuration: "12s", animationDelay: "2s" }}
        />
      </div>

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #f97316 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Column - Info */}
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-2 transition-all duration-300 border rounded-full shadow-sm sm:px-4 bg-white/80 backdrop-blur-sm border-orange-200/50 hover:shadow-md hover:scale-105 group">
                <MessageCircle className="w-4 h-4 text-orange-500 transition-transform duration-300 group-hover:rotate-12" />
                <span className="text-xs font-semibold tracking-wide text-orange-600 uppercase sm:text-sm">
                  Get in Touch
                </span>
              </div>

              <h2 className="text-3xl font-extrabold leading-tight text-transparent sm:text-4xl lg:text-5xl bg-clip-text bg-gradient-to-r from-slate-900 via-orange-900 to-slate-900">
                Contact Our
                <span className="relative inline-block mt-1">
                  <span className="relative z-10 text-orange-600">
                    {" "}
                    Campaign
                  </span>
                  <div className="absolute bottom-0 left-0 right-0 h-2 sm:h-3 -z-0 bg-orange-200/40 blur-sm" />
                </span>
              </h2>

              <p className="text-base leading-relaxed sm:text-lg text-slate-600">
                Have questions or suggestions? Want to volunteer?
                <span className="font-semibold text-slate-700">
                  {" "}
                  We'd love to hear from you.
                </span>
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-3">
              {/* Location Card with Map */}
              <div className="p-4 transition-all duration-300 bg-white border shadow-md sm:p-5 group rounded-xl sm:rounded-2xl border-slate-200/50 hover:shadow-lg hover:-translate-y-1">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-4">
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 transition-opacity duration-500 rounded-xl sm:rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-500/20 blur-lg opacity-40 group-hover:opacity-60" />
                    <div className="relative flex items-center justify-center transition-transform duration-300 w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 group-hover:scale-110 group-hover:rotate-3">
                      <MapPin
                        className="w-5 h-5 text-white sm:w-6 sm:h-6"
                        strokeWidth={2.5}
                      />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0 space-y-3">
                    <h4 className="text-base font-bold sm:text-lg text-slate-900">
                      Location
                    </h4>

                    {/* Google Map - Fully Responsive */}
                    <div className="w-full h-48 overflow-hidden border border-orange-300 shadow-xl sm:h-56 lg:h-72 rounded-2xl">
                      <iframe
                        title="Campaign Office Location"
                        src="https://www.google.com/maps?q=19.290966,73.0737152&z=20&output=embed"
                        className="w-full h-full border-0"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="p-4 transition-all duration-300 bg-white border shadow-md sm:p-5 group rounded-xl sm:rounded-2xl border-slate-200/50 hover:shadow-lg hover:-translate-y-1">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 transition-opacity duration-500 rounded-xl sm:rounded-2xl bg-gradient-to-br from-orange-500/20 to-amber-500/20 blur-lg opacity-40 group-hover:opacity-60" />
                    <div className="relative flex items-center justify-center transition-transform duration-300 w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 group-hover:scale-110 group-hover:rotate-3">
                      <Phone
                        className="w-5 h-5 text-white sm:w-6 sm:h-6"
                        strokeWidth={2.5}
                      />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="mb-1 text-base font-bold sm:text-lg text-slate-900">
                      Phone
                    </h4>
                    <p className="text-sm sm:text-base text-slate-600">
                      {whatsappPhoneNumber}
                    </p>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="p-4 transition-all duration-300 bg-white border shadow-md sm:p-5 group rounded-xl sm:rounded-2xl border-slate-200/50 hover:shadow-lg hover:-translate-y-1">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 transition-opacity duration-500 rounded-xl sm:rounded-2xl bg-gradient-to-br from-orange-600/20 to-orange-400/20 blur-lg opacity-40 group-hover:opacity-60" />
                    <div className="relative flex items-center justify-center transition-transform duration-300 w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-orange-600 to-orange-400 group-hover:scale-110 group-hover:rotate-3">
                      <Mail
                        className="w-5 h-5 text-white sm:w-6 sm:h-6"
                        strokeWidth={2.5}
                      />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="mb-1 text-base font-bold sm:text-lg text-slate-900">
                      Email
                    </h4>
                    <p className="text-sm break-all sm:text-base text-slate-600">
                      maggibhai.ward9@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media & Stats Combined */}
            <div className="grid gap-3 sm:grid-cols-2">
              {/* Social Media */}
              <div className="p-5 transition-all duration-300 bg-white border shadow-md sm:p-6 rounded-2xl border-slate-200/50 hover:shadow-lg">
                <h4 className="mb-4 text-base font-bold sm:text-lg text-slate-900">
                  Follow Us
                </h4>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="relative flex items-center justify-center transition-all duration-300 w-11 h-11 sm:w-12 sm:h-12 rounded-xl group hover:scale-110"
                  >
                    <div className="absolute inset-0 transition-opacity duration-300 opacity-100 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 group-hover:opacity-90" />
                    <Facebook
                      className="relative w-5 h-5 text-white transition-transform duration-300 sm:w-6 sm:h-6 group-hover:scale-110"
                      strokeWidth={2.5}
                    />
                  </a>
                  <a
                    href="#"
                    className="relative flex items-center justify-center transition-all duration-300 w-11 h-11 sm:w-12 sm:h-12 rounded-xl group hover:scale-110"
                  >
                    <div className="absolute inset-0 transition-opacity duration-300 opacity-100 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 group-hover:opacity-90" />
                    <Twitter
                      className="relative w-5 h-5 text-white transition-transform duration-300 sm:w-6 sm:h-6 group-hover:scale-110"
                      strokeWidth={2.5}
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/_maggibhai_/"
                    target="_blank"
                    className="relative flex items-center justify-center transition-all duration-300 w-11 h-11 sm:w-12 sm:h-12 rounded-xl group hover:scale-110"
                  >
                    <div className="absolute inset-0 transition-opacity duration-300 opacity-100 rounded-xl bg-gradient-to-br from-orange-600 to-pink-500 group-hover:opacity-90" />
                    <Instagram
                      className="relative w-5 h-5 text-white transition-transform duration-300 sm:w-6 sm:h-6 group-hover:scale-110"
                      strokeWidth={2.5}
                    />
                  </a>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 text-center transition-all duration-300 bg-white border shadow-md sm:p-5 rounded-xl border-slate-200/50 hover:shadow-lg hover:-translate-y-1">
                  <div className="mb-1 text-2xl font-extrabold text-transparent sm:text-3xl bg-clip-text bg-gradient-to-br from-orange-600 to-orange-400">
                    24/7
                  </div>
                  <div className="text-xs font-semibold sm:text-sm text-slate-600">
                    Available
                  </div>
                </div>
                <div className="p-4 text-center transition-all duration-300 bg-white border shadow-md sm:p-5 rounded-xl border-slate-200/50 hover:shadow-lg hover:-translate-y-1">
                  <div className="mb-1 text-2xl font-extrabold text-transparent sm:text-3xl bg-clip-text bg-gradient-to-br from-orange-600 to-orange-400">
                    &lt;24h
                  </div>
                  <div className="text-xs font-semibold sm:text-sm text-slate-600">
                    Response
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="relative">
            {/* Floating card effect */}
            <div className="absolute inset-0 transition-opacity duration-500 opacity-50 bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-2xl sm:rounded-3xl blur-2xl" />

            <div className="relative p-6 transition-all duration-500 bg-white border shadow-xl sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border-slate-200/50 hover:shadow-2xl">
              <div className="mb-6">
                <h3 className="mb-1 text-xl font-bold sm:text-2xl text-slate-900">
                  Send us a Message
                </h3>
                <p className="text-sm sm:text-base text-slate-600">
                  We'll respond within 24 hours
                </p>
              </div>

              <form className="space-y-4 sm:space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-semibold text-slate-900"
                  >
                    Your Name <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 transition-all duration-300 border outline-none sm:px-5 sm:py-4 bg-slate-50/50 rounded-xl sm:rounded-2xl border-slate-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 focus:bg-white hover:border-slate-300"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-semibold text-slate-900"
                  >
                    Email Address <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 transition-all duration-300 border outline-none sm:px-5 sm:py-4 bg-slate-50/50 rounded-xl sm:rounded-2xl border-slate-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 focus:bg-white hover:border-slate-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm font-semibold text-slate-900"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 transition-all duration-300 border outline-none sm:px-5 sm:py-4 bg-slate-50/50 rounded-xl sm:rounded-2xl border-slate-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 focus:bg-white hover:border-slate-300"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-semibold text-slate-900"
                  >
                    Your Message <span className="text-orange-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 transition-all duration-300 border outline-none resize-none sm:px-5 sm:py-4 bg-slate-50/50 rounded-xl sm:rounded-2xl border-slate-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 focus:bg-white hover:border-slate-300"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="relative w-full overflow-hidden shadow-lg group rounded-xl sm:rounded-2xl"
                >
                  {/* Animated gradient background */}
                  <div className="absolute inset-0 transition-transform duration-500 bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 group-hover:scale-105" />

                  {/* Button content */}
                  <div className="relative flex items-center justify-center gap-2 px-6 py-4 text-base font-bold text-white sm:px-8 sm:py-5 sm:text-lg">
                    <Send className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    <span>Send Message</span>
                  </div>

                  {/* Shine effect on hover */}
                  <div
                    className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:opacity-100"
                    style={{
                      transform: "translateX(-100%)",
                      animation: "shine 2s infinite",
                    }}
                  />
                </button>

                <p className="text-xs text-center sm:text-sm text-slate-500">
                  By submitting, you agree to our communication policy
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="relative mt-12 overflow-hidden shadow-xl sm:mt-16 rounded-2xl sm:rounded-3xl">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500">
            <div
              className="absolute inset-0 opacity-30 bg-gradient-to-br from-transparent via-white/10 to-transparent animate-pulse"
              style={{ animationDuration: "6s" }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 px-6 py-10 text-center sm:px-12 sm:py-12">
            <div className="flex items-center justify-center mb-3">
              <Users
                className="w-10 h-10 text-white sm:w-12 sm:h-12"
                strokeWidth={2.5}
              />
            </div>
            <h3 className="mb-2 text-xl font-extrabold text-white sm:text-2xl lg:text-3xl">
              Join Our Volunteer Team
            </h3>
            <p className="max-w-2xl mx-auto mb-6 text-base sm:text-lg text-orange-50">
              Be part of the change. Help us build a better Bhiwandi together.
            </p>
            <button
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-orange-600 transition-all duration-300 transform bg-white shadow-lg sm:px-8 sm:py-4 sm:text-base rounded-xl sm:rounded-2xl hover:bg-orange-50 hover:scale-105 group"
              onClick={() =>
                whatsappHandler(
                  "I would like to join Maggi Bhai's campaign as a volunteer and contribute to the development of Ward Number 9, Bhiwandi. Please share the next steps with me.\nमैं मैगी भाई के अभियान में स्वयंसेवक के रूप में शामिल होना चाहता/चाहती हूँ और भिवंडी के वार्ड नंबर 9 के विकास में योगदान देना चाहता/चाहती हूँ। कृपया मुझे आगे की प्रक्रिया के बारे में जानकारी दें।"
                )
              }
            >
              <span>Become a Volunteer</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 sm:w-5 sm:h-5 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  );
}
