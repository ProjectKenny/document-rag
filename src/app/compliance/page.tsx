'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Shield, 
  CheckCircle, 
  FileText,
  Globe,
  Building,
  Award,
  Users,
  Lock,
  Eye,
  Download,
  ExternalLink,
  Calendar
} from 'lucide-react';

export default function CompliancePage() {
  const frameworks = [
    {
      name: "SOC 2 Type II",
      description: "Service Organization Control 2 certification for security, availability, and confidentiality",
      status: "Certified",
      date: "2024",
      icon: Award,
      details: [
        "Annual third-party audits",
        "Security controls validation",
        "Availability monitoring",
        "Confidentiality measures"
      ]
    },
    {
      name: "GDPR",
      description: "General Data Protection Regulation compliance for European data protection",
      status: "Compliant",
      date: "2024",
      icon: Globe,
      details: [
        "Data processing agreements",
        "Privacy by design",
        "Right to deletion",
        "Data portability"
      ]
    },
    {
      name: "CCPA",
      description: "California Consumer Privacy Act compliance for California residents",
      status: "Compliant",
      date: "2024",
      icon: Shield,
      details: [
        "Consumer rights protection",
        "Data transparency",
        "Opt-out mechanisms",
        "Non-discrimination policies"
      ]
    },
    {
      name: "HIPAA",
      description: "Health Insurance Portability and Accountability Act readiness for healthcare data",
      status: "Ready",
      date: "2024",
      icon: FileText,
      details: [
        "Business Associate Agreements",
        "PHI protection measures",
        "Access controls",
        "Audit logging"
      ]
    },
    {
      name: "ISO 27001",
      description: "International standard for information security management systems",
      status: "In Progress",
      date: "Q1 2025",
      icon: Building,
      details: [
        "Risk management framework",
        "Security policies",
        "Continuous improvement",
        "Management commitment"
      ]
    },
    {
      name: "FedRAMP",
      description: "Federal Risk and Authorization Management Program for government cloud services",
      status: "Planned",
      date: "Q2 2025",
      icon: Users,
      details: [
        "Government security standards",
        "Continuous monitoring",
        "Authorized cloud services",
        "Federal compliance"
      ]
    }
  ];

  const dataProtection = [
    {
      principle: "Data Minimization",
      description: "We collect only the data necessary for providing our services",
      icon: Eye,
      practices: [
        "Purpose limitation",
        "Storage limitation",
        "Regular data reviews",
        "Automated deletion"
      ]
    },
    {
      principle: "Transparency",
      description: "Clear communication about data collection, use, and processing",
      icon: FileText,
      practices: [
        "Privacy notices",
        "Data processing records",
        "Regular policy updates",
        "User notifications"
      ]
    },
    {
      principle: "Security",
      description: "Robust technical and organizational measures to protect data",
      icon: Lock,
      practices: [
        "Encryption at rest and in transit",
        "Access controls",
        "Regular security assessments",
        "Incident response procedures"
      ]
    },
    {
      principle: "Accountability",
      description: "Demonstrable compliance with data protection obligations",
      icon: CheckCircle,
      practices: [
        "Data protection impact assessments",
        "Compliance monitoring",
        "Staff training",
        "Third-party audits"
      ]
    }
  ];

  const regions = [
    {
      name: "United States",
      regulations: ["SOC 2", "CCPA", "HIPAA", "FERPA"],
      dataCenter: "US East, US West",
      status: "Active"
    },
    {
      name: "European Union",
      regulations: ["GDPR", "ePrivacy", "NIS2"],
      dataCenter: "EU Central",
      status: "Active"
    },
    {
      name: "United Kingdom",
      regulations: ["UK GDPR", "DPA 2018"],
      dataCenter: "UK South",
      status: "Active"
    },
    {
      name: "Canada",
      regulations: ["PIPEDA", "Provincial Privacy Laws"],
      dataCenter: "Canada Central",
      status: "Coming Soon"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Certified':
      case 'Compliant':
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'Ready':
        return 'bg-blue-100 text-blue-800';
      case 'In Progress':
        return 'bg-yellow-100 text-yellow-800';
      case 'Planned':
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
            Compliance & Governance
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Meeting Global Standards
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Document-RAG meets the highest standards for data protection, privacy, and security compliance. 
            We&apos;re committed to maintaining trust through transparent governance and regulatory adherence.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center space-x-3">
              <Shield className="w-5 h-5" />
              <span>View Certifications</span>
            </button>
            
            <button className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors duration-200 px-8 py-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 hover:border-blue-200">
              <Download className="w-5 h-5" />
              <span className="font-medium">Compliance Reports</span>
            </button>
          </div>
        </div>
      </section>

      {/* Compliance Frameworks */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Compliance Frameworks
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We adhere to industry-leading compliance standards and regulations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {frameworks.map((framework, index) => (
              <div key={index} className="p-8 bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <framework.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(framework.status)}`}>
                    {framework.status}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{framework.name}</h3>
                <p className="text-gray-600 mb-6">{framework.description}</p>
                
                <div className="space-y-2 mb-6">
                  {framework.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{detail}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Updated: {framework.date}</span>
                  <button className="text-blue-600 hover:text-blue-800 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Protection Principles */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Data Protection Principles
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our commitment to protecting your data through fundamental principles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dataProtection.map((principle, index) => (
              <div key={index} className="p-8 bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-200/50">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <principle.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{principle.principle}</h3>
                <p className="text-gray-600 mb-6">{principle.description}</p>
                <div className="space-y-2">
                  {principle.practices.map((practice, practiceIndex) => (
                    <div key={practiceIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{practice}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Compliance */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Regional Compliance
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Data residency and compliance across global regions
            </p>
          </div>

          <div className="space-y-6">
            {regions.map((region, index) => (
              <div key={index} className="p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-4">
                      <h3 className="text-xl font-bold text-gray-900">{region.name}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(region.status)}`}>
                        {region.status}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Applicable Regulations</h4>
                        <div className="flex flex-wrap gap-2">
                          {region.regulations.map((regulation, regIndex) => (
                            <span key={regIndex} className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                              {regulation}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Data Centers</h4>
                        <p className="text-gray-600">{region.dataCenter}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 lg:mt-0 lg:ml-8">
                    <button className="text-blue-600 hover:text-blue-800 transition-colors font-semibold">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Resources */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Compliance Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Access our compliance documentation and reports
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "SOC 2 Type II Report",
                description: "Comprehensive security and compliance audit report",
                type: "Audit Report",
                date: "2024",
                restricted: true
              },
              {
                title: "Privacy Policy",
                description: "Detailed privacy practices and data handling procedures",
                type: "Policy Document",
                date: "2024",
                restricted: false
              },
              {
                title: "Data Processing Agreement",
                description: "Standard DPA template for enterprise customers",
                type: "Legal Document",
                date: "2024",
                restricted: false
              },
              {
                title: "Security Whitepaper",
                description: "Technical overview of our security architecture",
                type: "Technical Document",
                date: "2024",
                restricted: false
              },
              {
                title: "Compliance Questionnaire",
                description: "Standard security questionnaire responses",
                type: "Questionnaire",
                date: "2024",
                restricted: true
              },
              {
                title: "Penetration Test Results",
                description: "Third-party security assessment summary",
                type: "Security Report",
                date: "2024",
                restricted: true
              }
            ].map((resource, index) => (
              <div key={index} className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <FileText className="w-8 h-8 text-blue-600" />
                  <span className="text-xs text-gray-500">{resource.date}</span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                    {resource.type}
                  </span>
                  <button className={`flex items-center space-x-1 text-sm font-medium transition-colors ${
                    resource.restricted 
                      ? 'text-gray-400 cursor-not-allowed' 
                      : 'text-blue-600 hover:text-blue-800'
                  }`}>
                    <Download className="w-4 h-4" />
                    <span>{resource.restricted ? 'Restricted' : 'Download'}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Compliance Questions?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our compliance team is here to help with your regulatory requirements and questions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-xl">
              Contact Compliance Team
            </button>
            <button className="text-blue-600 hover:text-blue-800 transition-colors px-6 py-4 font-semibold">
              Schedule Compliance Call
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
