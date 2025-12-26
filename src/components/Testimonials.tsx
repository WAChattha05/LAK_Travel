import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Ahmed Al-Rashid',
      location: 'Dubai, UAE',
      rating: 5,
      text: 'Outstanding service from start to finish! The driver was punctual, professional, and the vehicle was spotless. Made our Umrah journey so much more comfortable.',
      image: 'https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      name: 'Fatima Hassan',
      location: 'London, UK',
      rating: 5,
      text: 'Excellent transportation service! They arranged everything perfectly for our family group of 12. The GMC was spacious and comfortable. Highly recommended!',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      name: 'Muhammad Ibrahim',
      location: 'Jakarta, Indonesia',
      rating: 5,
      text: 'Best travel company in Saudi! Competitive prices, reliable service, and friendly staff. Used them for airport transfer and intercity travel. Will definitely use again.',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      name: 'Aisha Rahman',
      location: 'Kuala Lumpur, Malaysia',
      rating: 5,
      text: 'The hotel booking service was seamless! They found us a perfect hotel near Haram at a great price. The bus service for our group was also excellent.',
      image: 'https://images.pexels.com/photos/3394310/pexels-photo-3394310.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      name: 'Omar Khalid',
      location: 'Cairo, Egypt',
      rating: 5,
      text: 'Professional and trustworthy! The luxury taxi service exceeded our expectations. Driver was knowledgeable about the area and very respectful.',
      image: 'https://images.pexels.com/photos/3777952/pexels-photo-3777952.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      name: 'Zahra Ali',
      location: 'Karachi, Pakistan',
      rating: 5,
      text: 'Affordable and reliable! We booked a van for our family and the service was impeccable. The 24/7 support was very helpful when we had questions.',
      image: 'https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            What Our <span className="text-amber-500">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600">
            Real experiences from satisfied travelers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-white border-2 border-slate-100 rounded-2xl p-8 hover:border-amber-500 hover:shadow-xl transition-all"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div className="flex-1">
                  <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
                <Quote className="text-amber-500 opacity-20" size={32} />
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-amber-400 fill-amber-400" size={20} />
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed italic">{testimonial.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-block bg-slate-100 rounded-lg px-8 py-4">
            <p className="text-lg text-slate-900">
              <span className="font-bold text-amber-500">4.9/5</span> average rating from{' '}
              <span className="font-bold">50,000+</span> verified reviews
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
