import { Flame, Wrench, Shield } from 'lucide-react';

export default function Services() {
  const services = [
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
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative py-20 bg-slate-900">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80"
            alt="Welding Services"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-xl text-slate-200 max-w-2xl">
            Comprehensive welding and fabrication solutions for industrial and commercial needs
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Services */}
      <div className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Additional Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Industrial Services</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Shield className="text-yellow-400" size={20} />
                  <span>Tank Fabrication</span>
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="text-yellow-400" size={20} />
                  <span>Pressure Vessel Manufacturing</span>
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="text-yellow-400" size={20} />
                  <span>Structural Steel Fabrication</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Specialized Services</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Shield className="text-yellow-400" size={20} />
                  <span>Custom Engineering Solutions</span>
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="text-yellow-400" size={20} />
                  <span>Maintenance & Repairs</span>
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="text-yellow-400" size={20} />
                  <span>Quality Inspection & Testing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}