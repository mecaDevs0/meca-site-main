'use client';

import { motion } from 'framer-motion';
import { Download, CalendarCheck, CreditCard, ArrowRight } from 'lucide-react';
import { getClienteStoreUrls } from '@/lib/platform';

const steps = [
  {
    num: '01',
    icon: Download,
    title: 'Baixe o app',
    desc: 'Gratuito para iPhone e Android. Cadastro rápido com seu celular.',
    accent: '#41b173',
  },
  {
    num: '02',
    icon: CalendarCheck,
    title: 'Agende o serviço',
    desc: 'Encontre oficinas verificadas perto de você e agende em 2 minutos.',
    accent: '#60A5FA',
  },
  {
    num: '03',
    icon: CreditCard,
    title: 'Pague pelo app',
    desc: 'PIX, cartão ou boleto. Pagamento seguro e acompanhamento em tempo real.',
    accent: '#A855F7',
  },
];

export default function HowItWorksSection() {
  const urls = getClienteStoreUrls('how-it-works');

  return (
    <section id="como-funciona" className="py-24 lg:py-32 relative overflow-hidden" style={{ background: 'var(--s-bg)' }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-meca-verde/4 blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-verde text-sm font-medium mb-6" style={{ color: 'var(--s-verde-text)' }}>
            Como Funciona
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4" style={{ color: 'var(--s-text)' }}>
            Simples como{' '}
            <span className="gradient-text-verde">1, 2, 3</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: 'var(--s-text-secondary)' }}>
            Do download ao pagamento em poucos minutos.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                whileHover={{ y: -4 }}
                className="relative glass rounded-2xl p-8 text-center group"
                style={{ border: `1px solid ${step.accent}20` }}
              >
                {/* Step number */}
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold"
                  style={{ background: `${step.accent}20`, color: step.accent }}
                >
                  Passo {step.num}
                </div>

                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 mt-2 group-hover:scale-110 transition-transform"
                  style={{ background: `${step.accent}12` }}
                >
                  <Icon className="w-7 h-7" style={{ color: step.accent }} />
                </div>

                <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--s-text)' }}>{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--s-text-secondary)' }}>{step.desc}</p>

                {/* Arrow connector (desktop only, not on last) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 z-10">
                    <ArrowRight className="w-5 h-5" style={{ color: 'var(--s-text-faint)' }} />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-sm mb-4" style={{ color: 'var(--s-text-muted)' }}>
            Disponível para iOS e Android. Gratuito.
          </p>
          <div className="flex flex-row gap-4 justify-center">
            <motion.a
              href={urls.ios}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              className="w-[140px] h-[46px] relative"
            >
              <img src="/buttonAppleStore.svg" alt="App Store" className="h-full w-full object-contain" />
            </motion.a>
            <motion.a
              href={urls.android}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              className="w-[140px] h-[46px] relative"
            >
              <img src="/buttonGooglePlay.svg" alt="Google Play" className="h-full w-full object-contain" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
