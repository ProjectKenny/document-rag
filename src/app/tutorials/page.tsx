'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Play, 
  Clock, 
  Users,
  Star,
  BookOpen,
  Video,
  FileText,
  Code,
  Zap,
  Target,
  ArrowRight,
  CheckCircle,
  Filter
} from 'lucide-react';

export default function TutorialsPage() {
  const featuredTutorial = {
    title: "Complete Beginner's Guide to Document-RAG",
    description: "Learn everything you need to know to get started with Document-RAG, from uploading your first document to advanced search techniques.",
    duration: "45 minutes",
    level: "Beginner",
    rating: 4.9,
    students: "12.5k",
    thumbnail: "🎯",
    lessons: 8,
    featured: true
  };

  const tutorials = [
    {
      title: "Advanced Search Techniques",
      description: "Master complex queries and search operators to find exactly what you need.",
      duration: "25 minutes",
      level: "Intermediate",
      rating: 4.8,
      students: "8.2k",
      thumbnail: "🔍",
      category: "Search",
      type: "Video"
    },
    {
      title: "Setting Up API Integration",
      description: "Step-by-step guide to integrating Document-RAG API into your applications.",
      duration: "35 minutes",
      level: "Advanced",
      rating: 4.7,
      students: "5.9k",
      thumbnail: "⚡",
      category: "Development",
      type: "Video"
    },
    {
      title: "Document Organization Best Practices",
      description: "Learn how to structure and organize your documents for maximum efficiency.",
      duration: "20 minutes",
      level: "Beginner",
      rating: 4.9,
      students: "9.1k",
      thumbnail: "📁",
      category: "Organization",
      type: "Article"
    },
    {
      title: "Team Collaboration Features",
      description: "Discover how to share documents and collaborate effectively with your team.",
      duration: "30 minutes",
      level: "Intermediate",
      rating: 4.6,
      students: "6.7k",
      thumbnail: "👥",
      category: "Collaboration",
      type: "Video"
    },
    {
      title: "Security and Privacy Settings",
      description: "Configure security settings and understand privacy controls for your documents.",
      duration: "15 minutes",
      level: "Beginner",
      rating: 4.8,
      students: "7.3k",
      thumbnail: "🔒",
      category: "Security",
      type: "Article"
    },
    {
      title: "Building Custom Workflows",
      description: "Create automated workflows to streamline your document processing.",
      duration: "40 minutes",
      level: "Advanced",
      rating: 4.5,
      students: "3.8k",
      thumbnail: "🔄",
      category: "Automation",
      type: "Video"
    }
  ];

  const categories = [
    { name: "All Tutorials", count: 24, active: true },
    { name: "Getting Started", count: 8 },
    { name: "Search", count: 6 },
    { name: "Development", count: 4 },
    { name: "Organization", count: 3 },
    { name: "Security", count: 2 },
    { name: "Automation", count: 1 }
  ];

  const learningPaths = [
    {
      title: "Complete Beginner Path",
      description: "Perfect for users new to Document-RAG",
      duration: "2 hours",
      courses: 5,
      icon: Zap,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Developer Integration Path",
      description: "Learn to integrate Document-RAG into your apps",
      duration: "3 hours",
      courses: 4,
      icon: Code,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Enterprise Admin Path",
      description: "Master enterprise features and administration",
      duration: "2.5 hours",
      courses: 6,
      icon: Target,
      color: "from-purple-500 to-purple-600"
    }
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

  const getTypeIcon = (type: string) => {
    return type === 'Video' ? Video : FileText;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Learn Document-RAG
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Master Every Feature
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Comprehensive tutorials, guides, and learning paths to help you become 
            a Document-RAG expert. From basics to advanced techniques.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center space-x-3">
              <Play className="w-5 h-5" />
              <span>Start Learning</span>
            </button>
            
            <button className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors duration-200 px-8 py-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 hover:border-blue-200">
              <BookOpen className="w-5 h-5" />
              <span className="font-medium">Browse All Tutorials</span>
            </button>
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Structured Learning Paths
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Follow curated learning paths designed for your role and experience level
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {learningPaths.map((path, index) => (
              <div key={index} className="p-8 bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300 group">
                <div className={`w-16 h-16 bg-gradient-to-r ${path.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200`}>
                  <path.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{path.title}</h3>
                <p className="text-gray-600 mb-6">{path.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <span>{path.duration}</span>
                  <span>{path.courses} courses</span>
                </div>
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>Start Path</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tutorial */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-200/50">
            <div className="flex items-center space-x-2 mb-6">
              <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold rounded-full">
                Featured Tutorial
              </span>
              <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                {featuredTutorial.level}
              </span>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{featuredTutorial.title}</h2>
                <p className="text-gray-600 text-lg mb-6">{featuredTutorial.description}</p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">{featuredTutorial.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">{featuredTutorial.lessons} lessons</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span className="text-gray-700">{featuredTutorial.rating} rating</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">{featuredTutorial.students} students</span>
                  </div>
                </div>
                
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-xl flex items-center space-x-3">
                  <Play className="w-5 h-5" />
                  <span>Start Tutorial</span>
                </button>
              </div>
              
              <div className="flex justify-center">
                <div className="w-80 h-80 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl flex items-center justify-center text-8xl border border-blue-200/50 shadow-xl">
                  {featuredTutorial.thumbnail}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Tutorials */}
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
                <h2 className="text-3xl font-bold text-gray-900">All Tutorials</h2>
                <select className="px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Sort by: Most Popular</option>
                  <option>Sort by: Newest</option>
                  <option>Sort by: Duration</option>
                  <option>Sort by: Rating</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {tutorials.map((tutorial, index) => {
                  const TypeIcon = getTypeIcon(tutorial.type);
                  return (
                    <div key={index} className="p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300 group">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center text-2xl">
                          {tutorial.thumbnail}
                        </div>
                        <div className="flex items-center space-x-2">
                          <TypeIcon className="w-4 h-4 text-gray-500" />
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(tutorial.level)}`}>
                            {tutorial.level}
                          </span>
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {tutorial.title}
                      </h3>
                      <p className="text-gray-600 mb-4 text-sm">{tutorial.description}</p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-4">
                          <span>{tutorial.duration}</span>
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-yellow-500" />
                            <span>{tutorial.rating}</span>
                          </div>
                        </div>
                        <span>{tutorial.students} students</span>
                      </div>
                      
                      <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2">
                        <Play className="w-4 h-4" />
                        <span>Start Tutorial</span>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
