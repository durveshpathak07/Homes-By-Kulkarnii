import { ContactSection } from '../components/ContactSection';

export default function Contact() {
  return (
    <div className="pt-24 bg-cream min-h-screen">
      {/* Reusing the ContactSection from homepage but placing it on its own page */}
      <ContactSection />
    </div>
  );
}
