'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  TrendingUp, 
  Clock, 
  DollarSign,
  Users,
  ArrowRight,
  CheckCircle,
  Building,
  Globe,
  Award,
  BarChart3,
  Target,
  Zap
} from 'lucide-react';

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      company: "TechCorp Global",
      industry: "Technology",
      size: "10,000+ employees",
      logo: "🏢",
      title: "How TechCorp Reduced Research Time by 75% with Document-RAG",
      challenge: "Manual document search across 50,000+ technical documents was taking researchers 8+ hours daily",
      solution: "Implemented Document-RAG to create an intelligent knowledge base with natural language querying",
      results: [
        { metric: "Research Time Reduction", value: "75%", icon: Clock },
        { metric: "Cost Savings", value: "$2.4M/year", icon: DollarSign },
        { metric: "User Adoption", value: "98%", icon: Users },
        { metric: "Query Accuracy", value: "96%", icon: Target }
      ],
      quote: "Document-RAG transformed how our research team accesses information. What used to take hours now takes minutes.",
      author: "Dr. Sarah Johnson, Head of Research",
      featured: true
    },
    {
      company: "FinanceFirst Bank",
      industry: "Financial Services", 
      size: "5,000+ employees",
      logo: "🏦",
      title: "Streamlining Compliance Documentation for Regulatory Excellence",
      challenge: "Complex regulatory compliance required searching through thousands of policy documents",
      solution: "Deployed Document-RAG for instant access to compliance information and policy updates",
      results: [
        { metric: "Compliance Response Time", value: "80%", icon: Clock },
        { metric: "Audit Preparation", value: "60%", icon: BarChart3 },
        { metric: "Risk Reduction", value: "45%", icon: Award },
        { metric: "Team Productivity", value: "90%", icon: TrendingUp }
      ],
      quote: "Our compliance team can now instantly find relevant regulations and policies, dramatically improving our response times.",
      author: "Mark Thompson, Chief Compliance Officer"
    },
    {
      company: "MedResearch Institute",
      industry: "Healthcare",
      size: "2,500+ employees", 
      logo: "🏥",
      title: "Accelerating Medical Research with AI-Powered Document Analysis",
      challenge: "Researchers spent excessive time manually reviewing medical literature and research papers",
      solution: "Integrated Document-RAG to analyze and query vast medical research databases",
      results: [
        { metric: "Literature Review Speed", value: "85%", icon: Zap },
        { metric: "Research Accuracy", value: "92%", icon: Target },
        { metric: "Publication Rate", value: "40%", icon: TrendingUp },
        { metric: "Collaboration Efficiency", value: "65%", icon: Users }
      ],
      quote: "Document-RAG has revolutionized our research process, allowing us to focus on discovery rather than document hunting.",
      author: "Dr. Maria Rodriguez, Research Director"
    },
    {
      company: "LegalPro Associates",
      industry: "Legal Services",
      size: "800+ employees",
      logo: "⚖️",
      title: "Transforming Legal Research and Case Preparation",
      challenge: "Lawyers spent 60% of their time searching through case law and legal documents",
      solution: "Implemented Document-RAG for intelligent legal research and case precedent analysis",
      results: [
        { metric: "Research Efficiency", value: "70%", icon: Clock },
        { metric: "Case Preparation Time", value: "55%", icon: BarChart3 },
        { metric: "Client Satisfaction", value: "88%", icon: Award },
        { metric: "Billable Hours Optimization", value: "35%", icon: DollarSign }
      ],
      quote: "Our lawyers can now focus on strategy and client service instead of spending hours searching for precedents.",
      author: "Jennifer Walsh, Managing Partner"
    }
  ];

  const industries = [
    { name: "Technology", count: 12, icon: "💻" },
    { name: "Financial Services", count: 8, icon: "🏦" },
    { name: "Healthcare", count: 6, icon: "🏥" },
    { name: "Legal", count: 5, icon: "⚖️" },
    { name: "Manufacturing", count: 4, icon: "🏭" },
    { name: "Education", count: 3, icon: "🎓" }
  ];

  const metrics = [
    { label: "Average Time Savings", value: "73%", icon: Clock },
    { label: "Cost Reduction", value: "$1.8M", icon: DollarSign },
    { label: "User Satisfaction", value: "94%", icon: Users },
    { label: "ROI Achievement", value: "6 months", icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Customer Success Stories
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Real Results, Real Impact
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Discover how leading organizations across industries are transforming their 
            document workflows and achieving remarkable results with Document-RAG.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center space-x-3">
              <span>View All Case Studies</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <button className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors duration-200 px-8 py-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 hover:border-blue-200">
              <Building className="w-5 h-5" />
              <span className="font-medium">Request Custom Demo</span>
            </button>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Proven Results Across Industries
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Average improvements achieved by our customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <metric.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {metric.value}
                </div>
                <div className="text-gray-600 font-medium">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={index} className={`bg-white/90 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl border transition-all duration-300 hover:shadow-2xl ${
                study.featured ? 'border-blue-200 ring-2 ring-blue-100' : 'border-gray-200/50'
              }`}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Content */}
                  <div>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center text-3xl">
                        {study.logo}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{study.company}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span>{study.industry}</span>
                          <span>•</span>
                          <span>{study.size}</span>
                        </div>
                      </div>
                      {study.featured && (
                        <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <h4 className="text-xl font-bold text-gray-900 mb-4">{study.title}</h4>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Challenge</h5>
                        <p className="text-gray-600">{study.challenge}</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Solution</h5>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>
                    </div>
                    
                    <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700 mb-4">
                      &quot;{study.quote}&quot;
                      <footer className="text-sm text-gray-600 mt-2">— {study.author}</footer>
                    </blockquote>
                    
                    <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors font-semibold">
                      <span>Read Full Case Study</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Results */}
                  <div>
                    <h5 className="font-bold text-gray-900 mb-6 text-lg">Key Results</h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {study.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="p-6 bg-white rounded-2xl border border-gray-100 shadow-lg">
                          <div className="flex items-center space-x-3 mb-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                              <result.icon className="w-5 h-5 text-white" />
                            </div>
                            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                              {result.value}
                            </div>
                          </div>
                          <div className="text-gray-700 font-medium">{result.metric}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Trusted Across Industries
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Organizations in every sector are achieving success with Document-RAG
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="text-3xl mb-3">{industry.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-1">{industry.name}</h3>
                <p className="text-sm text-gray-600">{industry.count} case studies</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of organizations already transforming their document workflows 
            with Document-RAG&apos;s AI-powered intelligence platform.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-xl">
              Start Your Free Trial
            </button>
            <button className="text-blue-600 hover:text-blue-800 transition-colors px-6 py-4 font-semibold">
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
