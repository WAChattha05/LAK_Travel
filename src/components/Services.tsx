import { Car, Users, Bus, Plane, MapPin, ArrowRight } from 'lucide-react';
import LuxuryTAXI from '../Images/LuxuryTaxiService.png';

interface ServicesProps {
  onNavigate: (page: string) => void;
  detailed?: boolean;
}

export default function Services({ onNavigate, detailed = false }: ServicesProps) {
  const services = [
    {
      icon: Car,
      title: 'Luxury Taxi Service',
      description: 'Premium SUVs and sedans with professional drivers for comfortable point-to-point travel',
      features: ['Mercedes-Benz & BMW fleet', 'Professional chauffeurs', 'Air-conditioned comfort', 'Hourly or daily rates'],
      image: LuxuryTAXI,
    },
    {
      icon: Users,
      title: 'Big Cars & Family Vehicles',
      description: 'Spacious Toyota Hiace, Hyundai Staria, and GMC for families and groups',
      features: ['7-12 passenger capacity', 'Luggage space', 'Child seats available', 'Group-friendly pricing'],
      image: 'https://images.pexels.com/photos/2526127/pexels-photo-2526127.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Users,
      title: 'Vans & Minibuses',
      description: 'Perfect for medium-sized groups traveling together with comfort and convenience',
      features: ['15-20 passenger vans', 'AC & entertainment', 'Experienced drivers', 'Flexible schedules'],
      image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Bus,
      title: 'Bus Rentals',
      description: 'Modern 30-50 seater buses for large groups and pilgrimage tours',
      features: ['Luxury coach buses', 'Reclining seats', 'On-board facilities', 'Group tour packages'],
      image: 'https://images.pexels.com/photos/631986/pexels-photo-631986.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Plane,
      title: 'Airport Transfer',
      description: 'Reliable pickup and drop-off services for all major Saudi airports',
      features: ['Flight tracking', 'Meet & greet service', 'Fixed rates', '24/7 availability'],
      image: 'https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: MapPin,
      title: 'Intercity Travel',
      description: 'Comfortable long-distance travel between Makkah, Madinah, Jeddah, and beyond',
      features: ['Direct routes', 'Rest stops included', 'Multiple vehicle options', 'Competitive pricing'],
      image: 'https://images.pexels.com/photos/3566187/pexels-photo-3566187.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Our <span className="text-amber-500">Premium Services</span>
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive transportation solutions for every travel need
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center">
                    <service.icon className="text-slate-900" size={24} />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>

                {detailed && (
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}

                <button
                  onClick={() => onNavigate('contact')}
                  className="group/btn flex items-center space-x-2 text-amber-600 font-semibold hover:text-amber-700 transition-colors"
                >
                  <span>Book Now</span>
                  <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => onNavigate('contact')}
            className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all inline-flex items-center space-x-2 group"
          >
            <span>Get Custom Quote</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
