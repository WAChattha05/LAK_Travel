import { useState } from 'react';

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('fleet');

  const galleries = {
    fleet: [
      { url: 'https://images.pexels.com/photos/3849168/pexels-photo-3849168.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Luxury Sedan' },
      { url: 'https://images.pexels.com/photos/3849167/pexels-photo-3849167.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Premium SUV' },
      { url: 'https://images.pexels.com/photos/2526127/pexels-photo-2526127.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Toyota Hiace' },
      { url: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Passenger Van' },
      { url: 'https://images.pexels.com/photos/631986/pexels-photo-631986.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Luxury Coach Bus' },
      { url: 'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Mercedes-Benz S-Class' },
      { url: 'https://images.pexels.com/photos/2920064/pexels-photo-2920064.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'GMC Yukon' },
      { url: 'https://images.pexels.com/photos/3849357/pexels-photo-3849357.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'BMW 7 Series' },
    ],
    hotels: [
      { url: 'https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&w=800', title: '5-Star Luxury Suite' },
      { url: 'https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Premium Hotel Room' },
      { url: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Mid-Range Comfort' },
      { url: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Budget Accommodation' },
      { url: 'https://images.pexels.com/photos/2291599/pexels-photo-2291599.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Hotel Lobby' },
      { url: 'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Deluxe Room' },
    ],
    cities: [
      { url: 'https://images.pexels.com/photos/3290075/pexels-photo-3290075.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Masjid al-Haram, Makkah' },
      { url: 'https://images.pexels.com/photos/1680247/pexels-photo-1680247.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Masjid an-Nabawi, Madinah' },
      { url: 'https://images.pexels.com/photos/3593922/pexels-photo-3593922.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Jeddah Corniche' },
      { url: 'https://images.pexels.com/photos/2416653/pexels-photo-2416653.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Saudi Skyline' },
      { url: 'https://images.pexels.com/photos/3566187/pexels-photo-3566187.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Desert Highway' },
      { url: 'https://images.pexels.com/photos/4254165/pexels-photo-4254165.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Modern Architecture' },
    ],
  };

  const tabs = [
    { id: 'fleet', label: 'Our Fleet' },
    { id: 'hotels', label: 'Hotel Partners' },
    { id: 'cities', label: 'Cities We Serve' },
  ];

  return (
    <section className="py-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Our <span className="text-amber-500">Gallery</span>
          </h1>
          <p className="text-xl text-gray-600">
            Explore our premium fleet, hotel partners, and the cities we serve
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-xl p-2 shadow-lg">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'bg-amber-500 text-slate-900'
                    : 'text-gray-600 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleries[activeTab as keyof typeof galleries].map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all cursor-pointer"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-lg">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto mt-16 text-center bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Want to See More?</h3>
          <p className="text-gray-600 mb-6">
            Visit our office or schedule a vehicle inspection to see our premium fleet in person
          </p>
          <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-lg font-bold transition-all">
            Schedule a Visit
          </button>
        </div>
      </div>
    </section>
  );
}
