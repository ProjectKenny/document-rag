'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Shield, 
  Lock, 
  Eye,
  Server,
  Users,
  CheckCircle,
  Award,
  Globe,
  FileText,
  AlertTriangle,
  Key,
  Database
} from 'lucide-react';

export default function SecurityPage() {
  const securityFeatures = [
    {
      title: "End-to-End Encryption",
      description: "All data is encrypted in transit and at rest using AES-256 encryption standards.",
      icon: Lock,
      details: [
        "TLS 1.3 for data in transit",
        "AES-256 encryption at rest",
        "Zero-knowledge architecture",
        "Encrypted backups"
      ]
    },
    {
      title: "Access Controls",
      description: "Granular permissions and role-based access control to protect your sensitive documents.",
      icon: Users,
      details: [
        "Multi-factor authentication",
        "Role-based permissions",
        "Single sign-on (SSO)",
        "Session management"
      ]
    },
    {
      title: "Infrastructure Security",
      description: "Enterprise-grade infrastructure with 24/7 monitoring and threat detection.",
      icon: Server,
      details: [
        "SOC 2 Type II certified",
        "24/7 security monitoring",
        "Intrusion detection",
        "Regular penetration testing"
      ]
    },
    {
      title: "Data Privacy",
      description: "Your documents remain private and are never used to train our AI models.",
      icon: Eye,
      details: [
        "No model training on user data",
        "GDPR compliant",
        "Data residency options",
        "Right to deletion"
      ]
    }
  ];

  const certifications = [
    {
      name: "SOC 2 Type II",
      description: "Comprehensive security, availability, and confidentiality controls",
      icon: Award,
      status: "Certified",
      date: "2024"
    },
    {
      name: "ISO 27001",
      description: "International standard for information security management",
      icon: Shield,
      status: "In Progress",
      date: "Q1 2025"
    },
    {
      name: "GDPR Compliance",
      description: "Full compliance with European data protection regulations",
      icon: Globe,
      status: "Compliant",
      date: "2024"
    },
    {
      name: "HIPAA Ready",
      description: "Healthcare data protection standards for enterprise customers",
      icon: FileText,
      status: "Available",
      date: "2024"
    }
  ];

  const securityPractices = [
    {
      category: "Data Protection",
      practices: [
        "All data encrypted with AES-256",
        "Encrypted database connections",
        "Secure key management with HSM",
        "Regular security audits",
        "Data loss prevention (DLP)"
      ]
    },
    {
      category: "Access Management",
      practices: [
        "Multi-factor authentication required",
        "Role-based access control (RBAC)",
        "Single sign-on (SSO) integration",
        "Regular access reviews",
        "Privileged access management"
      ]
    },
    {
      category: "Infrastructure",
      practices: [
        "24/7 security operations center",
        "Intrusion detection and prevention",
        "Regular penetration testing",
        "Vulnerability management",
        "Incident response procedures"
      ]
    },
    {
      category: "Compliance",
      practices: [
        "SOC 2 Type II certification",
        "GDPR compliance framework",
        "Regular compliance audits",
        "Data processing agreements",
        "Privacy impact assessments"
      ]
    }
  ];

  const threatProtection = [
    {
      threat: "Data Breaches",
      protection: "Multi-layered security with encryption, access controls, and monitoring",
      icon: Shield
    },
    {
      threat: "Unauthorized Access",
      protection: "MFA, SSO, and role-based permissions with regular access reviews",
      icon: Key
    },
    {
      threat: "Data Loss",
      protection: "Encrypted backups, redundancy, and disaster recovery procedures",
      icon: Database
    },
    {
      threat: "Insider Threats",
      protection: "Principle of least privilege and comprehensive audit logging",
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Enterprise Security
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Your Data, Protected
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Document-RAG is built with enterprise-grade security from the ground up. 
            Your documents and data are protected with industry-leading security measures and compliance standards.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center space-x-3">
              <Shield className="w-5 h-5" />
              <span>Security Overview</span>
            </button>
            
            <button className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors duration-200 px-8 py-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 hover:border-blue-200">
              <FileText className="w-5 h-5" />
              <span className="font-medium">Download Security Whitepaper</span>
            </button>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Security Framework
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Multi-layered security architecture protecting your data at every level
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="p-8 bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <div className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Certifications & Compliance
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Independently verified security and compliance standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <cert.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{cert.description}</p>
                <div className="flex items-center justify-center space-x-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    cert.status === 'Certified' || cert.status === 'Compliant' ? 'bg-green-100 text-green-800' :
                    cert.status === 'Available' ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {cert.status}
                  </span>
                  <span className="text-xs text-gray-500">{cert.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Practices */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Security Best Practices
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive security measures across all aspects of our platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityPractices.map((category, index) => (
              <div key={index} className="p-8 bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-200/50">
                <h3 className="text-xl font-bold text-gray-900 mb-6">{category.category}</h3>
                <div className="space-y-3">
                  {category.practices.map((practice, practiceIndex) => (
                    <div key={practiceIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{practice}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Threat Protection */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Threat Protection
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              How we protect against common security threats
            </p>
          </div>

          <div className="space-y-6">
            {threatProtection.map((item, index) => (
              <div key={index} className="p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.threat}</h3>
                    <p className="text-gray-600">{item.protection}</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Contact */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-200/50">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Security Reporting</h2>
              <p className="text-xl text-gray-600">
                Found a security vulnerability? We take security seriously and appreciate responsible disclosure.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center p-6 bg-blue-50 rounded-2xl">
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Report Vulnerability</h3>
                <p className="text-gray-600 mb-4">
                  Send security reports to our dedicated security team
                </p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  security@document-rag.com
                </button>
              </div>

              <div className="text-center p-6 bg-purple-50 rounded-2xl">
                <Award className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Bug Bounty Program</h3>
                <p className="text-gray-600 mb-4">
                  Earn rewards for responsibly disclosing security issues
                </p>
                <button className="bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                  Learn More
                </button>
              </div>
            </div>

            <div className="mt-8 p-6 bg-yellow-50 border-l-4 border-yellow-500 rounded-lg">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-yellow-900 mb-1">Responsible Disclosure</h4>
                  <p className="text-yellow-800 text-sm">
                    Please do not publicly disclose security vulnerabilities until we have had a chance to address them. 
                    We commit to acknowledging reports within 24 hours and providing regular updates on our progress.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Questions About Security?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our security team is here to answer your questions and provide additional information about our security practices.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-xl">
              Contact Security Team
            </button>
            <button className="text-blue-600 hover:text-blue-800 transition-colors px-6 py-4 font-semibold">
              Download Security Whitepaper
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
