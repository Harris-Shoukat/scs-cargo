import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service | SCS Cargo",
  description: "SCS Cargo terms of service. Read our terms for using our courier and logistics services.",
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" lastUpdated="March 2025">
      <h2>Acceptance of Terms</h2>
      <p>
        By using SCS Cargo&apos;s website and services, you agree to these Terms of Service. If you do not agree, please do not use our services.
      </p>

      <h2>Services</h2>
      <p>
        SCS Cargo provides domestic and international courier and logistics services including air freight, ocean freight, and road freight. Service availability, rates, and delivery times may vary.
      </p>

      <h2>User Responsibilities</h2>
      <p>You agree to:</p>
      <ul>
        <li>Provide accurate shipment and contact information</li>
        <li>Ensure shipments comply with applicable laws and do not contain prohibited items</li>
        <li>Pay all applicable fees for services rendered</li>
        <li>Use our website and services in a lawful manner</li>
      </ul>

      <h2>Prohibited Items</h2>
      <p>
        You may not ship hazardous materials, illegal items, counterfeit goods, or anything that violates local or international law. SCS Cargo reserves the right to refuse or inspect any shipment.
      </p>

      <h2>Liability and Limitations</h2>
      <p>
        SCS Cargo&apos;s liability for loss, damage, or delay is limited as per our standard terms and applicable law. We are not liable for indirect, consequential, or punitive damages. Maximum liability is typically limited to the declared value or a standard amount per kilogram.
      </p>

      <h2>Copyright and Content</h2>
      <p>
        All content on this website, including text, logos, and images, is the property of SCS Cargo. You may not copy, reproduce, or use our content for commercial purposes without written permission. Limited copying for personal, non-commercial use with attribution is permitted.
      </p>

      <h2>Privacy</h2>
      <p>
        Your use of our services is also governed by our{" "}
        <a href="/privacy">Privacy Policy</a>. We keep visitor and customer information private and do not share it except as described in that policy.
      </p>

      <h2>Changes</h2>
      <p>
        We may update these Terms from time to time. Continued use of our services after changes constitutes acceptance. We encourage you to review this page periodically.
      </p>

      <h2>Contact</h2>
      <p>
        For questions about these Terms, contact us at LG 1-A Hill View Arcade, 5 Davis Road, Lahore-Pakistan, or email{" "}
        <a href="mailto:speedyinternationalpk@gmail.com">speedyinternationalpk@gmail.com</a>, or call{" "}
        <a href="tel:+923004535707">+92 300 4535707</a>.
      </p>
    </LegalPage>
  );
}
