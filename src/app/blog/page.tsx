'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Calendar, 
  Clock, 
  ArrowRight,
  Search,
  Tag,
  User,
  TrendingUp,
  BookOpen,
  Lightbulb,
  Zap
} from 'lucide-react';

export default function BlogPage() {
  const featuredPost = {
    title: "The Future of Document Intelligence: How AI is Transforming Information Retrieval",
    excerpt: "Explore the latest advancements in AI-powered document processing and what it means for businesses in 2024 and beyond.",
    author: "Dr. Sarah Chen",
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "AI & Technology",
    image: "🤖",
    featured: true
  };

  const blogPosts = [
    {
      title: "10 Best Practices for Document Management in Enterprise",
      excerpt: "Learn how leading organizations are streamlining their document workflows with AI-powered solutions.",
      author: "Michael Rodriguez",
      date: "December 12, 2024",
      readTime: "6 min read",
      category: "Best Practices",
      image: "📊"
    },
    {
      title: "RAG vs Traditional Search: A Comprehensive Comparison",
      excerpt: "Understanding the key differences between Retrieval-Augmented Generation and traditional search methods.",
      author: "Dr. Emily Watson",
      date: "December 10, 2024",
      readTime: "12 min read",
      category: "Technical Deep Dive",
      image: "🔍"
    },
    {
      title: "Case Study: How TechCorp Reduced Research Time by 75%",
      excerpt: "A detailed look at how one company transformed their research process using Document-RAG.",
      author: "James Liu",
      date: "December 8, 2024",
      readTime: "5 min read",
      category: "Case Studies",
      image: "📈"
    },
    {
      title: "Security in Document AI: What You Need to Know",
      excerpt: "Essential security considerations when implementing AI-powered document processing solutions.",
      author: "Alex Thompson",
      date: "December 5, 2024",
      readTime: "7 min read",
      category: "Security",
      image: "🔒"
    },
    {
      title: "Getting Started with Document-RAG API",
      excerpt: "A beginner-friendly guide to integrating our API into your applications.",
      author: "Lisa Park",
      date: "December 3, 2024",
      readTime: "10 min read",
      category: "Tutorials",
      image: "⚡"
    },
    {
      title: "The ROI of Intelligent Document Processing",
      excerpt: "Calculate the return on investment for implementing AI-powered document solutions in your organization.",
      author: "Robert Kim",
      date: "December 1, 2024",
      readTime: "8 min read",
      category: "Business",
      image: "💰"
    }
  ];

  const categories = [
    { name: "All Posts", count: 24, active: true },
    { name: "AI & Technology", count: 8 },
    { name: "Best Practices", count: 6 },
    { name: "Case Studies", count: 4 },
    { name: "Tutorials", count: 3 },
    { name: "Security", count: 2 },
    { name: "Business", count: 1 }
  ];

  const trendingTopics = [
    { name: "Document AI", posts: 12 },
    { name: "RAG Technology", posts: 8 },
    { name: "Enterprise Solutions", posts: 6 },
    { name: "API Integration", posts: 4 },
    { name: "Security", posts: 3 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Document-RAG
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Blog & Insights
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Stay updated with the latest trends, best practices, and insights in document intelligence, 
              AI technology, and business automation.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                <Search className="h-6 w-6 text-blue-500" />
              </div>
              <input
                type="text"
                placeholder="Search articles, topics, or authors..."
                className="w-full pl-16 pr-6 py-4 text-lg bg-white/95 backdrop-blur-sm border-2 border-blue-200/50 rounded-3xl shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 placeholder-gray-500"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Post */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 mb-12">
              <div className="flex items-center space-x-2 mb-4">
                <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold rounded-full">
                  Featured
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  {featuredPost.category}
                </span>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors cursor-pointer">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    
                    <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors font-semibold">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center text-4xl">
                  {featuredPost.image}
                </div>
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post, index) => (
                <article key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
                      {post.category}
                    </span>
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center text-xl">
                      {post.image}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-3">
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-xl">
                Load More Articles
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Categories */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <Tag className="w-5 h-5 mr-2 text-blue-600" />
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

            {/* Trending Topics */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-blue-600" />
                Trending Topics
              </h3>
              <div className="space-y-3">
                {trendingTopics.map((topic, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                      {topic.name}
                    </span>
                    <span className="text-sm text-gray-500">{topic.posts}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-6 text-white">
              <h3 className="text-lg font-bold mb-2 flex items-center">
                <BookOpen className="w-5 h-5 mr-2" />
                Stay Updated
              </h3>
              <p className="text-blue-100 mb-4 text-sm">
                Get the latest insights delivered to your inbox weekly.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button className="w-full bg-white text-blue-600 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
