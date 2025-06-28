'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Shield, 
  Settings, 
  Eye,
  BarChart3,
  Globe,
  CheckCircle,
  X,
  Info
} from 'lucide-react';

export default function CookiePolicyPage() {
  const cookieTypes = [
    {
      name: "Essential Cookies",
      description: "These cookies are necessary for the website to function and cannot be switched off in our systems.",
      icon: Shield,
      required: true,
      examples: [
        "Authentication and security",
        "Session management",
        "Load balancing",
        "CSRF protection"
      ]
    },
    {
      name: "Analytics Cookies",
      description: "These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.",
      icon: BarChart3,
      required: false,
      examples: [
        "Google Analytics",
        "Page view tracking",
        "User behavior analysis",
        "Performance monitoring"
      ]
    },
    {
      name: "Functional Cookies",
      description: "These cookies enable the website to provide enhanced functionality and personalization.",
      icon: Settings,
      required: false,
      examples: [
        "Language preferences",
        "Theme settings",
        "User interface customization",
        "Feature toggles"
      ]
    },
    {
      name: "Marketing Cookies",
      description: "These cookies may be set through our site by our advertising partners to build a profile of your interests.",
      icon: Eye,
      required: false,
      examples: [
        "Advertising targeting",
        "Social media integration",
        "Cross-site tracking",
        "Conversion tracking"
      ]
    }
  ];

  const cookieList = [
    {
      name: "_docrag_session",
      purpose: "Session management and authentication",
      type: "Essential",
      duration: "Session",
      domain: "document-rag.com"
    },
    {
      name: "_docrag_csrf",
      purpose: "CSRF protection",
      type: "Essential", 
      duration: "Session",
      domain: "document-rag.com"
    },
    {
      name: "_ga",
      purpose: "Google Analytics - distinguish users",
      type: "Analytics",
      duration: "2 years",
      domain: ".document-rag.com"
    },
    {
      name: "_gid",
      purpose: "Google Analytics - distinguish users",
      type: "Analytics",
      duration: "24 hours",
      domain: ".document-rag.com"
    },
    {
      name: "docrag_preferences",
      purpose: "Store user preferences and settings",
      type: "Functional",
      duration: "1 year",
      domain: "document-rag.com"
    },
    {
      name: "docrag_theme",
      purpose: "Remember theme selection",
      type: "Functional",
      duration: "1 year",
      domain: "document-rag.com"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Cookie Policy
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Transparency in Data Use
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            This Cookie Policy explains how Document-RAG uses cookies and similar technologies 
            to recognize you when you visit our website.
          </p>
          <div className="text-sm text-gray-500">
            Last updated: December 15, 2024
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* What Are Cookies */}
        <section className="mb-16">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What Are Cookies?</h2>
            <div className="prose prose-lg text-gray-600">
              <p>
                Cookies are small data files that are placed on your computer or mobile device when you visit a website. 
                Cookies are widely used by website owners to make their websites work, or to work more efficiently, 
                as well as to provide reporting information.
              </p>
              <p>
                Cookies set by the website owner (in this case, Document-RAG) are called "first party cookies". 
                Cookies set by parties other than the website owner are called "third party cookies". 
                Third party cookies enable third party features or functionality to be provided on or through the website.
              </p>
            </div>
          </div>
        </section>

        {/* Types of Cookies */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Types of Cookies We Use</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cookieTypes.map((type, index) => (
              <div key={index} className="p-8 bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-200/50">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <type.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{type.name}</h3>
                    <div className="flex items-center space-x-2">
                      {type.required ? (
                        <span className="flex items-center space-x-1 text-sm text-red-600">
                          <X className="w-4 h-4" />
                          <span>Required</span>
                        </span>
                      ) : (
                        <span className="flex items-center space-x-1 text-sm text-green-600">
                          <CheckCircle className="w-4 h-4" />
                          <span>Optional</span>
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Examples:</h4>
                  <ul className="space-y-1">
                    {type.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="text-sm text-gray-600 flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Cookie List */}
        <section className="mb-16">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Specific Cookies We Use</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Cookie Name</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Purpose</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Type</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {cookieList.map((cookie, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 font-mono text-sm text-gray-900">{cookie.name}</td>
                      <td className="py-3 px-4 text-sm text-gray-600">{cookie.purpose}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          cookie.type === 'Essential' ? 'bg-red-100 text-red-800' :
                          cookie.type === 'Analytics' ? 'bg-blue-100 text-blue-800' :
                          cookie.type === 'Functional' ? 'bg-green-100 text-green-800' :
                          'bg-purple-100 text-purple-800'
                        }`}>
                          {cookie.type}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-600">{cookie.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Managing Cookies */}
        <section className="mb-16">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Manage Cookies</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Browser Settings</h3>
                <p className="text-gray-600 mb-4">
                  Most web browsers allow you to control cookies through their settings preferences. 
                  However, if you limit the ability of websites to set cookies, you may worsen your overall user experience.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Chrome</h4>
                    <p className="text-sm text-gray-600">Settings → Privacy and security → Cookies and other site data</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Firefox</h4>
                    <p className="text-sm text-gray-600">Options → Privacy & Security → Cookies and Site Data</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Safari</h4>
                    <p className="text-sm text-gray-600">Preferences → Privacy → Manage Website Data</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Edge</h4>
                    <p className="text-sm text-gray-600">Settings → Cookies and site permissions → Cookies and site data</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Cookie Preferences</h3>
                <p className="text-gray-600 mb-4">
                  You can also manage your cookie preferences directly on our website using our cookie consent banner 
                  or by visiting our cookie preferences center.
                </p>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg">
                  Manage Cookie Preferences
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Third Party Cookies */}
        <section className="mb-16">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Third Party Cookies</h2>
            <div className="prose prose-lg text-gray-600">
              <p>
                In addition to our own cookies, we may also use various third-party cookies to report usage statistics 
                of the service, deliver advertisements on and through the service, and so on.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
                <div className="flex items-start space-x-3">
                  <Info className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-1">Google Analytics</h4>
                    <p className="text-blue-800 text-sm">
                      We use Google Analytics to analyze the use of our website. Google Analytics gathers information 
                      about website use by means of cookies. You can opt out of Google Analytics by visiting the 
                      Google Analytics opt-out page.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Updates */}
        <section className="mb-16">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Updates to This Policy</h2>
            <div className="prose prose-lg text-gray-600">
              <p>
                We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies 
                we use or for other operational, legal or regulatory reasons. Please therefore re-visit this Cookie Policy 
                regularly to stay informed about our use of cookies and related technologies.
              </p>
              <p>
                The date at the top of this Cookie Policy indicates when it was last updated.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section>
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Questions About Our Cookie Policy?</h2>
            <p className="text-blue-100 mb-6">
              If you have any questions about our use of cookies or other technologies, please contact us.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-2xl font-semibold hover:bg-gray-100 transition-colors">
                Contact Privacy Team
              </button>
              <button className="text-white hover:text-blue-100 transition-colors px-6 py-3 font-semibold">
                View Privacy Policy
              </button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
