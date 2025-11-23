"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function TermsAndConditions() {
  const [activeTab, setActiveTab] = useState("customers");

  return (
    <div className={styles.termsPage}>
      {/* Sticky Header */}
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.logoSection}>
            <div className={styles.logo}>TAKATAK</div>
            <button className={styles.exploreBtn}>Explore ▼</button>
          </div>
          <div className={styles.authButtons}>
            <button className={styles.loginBtn}>Login</button>
            <button className={styles.joinBtn}>Join as a Professional</button>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className={styles.tabsContainer}>
        <div className={styles.tabs}>
          <div
            className={`${styles.tab} ${activeTab === "customers" ? styles.active : ""}`}
            onClick={() => setActiveTab("customers")}
          >
            Customers
          </div>
          <div
            className={`${styles.tab} ${activeTab === "professionals" ? styles.active : ""}`}
            onClick={() => setActiveTab("professionals")}
          >
            Professionals
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className={styles.servicesSection}>
        <div className={styles.servicesContainer}>
          {activeTab === "customers" && (
            <div className={styles.servicesGrid}>
              <a href="#" className={styles.serviceCard}>
                <div className={styles.serviceIcon}>🎯</div>
                <div className={styles.serviceTitle}>Today's Deals</div>
              </a>
              <a href="#" className={styles.serviceCard}>
                <div className={styles.serviceIcon}>🌐</div>
                <div className={styles.serviceTitle}>Domain</div>
              </a>
              <a href="#" className={styles.serviceCard}>
                <div className={styles.serviceIcon}>🖥️</div>
                <div className={styles.serviceTitle}>Web Hosting</div>
              </a>
              <a href="#" className={styles.serviceCard}>
                <div className={styles.serviceIcon}>📱</div>
                <div className={styles.serviceTitle}>Mobile Apps</div>
              </a>
            </div>
          )}
          {activeTab === "professionals" && (
            <div className={styles.servicesGrid}>
              <a href="#" className={styles.serviceCard}>
                <div className={styles.serviceIcon}>⚙️</div>
                <div className={styles.serviceTitle}>Hosting for WordPress</div>
              </a>
              <a href="#" className={styles.serviceCard}>
                <div className={styles.serviceIcon}>🔒</div>
                <div className={styles.serviceTitle}>SSL Certificates</div>
              </a>
              <a href="#" className={styles.serviceCard}>
                <div className={styles.serviceIcon}>🏗️</div>
                <div className={styles.serviceTitle}>Build Your Website</div>
              </a>
              <a href="#" className={styles.serviceCard}>
                <div className={styles.serviceIcon}>📊</div>
                <div className={styles.serviceTitle}>CRM & Dashboard</div>
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Main Terms Content */}
      <main className={styles.legalContainer}>
        <div className={styles.pageTitle}>
          <h1>TAKATAK Terms & Conditions</h1>
          <div className={styles.lastUpdated}>Last Updated: October 2025</div>
        </div>

        {/* Section 1 */}
        <section className={styles.section}>
          <h2>1. INTRODUCTION & ACCEPTANCE</h2>
          <p>
            By (a) creating an account, (b) accepting a Quote, (c) clicking "Approve", (d) making payment, (e) using or accessing any TAKATAK service, or (f) otherwise interacting with TAKATAK in a manner that indicates assent, you (the "Client") agree to be bound by this Master Service Agreement (the "Agreement"), the Quote, any attached Statement of Work ("SOW") and TAKATAK policies referenced herein. This Agreement is English only. If you are entering into this Agreement on behalf of an entity, you represent that you have authority to bind that entity.
          </p>
        </section>

        {/* Section 2 */}
        <section className={styles.section}>
          <h2>2. DEFINITIONS</h2>
          <p><strong>"Agreement"</strong> — this MSA, the Quote, SOW(s), and referenced policies.</p>
          <p><strong>"Quote"</strong> — document listing items, pricing, terms specific to the order.</p>
          <p><strong>"Services"</strong> — the TAKATAK products, hosted services, APIs, dashboards, integrations, managed hosting, domain registration, marketing services, tokens and other deliverables described in the Quote or SOW.</p>
          <p><strong>"Client Data"</strong> — all electronic data, content, and files uploaded, provided, or created by Client via the Services.</p>
          <p><strong>"Confidential Information"</strong> — non-public business information clearly identified as confidential or that a reasonable person should understand to be confidential.</p>
          <p><strong>"Fees"</strong> — all charges invoiced by TAKATAK, including recurring fees, setup fees, domain fees, transaction fees, and other amounts payable under the Quote.</p>
          <p><strong>"Zero Liability Statement"</strong> — TAKATAK policy located at <a href="https://takatak.ca/legal/zero-liability" target="_blank">https://takatak.ca/legal/zero-liability</a> (incorporated by reference).</p>
        </section>

        {/* Section 3 */}
        <section className={styles.section}>
          <h2>3. SCOPE OF SERVICES</h2>
          <p>3.1 TAKATAK will provide Services as described in the Quote and SOW(s). Only items expressly listed in the Quote are included. Additional services require a separate Quote/SOW and may be billable.</p>
          <p>3.2 TAKATAK may provide optional, beta or experimental features; such programs are subject to separate terms and may be changed, suspended or discontinued at any time.</p>
        </section>

        {/* Section 4 */}
        <section className={styles.section}>
          <h2>4. PAYMENT, BILLING & AUTHORIZATION</h2>
          <p>4.1 Billing & Currency. Fees are charged in the currency shown in the Quote (default: CAD). Prices exclude taxes, duties, and export fees.</p>
          <p>4.2 Payment Methods. Client authorizes TAKATAK (or TAKATAK's payment processor) to charge the payment method on file for Fees and any unpaid balances, including recurring charges and renewal amounts. Client shall keep payment information current.</p>
          <p>4.3 Automatic Billing & Auto-Renewal. Unless Client provides notice as stated in Section 6, all recurring Services auto-renew at the end of each term for successive terms and will be billed using the stored payment method.</p>
          <p>4.4 Invoice Terms. Invoices are due upon receipt unless otherwise stated. Overdue amounts may incur interest of 2% per month (24% APR) or the maximum allowed by law.</p>
          <p>4.5 Payment Security & 3-D Secure. TAKATAK may require 3-D Secure or equivalent authentication for card payments. TAKATAK will not be liable for failed authentication caused by Client's bank.</p>
          <p>4.6 Payment Disputes & Chargebacks. Client must notify TAKATAK of payment disputes within 30 days. Unjustified chargebacks will result in recovery fees of $35 USD (or local equivalent) plus costs incurred.</p>
        </section>

        {/* Section 5 */}
        <section className={styles.section}>
          <h2>5. FEES, TAXES & REFUNDS</h2>
          <p>5.1 Non-Refundable Fees. Setup fees, domain registration fees once submitted to registrars, and third-party licence fees are non-refundable unless expressly stated.</p>
          <p>5.2 Refund Policy. Hosting/Digital tools: 7-day money back on first-time purchases (unless otherwise noted). Custom projects are non-refundable once work begins.</p>
          <p>5.3 Taxes. Client is responsible for all applicable taxes, duties and fees related to the Services, except TAKATAK's corporate income taxes. TAKATAK may charge taxes where required.</p>
        </section>

        {/* Section 6 */}
        <section className={styles.section}>
          <h2>6. TERM, RENEWAL & EARLY TERMINATION</h2>
          <p>6.1 Term. Standard initial term is as specified in the Quote (commonly 24 months). Term commences on the earlier of service activation or domain registration (the "Start Date").</p>
          <p>6.2 Renewal. Agreement auto-renews for successive 12-month periods at then-current rates unless a party gives written notice at least 60 days prior to term end.</p>
          <p>6.3 Early Termination by Client. If Client terminates early without TAKATAK cause, Client pays an Early Termination Fee equal to the lesser of: (a) 40% of remaining recurring fees for the unexpired term; or (b) six (6) months of recurring fees. Promotional discounts will be clawed back. Domain and third-party fees already paid are non-refundable.</p>
          <p>6.4 Termination for Cause. Either party may terminate for material breach if the breaching party fails to cure within 30 days after written notice (or immediately for severe security or legal risk). On termination for TAKATAK's uncured material breach, Client will be entitled to pro rata refund of pre-paid amounts for unused services.</p>
          <p>6.5 Effect of Termination. Upon termination, TAKATAK may suspend services and remove Client Data after required notice and any applicable retrieval period; Client remains liable for unpaid Fees and termination charges.</p>
        </section>

        {/* Section 7 */}
        <section className={styles.section}>
          <h2>7. DOMAINS, DNS & THIRD-PARTY SERVICES</h2>
          <p>7.1 Domain Registration. Domain orders submitted to registrars are final and fees non-refundable. Client is registrant and responsible for domain accuracy. TAKATAK may be listed as technical contact.</p>
          <p>7.2 Transfers & DNS. Transfers and DNS changes require account in good standing; expired domains may incur redemption fees.</p>
          <p>7.3 Third-Party Services. Services may depend on third-party providers (registrars, CDN, payment processors, API providers). TAKATAK is not liable for third-party failures; such outages are excluded from uptime calculations.</p>
        </section>

        {/* Section 8 */}
        <section className={styles.section}>
          <h2>8. SERVICE LEVELS, MAINTENANCE & CREDITS</h2>
          <p>8.1 Target Uptime. TAKATAK targets 99.9% monthly uptime for hosting. This target is a goal and subject to exclusions below.</p>
          <p>8.2 Exclusions. Scheduled maintenance, emergency maintenance, force majeure, upstream provider failures, and Client's systems are excluded from uptime.</p>
          <p>8.3 Service Credits. If TAKATAK fails materially to meet uptime targets, Client's sole and exclusive remedy is a service credit limited to the monthly hosting fee for the affected service. Credits are requested in writing within 30 days. Credits are not monetary refunds and do not constitute additional damages.</p>
        </section>

        {/* Section 9 */}
        <section className={styles.section}>
          <h2>9. ACCEPTABLE USE & PROHIBITED ACTIVITIES</h2>
          <p>9.1 Client Obligations. Client shall use Services lawfully, not infringe IP, and not interfere with Service operation.</p>
          <p>9.2 Prohibited Activities. No illegal content, fraud, spam, unsolicited marketing, malware, theft of service, brute force attacks, DDoS, distribution of copyrighted content without authorization, or activities violating export controls or sanctions. TAKATAK reserves the right to suspend immediately if activity threatens security, stability, or legal compliance.</p>
        </section>

        {/* Section 10 */}
        <section className={styles.section}>
          <h2>10. ACCOUNT SUSPENSION, COLLECTIONS & CHARGEBACKS</h2>
          <p>10.1 Overdue Accounts. Accounts &gt;10 days overdue may be suspended; &gt;30 days overdue may be terminated. Reactivation fees and recovery costs may apply.</p>

          {/* <p>10.1 Overdue Accounts. Accounts >10 days overdue may be suspended; >30 days overdue may be terminated. Reactivation fees and recovery costs may apply.</p> */}
          <p>10.2 Collections. TAKATAK may charge collection fees, interest, and costs of legal action to recover unpaid amounts.</p>
          <p>10.3 Chargebacks. Client agrees to resolve disputes with TAKATAK prior to initiating chargebacks. Chargebacks may incur administrative fee $35 plus incurred costs.</p>
        </section>

        {/* Section 11 */}
        <section className={styles.section}>
          <h2>11. DATA, BACKUPS & RETENTION</h2>
          <p>11.1 Client Data Responsibility. Client is responsible for backups, content accuracy, legal compliance, and permissions. TAKATAK may maintain routine backups on a best-effort basis but does not guarantee restore.</p>
          <p>11.2 Data Retention Post-Termination. TAKATAK may retain Client Data for a retrieval period (commonly 30 days) after termination; thereafter TAKATAK may delete backups and data. Client should export data prior to termination.</p>
          <p>11.3 Data Export & Migration. Export requests may be subject to fees if outside standard migration offerings.</p>
        </section>

        {/* Section 12 */}
        <section className={styles.section}>
          <h2>12. SECURITY & INCIDENT RESPONSE</h2>
          <p>12.1 Controls. TAKATAK implements commercially reasonable security controls (TLS, access controls, encrypted storage where appropriate). Client must use strong credentials and multi-factor auth where available.</p>
          <p>12.2 Incident Response. TAKATAK will notify Client of confirmed security incidents impacting Client Data promptly and will provide information on remediation. Notifications and remediation times vary by incident severity.</p>
          <p>12.3 No Absolute Guarantee. No provider can guarantee absolute security or prevent all breaches.</p>
        </section>

        {/* Section 13 */}
        <section className={styles.section}>
          <h2>13. PRIVACY & PERSONAL INFORMATION</h2>
          <p>13.1 Privacy Policy. TAKATAK processes personal data per its Privacy & Personal Information Policy: <a href="https://takatak.ca/legal/privacy-personal-information" target="_blank">https://takatak.ca/legal/privacy-personal-information</a>. That policy is incorporated by reference.</p>
          <p>13.2 Data Processing Addendum (DPA). Where TAKATAK processes personal data on Client's behalf per data protection laws (e.g., GDPR), a DPA will apply (Annex C).</p>
          <p>13.3 Client Responsibilities. Client represents it has lawful basis to collect and provide personal data to TAKATAK and will ensure notices and consents are in place.</p>
        </section>

        {/* Section 14 */}
        <section className={styles.section}>
          <h2>14. INTELLECTUAL PROPERTY & LICENSE GRANTS</h2>
          <p>14.1 Client Ownership. Client retains ownership of Client Data and Client-created IP.</p>
          <p>14.2 TAKATAK Ownership. TAKATAK retains ownership of its platform, software, templates, code, methodologies and proprietary technology.</p>
          <p>14.3 License to Deliver Services. Client grants TAKATAK a limited, worldwide, non-exclusive license to use, host, copy, display and transmit Client Data solely to provide the Services.</p>
          <p>14.4 Feedback. Any feedback provided to TAKATAK may be used without restriction.</p>
        </section>

        {/* Section 15 */}
        <section className={styles.section}>
          <h2>15. CONFIDENTIALITY</h2>
          <p>15.1 Confidentiality Obligation. Each party shall protect Confidential Information of the other using at least the same degree of care it uses to protect its own confidential information.</p>
          <p>15.2 Exceptions. Information that is public, independently developed, or required by law may be disclosed.</p>
          <p>15.3 Duration. Obligations continue for three years post-termination or longer if law requires.</p>
        </section>

        {/* Section 16 */}
        <section className={styles.section}>
          <h2>16. WARRANTIES & DISCLAIMERS</h2>
          <p>16.1 No Other Warranties. Services are provided "as is" and TAKATAK disclaims all warranties except those expressly stated in writing.</p>
          <p>16.2 Limitation. TAKATAK does not guarantee uninterrupted, error-free service; Client assumes risk for reliance on Services.</p>
        </section>

        {/* Section 17 */}
        <section className={styles.section}>
          <h2>17. LIMITATION OF LIABILITY</h2>
          <p>17.1 Cap. Except for payment obligations, TAKATAK's aggregate liability shall not exceed the fees paid by Client in the 12 months preceding the claim.</p>
          <p>17.2 Exclusion. TAKATAK is not liable for lost profits, indirect, incidental, special, punitive or consequential damages.</p>
        </section>

        {/* Section 18 */}
        <section className={styles.section}>
          <h2>18. INDEMNIFICATION</h2>
          <p>Client will indemnify and hold harmless TAKATAK and its officers, employees, agents from claims arising from Client Data, breach of Agreement, or violation of law.</p>
        </section>

        {/* Section 19 */}
        <section className={styles.section}>
          <h2>19. DISPUTE RESOLUTION & GOVERNING LAW</h2>
          <p>19.1 Governing Law. This Agreement is governed by the laws of Ontario, Canada, without regard to conflict-of-law principles.</p>
          <p>19.2 Dispute Resolution. Parties shall first attempt negotiation and mediation. Litigation may proceed if dispute cannot be resolved amicably.</p>
        </section>

        {/* Section 20 */}
        <section className={styles.section}>
          <h2>20. FORCE MAJEURE</h2>
          <p>Neither party is liable for delays or failures caused by events beyond reasonable control (e.g., natural disasters, war, strikes, internet outages).</p>
        </section>

        {/* Section 21 */}
        <section className={styles.section}>
          <h2>21. NOTICES</h2>
          <p>All notices must be in writing, delivered by email, postal mail, or via the platform as specified in the Agreement. Notices are effective upon receipt.</p>
        </section>

        {/* Section 22 */}
        <section className={styles.section}>
          <h2>22. ASSIGNMENT</h2>
          <p>Client may not assign or transfer obligations without TAKATAK written consent. TAKATAK may assign rights and obligations to affiliates or acquirers.</p>
        </section>

        {/* Section 23 */}
        <section className={styles.section}>
          <h2>23. ENTIRE AGREEMENT</h2>
          <p>This Agreement, including Quotes, SOWs, and referenced policies, constitutes the entire agreement between parties and supersedes all prior agreements.</p>
        </section>

        {/* Section 24 */}
        <section className={styles.section}>
          <h2>24. SEVERABILITY</h2>
          <p>If any provision is held invalid, illegal, or unenforceable, remaining provisions remain in full force and effect.</p>
        </section>

        {/* Section 25 */}
        <section className={styles.section}>
          <h2>25. AMENDMENTS</h2>
          <p>TAKATAK may update policies or terms with notice via email or platform. Continued use constitutes acceptance.</p>
        </section>

        {/* Section 26 */}
        <section className={styles.section}>
          <h2>26. THIRD-PARTY BENEFICIARIES</h2>
          <p>No third party has any right to enforce this Agreement unless expressly stated.</p>
        </section>

        {/* Section 27 */}
        <section className={styles.section}>
          <h2>27. SURVIVAL</h2>
          <p>Provisions regarding confidentiality, indemnification, warranties, limitation of liability, governing law, and dispute resolution survive termination or expiration.</p>
        </section>

        {/* Section 28 */}
        <section className={styles.section}>
          <h2>28. ELECTRONIC SIGNATURES</h2>
          <p>Execution or approval of Quotes and electronic acceptance has same legal effect as manual signature.</p>
        </section>

        {/* Section 29 */}
        <section className={styles.section}>
          <h2>29. DATA PROCESSING ADDENDUM</h2>
          <p>Where applicable, TAKATAK acts as Processor and implements appropriate security, privacy and technical controls. Full DPA is incorporated as Annex C.</p>
        </section>

        {/* Section 30 */}
        <section className={styles.section}>
          <h2>30. CONTACT & POLICY LINKS</h2>
          <p><strong>Legal:</strong> legal@takatak.ca</p>
          <p><strong>Support:</strong> support@takatak.ca</p>
          <p><strong>Billing:</strong> billing@takatak.ca</p>
          <p>Policy Links (incorporated by reference):</p>
          <ul>
            <li>Terms & Conditions (web version)</li>
            <li>Quote Policy</li>
            <li>Privacy & Personal Information</li>
            <li>Zero Liability Statement</li>
            <li>Data Processing Addendum (DPA)</li>
          </ul>
        </section>

        {/* Annex B */}
        <section className={styles.section}>
          <h2>ANNEX B — SUPPORT & ESCALATION</h2>
          <p>Business Hours: Mon–Fri, 09:00–17:00 EST (holidays excluded)</p>
          <p>Support Channels: Portal, Email, Phone (emergency line for critical infrastructure incidents)</p>
          <p>Response Targets: Severity 1 — 1 hour; Severity 2 — 4 hours; Severity 3 — 24 hours (see full SLA in your client dashboard).</p>
        </section>

        {/* Annex C */}
        <section className={styles.section}>
          <h2>ANNEX C — DATA PROCESSING ADDENDUM (SUMMARY)</h2>
          <p>If applicable, TAKATAK will act as Processor for Client Data and implement appropriate technical and organizational measures. The DPA to be executed or referenced shall govern processing specifications, international transfers, subprocessors, and rights of data subjects.</p>
        </section>

        {/* Footer */}
        <footer className={styles.footer}>
          <p>&copy; 2025 TAKATAK. All rights reserved.</p>
          <p>Questions? Contact <a href="mailto:legal@takatak.ca">legal@takatak.ca</a></p>
        </footer>
      </main>
    </div>
  );
}





