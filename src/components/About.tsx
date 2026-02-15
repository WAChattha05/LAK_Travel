import { Shield, Heart, Award, Users } from 'lucide-react';
import aboutImage from '../Images/About.webp';

interface AboutProps {
  detailed?: boolean;
}

export default function About({ detailed = false }: AboutProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            About <span className="text-amber-500">Lak Travel & Transport</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Your trusted partner for premium transportation and hospitality services
            across Saudi Arabia's holy cities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-slate-900">
              Dedicated to Serving Pilgrims & Travelers
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              For over a decade, Lak Travel & Transport has been the premier choice for
              pilgrims and visitors to Saudi Arabia. We understand the sacred journey
              you're undertaking and are committed to making your travel experience
              comfortable, safe, and memorable.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              From luxury sedans to spacious buses, from budget hotels to 5-star
              accommodations near the Haram, we provide comprehensive travel solutions
              tailored to your needs and budget.
            </p>
            {detailed && (
              <div className="space-y-4 pt-4">
                <h4 className="text-2xl font-bold text-slate-900">Our Experience</h4>
                <p className="text-lg text-gray-600 leading-relaxed">
                  With deep roots in Makkah, Madinah, and Jeddah, our team brings
                  unparalleled local knowledge and expertise. We've successfully served
                  over 50,000 satisfied clients from around the globe, earning their
                  trust through reliability, professionalism, and genuine care.
                </p>
              </div>
            )}
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={aboutImage} 
                alt="LAK Travel providing seamless journey services for pilgrims near holy sites"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900">10+</div>
                <div className="text-sm text-slate-900">Years</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Shield,
              title: 'Our Mission',
              description: 'To provide safe, reliable, and premium transportation services that exceed expectations',
            },
            {
              icon: Heart,
              title: 'Our Vision',
              description: 'To be the most trusted travel partner for pilgrims and visitors to Saudi Arabia',
            },
            {
              icon: Award,
              title: 'Our Values',
              description: 'Excellence, integrity, respect, and unwavering commitment to customer satisfaction',
            },
            {
              icon: Users,
              title: 'Our Promise',
              description: '24/7 support, professional drivers, well-maintained vehicles, and competitive pricing',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-white border-2 border-slate-100 rounded-xl p-8 hover:border-amber-500 transition-all hover:shadow-xl group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <item.icon className="text-slate-900" size={32} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
