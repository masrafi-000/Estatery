import Link from "next/link"
import { ChevronRight, Shield } from "lucide-react"

export const metadata = {
  title: "Privacy Policy - Estatery",
  description: "Privacy policy and data protection for Estatery real estate platform",
}

export default function PrivacyPolicyPage() {
  const sections = [
    { id: "introduction", title: "1. Introduction" },
    { id: "information-collection", title: "2. Information We Collect" },
    { id: "information-usage", title: "3. How We Use Your Information" },
    { id: "data-protection", title: "4. Data Protection & Security" },
    { id: "property-data", title: "5. Property Data Handling" },
    { id: "agent-registration", title: "6. Agent Registration Data" },
    { id: "cookies", title: "7. Cookies & Tracking" },
    { id: "third-party", title: "8. Third-Party Services" },
    { id: "user-rights", title: "9. Your Rights" },
    { id: "contact", title: "10. Contact Us" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <Shield className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Privacy Policy</h1>
              <p className="text-muted-foreground">Last updated: December 2025</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Sidebar Navigation */}
          <div className="md:col-span-1">
            <div className="sticky top-20 space-y-2">
              <p className="text-sm font-semibold text-muted-foreground">On this page</p>
              {sections.map((section) => (
                <Link
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex items-center gap-2 text-sm transition-colors hover:text-primary"
                >
                  <ChevronRight className="h-4 w-4" />
                  <span>{section.title}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3 space-y-8">
            {/* Section 1 */}
            <section id="introduction" className="space-y-4">
              <h2 className="text-2xl font-bold">1. Introduction</h2>
              <p className="text-muted-foreground">
                At Estatery, we are committed to protecting your privacy and ensuring you have a positive experience on
                our platform. This Privacy Policy outlines how we collect, use, store, and protect your personal
                information when you use our website, mobile application, and services.
              </p>
              <p className="text-muted-foreground">
                Please read this policy carefully. By accessing and using Estatery, you acknowledge that you have read,
                understood, and agree to be bound by all the terms of this Privacy Policy.
              </p>
            </section>

            {/* Section 2 */}
            <section id="information-collection" className="space-y-4">
              <h2 className="text-2xl font-bold">2. Information We Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Personal Information</h3>
                  <ul className="mt-2 space-y-2 text-muted-foreground">
                    <li>• Name, email address, and phone number</li>
                    <li>• Physical address and residential preferences</li>
                    <li>• Account credentials and authentication information</li>
                    <li>• Payment and billing information</li>
                    <li>• Property preferences and search history</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold">Technical Information</h3>
                  <ul className="mt-2 space-y-2 text-muted-foreground">
                    <li>• IP address and device information</li>
                    <li>• Browser type and operating system</li>
                    <li>• Cookies and similar tracking technologies</li>
                    <li>• Usage data and interaction patterns</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section id="information-usage" className="space-y-4">
              <h2 className="text-2xl font-bold">3. How We Use Your Information</h2>
              <p className="text-muted-foreground">We use collected information for:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Providing, maintaining, and improving our services</li>
                <li>• Personalizing your experience and property recommendations</li>
                <li>• Processing transactions and sending related information</li>
                <li>• Sending marketing communications (with your consent)</li>
                <li>• Responding to inquiries and providing customer support</li>
                <li>• Conducting research and analytics to improve platform functionality</li>
                <li>• Detecting and preventing fraudulent activities</li>
                <li>• Complying with legal obligations and enforcing agreements</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section id="data-protection" className="space-y-4">
              <h2 className="text-2xl font-bold">4. Data Protection & Security</h2>
              <p className="text-muted-foreground">
                We implement industry-standard security measures to protect your personal information from unauthorized
                access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Encryption of data in transit and at rest</li>
                <li>• Secure socket layer (SSL) technology for data transmission</li>
                <li>• Regular security audits and updates</li>
                <li>• Restricted access to personal information by authorized personnel only</li>
                <li>• Multi-factor authentication for account protection</li>
              </ul>
              <p className="mt-4 rounded-lg bg-amber-50 p-4 text-sm text-amber-800 dark:bg-amber-950 dark:text-amber-200">
                No data transmission over the Internet is 100% secure. While we strive to protect your information, we
                cannot guarantee absolute security.
              </p>
            </section>

            {/* Section 5 */}
            <section id="property-data" className="space-y-4">
              <h2 className="text-2xl font-bold">5. Property Data Handling</h2>
              <p className="text-muted-foreground">
                Property listings and related information are treated with confidentiality. When you buy, sell, or rent
                property through Estatery:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Property details are shared only with authorized agents and interested parties</li>
                <li>• Your contact information is not displayed publicly without consent</li>
                <li>• Viewing requests and inquiries are handled through secure channels</li>
                <li>• Transaction history is encrypted and stored securely</li>
                <li>• Financial information is processed through secure payment gateways</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section id="agent-registration" className="space-y-4">
              <h2 className="text-2xl font-bold">6. Agent Registration Data</h2>
              <p className="text-muted-foreground">For real estate agents registering on Estatery:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Professional credentials and licenses are verified and stored securely</li>
                <li>• Contact information is displayed to potential clients as per agent preferences</li>
                <li>• Commission and payment information is encrypted</li>
                <li>• Agent performance metrics and reviews are anonymized when possible</li>
                <li>• Property management data is kept confidential and secure</li>
                <li>• Violation of conduct standards may result in data suspension</li>
              </ul>
              <p className="mt-4 text-muted-foreground">
                Agents agree to maintain confidentiality regarding client information and comply with all applicable
                real estate regulations.
              </p>
            </section>

            {/* Section 7 */}
            <section id="cookies" className="space-y-4">
              <h2 className="text-2xl font-bold">7. Cookies & Tracking</h2>
              <p className="text-muted-foreground">
                We use cookies and similar technologies to enhance your browsing experience:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Essential cookies for platform functionality</li>
                <li>• Analytics cookies to understand user behavior</li>
                <li>• Marketing cookies to personalize advertisements</li>
                <li>• Performance cookies to optimize load times</li>
              </ul>
              <p className="mt-4 text-muted-foreground">
                You can control cookie preferences through your browser settings. Disabling cookies may affect platform
                functionality.
              </p>
            </section>

            {/* Section 8 */}
            <section id="third-party" className="space-y-4">
              <h2 className="text-2xl font-bold">8. Third-Party Services</h2>
              <p className="text-muted-foreground">Estatery may share information with trusted third parties for:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Payment processing and fraud prevention</li>
                <li>• Analytics and performance monitoring</li>
                <li>• Customer support and communication platforms</li>
                <li>• Legal and compliance purposes</li>
              </ul>
              <p className="mt-4 text-muted-foreground">
                We ensure all third parties maintain similar privacy standards and confidentiality obligations.
              </p>
            </section>

            {/* Section 9 */}
            <section id="user-rights" className="space-y-4">
              <h2 className="text-2xl font-bold">9. Your Rights</h2>
              <p className="text-muted-foreground">You have the right to:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Access your personal information</li>
                <li>• Request correction of inaccurate data</li>
                <li>• Request deletion of your data (right to be forgotten)</li>
                <li>• Opt-out of marketing communications</li>
                <li>• Withdraw consent for data processing</li>
                <li>• Request data portability</li>
                <li>• File complaints with relevant authorities</li>
              </ul>
              <p className="mt-4 text-muted-foreground">
                To exercise these rights, please contact our privacy team using the information below.
              </p>
            </section>

            {/* Section 10 */}
            <section id="contact" className="space-y-4">
              <h2 className="text-2xl font-bold">10. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="mt-4 rounded-lg border border-border bg-muted/30 p-6">
                <p className="font-semibold">Privacy Team</p>
                <p className="text-muted-foreground">Email: privacy@estatery.com</p>
                <p className="text-muted-foreground">Address: 123 Real Estate Ave, Tech City, TC 12345</p>
                <p className="text-muted-foreground">Phone: +1 (555) 123-4567</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
