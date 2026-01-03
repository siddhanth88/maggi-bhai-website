import { Heart, Users, TrendingUp, Award } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="/whatsapp_image_2026-01-03_at_14.25.51.jpeg"
                  alt="Maggi Bhai Campaign"
                  className="rounded-2xl shadow-xl w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="bg-orange-600 text-white p-6 rounded-2xl shadow-xl">
                  <div className="text-3xl font-bold">Ward 9</div>
                  <div className="text-orange-100 mt-1">Bhiwandi Municipal Corporation</div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="/whatsapp_image_2026-01-03_at_00.41.03.jpeg"
                  alt="Community Work"
                  className="rounded-2xl shadow-xl w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold">
              About Maggi Bhai
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              A Leader Who
              <span className="text-orange-600 block">Serves the People</span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              With years of dedicated service to the people of Bhiwandi, Maggi Bhai has been
              at the forefront of community development and social welfare. As a proud member
              of Shiv Sena, he embodies the values of service, integrity, and progress.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              From ensuring basic infrastructure to championing education and healthcare,
              his commitment to Ward 9 has transformed countless lives. His door is always
              open to the people, and their voices always heard.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-start space-x-3 p-4 bg-orange-50 rounded-xl hover:bg-orange-100 transition-colors">
                <Heart className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Community First</h4>
                  <p className="text-sm text-gray-600 mt-1">Always putting people's needs above everything</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-orange-50 rounded-xl hover:bg-orange-100 transition-colors">
                <Users className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Inclusive Growth</h4>
                  <p className="text-sm text-gray-600 mt-1">Development for all sections of society</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-orange-50 rounded-xl hover:bg-orange-100 transition-colors">
                <TrendingUp className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Progress & Jobs</h4>
                  <p className="text-sm text-gray-600 mt-1">Creating opportunities for youth</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-orange-50 rounded-xl hover:bg-orange-100 transition-colors">
                <Award className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Proven Track Record</h4>
                  <p className="text-sm text-gray-600 mt-1">Years of dedicated service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}