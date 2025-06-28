'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Users, 
  MessageCircle, 
  Calendar,
  Award,
  ArrowRight,
  ExternalLink,
  Heart,
  Star,
  TrendingUp,
  BookOpen,
  Code,
  HelpCircle,
  Lightbulb,
  Zap
} from 'lucide-react';

export default function CommunityPage() {
  const communityStats = [
    { label: "Active Members", value: "25,000+", icon: Users },
    { label: "Monthly Discussions", value: "5,000+", icon: MessageCircle },
    { label: "Solutions Shared", value: "15,000+", icon: Lightbulb },
    { label: "Expert Contributors", value: "500+", icon: Award }
  ];

  const channels = [
    {
      name: "General Discussion",
      description: "Share ideas, ask questions, and connect with the community",
      members: "12.5k",
      icon: MessageCircle,
      color: "from-blue-500 to-blue-600",
      activity: "Very Active"
    },
    {
      name: "Feature Requests",
      description: "Suggest new features and vote on community proposals",
      members: "8.2k",
      icon: Lightbulb,
      color: "from-purple-500 to-purple-600",
      activity: "Active"
    },
    {
      name: "Developer Hub",
      description: "API discussions, integrations, and technical deep dives",
      members: "6.8k",
      icon: Code,
      color: "from-green-500 to-green-600",
      activity: "Active"
    },
    {
      name: "Help & Support",
      description: "Get help from community experts and power users",
      members: "15.3k",
      icon: HelpCircle,
      color: "from-orange-500 to-orange-600",
      activity: "Very Active"
    },
    {
      name: "Best Practices",
      description: "Share workflows, tips, and optimization strategies",
      members: "9.7k",
      icon: Star,
      color: "from-teal-500 to-teal-600",
      activity: "Moderate"
    },
    {
      name: "Announcements",
      description: "Official updates, releases, and important news",
      members: "22.1k",
      icon: TrendingUp,
      color: "from-red-500 to-red-600",
      activity: "Official"
    }
  ];

  const topContributors = [
    {
      name: "Sarah Chen",
      title: "AI Research Specialist",
      contributions: 245,
      reputation: 4850,
      avatar: "👩‍💻",
      badge: "Expert"
    },
    {
      name: "Michael Rodriguez",
      title: "Enterprise Architect",
      contributions: 189,
      reputation: 3920,
      avatar: "👨‍💼",
      badge: "Mentor"
    },
    {
      name: "Emily Watson",
      title: "Data Scientist",
      contributions: 156,
      reputation: 3240,
      avatar: "👩‍🔬",
      badge: "Helper"
    },
    {
      name: "David Kim",
      title: "Full Stack Developer",
      contributions: 134,
      reputation: 2890,
      avatar: "👨‍💻",
      badge: "Contributor"
    }
  ];

  const recentDiscussions = [
    {
      title: "Best practices for organizing large document collections",
      author: "Alex Thompson",
      replies: 23,
      views: 1240,
      timeAgo: "2 hours ago",
      category: "Best Practices",
      solved: true
    },
    {
      title: "API rate limiting - need clarification on enterprise plans",
      author: "Jennifer Walsh",
      replies: 8,
      views: 456,
      timeAgo: "4 hours ago",
      category: "Developer Hub",
      solved: false
    },
    {
      title: "Feature request: Bulk document tagging",
      author: "Robert Kim",
      replies: 15,
      views: 892,
      timeAgo: "6 hours ago",
      category: "Feature Requests",
      solved: false
    },
    {
      title: "Integration with Notion - step by step guide",
      author: "Lisa Park",
      replies: 31,
      views: 2150,
      timeAgo: "1 day ago",
      category: "Help & Support",
      solved: true
    }
  ];

  const events = [
    {
      title: "Monthly Community Call",
      date: "January 15, 2025",
      time: "2:00 PM PST",
      type: "Virtual Meetup",
      attendees: 150,
      description: "Join our monthly community call to discuss updates and share feedback"
    },
    {
      title: "Developer Workshop: Advanced API Usage",
      date: "January 22, 2025",
      time: "10:00 AM PST",
      type: "Workshop",
      attendees: 75,
      description: "Deep dive into advanced API features and integration patterns"
    },
    {
      title: "User Success Stories Showcase",
      date: "February 5, 2025",
      time: "1:00 PM PST",
      type: "Presentation",
      attendees: 200,
      description: "Community members share their success stories and use cases"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Join Our Community
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Connect, Learn, Grow
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Connect with thousands of Document-RAG users, share knowledge, get help, 
            and shape the future of document intelligence together.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center space-x-3">
              <span>Join Community</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <button className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors duration-200 px-8 py-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 hover:border-blue-200">
              <Calendar className="w-5 h-5" />
              <span className="font-medium">View Events</span>
            </button>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              A Thriving Community
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of users sharing knowledge and building together
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {communityStats.map((stat, index) => (
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

      {/* Community Channels */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Community Channels
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find the right space for your discussions and interests
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {channels.map((channel, index) => (
              <div key={index} className="p-8 bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300 group">
                <div className={`w-12 h-12 bg-gradient-to-r ${channel.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200`}>
                  <channel.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{channel.name}</h3>
                <p className="text-gray-600 mb-4">{channel.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{channel.members} members</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    channel.activity === 'Very Active' ? 'bg-green-100 text-green-800' :
                    channel.activity === 'Active' ? 'bg-blue-100 text-blue-800' :
                    channel.activity === 'Official' ? 'bg-purple-100 text-purple-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {channel.activity}
                  </span>
                </div>
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>Join Channel</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Recent Discussions */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Recent Discussions</h2>
              <div className="space-y-4">
                {recentDiscussions.map((discussion, index) => (
                  <div key={index} className="p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300 group">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors cursor-pointer">
                            {discussion.title}
                          </h3>
                          {discussion.solved && (
                            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                              Solved
                            </span>
                          )}
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                          <span>by {discussion.author}</span>
                          <span>•</span>
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                            {discussion.category}
                          </span>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>{discussion.replies} replies</span>
                          <span>•</span>
                          <span>{discussion.views} views</span>
                          <span>•</span>
                          <span>{discussion.timeAgo}</span>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Upcoming Events */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Upcoming Events</h2>
              <div className="space-y-6">
                {events.map((event, index) => (
                  <div key={index} className="p-8 bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{event.date}</span>
                          </div>
                          <span>{event.time}</span>
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                            {event.type}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-4">{event.description}</p>
                        <div className="flex items-center space-x-1 text-sm text-gray-500">
                          <Users className="w-4 h-4" />
                          <span>{event.attendees} registered</span>
                        </div>
                      </div>
                      <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                        Register
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Top Contributors */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <Award className="w-5 h-5 mr-2 text-blue-600" />
                Top Contributors
              </h3>
              <div className="space-y-4">
                {topContributors.map((contributor, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center text-xl">
                      {contributor.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h4 className="font-semibold text-gray-900">{contributor.name}</h4>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          contributor.badge === 'Expert' ? 'bg-purple-100 text-purple-800' :
                          contributor.badge === 'Mentor' ? 'bg-blue-100 text-blue-800' :
                          contributor.badge === 'Helper' ? 'bg-green-100 text-green-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {contributor.badge}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{contributor.title}</p>
                      <div className="flex items-center space-x-3 text-xs text-gray-500">
                        <span>{contributor.contributions} contributions</span>
                        <span>•</span>
                        <span>{contributor.reputation} reputation</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Community Guidelines */}
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-6 text-white">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <Heart className="w-5 h-5 mr-2" />
                Community Guidelines
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-2">
                  <span>•</span>
                  <span>Be respectful and constructive in all interactions</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span>•</span>
                  <span>Search before posting to avoid duplicates</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span>•</span>
                  <span>Use clear, descriptive titles for your posts</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span>•</span>
                  <span>Share knowledge and help others learn</span>
                </div>
              </div>
              <button className="w-full mt-4 bg-white text-blue-600 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Read Full Guidelines
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