// "use client"
// import { useState } from "react";
// import styles from "./page.module.css";

// export default function PrivacyPolicy() {
//   const [activeTab, setActiveTab] = useState("customers");

//   return (
//     <div className={styles.privacyPage}>
//       {/* Header */}
//       <header className={styles.header}>
//         <div className={styles.headerContainer}>
//           <div className={styles.logoSection}>
//             <div className={styles.logo}>TAKATAK</div>
//             <button className={styles.exploreBtn}>Explore ▼</button>
//           </div>
//           <div className={styles.authButtons}>
//             <button className={styles.loginBtn}>Login</button>
//             <button className={styles.joinBtn}>
//               <span>👤</span> Join as a Professional
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* Tabs */}
//       <div className={styles.tabsContainer}>
//         <div className={styles.tabs}>
//           <div
//             className={`${styles.tab} ${activeTab === "customers" ? styles.active : ""}`}
//             onClick={() => setActiveTab("customers")}
//           >
//             Customers
//           </div>
//           <div
//             className={`${styles.tab} ${activeTab === "professionals" ? styles.active : ""}`}
//             onClick={() => setActiveTab("professionals")}
//           >
//             Professionals
//           </div>
//         </div>
//       </div>

//       {/* Services Section */}
//       <div className={styles.servicesSection}>
//         <div className={styles.servicesContainer}>
//           {activeTab === "customers" && (
//             <div className={styles.servicesGrid}>
//               <a href="#" className={styles.serviceCard}>
//                 <div className={styles.serviceIcon}>🎯</div>
//                 <div className={styles.serviceTitle}>Today's Deals</div>
//               </a>
//               <a href="#" className={styles.serviceCard}>
//                 <div className={styles.serviceIcon}>🌐</div>
//                 <div className={styles.serviceTitle}>Domain</div>
//               </a>
//               <a href="#" className={styles.serviceCard}>
//                 <div className={styles.serviceIcon}>🖥️</div>
//                 <div className={styles.serviceTitle}>Web Hosting</div>
//               </a>
//               <a href="#" className={styles.serviceCard}>
//                 <div className={styles.serviceIcon}>📱</div>
//                 <div className={styles.serviceTitle}>Mobile Apps</div>
//               </a>
//             </div>
//           )}
//           {activeTab === "professionals" && (
//             <div className={styles.servicesGrid}>
//               <a href="#" className={styles.serviceCard}>
//                 <div className={styles.serviceIcon}>⚙️</div>
//                 <div className={styles.serviceTitle}>Hosting for WordPress</div>
//               </a>
//               <a href="#" className={styles.serviceCard}>
//                 <div className={styles.serviceIcon}>🔒</div>
//                 <div className={styles.serviceTitle}>SSL Certificates</div>
//               </a>
//               <a href="#" className={styles.serviceCard}>
//                 <div className={styles.serviceIcon}>🏗️</div>
//                 <div className={styles.serviceTitle}>Build Your Website</div>
//               </a>
//               <a href="#" className={styles.serviceCard}>
//                 <div className={styles.serviceIcon}>📊</div>
//                 <div className={styles.serviceTitle}>CRM & Dashboard</div>
//               </a>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Main Privacy Content */}
//       <main className={styles.legalContainer}>
//         <div className={styles.pageTitle}>
//           <h1>Privacy & Policy</h1>
//           <div className={styles.lastUpdated}>Last Updated: October 2025</div>
//         </div>

