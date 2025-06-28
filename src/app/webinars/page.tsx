'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Calendar, 
  Clock, 
  Users,
  Play,
  Download,
  Star,
  ArrowRight,
  Video,
  BookOpen,
  Award,
  TrendingUp,
  Zap,
  Target,
  Filter
} from 'lucide-react';

export default function WebinarsPage() {
  const upcomingWebinars = [
    {
      title: "Advanced Document Intelligence: Beyond Basic Search",
      description: "Discover advanced techniques for extracting insights from complex documents using AI-powered analysis.",
      date: "January 25, 2025",
      time: "2:00 PM PST",
      duration: "60 minutes",
      presenter: "Dr. Sarah Chen",
      presenterTitle: "Head of AI Research",
      presenterAvatar: "👩‍💻",
      attendees: 1250,
      level: "Advanced",
      category: "AI & Technology",
      featured: true
    },
    {
      title: "Enterprise Security Best Practices for Document-RAG",
      description: "Learn how to implement enterprise-grade security controls and compliance measures.",
      date: "February 8, 2025",
      time: "11:00 AM PST",
      duration: "45 minutes",
      presenter: "Michael Rodriguez",
      presenterTitle: "Security Architect",
      presenterAvatar: "👨‍💼",
      attendees: 890,
      level: "Intermediate",
      category: "Security"
    },
    {
      title: "Building Custom Integrations with Document-RAG API",
      description: "Step-by-step guide to creating powerful integrations using our comprehensive API.",
      date: "February 15, 2025",
      time: "10:00 AM PST",
      duration: "90 minutes",
      presenter: "Emily Watson",
      presenterTitle: "Developer Relations",
      presenterAvatar: "👩‍🔬",
      attendees: 650,
      level: "Advanced",
      category: "Development"
    }
  ];

  const pastWebinars = [
    {
      title: "Getting Started with Document-RAG: A Complete Guide",
      description: "Perfect introduction for new users covering all essential features and workflows.",
      date: "December 18, 2024",
      duration: "45 minutes",
      presenter: "Lisa Park",
      views: 5420,
      rating: 4.9,
      level: "Beginner",
      category: "Getting Started"
    },
    {
      title: "ROI Optimization: Measuring Document Intelligence Success",
      description: "Learn how to measure and optimize the return on investment from your document intelligence initiatives.",
      date: "December 4, 2024",
      duration: "60 minutes",
      presenter: "Robert Kim",
      views: 3890,
      rating: 4.7,
      level: "Intermediate",
      category: "Business"
    },
    {
      title: "Advanced Search Techniques and Query Optimization",
      description: "Master complex search patterns and optimization strategies for better results.",
      date: "November 20, 2024",
      duration: "50 minutes",
      presenter: "Jennifer Walsh",
      views: 4250,
      rating: 4.8,
      level: "Advanced",
      category: "Search"
    },
    {
      title: "Team Collaboration Features Deep Dive",
      description: "Explore advanced collaboration features for teams and organizations.",
      date: "November 6, 2024",
      duration: "40 minutes",
      presenter: "David Kim",
      views: 2980,
      rating: 4.6,
      level: "Intermediate",
      category: "Collaboration"
    }
  ];

  const categories = [
    { name: "All Webinars", count: 24, active: true },
    { name: "Getting Started", count: 6 },
    { name: "AI & Technology", count: 5 },
    { name: "Development", count: 4 },
    { name: "Security", count: 3 },
    { name: "Business", count: 3 },
    { name: "Search", count: 2 },
    { name: "Collaboration", count: 1 }
  ];

  const stats = [
    { label: "Total Webinars", value: "50+", icon: Video },
    { label: "Total Attendees", value: "25,000+", icon: Users },
    { label: "Average Rating", value: "4.8/5", icon: Star },
    { label: "Hours of Content", value: "100+", icon: Clock }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-100 text-green-800';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'Advanced':
        return 'bg-red-100 text-red-800';
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
            Expert Webinars
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Learn from the Best
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Join our expert-led webinars to master Document-RAG, discover advanced techniques, 
            and stay updated with the latest features and best practices.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center space-x-3">
              <span>Register for Next Webinar</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <button className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors duration-200 px-8 py-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 hover:border-blue-200">
              <Play className="w-5 h-5" />
              <span className="font-medium">Watch Past Webinars</span>
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Webinars */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Upcoming Webinars
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Register now for our upcoming expert-led sessions
            </p>
          </div>

          <div className="space-y-8">
            {upcomingWebinars.map((webinar, index) => (
              <div key={index} className={`p-8 lg:p-12 bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border transition-all duration-300 hover:shadow-2xl ${
                webinar.featured ? 'border-blue-200 ring-2 ring-blue-100' : 'border-gray-200/50'
              }`}>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-2">
                    <div className="flex items-center space-x-3 mb-4">
                      {webinar.featured && (
                        <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold rounded-full">
                          Featured
                        </span>
                      )}
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(webinar.level)}`}>
                        {webinar.level}
                      </span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                        {webinar.category}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">{webinar.title}</h3>
                    <p className="text-gray-600 text-lg mb-6">{webinar.description}</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center space-x-2 text-gray-700">
                        <Calendar className="w-5 h-5 text-blue-600" />
                        <span>{webinar.date}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-700">
                        <Clock className="w-5 h-5 text-blue-600" />
                        <span>{webinar.time} ({webinar.duration})</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-700">
                        <Users className="w-5 h-5 text-blue-600" />
                        <span>{webinar.attendees} registered</span>
                      </div>
                      <div className="flex items-center space-x-3 text-gray-700">
                        <span className="text-2xl">{webinar.presenterAvatar}</span>
                        <div>
                          <div className="font-semibold">{webinar.presenter}</div>
                          <div className="text-sm text-gray-600">{webinar.presenterTitle}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center lg:text-right">
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-xl mb-4 w-full lg:w-auto">
                      Register Now
                    </button>
                    <div className="text-sm text-gray-600">
                      Free to attend • Recording available
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Webinars */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar */}
            <div className="lg:w-1/4">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50 sticky top-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <Filter className="w-5 h-5 mr-2 text-blue-600" />
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        category.active 
                          ? 'bg-blue-100 text-blue-800 font-semibold' 
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{category.name}</span>
                        <span className="text-sm text-gray-500">({category.count})</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:w-3/4">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Past Webinars</h2>
                <select className="px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Sort by: Most Recent</option>
                  <option>Sort by: Most Popular</option>
                  <option>Sort by: Highest Rated</option>
                  <option>Sort by: Duration</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {pastWebinars.map((webinar, index) => (
                  <div key={index} className="p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300 group">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(webinar.level)}`}>
                        {webinar.level}
                      </span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                        {webinar.category}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {webinar.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">{webinar.description}</p>
                    
                    <div className="space-y-2 mb-4 text-sm text-gray-600">
                      <div className="flex items-center justify-between">
                        <span>Presenter: {webinar.presenter}</span>
                        <span>{webinar.date}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>{webinar.duration}</span>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-500" />
                          <span>{webinar.rating}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Play className="w-4 h-4" />
                        <span>{webinar.views} views</span>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2">
                        <Play className="w-4 h-4" />
                        <span>Watch</span>
                      </button>
                      <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Never Miss a Webinar
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Subscribe to our webinar series and get notified about upcoming sessions, 
            exclusive content, and early access to recordings.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-xl">
              Subscribe to Webinars
            </button>
            <button className="text-blue-600 hover:text-blue-800 transition-colors px-6 py-4 font-semibold">
              View All Recordings
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
