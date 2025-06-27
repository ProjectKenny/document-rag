'use client';

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
  Layers
} from 'lucide-react';

const Features = () => {
  const mainFeatures = [
    {
      icon: Upload,
      title: "Multi-Format Document Support",
      description: "Upload and process PDF, DOCX, TXT, CSV, and more. Our AI understands the structure and content of various document types.",
      gradient: "from-blue-500 to-cyan-500",
      stats: "50+ formats supported"
    },
    {
      icon: Brain,
      title: "Advanced RAG Technology",
      description: "State-of-the-art Retrieval-Augmented Generation ensures accurate, contextual responses from your document corpus.",
      gradient: "from-purple-500 to-pink-500",
      stats: "98.7% accuracy rate"
    },
    {
      icon: Search,
      title: "Intelligent Search & Query",
      description: "Ask questions in natural language and get precise answers with source citations and confidence scores.",
      gradient: "from-green-500 to-emerald-500",
      stats: "Sub-second response time"
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "Your documents are encrypted at rest and in transit. SOC 2 compliant with role-based access controls.",
      gradient: "from-red-500 to-orange-500",
      stats: "Bank-level encryption"
    }
  ];

  const additionalFeatures = [
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Documents are processed and indexed instantly"
    },
    {
      icon: Globe,
      title: "Multi-language Support",
      description: "Works with documents in 50+ languages"
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Track usage, performance, and insights"
    },
    {
      icon: MessageSquare,
      title: "Conversational Interface",
      description: "Chat naturally with your documents"
    },
    {
      icon: FileText,
      title: "Document Versioning",
      description: "Track changes and maintain document history"
    },
    {
      icon: Lock,
      title: "Access Controls",
      description: "Granular permissions and user management"
    },
    {
      icon: Cpu,
      title: "API Integration",
      description: "Seamlessly integrate with existing workflows"
    },
    {
      icon: Layers,
      title: "Batch Processing",
      description: "Process thousands of documents simultaneously"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white/80 to-gray-50/80 backdrop-blur-sm border-t border-gray-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">Document Intelligence</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need to transform your documents into an intelligent,
            searchable knowledge base powered by cutting-edge AI technology.
          </p>
        </motion.div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {mainFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200/50 hover:border-blue-200 hover:bg-white/95"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-300`} />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className="w-10 h-10 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                  {feature.description}
                </p>

                {/* Stats */}
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 bg-gradient-to-r ${feature.gradient} rounded-full animate-pulse`} />
                  <span className="text-sm font-semibold text-gray-700">
                    {feature.stats}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 shadow-soft border border-gray-100"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              And Much More
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover additional features designed to enhance your document 
              management and AI-powered analysis experience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group text-center p-6 rounded-2xl hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Documents?
            </h3>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Join thousands of organizations already using Document-RAG to unlock 
              the power of their document repositories.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-200 shadow-lg">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary-600 transition-all duration-200">
                Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
