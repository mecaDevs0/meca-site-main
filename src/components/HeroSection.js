'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[#080808]">
      {/* Background radial gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-meca-verde/5 blur-[120px]" />
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-meca-ai/8 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-meca-verde/6 blur-[90px]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating particles — fixed positions to avoid SSR hydration mismatch */}
      {[
        { w: 3, h: 4, top: 20, left: 15, color: '#41b173' },
        { w: 4, h: 3, top: 35, left: 75, color: '#A855F7' },
        { w: 2, h: 5, top: 60, left: 30, color: '#41b173' },
        { w: 5, h: 3, top: 75, left: 60, color: '#A855F7' },
        { w: 3, h: 3, top: 45, left: 85, color: '#41b173' },
        { w: 4, h: 4, top: 15, left: 55, color: '#A855F7' },
        { w: 2, h: 4, top: 80, left: 20, color: '#41b173' },
        { w: 5, h: 2, top: 55, left: 45, color: '#A855F7' },
      ].map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${p.w}px`,
            height: `${p.h}px`,
            background: p.color,
            top: `${p.top}%`,
            left: `${p.left}%`,
            opacity: 0.4,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 3 + i * 0.7,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.4,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 lg:pt-40">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full glass border border-meca-ai/30 text-meca-ai text-sm font-medium"
        >
          <Sparkles className="w-4 h-4" />
          Apresentando a MIA — IA do MECA
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white leading-[1.05] mb-6"
        >
          O Futuro da{' '}
          <span className="gradient-text-verde">Manutenção</span>
          <br />
          Automotiva
          <br />
          <span className="gradient-text-ai">está Aqui.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Conectamos motoristas às melhores oficinas com tecnologia de ponta.
          Um app para motoristas. Um app para oficinas. Uma plataforma que transforma o mercado automotivo.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          {/* MIA CTA */}
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => scrollToSection('motoristas')}
            className="relative px-8 py-4 rounded-2xl text-white font-semibold text-base overflow-hidden group"
            style={{
              background: 'linear-gradient(135deg, #7C3AED, #A855F7)',
              boxShadow: '0 0 40px rgba(168,85,247,0.4)',
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              Falar com a MIA
            </span>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.button>

          {/* Secondary CTA */}
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => scrollToSection('motoristas')}
            className="px-8 py-4 rounded-2xl text-white font-semibold text-base border border-white/15 hover:border-meca-verde/50 hover:bg-meca-verde/8 transition-all duration-300"
          >
            Conhecer os Apps
          </motion.button>
        </motion.div>

        {/* Two-sided value props */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <div className="glass rounded-2xl px-6 py-4 flex items-center gap-4 border border-meca-verde/20">
            <div className="w-10 h-10 rounded-xl bg-meca-verde/15 flex items-center justify-center">
              <span className="text-xl">🚗</span>
            </div>
            <div className="text-left">
              <div className="text-white font-semibold text-sm">Para Motoristas</div>
              <div className="text-white/40 text-xs">Agende, pague e acompanhe</div>
            </div>
          </div>

          <div className="text-white/20 text-2xl font-thin hidden sm:block">+</div>

          <div className="glass rounded-2xl px-6 py-4 flex items-center gap-4 border border-meca-marinho/40">
            <div className="w-10 h-10 rounded-xl bg-meca-marinho/40 flex items-center justify-center">
              <span className="text-xl">🔧</span>
            </div>
            <div className="text-left">
              <div className="text-white font-semibold text-sm">Para Oficinas</div>
              <div className="text-white/40 text-xs">Gerencie e cresça seu negócio</div>
            </div>
          </div>
        </motion.div>

        {/* App store buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-row gap-4 justify-center"
        >
          <motion.a
            href="https://apps.apple.com/us/app/meca/id6743087361"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            className="w-[150px] h-[50px] relative drop-shadow-2xl"
          >
            <img src="/buttonAppleStore.svg" alt="App Store" className="h-full w-full object-contain" />
          </motion.a>
          <motion.a
            href="https://play.google.com/store/apps/details?id=br.com.megaleios.meca_cliente&hl=pt_BR&pli=1"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            className="w-[150px] h-[50px] relative drop-shadow-2xl"
          >
            <img src="/buttonGooglePlay.svg" alt="Google Play" className="h-full w-full object-contain" />
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.button
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => scrollToSection('mia')}
          className="text-white/30 hover:text-white/60 transition-colors"
        >
          <ArrowDown className="w-6 h-6" />
        </motion.button>
      </motion.div>
    </section>
  );
}
