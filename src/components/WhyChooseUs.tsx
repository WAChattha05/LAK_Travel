import { Shield, Clock, DollarSign, ThumbsUp, Users, Star } from 'lucide-react';

interface WhyChooseUsProps {
  onNavigate?: (page: string) => void;
}

export default function WhyChooseUs({ onNavigate }: WhyChooseUsProps) {
  const reasons = [
    {
      icon: Shield,
      title: 'Licensed & Insured',
      description: 'All our vehicles and drivers are fully licensed, insured, and certified',
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Round-the-clock service for all your transportation needs, any day of the year',
    },
    {
      icon: DollarSign,
      title: 'Transparent Pricing',
      description: 'No hidden fees. Clear, upfront pricing with competitive rates',
    },
    {
      icon: ThumbsUp,
      title: 'Professional Drivers',
      description: 'Experienced, courteous drivers who know the routes and respect your journey',
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Dedicated support team ensuring your comfort and satisfaction at every step',
    },
    {
      icon: Star,
      title: 'Premium Fleet',
      description: 'Well-maintained, modern vehicles with regular inspections and cleaning',
    },
  ];

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3593922/pexels-photo-3593922.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="text-amber-400">Lak Travel</span>
          </h2>
          <p className="text-xl text-gray-300">
            Excellence in every journey, commitment in every service
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border border-amber-500/20 rounded-xl p-8 hover:bg-slate-800 hover:border-amber-500/40 transition-all group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <reason.icon className="text-slate-900" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3">{reason.title}</h3>
              <p className="text-gray-300 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Ready to Experience Premium Travel?
          </h3>
          <p className="text-lg text-slate-800 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us for their Saudi Arabia travel needs
          </p>
          <button
            onClick={() => onNavigate?.('services')}
            className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all inline-flex items-center space-x-2"
          >
            <span>Start Your Journey</span>
          </button>
        </div>
      </div>
    </section>
  );
}
