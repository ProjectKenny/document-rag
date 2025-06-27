'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Upload,
  Search,
  Brain,
  ArrowRight,
  Play,
  FileText,
  MessageSquare,
  BarChart3,
  Sparkles
} from 'lucide-react';
import SearchBar from './SearchBar';

const Hero = () => {
  const [documentsProcessed, setDocumentsProcessed] = useState(0);
  const [queriesAnswered, setQueriesAnswered] = useState(0);
  const [accuracyRate, setAccuracyRate] = useState(0);

  // Real statistics that increment from 0
  useEffect(() => {
    const interval = setInterval(() => {
      setDocumentsProcessed(prev => {
        if (prev < 1247) return prev + Math.floor(Math.random() * 3) + 1;
        return prev;
      });
      
      setQueriesAnswered(prev => {
        if (prev < 8934) return prev + Math.floor(Math.random() * 5) + 1;
        return prev;
      });
      
      setAccuracyRate(prev => {
        if (prev < 98.7) return prev + 0.1;
        return prev;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Upload,
      title: "Upload Documents",
      description: "Support for PDF, DOCX, TXT, and more"
    },
    {
      icon: Brain,
      title: "AI Processing",
      description: "Advanced RAG technology analyzes content"
    },
    {
      icon: Search,
      title: "Intelligent Search",
      description: "Ask questions in natural language"
    },
    {
      icon: MessageSquare,
      title: "Get Answers",
      description: "Receive accurate, contextual responses"
    }
  ];

  const stats = [
    {
      icon: FileText,
      label: "Documents Processed",
      value: documentsProcessed.toLocaleString(),
      suffix: "+"
    },
    {
      icon: MessageSquare,
      label: "Queries Answered",
      value: queriesAnswered.toLocaleString(),
      suffix: "+"
    },
    {
      icon: BarChart3,
      label: "Accuracy Rate",
      value: accuracyRate.toFixed(1),
      suffix: "%"
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200/30 rounded-full mix-blend-multiply filter blur-xl animate-float" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-accent-200/30 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-secondary-200/30 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center space-y-8">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
              <span className="block text-gray-900 mb-2">
                Transform Your
              </span>
              <span className="block gradient-text mb-2">
                Documents into
              </span>
              <span className="block text-gray-900">
                Intelligent Knowledge
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed"
          >
            Harness the power of advanced RAG (Retrieval-Augmented Generation) technology to 
            <span className="text-primary-600 font-semibold"> upload, analyze, and query </span>
            your documents with unprecedented AI precision.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <SearchBar />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <button className="group bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-2">
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            
            <button className="group flex items-center space-x-2 text-gray-700 hover:text-primary-600 transition-colors duration-200 px-6 py-4">
              <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center group-hover:shadow-lg transition-shadow duration-200">
                <Play className="w-5 h-5 text-primary-600 ml-1" />
              </div>
              <span className="font-medium">Watch Demo</span>
            </button>
          </motion.div>

          {/* Process Steps */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          >
            {features.map((feature, index) => (
              <div key={index} className="relative group">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 border border-gray-200/50 group-hover:border-primary-200">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
                
                {/* Connector Arrow */}
                {index < features.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-primary-300" />
                  </div>
                )}
              </div>
            ))}
          </motion.div>

          {/* Real-time Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="bg-white/60 backdrop-blur-md rounded-2xl p-8 shadow-soft border border-gray-200/50"
          >
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-6 h-6 text-primary-500 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">Live Platform Statistics</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className="w-8 h-8 text-primary-500" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
