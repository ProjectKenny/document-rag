'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Zap, 
  CheckCircle, 
  ArrowRight,
  ExternalLink,
  Cloud,
  Database,
  MessageSquare,
  FileText,
  Globe,
  Shield,
  Workflow,
  Code
} from 'lucide-react';

export default function IntegrationsPage() {
  const categories = [
    {
      title: "Cloud Storage",
      icon: Cloud,
      description: "Connect your existing cloud storage solutions",
      integrations: [
        { name: "Google Drive", logo: "🗂️", status: "Available", description: "Sync documents from Google Drive automatically" },
        { name: "Dropbox", logo: "📦", status: "Available", description: "Import and process Dropbox files seamlessly" },
        { name: "OneDrive", logo: "☁️", status: "Available", description: "Microsoft OneDrive integration for Office 365" },
        { name: "Box", logo: "📁", status: "Coming Soon", description: "Enterprise file sharing and collaboration" }
      ]
    },
    {
      title: "Communication",
      icon: MessageSquare,
      description: "Integrate with your team communication tools",
      integrations: [
        { name: "Slack", logo: "💬", status: "Available", description: "Query documents directly from Slack channels" },
        { name: "Microsoft Teams", logo: "👥", status: "Available", description: "Teams integration for document queries" },
        { name: "Discord", logo: "🎮", status: "Beta", description: "Community and team Discord bot integration" },
        { name: "Telegram", logo: "✈️", status: "Coming Soon", description: "Telegram bot for document intelligence" }
      ]
    },
    {
      title: "Productivity",
      icon: Workflow,
      description: "Enhance your productivity workflows",
      integrations: [
        { name: "Notion", logo: "📝", status: "Available", description: "Embed document insights in Notion pages" },
        { name: "Obsidian", logo: "🔗", status: "Available", description: "Knowledge graph integration with Obsidian" },
        { name: "Zapier", logo: "⚡", status: "Available", description: "Automate workflows with 5000+ apps" },
        { name: "IFTTT", logo: "🔄", status: "Beta", description: "If This Then That automation platform" }
      ]
    },
    {
      title: "Development",
      icon: Code,
      description: "Developer tools and platforms",
      integrations: [
        { name: "GitHub", logo: "🐙", status: "Available", description: "Analyze documentation and code repositories" },
        { name: "GitLab", logo: "🦊", status: "Available", description: "GitLab repository integration" },
        { name: "Jira", logo: "🎯", status: "Beta", description: "Project management and issue tracking" },
        { name: "Confluence", logo: "🌊", status: "Coming Soon", description: "Team collaboration and documentation" }
      ]
    }
  ];

  const features = [
    {
      icon: Zap,
      title: "One-Click Setup",
      description: "Connect your favorite tools in seconds with our pre-built integrations"
    },
    {
      icon: Shield,
      title: "Secure Connections",
      description: "All integrations use OAuth 2.0 and enterprise-grade security protocols"
    },
    {
      icon: Globe,
      title: "Real-time Sync",
      description: "Automatic synchronization keeps your documents up-to-date across platforms"
    },
    {
      icon: Database,
      title: "Unified Search",
      description: "Search across all connected platforms from a single interface"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Available':
        return 'bg-green-100 text-green-800';
      case 'Beta':
        return 'bg-yellow-100 text-yellow-800';
      case 'Coming Soon':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Powerful Integrations
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Connect Everything
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Seamlessly integrate Document-RAG with your existing tools and workflows. 
            Connect cloud storage, communication platforms, and productivity apps in just a few clicks.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center space-x-3">
              <span>Browse Integrations</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <button className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors duration-200 px-8 py-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 hover:border-blue-200">
              <Code className="w-5 h-5" />
              <span className="font-medium">API Documentation</span>
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Integrations?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built for enterprise security, performance, and ease of use
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Available Integrations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Connect with the tools you already use and love
            </p>
          </div>

          <div className="space-y-16">
            {categories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.integrations.map((integration, integrationIndex) => (
                    <div key={integrationIndex} className="p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{integration.logo}</span>
                          <h4 className="font-semibold text-gray-900">{integration.name}</h4>
                        </div>
                        <span className={`px-2 py-1 rounded-lg text-xs font-medium ${getStatusColor(integration.status)}`}>
                          {integration.status}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-4">{integration.description}</p>
                      <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors text-sm font-medium group-hover:translate-x-1 transition-transform duration-200">
                        <span>Learn more</span>
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Integration CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Need a Custom Integration?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Don&apos;t see your tool listed? Our team can build custom integrations 
            tailored to your specific needs and workflows.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-xl">
              Request Integration
            </button>
            <button className="text-blue-600 hover:text-blue-800 transition-colors px-6 py-4 font-semibold">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
