'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, X } from 'lucide-react';

export default function StickyDownloadBanner() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (sessionStorage.getItem('meca-banner-dismissed')) {
      setDismissed(true);
      return;
    }

    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const dismiss = () => {
    setDismissed(true);
    sessionStorage.setItem('meca-banner-dismissed', '1');
  };

  const show = visible && !dismissed;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
          style={{
            background: 'var(--s-nav-scrolled)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderTop: '1px solid var(--s-border)',
            boxShadow: '0 -4px 20px rgba(0,0,0,0.15)',
          }}
        >
          <div className="flex items-center gap-3 px-4 py-3 max-w-lg mx-auto">
            <img
              src="/app-icon-cliente.png"
              alt="MECA"
              className="w-10 h-10 rounded-xl flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold truncate" style={{ color: 'var(--s-text)' }}>
                MECA
              </p>
              <p className="text-xs truncate" style={{ color: 'var(--s-text-muted)' }}>
                Agende manutenção pelo app
              </p>
            </div>
            <a
              href="/app"
              className="flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-bold text-white"
              style={{
                background: 'linear-gradient(135deg, #41b173, #2d8f5a)',
              }}
            >
              <Download className="w-4 h-4" />
              Baixar
            </a>
            <button
              onClick={dismiss}
              className="flex-shrink-0 p-1.5 rounded-lg"
              style={{ color: 'var(--s-text-faint)' }}
              aria-label="Fechar"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