//         <section className={styles.section}>
//           <h2>1. INTRODUCTION</h2>
//           <p>
//             TAKATAK ("we", "our", "us") values your privacy. This Privacy & Policy
//             explains how we collect, use, store, and protect personal information
//             when you use our services, websites, and applications (the "Services").
//           </p>
//         </section>

//         <section className={styles.section}>
//           <h2>2. INFORMATION WE COLLECT</h2>
//           <p><strong>2.1 Personal Information:</strong> Name, email, phone, address, payment info.</p>
//           <p><strong>2.2 Non-Personal Information:</strong> Cookies, usage data, device info, IP addresses.</p>
//           <p><strong>2.3 Third-Party Data:</strong> Data from social logins, payment providers, analytics services.</p>
//         </section>

//         <section className={styles.section}>
//           <h2>3. HOW WE USE INFORMATION</h2>
//           <ul>
//             <li>Provide, maintain, and improve Services.</li>
//             <li>Process transactions and deliver products.</li>
//             <li>Communicate updates, marketing, and support.</li>
//             <li>Ensure compliance with legal obligations and fraud prevention.</li>
//           </ul>
//         </section>

//         <section className={styles.section}>
//           <h2>4. DATA SHARING & DISCLOSURE</h2>
//           <p>We may share your information with:</p>
//           <ul>
//             <li>Service providers (hosting, analytics, payment processors).</li>
//             <li>Legal authorities if required by law.</li>
//             <li>Business transfers (mergers, acquisitions).</li>
//           </ul>
//         </section>

