import { Heart, Users, TrendingUp, Award } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="container px-6 mx-auto">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="/poster1.jpeg"
                  alt="Maggi Bhai Campaign"
                  className="object-cover w-full h-64 transition-transform duration-300 shadow-xl rounded-2xl hover:scale-105"
                />
                <div className="p-6 text-white bg-orange-600 shadow-xl rounded-2xl">
                  <div className="text-3xl font-bold">Ward 9</div>
                  <div className="mt-1 text-orange-100">Bhiwandi Municipal Corporation</div>
                </div>
              </div>
              <div className="pt-8 space-y-4">
                <img
                  src="/poster2.jpeg"
                  alt="Community Work"
                  className="object-cover w-full transition-transform duration-300 shadow-xl rounded-2xl h-80 hover:scale-105"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="inline-block px-4 py-2 text-sm font-semibold text-orange-600 bg-orange-100 rounded-full">
              About Maggi Bhai
            </div>

            <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
              A Leader Who
              <span className="block text-orange-600">Serves the People</span>
            </h2>

            <p className="text-lg leading-relaxed text-gray-600">
              With years of dedicated service to the people of Bhiwandi, Maggi Bhai has been
              at the forefront of community development and social welfare. As a proud member
              of Shiv Sena, he embodies the values of service, integrity, and progress.
            </p>

            <p className="text-lg leading-relaxed text-gray-600">
              From ensuring basic infrastructure to championing education and healthcare,
              his commitment to Ward 9 has transformed countless lives. His door is always
              open to the people, and their voices always heard.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-start p-4 space-x-3 transition-colors bg-orange-50 rounded-xl hover:bg-orange-100">
                <Heart className="flex-shrink-0 w-6 h-6 mt-1 text-orange-600" />
                <div>
                  <h4 className="font-semibold text-gray-900">Community First</h4>
                  <p className="mt-1 text-sm text-gray-600">Always putting people's needs above everything</p>
                </div>
              </div>

              <div className="flex items-start p-4 space-x-3 transition-colors bg-orange-50 rounded-xl hover:bg-orange-100">
                <Users className="flex-shrink-0 w-6 h-6 mt-1 text-orange-600" />
                <div>
                  <h4 className="font-semibold text-gray-900">Inclusive Growth</h4>
                  <p className="mt-1 text-sm text-gray-600">Development for all sections of society</p>
                </div>
              </div>

              <div className="flex items-start p-4 space-x-3 transition-colors bg-orange-50 rounded-xl hover:bg-orange-100">
                <TrendingUp className="flex-shrink-0 w-6 h-6 mt-1 text-orange-600" />
                <div>
                  <h4 className="font-semibold text-gray-900">Progress & Jobs</h4>
                  <p className="mt-1 text-sm text-gray-600">Creating opportunities for youth</p>
                </div>
              </div>

              <div className="flex items-start p-4 space-x-3 transition-colors bg-orange-50 rounded-xl hover:bg-orange-100">
                <Award className="flex-shrink-0 w-6 h-6 mt-1 text-orange-600" />
                <div>
                  <h4 className="font-semibold text-gray-900">Proven Track Record</h4>
                  <p className="mt-1 text-sm text-gray-600">Years of dedicated service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}