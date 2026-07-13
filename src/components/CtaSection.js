'use client';

import mecaLogoVerde from '@/assets/meca-logo-verde.png';
import { motion } from 'framer-motion';
import { ArrowRight, Wrench } from 'lucide-react';
import Image from 'next/image';

export default function CtaSection() {
  return (
    <section className="py-32 relative overflow-hidden bg-[#080808]">

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
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Pronto para{' '}
            <span className="gradient-text-verde">começar?</span>
          </h2>
          <p className="text-xl text-white/50 max-w-2xl mx-auto">
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

              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                App Cliente MECA
              </h3>
              <p className="text-white/50 mb-8 leading-relaxed">
                Agende serviços, converse com a MIA, pague pelo app e acompanhe
                tudo do seu veículo em um único lugar.
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {['MIA — IA para diagnóstico', 'Agendamento em 2 minutos', 'Pagamento seguro pelo app', 'Histórico completo do veículo'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/70 text-sm">
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
                  href="https://apps.apple.com/us/app/meca/id6743087361"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.94 }}
                  className="w-[140px] h-[46px] relative"
                >
                  <img src="/buttonAppleStore.svg" alt="App Store" className="h-full w-full object-contain" />
                </motion.a>
                <motion.a
                  href="https://play.google.com/store/apps/details?id=br.com.megaleios.meca_cliente&hl=pt_BR&pli=1"
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
            }}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
              style={{ background: 'rgba(74,108,247,0.05)' }} />

            <div className="relative z-10">
              {/* Tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6"
                style={{ background: 'rgba(74,108,247,0.15)', border: '1px solid rgba(74,108,247,0.3)', color: '#8b9cf4' }}>
                <Wrench className="w-3.5 h-3.5" />
                Tenho uma Oficina
              </div>

              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                App Oficina MECA
              </h3>
              <p className="text-white/50 mb-8 leading-relaxed">
                Atraia novos clientes, gerencie sua agenda, controle financeiro
                e construa uma reputação sólida na plataforma.
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {['Mais clientes da região', 'Gestão de agenda integrada', 'Chat direto com motoristas', 'Financeiro e repasses no app'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/70 text-sm">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(74,108,247,0.2)' }}>
                      <div className="w-2 h-2 rounded-full" style={{ background: '#8b9cf4' }} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Download buttons */}
              <div className="flex flex-row gap-3">
                <motion.a
                  href="https://apps.apple.com/app/meca-oficina/id6476768852"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.94 }}
                  className="w-[140px] h-[46px] relative"
                >
                  <img src="/buttonAppleStore.svg" alt="App Store" className="h-full w-full object-contain" />
                </motion.a>
                <motion.a
                  href="https://play.google.com/store/apps/details?id=br.com.megaleios.meca_oficina"
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
          <p className="text-white/30 text-sm">
            Gratuito para download. Disponível para iOS e Android.
          </p>
          <p className="text-meca-verde font-semibold mt-2">Quem vai de MECA, vai além!</p>
        </motion.div>
      </div>
    </section>
  );
}
