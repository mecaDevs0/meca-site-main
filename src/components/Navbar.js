'use client';

import mecaLogoBranco from '@/assets/meca-logo-branco.png';
import mecaLogoVerde from '@/assets/meca-logo-verde.png';
import { AnimatePresence, motion } from 'framer-motion';
import { Download, Menu, Moon, Sun, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    html.classList.add('theme-transition');
    if (isDark) {
      html.classList.remove('dark');
      localStorage.setItem('meca-theme', 'light');
      setIsDark(false);
    } else {
      html.classList.add('dark');
      localStorage.setItem('meca-theme', 'dark');
      setIsDark(true);
    }
    setTimeout(() => html.classList.remove('theme-transition'), 400);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Como Funciona', href: '#como-funciona', sectionId: 'como-funciona' },
    { name: 'App Cliente', href: '#motoristas', sectionId: 'motoristas' },
    { name: 'App Oficina', href: '#oficinas', sectionId: 'oficinas' },
    { name: 'Sobre', href: '#sobre', sectionId: 'sobre' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: isScrolled ? 'var(--s-nav-scrolled)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(20px)' : 'none',
          borderBottom: isScrolled ? '1px solid var(--s-border-light)' : 'none',
          boxShadow: isScrolled ? 'var(--s-card-shadow)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <motion.div whileHover={{ scale: 1.04 }} className="w-28 h-28 relative">
                <Image
                  src={isDark ? mecaLogoBranco : mecaLogoVerde}
                  alt="MECA Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <Link
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.sectionId)}
                    className="relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                    style={{
                      color: activeSection === link.sectionId ? '#41b173' : 'var(--s-text-muted)',
                      background: activeSection === link.sectionId ? 'rgba(65,177,115,0.10)' : 'transparent',
                    }}
                    onMouseEnter={e => {
                      if (activeSection !== link.sectionId) {
                        e.currentTarget.style.color = 'var(--s-text)';
                        e.currentTarget.style.background = 'var(--s-glass-hover)';
                      }
                    }}
                    onMouseLeave={e => {
                      if (activeSection !== link.sectionId) {
                        e.currentTarget.style.color = 'var(--s-text-muted)';
                        e.currentTarget.style.background = 'transparent';
                      }
                    }}
                  >
                    {link.name}
                    {activeSection === link.sectionId && (
                      <motion.span
                        layoutId="activeNav"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-meca-verde"
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Desktop CTA + Theme toggle */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Theme toggle */}
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                onClick={toggleTheme}
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200"
                style={{
                  background: 'var(--s-glass-bg)',
                  border: '1px solid var(--s-border)',
                  color: 'var(--s-text-muted)',
                }}
                aria-label={isDark ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </motion.button>

              <motion.a
                href="/app"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-white font-semibold text-sm transition-all duration-200"
                style={{
                  background: 'linear-gradient(135deg, #41b173, #2d8f5a)',
                  boxShadow: '0 2px 12px rgba(65,177,115,0.3)',
                }}
              >
                <Download className="w-4 h-4" />
                Baixar App
              </motion.a>
              <motion.a
                href="#oficinas"
                onClick={(e) => scrollToSection(e, 'oficinas')}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center gap-2.5 px-4 py-2 rounded-xl transition-all duration-200"
                style={{
                  background: 'rgba(74,108,247,0.08)',
                  border: '1px solid rgba(74,108,247,0.25)',
                }}
              >
                <div className="w-7 h-7 rounded-lg overflow-hidden flex-shrink-0">
                  <img src="/app-icon-oficina.png" alt="App Oficina" className="w-full h-full object-cover rounded-md" />
                </div>
                <span className="text-sm font-semibold" style={{ color: 'var(--s-oficina-accent-text)' }}>App Oficina</span>
              </motion.a>
            </div>

            {/* Mobile: Theme toggle + Hamburger */}
            <div className="lg:hidden flex items-center gap-2">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="p-2 rounded-lg"
                style={{ color: 'var(--s-text-muted)' }}
                aria-label={isDark ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </motion.button>
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-2"
                style={{ color: 'var(--s-text)' }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Menu"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-40"
                style={{ background: 'var(--s-overlay)', backdropFilter: 'blur(4px)' }}
                onClick={() => setIsMenuOpen(false)}
              />
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="fixed top-0 right-0 h-full w-80 max-w-sm z-50 flex flex-col"
                style={{
                  background: 'var(--s-mobile-menu-bg)',
                  borderLeft: '1px solid var(--s-border)',
                }}
              >
                <div className="p-6 flex flex-col h-full">
                  <div className="flex justify-between items-center mb-10">
                    <div className="w-24 h-24 relative">
                      <Image src={isDark ? mecaLogoBranco : mecaLogoVerde} alt="MECA" fill className="object-contain" />
                    </div>
                    <button
                      onClick={() => setIsMenuOpen(false)}
                      className="p-2"
                      style={{ color: 'var(--s-text-muted)' }}
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  <nav className="flex flex-col gap-2">
                    {navLinks.map((link, i) => (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.07 }}
                      >
                        <Link
                          href={link.href}
                          onClick={(e) => scrollToSection(e, link.sectionId)}
                          className="block px-4 py-3 rounded-xl text-lg font-medium transition-all"
                          style={{
                            background: activeSection === link.sectionId ? '#41b173' : 'transparent',
                            color: activeSection === link.sectionId ? '#fff' : 'var(--s-text-80)',
                          }}
                        >
                          {link.name}
                        </Link>
                      </motion.div>
                    ))}
                  </nav>

                  <div className="mt-auto pt-8 space-y-3" style={{ borderTop: '1px solid var(--s-border)' }}>
                    <a
                      href="/app"
                      className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-bold rounded-xl text-white"
                      style={{
                        background: 'linear-gradient(135deg, #41b173, #2d8f5a)',
                      }}
                    >
                      <Download className="w-4 h-4" />
                      Baixar App
                    </a>
                    <a
                      href="#oficinas"
                      onClick={(e) => scrollToSection(e, 'oficinas')}
                      className="flex items-center gap-3 w-full px-4 py-3 text-sm font-semibold rounded-xl"
                      style={{ background: 'rgba(74,108,247,0.1)', border: '1px solid rgba(74,108,247,0.25)', color: 'var(--s-oficina-accent-text)' }}
                    >
                      <div className="w-7 h-7 rounded-lg overflow-hidden flex-shrink-0">
                        <img src="/app-icon-oficina.png" alt="App Oficina" className="w-full h-full object-cover rounded-md" />
                      </div>
                      App Oficina
                    </a>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
