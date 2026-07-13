'use client';



import mecaLogoBranco from '@/assets/meca-logo-branco.png';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

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
    { name: 'App Cliente', href: '#motoristas', sectionId: 'motoristas' },
    { name: 'App Oficina', href: '#oficinas', sectionId: 'oficinas' },
    { name: 'Como Funciona', href: '#como-funciona', sectionId: 'como-funciona' },
    { name: 'Sobre', href: '#sobre', sectionId: 'sobre' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#080808]/90 backdrop-blur-xl border-b border-white/[0.06] shadow-2xl'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <motion.div whileHover={{ scale: 1.04 }} className="w-28 h-28 relative">
                <Image
                  src={mecaLogoBranco}
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
                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      activeSection === link.sectionId
                        ? 'text-meca-verde bg-meca-verde/10'
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    }`}
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

            {/* Desktop CTA — App buttons with icons */}
            <div className="hidden lg:flex items-center gap-3">
              <motion.a
                href="#motoristas"
                onClick={(e) => scrollToSection(e, 'motoristas')}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-meca-verde/10 border border-meca-verde/30 hover:bg-meca-verde/20 hover:border-meca-verde/50 transition-all duration-200"
              >
                <div className="w-7 h-7 rounded-lg overflow-hidden flex-shrink-0">
                  <img src="/app-icon-cliente.png" alt="App Cliente" className="w-full h-full object-cover rounded-md" />
                </div>
                <span className="text-sm font-semibold text-meca-verde">App Cliente</span>
              </motion.a>
              <motion.a
                href="#oficinas"
                onClick={(e) => scrollToSection(e, 'oficinas')}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center gap-2.5 px-4 py-2 rounded-xl border border-white/10 hover:border-white/25 hover:bg-white/5 transition-all duration-200"
                style={{ background: 'rgba(74,108,247,0.08)', borderColor: 'rgba(74,108,247,0.25)' }}
              >
                <div className="w-7 h-7 rounded-lg overflow-hidden flex-shrink-0">
                  <img src="/app-icon-oficina.png" alt="App Oficina" className="w-full h-full object-cover rounded-md" />
                </div>
                <span className="text-sm font-semibold" style={{ color: '#8b9cf4' }}>App Oficina</span>
              </motion.a>
            </div>

            {/* Mobile Hamburger */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="lg:hidden p-2 text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
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
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                onClick={() => setIsMenuOpen(false)}
              />
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="fixed top-0 right-0 h-full w-80 max-w-sm bg-[#0e0e0e] border-l border-white/[0.08] z-50 flex flex-col"
              >
                <div className="p-6 flex flex-col h-full">
                  <div className="flex justify-between items-center mb-10">
                    <div className="w-24 h-24 relative">
                      <Image src={mecaLogoBranco} alt="MECA" fill className="object-contain" />
                    </div>
                    <button onClick={() => setIsMenuOpen(false)} className="p-2 text-white/60 hover:text-white">
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
                          className={`block px-4 py-3 rounded-xl text-lg font-medium transition-all ${
                            activeSection === link.sectionId
                              ? 'bg-meca-verde text-[#080808]'
                              : 'text-white/80 hover:bg-white/5 hover:text-white'
                          }`}
                        >
                          {link.name}
                        </Link>
                      </motion.div>
                    ))}
                  </nav>

                  <div className="mt-auto pt-8 border-t border-white/[0.08] space-y-3">
                    <a
                      href="#motoristas"
                      onClick={(e) => scrollToSection(e, 'motoristas')}
                      className="flex items-center gap-3 w-full px-4 py-3 text-sm font-semibold bg-meca-verde/10 border border-meca-verde/30 text-meca-verde rounded-xl"
                    >
                      <div className="w-7 h-7 rounded-lg overflow-hidden flex-shrink-0">
                        <img src="/app-icon-cliente.png" alt="App Cliente" className="w-full h-full object-cover rounded-md" />
                      </div>
                      App Cliente
                    </a>
                    <a
                      href="#oficinas"
                      onClick={(e) => scrollToSection(e, 'oficinas')}
                      className="flex items-center gap-3 w-full px-4 py-3 text-sm font-semibold rounded-xl"
                      style={{ background: 'rgba(74,108,247,0.1)', border: '1px solid rgba(74,108,247,0.25)', color: '#8b9cf4' }}
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
