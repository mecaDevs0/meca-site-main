import AppClienteSection from '@/components/AppClienteSection';
import AppOficinaSection from '@/components/AppOficinaSection';
import BrandValuesSection from '@/components/BrandValuesSection';
import CtaSection from '@/components/CtaSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import MIASection from '@/components/MIASection';
import Navbar from '@/components/Navbar';
import StickyDownloadBanner from '@/components/StickyDownloadBanner';
import TestimonialsSection from '@/components/TestimonialsSection';

export const metadata = {
  title: 'MECA - Seu carro precisa de manutenção? Resolva pelo app.',
  description: 'Encontre oficinas verificadas, agende o serviço e pague com segurança pelo app MECA. Disponível para iOS e Android. Gratuito.',
  keywords: 'oficina, mecânico, carro, manutenção, app, aplicativo, orçamento, agendamento, MIA, inteligência artificial',
  openGraph: {
    title: 'MECA - Seu carro precisa de manutenção? Resolva pelo app.',
    description: 'Encontre oficinas verificadas, agende o serviço e pague com segurança pelo app MECA.',
    type: 'website',
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full min-h-screen overflow-x-hidden" style={{ background: 'var(--s-bg)' }}>
        <HeroSection />
        <section id="como-funciona">
          <HowItWorksSection />
        </section>
        <section id="motoristas">
          <AppClienteSection />
        </section>
        <section id="mia">
          <MIASection />
        </section>
        <TestimonialsSection />
        <section id="oficinas">
          <AppOficinaSection />
        </section>
        <section id="sobre">
          <BrandValuesSection />
        </section>
        <FAQSection />
        <CtaSection />
      </main>
      <Footer />
      <StickyDownloadBanner />
    </>
  );
}
