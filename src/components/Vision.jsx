import { Building2, GraduationCap, HeartPulse, Droplets, Lightbulb, Shield } from 'lucide-react';

const visionPoints = [
  {
    icon: Building2,
    title: 'Infrastructure Development',
    description: 'Modern roads, better drainage systems, and improved public facilities for Ward 9'
  },
  {
    icon: GraduationCap,
    title: 'Quality Education',
    description: 'Enhanced educational facilities and support for students from all backgrounds'
  },
  {
    icon: HeartPulse,
    title: 'Healthcare Access',
    description: 'Improved medical facilities and affordable healthcare for every family'
  },
  {
    icon: Droplets,
    title: 'Clean Water Supply',
    description: '24/7 clean water supply and better sanitation infrastructure'
  },
  {
    icon: Lightbulb,
    title: 'Skill Development',
    description: 'Training programs and employment opportunities for youth'
  },
  {
    icon: Shield,
    title: 'Safety & Security',
    description: 'Enhanced safety measures and better street lighting throughout the ward'
  }
];

export default function Vision() {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block">
            <div className="flex items-center gap-2 text-orange-600 font-bold text-sm uppercase tracking-wider mb-4 justify-center">
              <div className="w-12 h-1 bg-orange-600"></div>
              <span>Our Vision</span>
              <div className="w-12 h-1 bg-orange-600"></div>
            </div>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Building a Better <span className="text-orange-600">Bhiwandi</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment is to transform Ward 9 into a model of development, prosperity, and community welfare
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visionPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-orange-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {point.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-orange-600 to-orange-500 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h3 className="text-3xl sm:text-4xl font-bold mb-4">
            Together, We Will Make It Happen
          </h3>
          <p className="text-xl text-orange-50 mb-8 max-w-2xl mx-auto">
            Your vote is your voice. Join us in building a brighter future for Ward 9 and Bhiwandi
          </p>
          <button className="bg-white text-orange-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-orange-50 transition-all transform hover:scale-105 shadow-xl">
            Join Our Campaign
          </button>
        </div>
      </div>
    </section>
  );
}
