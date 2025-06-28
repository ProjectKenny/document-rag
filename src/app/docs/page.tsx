'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Code, 
  Book, 
  Zap, 
  Shield,
  Copy,
  ExternalLink,
  CheckCircle,
  ArrowRight,
  Terminal,
  Globe,
  Key,
  Database
} from 'lucide-react';

export default function DocsPage() {
  const endpoints = [
    {
      method: "POST",
      endpoint: "/api/documents/upload",
      description: "Upload and process documents",
      params: ["file", "metadata", "options"]
    },
    {
      method: "GET", 
      endpoint: "/api/documents/{id}",
      description: "Retrieve document information",
      params: ["id", "include_content"]
    },
    {
      method: "POST",
      endpoint: "/api/query",
      description: "Query documents with natural language",
      params: ["query", "document_ids", "max_results"]
    },
    {
      method: "DELETE",
      endpoint: "/api/documents/{id}",
      description: "Delete a document",
      params: ["id"]
    }
  ];

  const sdks = [
    {
      name: "JavaScript/Node.js",
      icon: "🟨",
      install: "npm install @document-rag/sdk",
      example: `import { DocumentRAG } from '@document-rag/sdk';

const client = new DocumentRAG({
  apiKey: 'your-api-key'
});

const result = await client.query({
  query: 'What are the key findings?',
  documentIds: ['doc-123']
});`
    },
    {
      name: "Python",
      icon: "🐍",
      install: "pip install document-rag",
      example: `from document_rag import DocumentRAG

client = DocumentRAG(api_key='your-api-key')

result = client.query(
    query='What are the key findings?',
    document_ids=['doc-123']
)`
    },
    {
      name: "cURL",
      icon: "🌐",
      install: "Available by default",
      example: `curl -X POST https://api.document-rag.com/v1/query \\
  -H "Authorization: Bearer your-api-key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "query": "What are the key findings?",
    "document_ids": ["doc-123"]
  }'`
    }
  ];

  const features = [
    {
      icon: Zap,
      title: "High Performance",
      description: "Sub-second response times with 99.9% uptime SLA"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC 2 compliant with end-to-end encryption"
    },
    {
      icon: Globe,
      title: "Global CDN",
      description: "Distributed infrastructure for worldwide access"
    },
    {
      icon: Key,
      title: "API Key Management",
      description: "Secure authentication with role-based access"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              API Documentation
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Build with Document-RAG
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Integrate document intelligence into your applications with our powerful, 
              easy-to-use REST API and comprehensive SDKs.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-xl flex items-center space-x-2">
                <span>Get API Key</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 px-6 py-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50">
                <Book className="w-5 h-5" />
                <span>View Examples</span>
              </button>
            </div>
          </div>

          {/* Quick Start */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Terminal className="w-6 h-6 mr-3 text-blue-600" />
              Quick Start
            </h2>
            <div className="bg-gray-900 rounded-2xl p-6 text-green-400 font-mono text-sm overflow-x-auto">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-400"># Install the SDK</span>
                <button className="text-gray-400 hover:text-white transition-colors">
                  <Copy className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-2">
                <div>npm install @document-rag/sdk</div>
                <div className="text-gray-400"># or</div>
                <div>pip install document-rag</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* API Endpoints */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">API Endpoints</h2>
          
          <div className="grid gap-6">
            {endpoints.map((endpoint, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-3">
                      <span className={`px-3 py-1 rounded-lg text-sm font-semibold ${
                        endpoint.method === 'GET' ? 'bg-green-100 text-green-800' :
                        endpoint.method === 'POST' ? 'bg-blue-100 text-blue-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {endpoint.method}
                      </span>
                      <code className="text-lg font-mono text-gray-800">{endpoint.endpoint}</code>
                    </div>
                    <p className="text-gray-600 mb-3">{endpoint.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {endpoint.params.map((param, paramIndex) => (
                        <span key={paramIndex} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm font-mono">
                          {param}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button className="mt-4 lg:mt-0 lg:ml-6 text-blue-600 hover:text-blue-800 transition-colors flex items-center space-x-1">
                    <span>Try it</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SDKs */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Official SDKs</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {sdks.map((sdk, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <div className="flex items-center space-x-3 mb-6">
                  <span className="text-3xl">{sdk.icon}</span>
                  <h3 className="text-xl font-bold text-gray-900">{sdk.name}</h3>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Installation</h4>
                  <div className="bg-gray-100 rounded-lg p-3 font-mono text-sm text-gray-800">
                    {sdk.install}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Example</h4>
                  <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm text-green-400 overflow-x-auto">
                    <pre className="whitespace-pre-wrap">{sdk.example}</pre>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">API Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Start Building?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get your API key and start integrating document intelligence into your applications today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-xl">
              Get Started Free
            </button>
            <button className="text-blue-600 hover:text-blue-800 transition-colors px-6 py-4 font-semibold">
              View Full Documentation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
