import { Vote } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                <Vote className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Maggi Bhai</h3>
                <p className="text-orange-400 text-sm font-semibold">Shiv Sena</p>
              </div>
            </div>
            <p className="text-gray-400">
              Working for the development and prosperity of Ward 9, Bhiwandi
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-orange-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Our Vision</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Volunteer</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Campaign Info</h4>
            <div className="space-y-2 text-gray-400">
              <p>Ward Number 9</p>
              <p>Bhiwandi Municipal Corporation</p>
              <p>Thane District, Maharashtra</p>
              <p className="text-orange-400 font-semibold mt-4">Vote for Progress, Vote for Development</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2026 Maggi Bhai - Ward 9, Bhiwandi. All rights reserved.</p>
          <p className="mt-2 text-sm">Authorized by Shiv Sena Party</p>
        </div>
      </div>
    </footer>
  );
}
