import { ChevronRight, FileText } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Terms of Service - Estatery",
  description:
    "Terms of service and user agreement for Estatery real estate platform",
};

export default function TermsOfServicePage() {
  const sections = [
    { id: "acceptance", title: "1. Acceptance of Terms" },
    { id: "user-accounts", title: "2. User Accounts & Registration" },
    { id: "user-conduct", title: "3. User Conduct & Responsibilities" },
    { id: "property-transactions", title: "4. Property Transactions" },
    { id: "buying-selling", title: "5. Buying & Selling Properties" },
    { id: "renting", title: "6. Renting Properties" },
    { id: "agent-terms", title: "7. Agent Registration & Conduct" },
    { id: "content-ip", title: "8. Content & Intellectual Property" },
    { id: "liability", title: "9. Limitation of Liability" },
    { id: "dispute-resolution", title: "10. Dispute Resolution" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <FileText className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Terms of Service</h1>
              <p className="text-muted-foreground">
                Last updated: December 2025
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Sidebar Navigation */}
          <div className="md:col-span-1">
            <div className="sticky top-20 space-y-2">
              <p className="text-sm font-semibold text-muted-foreground">
                On this page
              </p>
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
            <section id="acceptance" className="space-y-4">
              <h2 className="text-2xl font-bold">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using the Estatery platform, website, mobile
                application, and services, you agree to be bound by these Terms
                of Service. If you do not agree to any part of these terms, you
                may not use our services. Estatery reserves the right to modify
                these terms at any time. Your continued use of the platform
                constitutes acceptance of the modified terms.
              </p>
            </section>

            {/* Section 2 */}
            <section id="user-accounts" className="space-y-4">
              <h2 className="text-2xl font-bold">
                2. User Accounts & Registration
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Account Creation</h3>
                  <ul className="mt-2 space-y-2 text-muted-foreground">
                    <li>
                      • You must provide accurate, complete, and current
                      information
                    </li>
                    <li>
                      • You are responsible for maintaining the confidentiality
                      of your password
                    </li>
                    <li>
                      • You agree to accept responsibility for all activities
                      under your account
                    </li>
                    <li>
                      • You must be at least 18 years old to create an account
                    </li>
                    <li>
                      • You cannot create multiple accounts or impersonate
                      another person
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold">Account Termination</h3>
                  <ul className="mt-2 space-y-2 text-muted-foreground">
                    <li>• You may delete your account at any time</li>
                    <li>
                      • Estatery may terminate accounts that violate these terms
                    </li>
                    <li>
                      • Termination may result in loss of access to all data
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section id="user-conduct" className="space-y-4">
              <h2 className="text-2xl font-bold">
                3. User Conduct & Responsibilities
              </h2>
              <p className="text-muted-foreground">
                When using Estatery, you agree not to:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  • Engage in harassment, threatening, or abusive behavior
                </li>
                <li>• Post false, misleading, or fraudulent information</li>
                <li>
                  • Attempt to access unauthorized areas or bypass security
                </li>
                <li>• Engage in spamming, phishing, or scamming activities</li>
                <li>• Upload malware, viruses, or malicious code</li>
                <li>• Violate intellectual property rights of others</li>
                <li>• Use the platform for illegal activities</li>
                <li>• Engage in price manipulation or market manipulation</li>
              </ul>
              <p className="mt-4 rounded-lg bg-red-50 p-4 text-sm text-red-800 dark:bg-red-950 dark:text-red-200">
                Violation of user conduct policies may result in account
                suspension or legal action.
              </p>
            </section>

            {/* Section 4 */}
            <section id="property-transactions" className="space-y-4">
              <h2 className="text-2xl font-bold">4. Property Transactions</h2>
              <p className="text-muted-foreground">
                Estatery provides a platform to connect buyers, sellers,
                renters, and agents. By using our platform for property
                transactions:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  • You acknowledge that Estatery is not a party to property
                  transactions
                </li>
                <li>
                  • You agree that all property information is provided in good
                  faith
                </li>
                <li>
                  • You are responsible for verifying property details and
                  conducting due diligence
                </li>
                <li>
                  • Estatery does not guarantee accuracy of property listings
                </li>
                <li>
                  • You agree to comply with all local, state, and federal real
                  estate laws
                </li>
              </ul>
            </section>

            {/* Section 5 */}
            <section id="buying-selling" className="space-y-4">
              <h2 className="text-2xl font-bold">
                5. Buying & Selling Properties
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Buyer Responsibilities</h3>
                  <ul className="mt-2 space-y-2 text-muted-foreground">
                    <li>• Conduct proper inspections and appraisals</li>
                    <li>• Verify property legal status and ownership</li>
                    <li>• Arrange for financing before making offers</li>
                    <li>• Honor agreed-upon contracts and commitments</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold">Seller Responsibilities</h3>
                  <ul className="mt-2 space-y-2 text-muted-foreground">
                    <li>
                      • Provide accurate property information and disclosures
                    </li>
                    <li>• Disclose all known defects and issues</li>
                    <li>• Maintain the property in agreed-upon condition</li>
                    <li>• Complete all legal documentation accurately</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section id="renting" className="space-y-4">
              <h2 className="text-2xl font-bold">6. Renting Properties</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Tenant Responsibilities</h3>
                  <ul className="mt-2 space-y-2 text-muted-foreground">
                    <li>• Pay rent on agreed-upon schedule</li>
                    <li>• Maintain the property in good condition</li>
                    <li>• Follow all lease terms and community rules</li>
                    <li>• Provide adequate notice before lease termination</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold">Landlord Responsibilities</h3>
                  <ul className="mt-2 space-y-2 text-muted-foreground">
                    <li>• Maintain habitable living conditions</li>
                    <li>• Provide required inspections and repairs</li>
                    <li>• Respect tenant privacy and rights</li>
                    <li>• Handle security deposits according to law</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 7 */}
            <section id="agent-terms" className="space-y-4">
              <h2 className="text-2xl font-bold">
                7. Agent Registration & Conduct
              </h2>
              <p className="text-muted-foreground">
                Real estate agents registering on Estatery agree to:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Maintain valid real estate licenses</li>
                <li>
                  • Comply with real estate commission rules and regulations
                </li>
                <li>• Provide accurate professional information</li>
                <li>• Maintain confidentiality of client information</li>
                <li>• Not engage in discriminatory practices</li>
                <li>• Represent properties honestly and accurately</li>
                <li>• Disclose any conflicts of interest</li>
                <li>• Handle disputes professionally and ethically</li>
              </ul>
              <p className="mt-4 text-muted-foreground">
                Agents who violate these standards may have their accounts
                suspended or terminated permanently.
              </p>
            </section>

            {/* Section 8 */}
            <section id="content-ip" className="space-y-4">
              <h2 className="text-2xl font-bold">
                8. Content & Intellectual Property
              </h2>
              <p className="text-muted-foreground">
                All content on Estatery, including text, graphics, logos, and
                images, is owned by Estatery or its content suppliers and is
                protected by copyright laws. You may not reproduce, distribute,
                or transmit any content without permission. Property listings
                posted by users remain the property of the original poster, but
                Estatery has the right to display and use them on the platform.
              </p>
            </section>

            {/* Section 9 */}
            <section id="liability" className="space-y-4">
              <h2 className="text-2xl font-bold">9. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                Estatery provides the platform "as is" without warranties. To
                the fullest extent permitted by law:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  • Estatery is not liable for any direct, indirect, or
                  consequential damages
                </li>
                <li>
                  • Estatery is not responsible for property condition or
                  transaction outcomes
                </li>
                <li>• Estatery is not liable for user-generated content</li>
                <li>
                  • Estatery is not liable for unauthorized access or data
                  breaches
                </li>
                <li>
                  • Maximum liability is limited to amount paid by user in last
                  12 months
                </li>
              </ul>
            </section>

            {/* Section 10 */}
            <section id="dispute-resolution" className="space-y-4">
              <h2 className="text-2xl font-bold">10. Dispute Resolution</h2>
              <p className="text-muted-foreground">
                Any disputes arising from these terms or the use of Estatery
                shall be resolved through:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Good faith negotiation between the parties</li>
                <li>• Mediation if negotiation fails</li>
                <li>• Binding arbitration if mediation is unsuccessful</li>
              </ul>
              <p className="mt-4 text-muted-foreground">
                This agreement shall be governed by the laws of the jurisdiction
                in which Estatery operates. You agree to submit to the
                jurisdiction of the courts in that location.
              </p>
              <div className="mt-4 rounded-lg border border-border bg-muted/30 p-4">
                <span className="font-semibold">Contact Information:</span>
                <p className="text-muted-foreground">
                  Email: legal@estatery.com
                </p>
                <p className="text-muted-foreground">
                  Address: 123 Real Estate Ave, Tech City, TC 12345
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
