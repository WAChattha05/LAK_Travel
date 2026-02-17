import { Phone, Mail, MapPin, MessageCircle, Clock, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'transport',
    message: '',
  });

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   alert('Thank you for contacting us! We will get back to you shortly.');
  //   setFormData({ name: '', email: '', phone: '', service: 'transport', message: '' });
  // };
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

 try {
  const res = await fetch("https://laktransport.com/save_contact.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });


    const result = await res.json();

    if (result.status === "success") {
      alert("Thank you for contacting us! We will get back to you shortly.");
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'transport',
        message: '',
      });
    } else {
      alert("Something went wrong. Please try again.");
    }
  } catch (error) {
    alert("Server error. Please try later.");
  }
};


  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+966 53 072 7351', '+923 44 841 6835'],
      link: 'tel:+966 53 072 7351',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      details: ['+966 53 072 7351', 'Available 24/7'],
      link: 'https://wa.me/966530727351',
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@laktransport.com', 'bookings@laktransport.com'],
      link: 'mailto:info@laktransport.com',
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['24/7 Service', 'All Days of the Week'],
      link: null,
    },
  ];

  const serviceAreas = [
    { city: 'Makkah', description: 'Complete coverage including Haram area' },
    { city: 'Madinah', description: 'All districts and Nabawi Mosque area' },
    { city: 'Jeddah', description: 'City-wide service and airport transfers' },
    { city: 'Taif', description: 'Seasonal services and intercity travel' },
    { city: 'Riyadh', description: 'Airport transfers and intercity routes' },
    { city: 'Dammam', description: 'Eastern Province coverage' },
  ];

  return (
    <section className="py-20 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Contact <span className="text-amber-500">Us</span>
          </h1>
          <p className="text-xl text-gray-600">
            Get in touch with our team for bookings, inquiries, or support
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.link || '#'}
              className="bg-gradient-to-br from-slate-50 to-white border-2 border-slate-100 rounded-xl p-8 hover:border-amber-500 hover:shadow-xl transition-all group text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <info.icon className="text-slate-900" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{info.title}</h3>
              {info.details.map((detail, idx) => (
                <p key={idx} className="text-gray-600">
                  {detail}
                </p>
              ))}
            </a>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-slate-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors"
                  placeholder="+966 XXX XXX XXX"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Service Interested In *
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors"
                >
                  <option value="transport">Transportation</option>
                  <option value="hotel">Hotel Booking</option>
                  <option value="package">Travel Package</option>
                  <option value="airport">Airport Transfer</option>
                  <option value="intercity">Intercity Travel</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Your Message *
                </label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <Send size={20} />
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Service Areas</h2>
            <div className="space-y-4">
              {serviceAreas.map((area, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-slate-100 rounded-xl p-6 hover:border-amber-500 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="text-slate-900" size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-1">{area.city}</h3>
                      <p className="text-gray-600">{area.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-3">Need Immediate Assistance?</h3>
              <p className="text-gray-300 mb-6">
                Our team is available 24/7 to help with urgent bookings and inquiries
              </p>
              <a
                href="https://wa.me/966530727351"
                className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-bold transition-all"
              >
                <MessageCircle size={20} />
                <span>WhatsApp Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
