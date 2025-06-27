'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, UserCheck, FileText, Globe } from 'lucide-react';

export default function PrivacyPage() {
  const lastUpdated = "December 27, 2024";

  const sections = [
    {
      icon: FileText,
      title: "Information We Collect",
      content: [
        "Account information (name, email, company)",
        "Document content you upload to our platform",
        "Usage data and analytics",
        "Technical information (IP address, browser type)",
        "Communication records with our support team"
      ]
    },
    {
      icon: Lock,
      title: "How We Use Your Information",
      content: [
        "Provide and improve our document intelligence services",
        "Process and analyze your uploaded documents",
        "Communicate with you about your account and our services",
        "Ensure platform security and prevent fraud",
        "Comply with legal obligations"
      ]
    },
    {
      icon: Shield,
      title: "Data Security",
      content: [
        "End-to-end encryption for all data transmission",
        "AES-256 encryption for data at rest",
        "SOC 2 Type II compliance",
        "Regular security audits and penetration testing",
        "Multi-factor authentication for all accounts"
      ]
    },
    {
      icon: UserCheck,
      title: "Your Rights",
      content: [
        "Access your personal data",
        "Correct inaccurate information",
        "Delete your account and data",
        "Export your data",
        "Opt-out of marketing communications"
      ]
    },
    {
      icon: Eye,
      title: "Data Sharing",
      content: [
        "We never sell your personal information",
        "We don&apos;t use your documents to train our AI models",
        "Limited sharing with trusted service providers",
        "Legal compliance when required by law",
        "Your explicit consent for any other sharing"
      ]
    },
    {
      icon: Globe,
      title: "International Transfers",
      content: [
        "Data processed in secure facilities worldwide",
        "Adequate protection measures in place",
        "GDPR compliance for EU users",
        "Standard contractual clauses for transfers",
        "Regular compliance monitoring"
      ]
    }
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Your privacy is important to us. This policy explains how we collect, 
              use, and protect your information.
            </p>
            <p className="text-gray-500">
              Last updated: {lastUpdated}
            </p>
          </motion.div>

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-soft mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Our Commitment to Privacy
            </h2>
            <p className="text-gray-600 leading-relaxed">
              At Document-RAG, we understand that your documents contain sensitive and valuable information. 
              We are committed to protecting your privacy and maintaining the confidentiality of your data. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
              when you use our document intelligence platform.
            </p>
          </motion.div>

          {/* Privacy Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className="bg-white rounded-2xl p-8 shadow-soft"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {section.title}
                    </h3>
                    <ul className="space-y-2">
                      {section.content.map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Sections */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 space-y-8"
          >
            {/* Data Retention */}
            <div className="bg-white rounded-2xl p-8 shadow-soft">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Data Retention
              </h3>
              <p className="text-gray-600 mb-4">
                We retain your personal information only for as long as necessary to provide our services 
                and fulfill the purposes outlined in this Privacy Policy. When you delete your account, 
                we will delete your personal information within 30 days, except where we are required 
                to retain it for legal or regulatory purposes.
              </p>
              <p className="text-gray-600">
                Document content is deleted immediately upon your request or account deletion, 
                with secure deletion from all backup systems within 90 days.
              </p>
            </div>

            {/* Cookies */}
            <div className="bg-white rounded-2xl p-8 shadow-soft">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Cookies and Tracking
              </h3>
              <p className="text-gray-600 mb-4">
                We use cookies and similar technologies to enhance your experience, analyze usage patterns, 
                and improve our services. You can control cookie settings through your browser preferences.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Essential Cookies</h4>
                  <p className="text-sm text-gray-600">Required for basic platform functionality</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Analytics Cookies</h4>
                  <p className="text-sm text-gray-600">Help us understand how you use our platform</p>
                </div>
              </div>
            </div>

            {/* Children's Privacy */}
            <div className="bg-white rounded-2xl p-8 shadow-soft">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Children&apos;s Privacy
              </h3>
              <p className="text-gray-600">
                Our services are not intended for children under 13 years of age. We do not knowingly 
                collect personal information from children under 13. If you are a parent or guardian 
                and believe your child has provided us with personal information, please contact us 
                immediately.
              </p>
            </div>

            {/* Changes to Policy */}
            <div className="bg-white rounded-2xl p-8 shadow-soft">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Changes to This Privacy Policy
              </h3>
              <p className="text-gray-600 mb-4">
                We may update this Privacy Policy from time to time to reflect changes in our practices 
                or for other operational, legal, or regulatory reasons. We will notify you of any 
                material changes by posting the new Privacy Policy on this page and updating the 
                &quot;Last updated&quot; date.
              </p>
              <p className="text-gray-600">
                We encourage you to review this Privacy Policy periodically to stay informed about 
                how we are protecting your information.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Contact Us About Privacy
              </h3>
              <p className="text-gray-600 mb-6">
                If you have any questions about this Privacy Policy or our privacy practices, 
                please contact us:
              </p>
              <div className="space-y-2 text-gray-600">
                <p><strong>Email:</strong> privacy@document-rag.com</p>
                <p><strong>Address:</strong> 123 Innovation Drive, San Francisco, CA 94105</p>
                <p><strong>Data Protection Officer:</strong> dpo@document-rag.com</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
