'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Upload, 
  Search, 
  Settings,
  CheckCircle,
  ArrowRight,
  Play,
  Book,
  Users,
  Zap,
  Target,
  Clock,
  Star,
  FileText,
  MessageCircle
} from 'lucide-react';

export default function GettingStartedPage() {
  const steps = [
    {
      number: "01",
      title: "Create Your Account",
      description: "Sign up for Document-RAG and verify your email address to get started.",
      icon: Users,
      tasks: [
        "Sign up with email or Google/Microsoft account",
        "Verify your email address",
        "Complete your profile setup",
        "Choose your subscription plan"
      ],
      estimatedTime: "2 minutes"
    },
    {
      number: "02",
      title: "Upload Your First Documents",
      description: "Add documents to your knowledge base using our simple drag-and-drop interface.",
      icon: Upload,
      tasks: [
        "Navigate to the Documents section",
        "Drag and drop files or click to browse",
        "Wait for processing to complete",
        "Organize documents with tags and folders"
      ],
      estimatedTime: "5 minutes"
    },
    {
      number: "03",
      title: "Try Your First Search",
      description: "Ask questions in natural language and discover the power of AI-powered search.",
      icon: Search,
      tasks: [
        "Go to the Search interface",
        "Type a question about your documents",
        "Review the AI-generated response",
        "Explore source citations and references"
      ],
      estimatedTime: "3 minutes"
    },
    {
      number: "04",
      title: "Customize Your Settings",
      description: "Configure Document-RAG to match your workflow and preferences.",
      icon: Settings,
      tasks: [
        "Set up integrations with your tools",
        "Configure notification preferences",
        "Customize search and display options",
        "Invite team members if needed"
      ],
      estimatedTime: "10 minutes"
    }
  ];

  const quickWins = [
    {
      title: "Upload Multiple Files at Once",
      description: "Select multiple files or drag entire folders to upload everything at once.",
      icon: Upload,
      tip: "Tip: You can upload up to 100 files simultaneously"
    },
    {
      title: "Use Natural Language Queries",
      description: "Ask questions like you would to a colleague - no special syntax required.",
      icon: MessageCircle,
      tip: "Example: 'What are the key findings from the Q3 report?'"
    },
    {
      title: "Explore Source Citations",
      description: "Click on any citation to jump directly to the relevant section in your document.",
      icon: Target,
      tip: "Citations show exact page numbers and highlight relevant text"
    },
    {
      title: "Save Frequent Searches",
      description: "Bookmark important queries to quickly access them later.",
      icon: Star,
      tip: "Saved searches appear in your dashboard for quick access"
    }
  ];

  const resources = [
    {
      title: "Video Tutorial: Complete Walkthrough",
      description: "45-minute comprehensive guide covering all features",
      icon: Play,
      type: "Video",
      duration: "45 min",
      difficulty: "Beginner"
    },
    {
      title: "Quick Start Guide",
      description: "Essential steps to get up and running in 15 minutes",
      icon: Zap,
      type: "Article",
      duration: "15 min",
      difficulty: "Beginner"
    },
    {
      title: "API Documentation",
      description: "Complete reference for developers and integrations",
      icon: Book,
      type: "Documentation",
      duration: "30 min",
      difficulty: "Advanced"
    },
    {
      title: "Best Practices Guide",
      description: "Tips and tricks from power users and experts",
      icon: Target,
      type: "Article",
      duration: "20 min",
      difficulty: "Intermediate"
    }
  ];

  const faqs = [
    {
      question: "What file formats are supported?",
      answer: "Document-RAG supports 50+ file formats including PDF, DOCX, TXT, CSV, XLSX, PPTX, HTML, and many more. If you have a specific format question, please contact support."
    },
    {
      question: "How long does document processing take?",
      answer: "Most documents are processed within 1-2 minutes. Larger files or complex formats may take up to 5 minutes. You'll receive a notification when processing is complete."
    },
    {
      question: "Can I organize my documents?",
      answer: "Yes! You can create folders, add tags, and use custom metadata to organize your documents. This makes searching and managing large document collections much easier."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We use enterprise-grade security including AES-256 encryption, SOC 2 compliance, and strict access controls. Your documents are never used to train our AI models."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Getting Started
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Your Journey Begins Here
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Welcome to Document-RAG! Follow this step-by-step guide to set up your account, 
            upload documents, and start experiencing the power of AI-driven document intelligence.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center space-x-3">
              <span>Start Setup</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <button className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors duration-200 px-8 py-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 hover:border-blue-200">
              <Play className="w-5 h-5" />
              <span className="font-medium">Watch Video Guide</span>
            </button>
          </div>
        </div>
      </section>

      {/* Setup Steps */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              4 Simple Steps to Success
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Follow these steps to set up Document-RAG and start transforming your document workflow
            </p>
          </div>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-200/50">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                        {step.number}
                      </div>
                      <div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">{step.title}</h3>
                        <div className="flex items-center space-x-2 text-sm text-gray-600 mt-1">
                          <Clock className="w-4 h-4" />
                          <span>Estimated time: {step.estimatedTime}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-lg text-gray-600 mb-6">{step.description}</p>
                    
                    <div className="space-y-3">
                      {step.tasks.map((task, taskIndex) => (
                        <div key={taskIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{task}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={`flex justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="w-80 h-80 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl flex items-center justify-center border border-blue-200/50 shadow-xl">
                      <step.icon className="w-32 h-32 text-blue-500" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Wins */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Quick Wins & Pro Tips
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Maximize your productivity with these helpful tips and shortcuts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {quickWins.map((win, index) => (
              <div key={index} className="p-8 bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <win.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{win.title}</h3>
                <p className="text-gray-600 mb-4">{win.description}</p>
                <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <p className="text-sm text-blue-800 font-medium">{win.tip}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Resources */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Continue Learning
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore additional resources to master Document-RAG
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => (
              <div key={index} className="p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <resource.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">{resource.description}</p>
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <span className="px-2 py-1 bg-gray-100 rounded-full">{resource.type}</span>
                  <span>{resource.duration}</span>
                </div>
                <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                  resource.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                  resource.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {resource.difficulty}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions from new users
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Create your account today and start transforming how you work with documents.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-xl">
              Create Free Account
            </button>
            <button className="text-blue-600 hover:text-blue-800 transition-colors px-6 py-4 font-semibold">
              Contact Sales Team
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
