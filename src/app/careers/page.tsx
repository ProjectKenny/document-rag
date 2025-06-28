'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  MapPin, 
  Clock, 
  DollarSign,
  Users,
  Heart,
  Coffee,
  Laptop,
  Globe,
  ArrowRight,
  Star,
  Award,
  Zap,
  Shield
} from 'lucide-react';

export default function CareersPage() {
  const openPositions = [
    {
      title: "Senior AI Engineer",
      department: "Engineering",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      salary: "$150k - $200k",
      description: "Lead the development of our next-generation RAG algorithms and AI models.",
      requirements: ["5+ years in ML/AI", "Python, TensorFlow", "PhD preferred"],
      featured: true
    },
    {
      title: "Product Manager - AI",
      department: "Product",
      location: "New York, NY / Remote",
      type: "Full-time", 
      salary: "$130k - $170k",
      description: "Drive product strategy for our AI-powered document intelligence platform.",
      requirements: ["3+ years PM experience", "AI/ML background", "B2B SaaS experience"]
    },
    {
      title: "Frontend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      salary: "$120k - $160k",
      description: "Build beautiful, responsive user interfaces for our document processing platform.",
      requirements: ["React/Next.js expert", "TypeScript", "3+ years experience"]
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Austin, TX / Remote",
      type: "Full-time",
      salary: "$140k - $180k",
      description: "Scale our infrastructure to handle millions of documents and queries.",
      requirements: ["Kubernetes", "AWS/GCP", "CI/CD pipelines", "5+ years experience"]
    },
    {
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Chicago, IL / Remote",
      type: "Full-time",
      salary: "$90k - $120k",
      description: "Help enterprise customers maximize value from our document intelligence platform.",
      requirements: ["B2B SaaS experience", "Technical background", "Excellent communication"]
    },
    {
      title: "Data Scientist",
      department: "Data Science",
      location: "Seattle, WA / Remote",
      type: "Full-time",
      salary: "$130k - $170k",
      description: "Analyze user behavior and document processing patterns to improve our AI models.",
      requirements: ["PhD in relevant field", "Python/R", "ML experience", "Statistics background"]
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision insurance plus wellness stipend"
    },
    {
      icon: Coffee,
      title: "Flexible Work",
      description: "Remote-first culture with flexible hours and unlimited PTO"
    },
    {
      icon: Laptop,
      title: "Equipment & Setup",
      description: "Top-tier equipment and $2000 home office setup budget"
    },
    {
      icon: Globe,
      title: "Learning & Growth",
      description: "$3000 annual learning budget and conference attendance"
    },
    {
      icon: Users,
      title: "Equity & Ownership",
      description: "Competitive equity package and employee stock purchase plan"
    },
    {
      icon: Star,
      title: "Team Events",
      description: "Annual team retreats, quarterly offsites, and regular team building"
    }
  ];

  const values = [
    {
      icon: Zap,
      title: "Innovation First",
      description: "We push the boundaries of what's possible with AI and document intelligence"
    },
    {
      icon: Users,
      title: "Customer Obsessed",
      description: "Every decision we make starts with understanding our customers' needs"
    },
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "We build trust through open communication and reliable technology"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from code to customer service"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Join Our Mission
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Shape the Future of AI
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Help us build the next generation of document intelligence technology. 
            Join a team of passionate innovators working on cutting-edge AI solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center space-x-3">
              <span>View Open Positions</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <button className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors duration-200 px-8 py-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 hover:border-blue-200">
              <Users className="w-5 h-5" />
              <span className="font-medium">Meet the Team</span>
            </button>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why You&apos;ll Love Working Here
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We believe in taking care of our team so they can do their best work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="p-8 bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find your next opportunity to make an impact
            </p>
          </div>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <div key={index} className={`p-8 bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border transition-all duration-300 hover:shadow-2xl ${
                position.featured ? 'border-blue-200 ring-2 ring-blue-100' : 'border-gray-200/50'
              }`}>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <h3 className="text-2xl font-bold text-gray-900">{position.title}</h3>
                      {position.featured && (
                        <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{position.department}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{position.type}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <DollarSign className="w-4 h-4" />
                        <span>{position.salary}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4">{position.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {position.requirements.map((req, reqIndex) => (
                        <span key={reqIndex} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-6 lg:mt-0 lg:ml-8">
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg flex items-center space-x-2">
                      <span>Apply Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Don&apos;t See the Right Role?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We&apos;re always looking for exceptional talent. Send us your resume and 
            let us know how you&apos;d like to contribute to our mission.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-xl">
              Send General Application
            </button>
            <button className="text-blue-600 hover:text-blue-800 transition-colors px-6 py-4 font-semibold">
              Contact HR Team
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
