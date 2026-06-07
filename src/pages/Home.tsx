import { HeroSection } from '../components/HeroSection';
import { SocialProofSection } from '../components/SocialProofSection';
import { FeaturedProjectsSection } from '../components/FeaturedProjectsSection';
import { ProcessSection } from '../components/ProcessSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { JournalSection } from '../components/JournalSection';
import { ContactSection } from '../components/ContactSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SocialProofSection />
      <FeaturedProjectsSection />
      <ProcessSection />
      <TestimonialsSection />
      <JournalSection />
      <ContactSection />
    </main>
  );
}
