'use client';

import { motion } from 'framer-motion';
import { Wrench } from 'lucide-react';
import { getClienteStoreUrls, getOficinaStoreUrls } from '@/lib/platform';

export default function CtaSection() {
  const clienteUrls = getClienteStoreUrls('cta-final');
  const oficinaUrls = getOficinaStoreUrls('cta-final');

  return (
    <section className="py-32 relative overflow-hidden" style={{ background: 'var(--s-bg)' }}>

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-meca-verde/8 blur-[140px]" />
        <div className="absolute top-1/2 right-1/3 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-meca-ai/6 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6" style={{ color: 'var(--s-text)' }}>
            Pronto para{' '}
            <span className="gradient-text-verde">começar?</span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--s-text-secondary)' }}>
            Escolha seu perfil e baixe o app agora.
          </p>
        </motion.div>

        {/* Dual CTA Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Card — App Cliente */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl p-8 lg:p-10 overflow-hidden group"
            style={{
              background: 'rgba(65,177,115,0.06)',
              border: '1px solid rgba(65,177,115,0.2)',
              boxShadow: 'var(--s-card-shadow)',
            }}
          >
            {/* Background glow on hover */}
            <div className="absolute inset-0 bg-meca-verde/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

            <div className="relative z-10">
              {/* Tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6 text-meca-verde"
                style={{ background: 'rgba(65,177,115,0.15)', border: '1px solid rgba(65,177,115,0.3)' }}>
                <span className="text-base">🚗</span>
                Sou Motorista
              </div>

              <h3 className="text-2xl lg:text-3xl font-bold mb-4" style={{ color: 'var(--s-text)' }}>
                App Cliente MECA
              </h3>
              <p className="mb-8 leading-relaxed" style={{ color: 'var(--s-text-secondary)' }}>
                Agende serviços, converse com a MIA, pague pelo app e acompanhe
                tudo do seu veículo em um único lugar.
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {['MIA — IA para diagnóstico', 'Agendamento em 2 minutos', 'Pagamento seguro pelo app', 'Histórico completo do veículo'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm" style={{ color: 'var(--s-text-70)' }}>
                    <div className="w-5 h-5 rounded-full bg-meca-verde/20 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-meca-verde" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Download buttons */}
              <div className="flex flex-row gap-3">
                <motion.a
                  href={clienteUrls.ios}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.94 }}
                  className="w-[140px] h-[46px] relative"
                >
                  <img src="/buttonAppleStore.svg" alt="App Store" className="h-full w-full object-contain" />
                </motion.a>
                <motion.a
                  href={clienteUrls.android}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.94 }}
                  className="w-[140px] h-[46px] relative"
                >
                  <img src="/buttonGooglePlay.svg" alt="Google Play" className="h-full w-full object-contain" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Card — App Oficina */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl p-8 lg:p-10 overflow-hidden group"
            style={{
              background: 'rgba(74,108,247,0.06)',
              border: '1px solid rgba(74,108,247,0.2)',
              boxShadow: 'var(--s-card-shadow)',
            }}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
              style={{ background: 'rgba(74,108,247,0.05)' }} />

            <div className="relative z-10">
              {/* Tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6"
                style={{ background: 'rgba(74,108,247,0.15)', border: '1px solid rgba(74,108,247,0.3)', color: 'var(--s-oficina-accent-text)' }}>
                <Wrench className="w-3.5 h-3.5" />
                Tenho uma Oficina
              </div>

              <h3 className="text-2xl lg:text-3xl font-bold mb-4" style={{ color: 'var(--s-text)' }}>
                App Oficina MECA
              </h3>
              <p className="mb-8 leading-relaxed" style={{ color: 'var(--s-text-secondary)' }}>
                Atraia novos clientes, gerencie sua agenda, controle financeiro
                e construa uma reputação sólida na plataforma.
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {['Mais clientes da região', 'Gestão de agenda integrada', 'Chat direto com motoristas', 'Financeiro e repasses no app'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm" style={{ color: 'var(--s-text-70)' }}>
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(74,108,247,0.2)' }}>
                      <div className="w-2 h-2 rounded-full" style={{ background: 'var(--s-oficina-accent-text)' }} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Download buttons */}
              <div className="flex flex-row gap-3">
                <motion.a
                  href={oficinaUrls.ios}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.94 }}
                  className="w-[140px] h-[46px] relative"
                >
                  <img src="/buttonAppleStore.svg" alt="App Store" className="h-full w-full object-contain" />
                </motion.a>
                <motion.a
                  href={oficinaUrls.android}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.94 }}
                  className="w-[140px] h-[46px] relative"
                >
                  <img src="/buttonGooglePlay.svg" alt="Google Play" className="h-full w-full object-contain" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-sm" style={{ color: 'var(--s-text-faint)' }}>
            Gratuito para download. Disponível para iOS e Android.
          </p>
          <p className="font-semibold mt-2" style={{ color: 'var(--s-verde-text)' }}>Quem vai de MECA, vai além!</p>
        </motion.div>
      </div>
    </section>
  );
}
