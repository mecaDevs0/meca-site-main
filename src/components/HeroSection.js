'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Star, Wrench } from 'lucide-react';
import { getPlatform, getStoreUrl, getClienteStoreUrls } from '@/lib/platform';

export default function HeroSection() {
  const [platform, setPlatform] = useState('desktop');

  useEffect(() => {
    setPlatform(getPlatform());
  }, []);

  const urls = getClienteStoreUrls('hero');

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden" style={{ background: 'var(--s-bg)' }}>
      {/* Background radial gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-meca-verde/5 blur-[120px]" />
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-meca-verde/8 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-meca-ai/6 blur-[90px]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(var(--s-grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--s-grid-line) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          opacity: 0.5,
        }}
      />

      {/* Floating particles */}
      {[
        { w: 3, h: 4, top: 20, left: 15, color: '#41b173' },
        { w: 4, h: 3, top: 35, left: 75, color: '#41b173' },
        { w: 2, h: 5, top: 60, left: 30, color: '#41b173' },
        { w: 5, h: 3, top: 75, left: 60, color: '#A855F7' },
        { w: 3, h: 3, top: 45, left: 85, color: '#41b173' },
        { w: 4, h: 4, top: 15, left: 55, color: '#41b173' },
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
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 lg:pt-36">

        {/* Trust badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full glass-verde text-sm font-medium"
          style={{ color: 'var(--s-verde-text)' }}
        >
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          4.8 na App Store · Gratuito
        </motion.div>

        {/* Headline — pain-point focused */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] mb-6"
          style={{ color: 'var(--s-text)' }}
        >
          Seu carro precisa de{' '}
          <span className="gradient-text-verde">manutenção?</span>
          <br />
          <span className="text-3xl sm:text-4xl lg:text-5xl font-semibold" style={{ color: 'var(--s-text-secondary)' }}>
            Resolva em minutos pelo app.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: 'var(--s-text-muted)' }}
        >
          Encontre oficinas verificadas, agende o serviço e pague com segurança — tudo pelo app MECA.
        </motion.p>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col items-center gap-5 mb-10"
        >
          {/* Mobile: single button → /app (deep link smart redirect) */}
          {platform !== 'desktop' ? (
            <motion.a
              href="/app"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="relative px-10 py-5 rounded-2xl text-white font-bold text-lg overflow-hidden group w-full sm:w-auto"
              style={{
                background: 'linear-gradient(135deg, #41b173, #2d8f5a)',
                boxShadow: '0 0 40px rgba(65,177,115,0.4)',
              }}
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <Download className="w-6 h-6" />
                Baixar App Grátis
              </span>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          ) : (
            <>
              {/* Desktop: show both store buttons */}
              <div id="hero-stores" className="flex flex-row gap-4 justify-center">
                <motion.a
                  href={urls.ios}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.94 }}
                  className="w-[170px] h-[56px] relative drop-shadow-2xl"
                >
                  <img src="/buttonAppleStore.svg" alt="App Store" className="h-full w-full object-contain" />
                </motion.a>
                <motion.a
                  href={urls.android}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.94 }}
                  className="w-[170px] h-[56px] relative drop-shadow-2xl"
                >
                  <img src="/buttonGooglePlay.svg" alt="Google Play" className="h-full w-full object-contain" />
                </motion.a>
              </div>
            </>
          )}

          {/* Secondary CTA — oficinas */}
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => scrollToSection('oficinas')}
            className="px-6 py-2.5 rounded-xl font-medium text-sm transition-all duration-300"
            style={{
              color: 'var(--s-text-muted)',
              border: '1px solid var(--s-border)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(74,108,247,0.4)';
              e.currentTarget.style.background = 'rgba(74,108,247,0.06)';
              e.currentTarget.style.color = 'var(--s-oficina-accent-text)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--s-border)';
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = 'var(--s-text-muted)';
            }}
          >
            <span className="flex items-center gap-2">
              <Wrench className="w-4 h-4" />
              Sou oficina
            </span>
          </motion.button>
        </motion.div>

        {/* Social proof strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap gap-6 justify-center items-center mb-16"
        >
          {[
            { label: 'Oficinas Verificadas', value: '50+' },
            { label: 'Agendamentos', value: '2.000+' },
            { label: 'Nota App Store', value: '4.8 ★' },
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="text-lg font-bold" style={{ color: 'var(--s-verde-text)' }}>{stat.value}</span>
              <span className="text-xs" style={{ color: 'var(--s-text-muted)' }}>{stat.label}</span>
            </div>
          ))}
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
          onClick={() => scrollToSection('como-funciona')}
          style={{ color: 'var(--s-text-faint)' }}
          className="transition-colors"
          onMouseEnter={e => e.currentTarget.style.color = 'var(--s-text-muted)'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--s-text-faint)'}
        >
          <ArrowDown className="w-6 h-6" />
        </motion.button>
      </motion.div>
    </section>
  );
}
