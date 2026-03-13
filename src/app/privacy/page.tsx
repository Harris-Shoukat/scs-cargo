import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | SCS Cargo",
  description: "SCS Cargo privacy policy. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated="March 2025">
      <h2>Information We Collect</h2>
      <p>
        SCS Cargo (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects information necessary to provide courier and logistics services. This may include your name, contact details (phone, email, address), shipment details, and payment information when you use our services.
      </p>

      <h2>How We Use Your Information</h2>
      <p>We use your information to:</p>
      <ul>
        <li>Process shipments and deliver packages</li>
        <li>Provide customer support and respond to inquiries</li>
        <li>Send tracking updates and service notifications</li>
        <li>Process payments and prevent fraud</li>
        <li>Improve our services and website</li>
        <li>Comply with legal obligations and government authorities when required</li>
      </ul>

      <h2>Information Sharing</h2>
      <p>
        We do not sell, rent, or share your personal information with third parties for their marketing purposes. We may share information with service providers who assist our operations (e.g., payment processors, shipping partners), and when required by law or government authority.
      </p>

      <h2>Data Security</h2>
      <p>
        We take reasonable measures to protect your personal information from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet is entirely secure.
      </p>

      <h2>Data Retention</h2>
      <p>
        We retain your information for as long as necessary to provide our services, resolve disputes, and comply with legal obligations. Shipment records may be retained for a period required by applicable law.
      </p>

      <h2>Your Rights</h2>
      <p>
        You may request access to, correction of, or deletion of your personal data. Contact us at{" "}
        <a href="mailto:speedyinternationalpk@gmail.com">speedyinternationalpk@gmail.com</a> or{" "}
        <a href="tel:+923004535707">+92 300 4535707</a> for any privacy-related requests.
      </p>

      <h2>Contact</h2>
      <p>
        For questions about this Privacy Policy, contact us at LG 1-A Hill View Arcade, 5 Davis Road, Lahore-Pakistan, or email{" "}
        <a href="mailto:speedyinternationalpk@gmail.com">speedyinternationalpk@gmail.com</a>.
      </p>
    </LegalPage>
  );
}
