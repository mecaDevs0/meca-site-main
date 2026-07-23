'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Smartphone, Star } from 'lucide-react';
import { getPlatform, getClienteStoreUrls } from '@/lib/platform';

export default function AppRedirectClient() {
  const [platform, setPlatform] = useState(null);
  const [redirecting, setRedirecting] = useState(true);
  const urls = getClienteStoreUrls('app-redirect');

  useEffect(() => {
    const detected = getPlatform();
    setPlatform(detected);

    if (detected === 'ios' || detected === 'android') {
      const storeUrl = detected === 'ios' ? urls.ios : urls.android;
      const timer = setTimeout(() => {
        window.location.href = storeUrl;
      }, 1500);
      return () => clearTimeout(timer);
    } else {
      setRedirecting(false);
    }
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4"
      style={{ background: 'var(--s-bg)' }}
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-meca-verde/6 blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 text-center max-w-md mx-auto"
      >
        {/* App icon */}
        <motion.div
          animate={redirecting ? { scale: [1, 1.05, 1] } : {}}
          transition={redirecting ? { duration: 1.5, repeat: Infinity } : {}}
          className="mx-auto mb-6"
        >
          <img
            src="/app-icon-cliente.png"
            alt="MECA"
            className="w-24 h-24 rounded-3xl mx-auto shadow-lg"
          />
        </motion.div>

        {redirecting && platform !== 'desktop' ? (
          <>
            <h1 className="text-2xl font-bold mb-3" style={{ color: 'var(--s-text)' }}>
              Abrindo o app MECA...
            </h1>
            <p className="text-sm mb-6" style={{ color: 'var(--s-text-muted)' }}>
              Redirecionando para a {platform === 'ios' ? 'App Store' : 'Google Play'}
            </p>
            {/* Loading dots */}
            <div className="flex gap-1.5 justify-center mb-8">
              {[0, 1, 2].map(i => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full bg-meca-verde"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                />
              ))}
            </div>
            <a
              href={platform === 'ios' ? urls.ios : urls.android}
              className="text-sm underline"
              style={{ color: 'var(--s-verde-text)' }}
            >
              Clique aqui se não redirecionou
            </a>
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold mb-3" style={{ color: 'var(--s-text)' }}>
              Baixe o app{' '}
              <span className="gradient-text-verde">MECA</span>
            </h1>
            <p className="text-base mb-2" style={{ color: 'var(--s-text-secondary)' }}>
              Encontre oficinas, agende e pague — tudo pelo app.
            </p>

            {/* Rating */}
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-sm" style={{ color: 'var(--s-text-muted)' }}>4.8 · Gratuito</span>
            </div>

            {/* Store buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a
                href={urls.ios}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[170px] h-[56px] relative"
              >
                <img src="/buttonAppleStore.svg" alt="App Store" className="h-full w-full object-contain" />
              </a>
              <a
                href={urls.android}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[170px] h-[56px] relative"
              >
                <img src="/buttonGooglePlay.svg" alt="Google Play" className="h-full w-full object-contain" />
              </a>
            </div>

            {/* Features mini */}
            <div className="glass rounded-2xl p-6 text-left space-y-3" style={{ border: '1px solid rgba(65,177,115,0.2)' }}>
              {[
                { icon: Smartphone, text: 'Agende manutenção em 2 minutos' },
                { icon: Download, text: 'Receba orçamentos de oficinas verificadas' },
                { icon: Star, text: 'Pague com segurança: PIX, cartão ou boleto' },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(65,177,115,0.12)' }}>
                      <Icon className="w-4 h-4 text-meca-verde" />
                    </div>
                    <span className="text-sm" style={{ color: 'var(--s-text-70)' }}>{item.text}</span>
                  </div>
                );
              })}
            </div>

            {/* Back to site */}
            <a
              href="/"
              className="inline-block mt-6 text-sm"
              style={{ color: 'var(--s-text-faint)' }}
            >
              ← Voltar ao site
            </a>
          </>
        )}
      </motion.div>
    </div>
  );
}
