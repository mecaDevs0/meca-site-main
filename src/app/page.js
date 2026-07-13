import AppClienteSection from '@/components/AppClienteSection';
import AppOficinaSection from '@/components/AppOficinaSection';
import BrandValuesSection from '@/components/BrandValuesSection';
import CtaSection from '@/components/CtaSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import MIASection from '@/components/MIASection';
import Navbar from '@/components/Navbar';
import TestimonialsSection from '@/components/TestimonialsSection';

export const metadata = {
  title: 'MECA - O conserto do seu carro na palma da mão',
  description: 'Conecte-se com as melhores oficinas da sua região. Agende serviços, compare preços e tenha total controle do seu veículo com o app MECA. Conheça a MIA, a IA do MECA.',
  keywords: 'oficina, mecânico, carro, manutenção, app, aplicativo, orçamento, agendamento, MIA, inteligência artificial',
  openGraph: {
    title: 'MECA - Quem vai de MECA, vai além!',
    description: 'A plataforma que conecta motoristas e oficinas de forma moderna e eficiente.',
    type: 'website',
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full min-h-screen overflow-x-hidden bg-[#080808]">
        <HeroSection />
        <section id="mia">
          <MIASection />
        </section>
        <section id="motoristas">
          <AppClienteSection />
        </section>
        <section id="oficinas">
          <AppOficinaSection />
        </section>
        <section id="sobre">
          <BrandValuesSection />
        </section>
        <TestimonialsSection />
        <section id="como-funciona">
          <FAQSection />
        </section>
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
