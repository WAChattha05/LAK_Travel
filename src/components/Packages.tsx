import { CheckCircle, ArrowRight } from 'lucide-react';

interface PackagesProps {
  onNavigate?: (page: string) => void;
}

export default function Packages({ onNavigate }: PackagesProps) {
  const packages = [
    {
      title: 'Umrah Transport Package',
      price: 'From SAR 1,500',
      duration: '7-10 Days',
      description: 'Complete transportation solution for your Umrah journey',
      features: [
        'Airport pickup & drop-off',
        'Hotel to Haram transfers',
        'Makkah to Madinah intercity travel',
        'Ziyarat tours in both cities',
        'Professional driver throughout',
        '24/7 support',
      ],
      popular: true,
      image: 'https://images.pexels.com/photos/3290075/pexels-photo-3290075.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Family Travel Package',
      price: 'From SAR 2,000',
      duration: 'Flexible',
      description: 'Comfortable travel solution for families with children',
      features: [
        'Spacious family vehicle (GMC/Hiace)',
        'Child seats included',
        'Flexible itinerary',
        'Hotel coordination',
        'Multiple city coverage',
        'Luggage handling assistance',
      ],
      popular: false,
      image: 'https://images.pexels.com/photos/2764678/pexels-photo-2764678.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Group Bus Package',
      price: 'From SAR 5,000',
      duration: 'Per Event',
      description: 'Perfect for large groups and organized tours',
      features: [
        '30-50 seater luxury bus',
        'Experienced tour driver',
        'Multiple pickup points',
        'Customized route planning',
        'Group coordination support',
        'Competitive group rates',
      ],
      popular: false,
      image: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'VIP Luxury Package',
      price: 'From SAR 3,500',
      duration: 'Customizable',
      description: 'Premium experience with luxury vehicles and VIP service',
      features: [
        'Mercedes-Benz S-Class or BMW 7 Series',
        'Professional chauffeur',
        'VIP airport meet & greet',
        '5-star hotel bookings',
        'Personalized itinerary',
        'Concierge service',
      ],
      popular: false,
      image: 'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <section className="py-20 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Our Travel <span className="text-amber-500">Packages</span>
          </h1>
          <p className="text-xl text-gray-600">
            Specially designed packages for every traveler's needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group border-2 ${
                pkg.popular ? 'border-amber-500' : 'border-slate-100'
              }`}
            >
              {pkg.popular && (
                <div className="bg-amber-500 text-slate-900 text-center py-2 font-bold text-sm">
                  MOST POPULAR
                </div>
              )}

              <div className="relative h-56 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <div className="absolute bottom-4 left-6">
                  <h3 className="text-2xl font-bold text-white mb-1">{pkg.title}</h3>
                  <p className="text-amber-400 text-sm font-semibold">{pkg.duration}</p>
                </div>
              </div>

              <div className="p-8">
                <div className="mb-6">
                  <div className="text-3xl font-bold text-slate-900 mb-2">{pkg.price}</div>
                  <p className="text-gray-600">{pkg.description}</p>
                </div>

                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle className="text-amber-500 mr-3 flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => onNavigate?.('contact')}
                  className="group/btn w-full bg-slate-900 hover:bg-slate-800 text-white py-3 rounded-lg font-bold transition-all flex items-center justify-center space-x-2"
                >
                  <span>Book This Package</span>
                  <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-16 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Need a Custom Package?</h3>
          <p className="text-xl text-gray-300 mb-8">
            We can create a personalized travel package tailored to your specific requirements
          </p>
          <button
            onClick={() => onNavigate?.('contact')}
            className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-4 rounded-lg font-bold text-lg transition-all inline-flex items-center space-x-2"
          >
            <span>Request Custom Quote</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
