import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { 
  Upload, 
  Brain, 
  Search, 
  Shield, 
  Zap, 
  Globe, 
  BarChart3, 
  MessageSquare,
  FileText,
  Lock,
  Cpu,
  Layers,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Features | Document-RAG',
  description: 'Explore the powerful features of Document-RAG including AI-powered document processing, intelligent search, and enterprise security.',
};

export default function FeaturesPage() {
  const heroFeatures = [
    {
      icon: Upload,
      title: "Smart Document Upload",
      description: "Drag and drop support for 50+ file formats including PDF, DOCX, TXT, CSV, and more. Automatic format detection and optimization.",
      features: ["Batch upload support", "Real-time processing", "Format validation", "Duplicate detection"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Brain,
      title: "Advanced RAG Engine",
      description: "State-of-the-art Retrieval-Augmented Generation technology that understands context and provides accurate responses.",
      features: ["Contextual understanding", "Multi-document reasoning", "Source attribution", "Confidence scoring"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Search,
      title: "Intelligent Search",
      description: "Natural language queries with semantic search capabilities. Find information even when you don't know the exact keywords.",
      features: ["Semantic search", "Auto-suggestions", "Query refinement", "Search history"],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption, SOC 2 compliance, and granular access controls.",
      features: ["End-to-end encryption", "SOC 2 compliance", "Role-based access", "Audit logging"],
      gradient: "from-red-500 to-orange-500"
    }
  ];

  const additionalFeatures = [
    {
      category: "Processing & Analysis",
      items: [
        { icon: Zap, title: "Real-time Processing", description: "Documents are processed and indexed instantly upon upload" },
        { icon: Layers, title: "Batch Operations", description: "Process thousands of documents simultaneously" },
        { icon: BarChart3, title: "Content Analytics", description: "Gain insights into document content and usage patterns" },
        { icon: FileText, title: "Version Control", description: "Track document changes and maintain version history" }
      ]
    },
    {
      category: "Search & Retrieval",
      items: [
        { icon: MessageSquare, title: "Conversational Interface", description: "Chat naturally with your document collection" },
        { icon: Globe, title: "Multi-language Support", description: "Process and search documents in 50+ languages" },
        { icon: Search, title: "Advanced Filters", description: "Filter by date, document type, author, and more" },
        { icon: CheckCircle, title: "Result Validation", description: "Confidence scores and source verification" }
      ]
    },
    {
      category: "Integration & API",
      items: [
        { icon: Cpu, title: "REST API", description: "Full-featured API for seamless integration" },
        { icon: Lock, title: "Webhook Support", description: "Real-time notifications for document events" },
        { icon: Layers, title: "SDK Libraries", description: "Official SDKs for popular programming languages" },
        { icon: Globe, title: "Cloud Integration", description: "Connect with Google Drive, Dropbox, SharePoint" }
      ]
    }
  ];

  const useCases = [
    {
      title: "Legal Document Review",
      description: "Quickly find relevant clauses, precedents, and case information across thousands of legal documents.",
      icon: FileText,
      benefits: ["50% faster document review", "Improved accuracy", "Compliance tracking"]
    },
    {
      title: "Research & Academia",
      description: "Analyze research papers, extract key findings, and discover connections across academic literature.",
      icon: Brain,
      benefits: ["Accelerated research", "Citation discovery", "Knowledge synthesis"]
    },
    {
      title: "Customer Support",
      description: "Instantly access product manuals, FAQs, and troubleshooting guides to resolve customer issues.",
      icon: MessageSquare,
      benefits: ["Faster resolution times", "Consistent answers", "Knowledge sharing"]
    },
    {
      title: "Compliance & Audit",
      description: "Ensure regulatory compliance by quickly locating relevant policies and audit trail information.",
      icon: Shield,
      benefits: ["Risk reduction", "Audit readiness", "Policy enforcement"]
    }
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Powerful Features for
              <span className="block gradient-text">Document Intelligence</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how Document-RAG transforms your document workflow with 
              cutting-edge AI technology and enterprise-grade features.
            </p>
          </motion.div>

          {/* Main Features Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {heroFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-3xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 border border-gray-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {feature.description}
                </p>
                
                <ul className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Complete Feature Set
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need for comprehensive document intelligence and management.
            </p>
          </motion.div>

          <div className="space-y-16">
            {additionalFeatures.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                  {category.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.items.map((item, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 text-center"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Real-World Use Cases
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how organizations across industries are leveraging Document-RAG 
              to transform their document workflows.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 hover:border-primary-200 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-6">
                  <useCase.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {useCase.description}
                </p>
                
                <div className="space-y-2">
                  {useCase.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Experience These Features?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Start your free trial today and see how Document-RAG can transform 
              your document workflow in minutes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-200 shadow-lg flex items-center space-x-2">
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary-600 transition-all duration-200">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
