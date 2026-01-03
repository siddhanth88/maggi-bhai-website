import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-2 text-orange-600 font-bold text-sm uppercase tracking-wider mb-4">
                <div className="w-12 h-1 bg-orange-600"></div>
                <span>Get in Touch</span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Contact Our <span className="text-orange-600">Campaign</span>
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                Have questions or suggestions? Want to volunteer for the campaign? We'd love to hear from you. Your voice matters to us.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Location</h4>
                  <p className="text-gray-600">Ward Number 9, Bhiwandi<br />Thane District, Maharashtra</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Phone</h4>
                  <p className="text-gray-600">+91 XXXXX XXXXX</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600">maggibhai.ward9@gmail.com</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-4">Follow Our Campaign</h4>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-orange-600 hover:bg-orange-700 rounded-xl flex items-center justify-center transition-colors">
                  <Facebook className="w-6 h-6 text-white" />
                </a>
                <a href="#" className="w-12 h-12 bg-orange-600 hover:bg-orange-700 rounded-xl flex items-center justify-center transition-colors">
                  <Twitter className="w-6 h-6 text-white" />
                </a>
                <a href="#" className="w-12 h-12 bg-orange-600 hover:bg-orange-700 rounded-xl flex items-center justify-center transition-colors">
                  <Instagram className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-white rounded-3xl p-8 shadow-xl border border-orange-100">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-orange-600 focus:ring-2 focus:ring-orange-100 outline-none transition-all"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-orange-600 focus:ring-2 focus:ring-orange-100 outline-none transition-all"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-orange-600 focus:ring-2 focus:ring-orange-100 outline-none transition-all"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-orange-600 focus:ring-2 focus:ring-orange-100 outline-none transition-all resize-none"
                  placeholder="Your message or query..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-600 to-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-orange-700 hover:to-orange-600 transition-all transform hover:scale-105 shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
