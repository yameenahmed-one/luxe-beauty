'use client'

import { motion } from 'framer-motion'
import { Shield, Sparkles } from 'lucide-react'

const sections = [
  {
    title: '1. Information We Collect',
    content: 'We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support. This includes your name, email address, phone number, billing and shipping address, and payment information. We also automatically collect certain information about your device and how you interact with our Services, including your IP address, browser type, and pages visited.',
  },
  {
    title: '2. How We Use Your Information',
    content: 'We use the information we collect to process your orders and provide our Services, communicate with you about your orders and account, send you marketing communications (with your consent), improve and personalize your experience, detect and prevent fraud, and comply with legal obligations.',
  },
  {
    title: '3. Sharing of Information',
    content: 'We do not sell your personal information. We share your information with third-party service providers who help us operate our business (payment processors, shipping companies, email providers). All our partners are bound by strict data protection agreements.',
  },
  {
    title: '4. Data Security',
    content: 'We take appropriate measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. All transactions on Luxe Beauty are protected with SSL encryption. We are PCI-DSS compliant for payment processing.',
  },
  {
    title: '5. Cookies',
    content: 'We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand user behavior. You can control cookies through your browser settings. Disabling cookies may affect certain features of our Services.',
  },
  {
    title: '6. Your Rights',
    content: 'You have the right to access, correct, or delete your personal information. You may also opt-out of marketing communications at any time. To exercise these rights, contact us at privacy@luxebeauty.in.',
  },
  {
    title: '7. Contact Us',
    content: 'If you have questions about this Privacy Policy, please contact us at: Luxe Beauty, 123 Beauty Lane, Mumbai, Maharashtra 400050, India. Email: privacy@luxebeauty.in | Phone: +91 98765 43210',
  },
]

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center py-12">
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <h1 className="font-playfair text-4xl font-bold text-dark mb-4">Privacy Policy</h1>
          <p className="text-gray-500 font-poppins">Last updated: December 20, 2024</p>
          <p className="text-gray-500 font-poppins mt-3 max-w-2xl mx-auto">
            At Luxe Beauty, we are committed to protecting your privacy. This policy explains how we collect,
            use, and safeguard your personal information.
          </p>
        </motion.div>

        <div className="space-y-6">
          {sections.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-3xl p-8 shadow-card"
            >
              <h2 className="font-playfair text-xl font-bold text-dark mb-4">{section.title}</h2>
              <p className="text-gray-500 font-poppins text-sm leading-relaxed">{section.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

