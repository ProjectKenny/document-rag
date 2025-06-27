'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { FileText, Users, Shield, AlertTriangle, Scale, CreditCard } from 'lucide-react';

export default function TermsPage() {
  const lastUpdated = "December 27, 2024";

  const sections = [
    {
      icon: Users,
      title: "Acceptance of Terms",
      content: [
        "By accessing or using Document-RAG, you agree to be bound by these Terms",
        "You must be at least 18 years old to use our services",
        "If you're using our services on behalf of an organization, you represent that you have authority to bind that organization",
        "These Terms constitute a legally binding agreement between you and Document-RAG"
      ]
    },
    {
      icon: FileText,
      title: "Use of Services",
      content: [
        "You may use our services only for lawful purposes",
        "You are responsible for all content you upload to our platform",
        "You must not upload content that infringes on others' rights",
        "You must not attempt to reverse engineer or hack our services",
        "You must comply with all applicable laws and regulations"
      ]
    },
    {
      icon: Shield,
      title: "User Responsibilities",
      content: [
        "Maintain the security of your account credentials",
        "Ensure uploaded content complies with applicable laws",
        "Respect intellectual property rights of others",
        "Use our services in accordance with fair use policies",
        "Report any security vulnerabilities or abuse"
      ]
    },
    {
      icon: CreditCard,
      title: "Payment Terms",
      content: [
        "Subscription fees are billed in advance",
        "All fees are non-refundable except as required by law",
        "We may change pricing with 30 days notice",
        "Overdue accounts may be suspended or terminated",
        "You're responsible for all taxes related to your use"
      ]
    },
    {
      icon: AlertTriangle,
      title: "Prohibited Activities",
      content: [
        "Uploading malicious software or harmful content",
        "Attempting to gain unauthorized access to our systems",
        "Using our services to spam or harass others",
        "Violating any applicable laws or regulations",
        "Interfering with the proper functioning of our services"
      ]
    },
    {
      icon: Scale,
      title: "Limitation of Liability",
      content: [
        "Our services are provided 'as is' without warranties",
        "We are not liable for indirect or consequential damages",
        "Our total liability is limited to the amount you paid us",
        "You agree to indemnify us against claims arising from your use",
        "Some jurisdictions may not allow these limitations"
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
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              These terms govern your use of Document-RAG and outline our mutual 
              rights and responsibilities.
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
              Welcome to Document-RAG
            </h2>
            <p className="text-gray-600 leading-relaxed">
              These Terms of Service (&quot;Terms&quot;) govern your access to and use of Document-RAG&apos;s
              document intelligence platform and related services. By using our services, you 
              agree to these Terms. Please read them carefully before using our platform.
            </p>
          </motion.div>

          {/* Terms Sections */}
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
            {/* Intellectual Property */}
            <div className="bg-white rounded-2xl p-8 shadow-soft">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Intellectual Property Rights
              </h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  Document-RAG and its original content, features, and functionality are owned by 
                  Document-RAG Inc. and are protected by international copyright, trademark, patent, 
                  trade secret, and other intellectual property laws.
                </p>
                <p>
                  You retain all rights to the content you upload to our platform. By uploading 
                  content, you grant us a limited license to process, store, and analyze that content 
                  solely to provide our services to you.
                </p>
                <p>
                  You may not use our trademarks, logos, or other proprietary information without 
                  our express written permission.
                </p>
              </div>
            </div>

            {/* Data and Privacy */}
            <div className="bg-white rounded-2xl p-8 shadow-soft">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Data and Privacy
              </h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  Your privacy is important to us. Our collection and use of personal information 
                  is governed by our Privacy Policy, which is incorporated into these Terms by reference.
                </p>
                <p>
                  We implement appropriate technical and organizational measures to protect your data 
                  against unauthorized access, alteration, disclosure, or destruction.
                </p>
                <p>
                  You are responsible for ensuring that any personal data you upload complies with 
                  applicable data protection laws, including GDPR and CCPA where applicable.
                </p>
              </div>
            </div>

            {/* Service Availability */}
            <div className="bg-white rounded-2xl p-8 shadow-soft">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Service Availability and Modifications
              </h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  We strive to maintain high service availability but cannot guarantee uninterrupted 
                  access. We may perform maintenance, updates, or modifications that temporarily 
                  affect service availability.
                </p>
                <p>
                  We reserve the right to modify, suspend, or discontinue any part of our services 
                  at any time with reasonable notice to users.
                </p>
                <p>
                  We may update these Terms from time to time. Material changes will be communicated 
                  to users with at least 30 days notice.
                </p>
              </div>
            </div>

            {/* Termination */}
            <div className="bg-white rounded-2xl p-8 shadow-soft">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Termination
              </h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  You may terminate your account at any time by contacting our support team or 
                  using the account deletion feature in your dashboard.
                </p>
                <p>
                  We may suspend or terminate your account if you violate these Terms, engage in 
                  prohibited activities, or for other legitimate business reasons.
                </p>
                <p>
                  Upon termination, your access to the services will cease, and we will delete 
                  your data in accordance with our Privacy Policy and data retention policies.
                </p>
              </div>
            </div>

            {/* Governing Law */}
            <div className="bg-white rounded-2xl p-8 shadow-soft">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Governing Law and Disputes
              </h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  These Terms are governed by the laws of the State of California, United States, 
                  without regard to conflict of law principles.
                </p>
                <p>
                  Any disputes arising from these Terms or your use of our services will be resolved 
                  through binding arbitration in accordance with the rules of the American Arbitration 
                  Association.
                </p>
                <p>
                  You agree to resolve disputes individually and waive any right to participate in 
                  class action lawsuits or class-wide arbitration.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Questions About These Terms?
              </h3>
              <p className="text-gray-600 mb-6">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2 text-gray-600">
                <p><strong>Email:</strong> legal@document-rag.com</p>
                <p><strong>Address:</strong> 123 Innovation Drive, San Francisco, CA 94105</p>
                <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
