import AppSection from '@/components/AppSection';
import BrandValuesSection from '@/components/BrandValuesSection';
import CtaSection from '@/components/CtaSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import Navbar from '@/components/Navbar';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';

export const metadata = {
  title: 'MECA - O conserto do seu carro na palma da mão',
  description: 'Conecte-se com as melhores oficinas da sua região. Agende serviços, compare preços e tenha total controle do seu veículo com o app MECA. Mais de 50.000 usuários já escolheram a MECA.',
  keywords: 'oficina, mecânico, carro, manutenção, app, aplicativo, orçamento, agendamento',
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
      <main className="w-full">
        <HeroSection />
        <section id="motoristas">
          <ServicesSection />
        </section>
        <section id="como-funciona">
          <HowItWorksSection />
        </section>
        <section id="oficinas">
          <AppSection />
        </section>
        <section id="sobre">
          <BrandValuesSection />
        </section>
        <TestimonialsSection />
        <FAQSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
