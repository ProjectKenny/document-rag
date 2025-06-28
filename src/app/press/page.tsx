'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Calendar, 
  Download, 
  ExternalLink,
  Award,
  TrendingUp,
  Users,
  Globe,
  Mail,
  Phone,
  FileText,
  Image as ImageIcon,
  Video
} from 'lucide-react';

export default function PressPage() {
  const pressReleases = [
    {
      title: "Document-RAG Raises $50M Series B to Accelerate AI-Powered Document Intelligence",
      date: "December 15, 2024",
      excerpt: "Funding will be used to expand AI capabilities and accelerate global market expansion.",
      category: "Funding",
      featured: true
    },
    {
      title: "Document-RAG Achieves SOC 2 Type II Compliance",
      date: "November 28, 2024", 
      excerpt: "Latest security certification reinforces commitment to enterprise-grade data protection.",
      category: "Security"
    },
    {
      title: "Document-RAG Launches Enterprise API with 99.9% Uptime SLA",
      date: "November 15, 2024",
      excerpt: "New enterprise features include advanced analytics, custom integrations, and dedicated support.",
      category: "Product"
    },
    {
      title: "Document-RAG Named 'AI Innovation of the Year' by TechCrunch",
      date: "October 30, 2024",
      excerpt: "Recognition highlights breakthrough achievements in retrieval-augmented generation technology.",
      category: "Awards"
    },
    {
      title: "Document-RAG Surpasses 10,000 Enterprise Customers Milestone",
      date: "October 12, 2024",
      excerpt: "Rapid growth demonstrates strong market demand for intelligent document processing solutions.",
      category: "Milestones"
    }
  ];

  const mediaKit = [
    {
      title: "Company Logos",
      description: "High-resolution logos in various formats",
      icon: ImageIcon,
      files: ["PNG", "SVG", "EPS"]
    },
    {
      title: "Product Screenshots",
      description: "Latest product interface screenshots",
      icon: ImageIcon,
      files: ["High-res", "Web-ready"]
    },
    {
      title: "Executive Photos",
      description: "Professional headshots of leadership team",
      icon: Users,
      files: ["CEO", "CTO", "VP Engineering"]
    },
    {
      title: "Company Fact Sheet",
      description: "Key statistics and company information",
      icon: FileText,
      files: ["PDF", "Word"]
    },
    {
      title: "Demo Videos",
      description: "Product demonstration videos",
      icon: Video,
      files: ["MP4", "YouTube"]
    }
  ];

  const coverage = [
    {
      outlet: "TechCrunch",
      title: "How Document-RAG is Revolutionizing Enterprise Document Management",
      date: "December 10, 2024",
      type: "Feature Article"
    },
    {
      outlet: "Forbes",
      title: "The Future of AI: Document-RAG's Breakthrough Technology",
      date: "November 25, 2024",
      type: "Interview"
    },
    {
      outlet: "VentureBeat",
      title: "Document-RAG's $50M Series B Signals Strong AI Market Demand",
      date: "November 20, 2024",
      type: "News"
    },
    {
      outlet: "Wired",
      title: "Inside the AI Revolution: Document Intelligence Goes Mainstream",
      date: "November 5, 2024",
      type: "Feature"
    },
    {
      outlet: "The Information",
      title: "Document-RAG Challenges Google with Enterprise AI Push",
      date: "October 28, 2024",
      type: "Analysis"
    }
  ];

  const awards = [
    {
      title: "AI Innovation of the Year",
      organization: "TechCrunch Disrupt",
      year: "2024",
      description: "Recognized for breakthrough achievements in RAG technology"
    },
    {
      title: "Best Enterprise AI Solution",
      organization: "AI Excellence Awards",
      year: "2024",
      description: "Leading solution for enterprise document intelligence"
    },
    {
      title: "Fastest Growing AI Startup",
      organization: "CB Insights",
      year: "2024",
      description: "Rapid growth in the AI/ML market segment"
    },
    {
      title: "Top 50 AI Companies to Watch",
      organization: "Forbes",
      year: "2024",
      description: "Selected as one of the most promising AI companies"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Press & Media
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Latest News & Updates
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Stay updated with the latest news, announcements, and media coverage 
              about Document-RAG&apos;s journey in revolutionizing document intelligence.
            </p>
          </div>

          {/* Press Contact */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 mb-16">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Press Inquiries</h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                <div className="flex items-center space-x-3">
                  <Mail className="w-6 h-6 text-blue-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <div className="text-gray-600">press@document-rag.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-6 h-6 text-blue-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Phone</div>
                    <div className="text-gray-600">+1 (555) 123-4567</div>
                  </div>
                </div>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg">
                  Download Media Kit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Press Releases */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Press Releases</h2>
              <div className="space-y-6">
                {pressReleases.map((release, index) => (
                  <article key={index} className={`p-8 bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border transition-all duration-300 hover:shadow-2xl ${
                    release.featured ? 'border-blue-200 ring-2 ring-blue-100' : 'border-gray-200/50'
                  }`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          release.category === 'Funding' ? 'bg-green-100 text-green-800' :
                          release.category === 'Product' ? 'bg-blue-100 text-blue-800' :
                          release.category === 'Awards' ? 'bg-purple-100 text-purple-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {release.category}
                        </span>
                        {release.featured && (
                          <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold rounded-full">
                            Featured
                          </span>
                        )}
                      </div>
                      <div className="flex items-center space-x-1 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span>{release.date}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors cursor-pointer">
                      {release.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{release.excerpt}</p>
                    
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors font-semibold">
                        <span>Read Full Release</span>
                        <ExternalLink className="w-4 h-4" />
                      </button>
                      <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors">
                        <Download className="w-4 h-4" />
                        <span>Download PDF</span>
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* Media Coverage */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Recent Media Coverage</h2>
              <div className="space-y-4">
                {coverage.map((article, index) => (
                  <div key={index} className="p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="font-bold text-blue-600">{article.outlet}</span>
                          <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                            {article.type}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors cursor-pointer">
                          {article.title}
                        </h3>
                        <div className="flex items-center space-x-1 text-sm text-gray-500">
                          <Calendar className="w-4 h-4" />
                          <span>{article.date}</span>
                        </div>
                      </div>
                      <button className="text-blue-600 hover:text-blue-800 transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Awards & Recognition */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <Award className="w-5 h-5 mr-2 text-blue-600" />
                Awards & Recognition
              </h3>
              <div className="space-y-4">
                {awards.map((award, index) => (
                  <div key={index} className="border-b border-gray-100 last:border-b-0 pb-4 last:pb-0">
                    <h4 className="font-semibold text-gray-900">{award.title}</h4>
                    <p className="text-sm text-blue-600">{award.organization} • {award.year}</p>
                    <p className="text-sm text-gray-600 mt-1">{award.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Media Kit */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <Download className="w-5 h-5 mr-2 text-blue-600" />
                Media Kit
              </h3>
              <div className="space-y-4">
                {mediaKit.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.description}</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {item.files.map((file, fileIndex) => (
                          <span key={fileIndex} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                            {file}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                Download Complete Kit
              </button>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-6 text-white">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2" />
                Company Stats
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Founded</span>
                  <span className="font-semibold">2022</span>
                </div>
                <div className="flex justify-between">
                  <span>Employees</span>
                  <span className="font-semibold">150+</span>
                </div>
                <div className="flex justify-between">
                  <span>Customers</span>
                  <span className="font-semibold">10,000+</span>
                </div>
                <div className="flex justify-between">
                  <span>Documents Processed</span>
                  <span className="font-semibold">50M+</span>
                </div>
                <div className="flex justify-between">
                  <span>Funding Raised</span>
                  <span className="font-semibold">$75M</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
