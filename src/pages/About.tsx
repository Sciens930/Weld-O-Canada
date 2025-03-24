import { Award, Shield, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative py-20 bg-slate-900">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80"
            alt="About Weld O Canada"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-4">About Us</h1>
          <p className="text-xl text-slate-200 max-w-2xl">
            25+ years of excellence in industrial welding and fabrication
          </p>
        </div>
      </div>

      {/* Company Overview */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
              <p className="text-slate-600 mb-4">
                Proudly Canadian, Weld O Canada Inc., a CWB-certified fabrication shop, operates out of a 22,000 sq. ft craned building fully equipped with fabrication equipment. We are certified for (CSA W47.1) in Carbon Steel, Stainless Steel (CSA W47.1), and Aluminum (CSA W47.2).
              </p>
              <p className="text-slate-600 mb-4">
                Since our establishment in 1998, we have been committed to delivering exceptional quality and innovative solutions to our clients across various industries.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80"
                alt="Welding Work"
                className="rounded-lg shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80"
                alt="Fabrication"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Award className="mx-auto text-yellow-400 mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
              <p className="text-slate-600">
                ISO 9001 certified with stringent quality control processes
              </p>
            </div>
            <div className="text-center">
              <Shield className="mx-auto text-yellow-400 mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-2">Safety First</h3>
              <p className="text-slate-600">
                Comprehensive HSE Manual and safety program with zero time lost
              </p>
            </div>
            <div className="text-center">
              <Users className="mx-auto text-yellow-400 mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-slate-600">
                Skilled engineers and certified welders with decades of experience
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Certifications</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            <img src="https://weldocanada.com/wp-content/uploads/2021/03/ISN_-logo-150x150.png" alt="ISN" className="h-20 object-contain mx-auto" />
            <img src="https://weldocanada.com/wp-content/uploads/2021/02/tssa-150x150.jpg" alt="TSSA" className="h-20 object-contain mx-auto" />
            <img src="https://weldocanada.com/wp-content/uploads/2021/07/weldo1-150x150.png" alt="Weld O Canada" className="h-20 object-contain mx-auto" />
            <img src="https://weldocanada.com/wp-content/uploads/2021/03/Mto-logo-150x150.png" alt="MTO" className="h-20 object-contain mx-auto" />
            <img src="https://weldocanada.com/wp-content/uploads/2024/02/ASR-Logo-Medium-150x150.jpg" alt="ASR" className="h-20 object-contain mx-auto" />
            <img src="https://weldocanada.com/wp-content/uploads/2024/02/ANAB-Symbol-RGB-17021-1-MS-CB-White-Bkgr-150x150.png" alt="ANAB" className="h-20 object-contain mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}