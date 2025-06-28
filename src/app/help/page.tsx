'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Search, 
  Book, 
  MessageCircle,
  Mail,
  Phone,
  Clock,
  ArrowRight,
  HelpCircle,
  FileText,
  Settings,
  Shield,
  CreditCard,
  Users,
  Zap,
  CheckCircle
} from 'lucide-react';

export default function HelpPage() {
  const categories = [
    {
      title: "Getting Started",
      icon: Zap,
      description: "Learn the basics of Document-RAG",
      articles: 12,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Account & Billing",
      icon: CreditCard,
      description: "Manage your account and subscription",
      articles: 8,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Document Management",
      icon: FileText,
      description: "Upload, organize, and manage documents",
      articles: 15,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Search & Queries",
      icon: Search,
      description: "Master advanced search techniques",
      articles: 10,
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Integrations",
      icon: Settings,
      description: "Connect with your favorite tools",
      articles: 9,
      color: "from-teal-500 to-teal-600"
    },
    {
      title: "Security & Privacy",
      icon: Shield,
      description: "Data protection and compliance",
      articles: 6,
      color: "from-red-500 to-red-600"
    }
  ];

  const popularArticles = [
    {
      title: "How to upload your first document",
      category: "Getting Started",
      views: "12.5k",
      readTime: "3 min"
    },
    {
      title: "Advanced search techniques and operators",
      category: "Search & Queries", 
      views: "8.2k",
      readTime: "5 min"
    },
    {
      title: "Setting up Slack integration",
      category: "Integrations",
      views: "6.8k",
      readTime: "4 min"
    },
    {
      title: "Understanding your billing and usage",
      category: "Account & Billing",
      views: "5.9k",
      readTime: "2 min"
    },
    {
      title: "Document security and access controls",
      category: "Security & Privacy",
      views: "4.7k",
      readTime: "6 min"
    }
  ];

  const contactOptions = [
    {
      title: "Live Chat",
      description: "Get instant help from our support team",
      icon: MessageCircle,
      availability: "24/7",
      responseTime: "< 2 minutes",
      action: "Start Chat"
    },
    {
      title: "Email Support",
      description: "Send us a detailed message",
      icon: Mail,
      availability: "24/7",
      responseTime: "< 4 hours",
      action: "Send Email"
    },
    {
      title: "Phone Support",
      description: "Speak directly with our experts",
      icon: Phone,
      availability: "Mon-Fri 9AM-6PM PST",
      responseTime: "Immediate",
      action: "Call Now"
    }
  ];

  const quickActions = [
    { title: "Check System Status", icon: CheckCircle, description: "View current system performance" },
    { title: "API Documentation", icon: Book, description: "Complete API reference guide" },
    { title: "Video Tutorials", icon: Users, description: "Step-by-step video guides" },
    { title: "Community Forum", icon: MessageCircle, description: "Connect with other users" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Help Center
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              We&apos;re Here to Help
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Find answers to your questions, learn how to use Document-RAG effectively, 
            and get the support you need to succeed.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative mb-12">
            <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
              <Search className="h-6 w-6 text-blue-500" />
            </div>
            <input
              type="text"
              placeholder="Search for help articles, guides, or FAQs..."
              className="w-full pl-16 pr-6 py-4 text-lg bg-white/95 backdrop-blur-sm border-2 border-blue-200/50 rounded-3xl shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 placeholder-gray-500"
            />
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {quickActions.map((action, index) => (
              <button key={index} className="p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group">
                <action.icon className="w-8 h-8 text-blue-600 mx-auto mb-2 group-hover:scale-110 transition-transform duration-200" />
                <div className="text-sm font-semibold text-gray-900">{action.title}</div>
                <div className="text-xs text-gray-600 mt-1">{action.description}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Browse by Category
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find the information you need organized by topic
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="p-8 bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300 group cursor-pointer">
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{category.articles} articles</span>
                  <ArrowRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Popular Articles
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Most viewed help articles this month
            </p>
          </div>

          <div className="space-y-4">
            {popularArticles.map((article, index) => (
              <div key={index} className="p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {article.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                        {article.category}
                      </span>
                      <span>{article.views} views</span>
                      <span>{article.readTime} read</span>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our support team is ready to assist you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactOptions.map((option, index) => (
              <div key={index} className="p-8 bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <option.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{option.title}</h3>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <div className="space-y-2 mb-6 text-sm text-gray-600">
                  <div className="flex items-center justify-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{option.availability}</span>
                  </div>
                  <div>Response time: {option.responseTime}</div>
                </div>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg">
                  {option.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "How do I upload documents to Document-RAG?",
                answer: "You can upload documents by dragging and dropping files into the upload area, or by clicking the upload button and selecting files from your computer. We support 50+ file formats including PDF, DOCX, TXT, and more."
              },
              {
                question: "What file formats are supported?",
                answer: "Document-RAG supports over 50 file formats including PDF, DOCX, TXT, CSV, XLSX, PPTX, HTML, and many more. If you have a specific format question, please contact our support team."
              },
              {
                question: "How secure is my data?",
                answer: "Your data is protected with enterprise-grade security including AES-256 encryption, SOC 2 compliance, and strict access controls. We never use your documents to train our models."
              },
              {
                question: "Can I integrate Document-RAG with other tools?",
                answer: "Yes! We offer integrations with popular tools like Slack, Microsoft Teams, Google Drive, Dropbox, and many more. You can also use our API to build custom integrations."
              },
              {
                question: "What are the pricing plans?",
                answer: "We offer flexible pricing plans starting with a free tier. Our paid plans include additional features, higher usage limits, and priority support. Visit our pricing page for detailed information."
              }
            ].map((faq, index) => (
              <div key={index} className="p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50">
                <div className="flex items-start space-x-4">
                  <HelpCircle className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
