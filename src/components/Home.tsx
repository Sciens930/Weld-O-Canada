import { Flame, Wrench, Shield, Award, ChevronRight, Phone, Mail, MapPin } from 'lucide-react';

export function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[600px] bg-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80"
            alt="Welding"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-white mb-6">
              Excellence in Industrial Welding & Fabrication
            </h1>
            <p className="text-xl text-slate-200 mb-8">
              CWB & TSSA certified fabrication shop with 25+ years of experience in industrial and commercial welding
            </p>
            <div className="flex gap-4">
              <button className="bg-yellow-400 text-slate-900 px-8 py-3 rounded-md hover:bg-yellow-500 transition font-semibold">
                Our Services
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-slate-900 transition font-semibold">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            <img src="https://weldocanada.com/wp-content/uploads/2021/03/ISN_-logo-150x150.png" alt="ISN" className="h-20 object-contain mx-auto" />
            <img src="https://weldocanada.com/wp-content/uploads/2021/02/tssa-150x150.jpg" alt="TSSA" className="h-20 object-contain mx-auto" />
            <img src="https://weldocanada.com/wp-content/uploads/2021/07/weldo1-150x150.png" alt="Weld O Canada" className="h-20 object-contain mx-auto" />
            <img src="https://weldocanada.com/wp-content/uploads/2021/03/Mto-logo-150x150.png" alt="MTO" className="h-20 object-contain mx-auto" />
            <img src="https://weldocanada.com/wp-content/uploads/2024/02/ASR-Logo-Medium-150x150.jpg" alt="ASR" className="h-20 object-contain mx-auto" />
            <img src="https://weldocanada.com/wp-content/uploads/2024/02/ANAB-Symbol-RGB-17021-1-MS-CB-White-Bkgr-150x150.png" alt="ANAB" className="h-20 object-contain mx-auto" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Comprehensive Services</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              From power and process pipe welding to custom fabrication, we provide a full range of industrial welding services
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Flame className="text-yellow-400" size={32} />,
                title: "Power & Process Pipe Welding",
                description: "TSSA certified for B31.1 & B31.3 power and process pipe welding and installation."
              },
              {
                icon: <Wrench className="text-yellow-400" size={32} />,
                title: "Custom Fabrication",
                description: "Specialized in stainless steel applications and custom-designed industrial equipment."
              },
              {
                icon: <Shield className="text-yellow-400" size={32} />,
                title: "Structural Work",
                description: "CWB certified for structural steel fabrication in carbon steel, stainless steel, and aluminum."
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-slate-600 mb-4">{service.description}</p>
                <a href="/services" className="text-yellow-600 font-semibold flex items-center gap-2 hover:text-yellow-700">
                  Learn More <ChevronRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Choose Weld O Canada?</h2>
              <div className="space-y-6">
                {[
                  {
                    icon: <Award className="text-yellow-400" size={24} />,
                    title: "Quality Assurance",
                    description: "ISO 9001 certified with stringent quality control processes"
                  },
                  {
                    icon: <Shield className="text-yellow-400" size={24} />,
                    title: "Safety First",
                    description: "Comprehensive HSE Manual and safety program with zero time lost"
                  },
                  {
                    icon: <Wrench className="text-yellow-400" size={24} />,
                    title: "Expert Team",
                    description: "Skilled engineers and certified welders with decades of experience"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">{item.icon}</div>
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-slate-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80"
                alt="Industrial Welding"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <MapPin size={20} className="text-yellow-400" />
                  <p>6811 Edwards Blvd, Mississauga, ON L5T 2S2</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={20} className="text-yellow-400" />
                  <p>+1 416-630-7177</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-yellow-400" />
                  <p>info@weldocanada.com</p>
                </div>
              </div>
              <div className="aspect-w-16 aspect-h-9">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2885.280996122882!2d-79.67355888450126!3d43.6839212791203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3943a62d1b45%3A0xf8ecb60d3408a8ca!2sWELD%20O%20CANADA%20INC!5e0!3m2!1sen!2sin!4v1614248188628!5m2!1sen!2sin"
                  className="w-full h-full rounded-lg"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Request a Quote</h2>
              <form className="space-y-4">
                <div>
                  <label className="block mb-1">Full Name</label>
                  <input type="text" className="w-full px-4 py-2 rounded-md bg-slate-800 border border-slate-700 focus:outline-none focus:border-yellow-400" />
                </div>
                <div>
                  <label className="block mb-1">Email</label>
                  <input type="email" className="w-full px-4 py-2 rounded-md bg-slate-800 border border-slate-700 focus:outline-none focus:border-yellow-400" />
                </div>
                <div>
                  <label className="block mb-1">Phone</label>
                  <input type="tel" className="w-full px-4 py-2 rounded-md bg-slate-800 border border-slate-700 focus:outline-none focus:border-yellow-400" />
                </div>
                <div>
                  <label className="block mb-1">Message</label>
                  <textarea rows={4} className="w-full px-4 py-2 rounded-md bg-slate-800 border border-slate-700 focus:outline-none focus:border-yellow-400"></textarea>
                </div>
                <button type="submit" className="w-full bg-yellow-400 text-slate-900 py-3 rounded-md hover:bg-yellow-500 transition font-semibold">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;