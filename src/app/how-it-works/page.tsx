'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Upload, 
  Brain, 
  Search, 
  Download,
  FileText,
  Zap,
  Shield,
  CheckCircle,
  ArrowRight,
  Play
} from 'lucide-react';

export default function HowItWorksPage() {
  const steps = [
    {
      number: "01",
      title: "Upload Your Documents",
      description: "Simply drag and drop your files or upload them through our secure interface. We support 50+ file formats including PDF, DOCX, TXT, CSV, and more.",
      icon: Upload,
      features: ["Batch upload support", "Secure file encryption", "Format auto-detection", "Progress tracking"]
    },
    {
      number: "02", 
      title: "AI Processing & Analysis",
      description: "Our advanced AI engine processes your documents using state-of-the-art NLP and machine learning algorithms to understand context and extract insights.",
      icon: Brain,
      features: ["Natural language processing", "Context understanding", "Entity extraction", "Semantic analysis"]
    },
    {
      number: "03",
      title: "Intelligent Search & Query",
      description: "Ask questions in natural language and get precise answers with source citations. Our RAG technology ensures accurate, contextual responses.",
      icon: Search,
      features: ["Natural language queries", "Source attribution", "Confidence scoring", "Real-time responses"]
    },
    {
      number: "04",
      title: "Export & Integration",
      description: "Export insights, integrate with your existing tools, or use our API to build custom solutions that fit your workflow.",
      icon: Download,
      features: ["Multiple export formats", "API integration", "Webhook support", "Custom workflows"]
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "10x Faster Information Retrieval",
      description: "Find information in seconds instead of hours of manual searching through documents."
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "Your documents are protected with AES-256 encryption and SOC 2 compliance."
    },
    {
      icon: CheckCircle,
      title: "98.7% Accuracy Rate",
      description: "Industry-leading accuracy in document understanding and question answering."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            How Document-RAG
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Transforms Your Documents
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Discover how our AI-powered platform turns your static documents into an intelligent, 
            searchable knowledge base in just four simple steps.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center space-x-3">
              <span>Try It Free</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <button className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors duration-200 px-8 py-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 hover:border-blue-200">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <Play className="w-5 h-5 text-white ml-1" />
              </div>
              <span className="font-medium">Watch Demo</span>
            </button>
          </div>
        </div>
      </section>

      {/* How It Works Steps */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Simple Process, Powerful Results
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transform your documents into intelligent knowledge in four easy steps
            </p>
          </div>

          <div className="space-y-20">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Content */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                      {step.number}
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">{step.title}</h3>
                  </div>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {step.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual */}
                <div className="flex-1 flex justify-center">
                  <div className="w-80 h-80 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl flex items-center justify-center border border-blue-200/50 shadow-xl">
                    <step.icon className="w-32 h-32 text-blue-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Document-RAG?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the benefits that make us the leading document intelligence platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Documents?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of organizations already using Document-RAG to unlock their document intelligence.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-2xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
            Start Your Free Trial
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