//         <section className={styles.section}>
//           <h2>5. COOKIES & TRACKING</h2>
//           <p>
//             We use cookies and similar technologies to improve user experience,
//             analyze traffic, and deliver personalized content and ads. You may
//             control cookies via your browser settings.
//           </p>
//         </section>

//         <section className={styles.section}>
//           <h2>6. DATA RETENTION</h2>
//           <p>
//             We retain personal information only as long as necessary to provide
//             Services, comply with legal obligations, resolve disputes, and enforce
//             agreements.
//           </p>
//         </section>

//         <section className={styles.section}>
//           <h2>7. SECURITY MEASURES</h2>
//           <p>
//             We implement industry-standard technical and organizational measures to
//             protect personal information. However, no system is completely secure,
//             and we cannot guarantee absolute security.
//           </p>
//         </section>

//         <section className={styles.section}>
//           <h2>8. YOUR RIGHTS</h2>
//           <ul>
//             <li>Access, correct, or delete personal data.</li>
//             <li>Withdraw consent where applicable.</li>
//             <li>Object to processing for marketing purposes.</li>
//             <li>Request data portability.</li>
//           </ul>
//         </section>

//         <section className={styles.section}>
//           <h2>9. CHILDREN'S PRIVACY</h2>
//           <p>
//             Our Services are not directed to children under 13. We do not knowingly
//             collect information from children.
//           </p>
//         </section>

//         <section className={styles.section}>
//           <h2>10. CHANGES TO THIS POLICY</h2>
//           <p>
//             We may update this Privacy & Policy. Material changes will be communicated
//             on our website. Continued use after notice constitutes acceptance.
//           </p>
//         </section>

//         <section className={styles.section}>
//           <h2>11. CONTACT INFORMATION</h2>
//           <div className={styles.contactBox}>
//             <h3>For Privacy Concerns</h3>
//             <div className={styles.contactItem}>
//               <strong>Email:</strong> <a href="mailto:privacy@takatak.ca">privacy@takatak.ca</a>
//             </div>
//           </div>
//         </section>

//         <footer className={styles.footer}>
//           <p>&copy; 2025 TAKATAK. All rights reserved.</p>
//           <p>Questions? Contact <a href="mailto:privacy@takatak.ca">privacy@takatak.ca</a></p>
//         </footer>
//       </main>
//     </div>
//   );
// }
