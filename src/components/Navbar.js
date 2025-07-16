'use client';

import mecaLogoBranco from '@/assets/meca-logo-branco.png';
import mecaLogoVerde from '@/assets/meca-logo-verde.png';
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
      setIsScrolled(window.scrollY > 20);
      
      // Track active section for nav highlighting
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

  // Smooth scroll to section
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Para Motoristas', href: '#motoristas', sectionId: 'motoristas' },
    { name: 'Para Oficinas', href: '#oficinas', sectionId: 'oficinas' },
    { name: 'Como Funciona', href: '#como-funciona', sectionId: 'como-funciona' },
    { name: 'Sobre', href: '#sobre', sectionId: 'sobre' }
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isMenuOpen
            ? 'bg-meca-marinho shadow-xl border-b border-meca-marinho'
            : isScrolled 
              ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
              : 'bg-meca-verde/70 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2"
              >
                <div className="w-20 h-20 relative">
                  <Image 
                    src={isScrolled ? mecaLogoVerde : mecaLogoBranco}
                    alt="MECA Logo" 
                    fill 
                    className="object-contain" 
                  />
                </div>
             
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.sectionId)}
                    className={`font-medium transition-colors hover:text-meca-verde relative px-2 py-1 ${
                      activeSection === link.sectionId 
                        ? isScrolled ? 'text-meca-verde' : 'text-white font-bold' 
                        : isScrolled ? 'text-gray-700' : 'text-white/90'
                    }`}
                  >
                    {link.name}
                    {activeSection === link.sectionId && (
                      <motion.span 
                        layoutId="activeSection"
                        className={`absolute bottom-0 left-0 h-0.5 w-full ${isScrolled ? 'bg-meca-verde' : 'bg-white'}`}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              {isMenuOpen ? (
                <X className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                onClick={() => setIsMenuOpen(false)}
              />
              
              {/* Menu Panel */}
              <motion.div
                initial={{ x: 400, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 400, opacity: 0 }}
                transition={{ type: 'tween', duration: 0.35, ease: [0.4, 0.0, 0.2, 1] }}
                className="fixed top-0 right-0 h-full w-80 max-w-sm bg-meca-marinho shadow-2xl z-50 flex flex-col rounded-l-3xl border-l-2 border-meca-verde/30"
              >
                <div className="p-6 flex-1 flex flex-col">
                  {/* Close Button */}
                  <div className="flex justify-end mb-8">
                    <button
                      onClick={() => setIsMenuOpen(false)}
                      className="p-2 hover:bg-meca-verde/20 rounded-lg transition-colors"
                      aria-label="Fechar menu"
                    >
                      <X className="w-7 h-7 text-white" />
                    </button>
                  </div>

                  {/* Mobile Navigation Links */}
                  <nav className="flex-1 flex flex-col justify-center space-y-6 mt-8">
                    {navLinks.map((link, index) => (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <Link
                          href={link.href}
                          onClick={(e) => scrollToSection(e, link.sectionId)}
                          className={`block py-4 text-2xl font-semibold rounded-xl text-center transition-all duration-200 ${
                            activeSection === link.sectionId 
                              ? 'bg-meca-verde text-white shadow-lg' 
                              : 'text-white hover:bg-meca-verde/20 hover:text-meca-verde'
                          }`}
                        >
                          {link.name}
                        </Link>
                      </motion.div>
                    ))}
                  </nav>

                  {/* Contact Info */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    className="mt-8 pt-8 border-t border-meca-verde/30 text-center"
                  >
                    <p className="text-sm text-white/80 mb-2">Dúvidas? Fale conosco:</p>
                    <p className="text-sm font-medium text-meca-verde">contato@mecabr.com </p>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer to prevent content from being hidden behind fixed navbar */}
      <div className="h-16 lg:h-20"></div>
    </>
  );
}
