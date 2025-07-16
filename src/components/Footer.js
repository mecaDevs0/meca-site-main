'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Para Motoristas",
      links: [
        { name: "Baixar App", href: "https://apps.apple.com/us/app/meca/id6743087361", external: true },
        { name: "Como Funciona", href: "#como-funciona" },
        { name: "Encontrar Oficinas", href: "#motoristas" },
        { name: "Suporte", href: "mailto:contato@mecabr.com?subject=Suporte" },
        // Botões visuais das lojas
        { name: "App Store", href: "https://apps.apple.com/us/app/meca/id6743087361", external: true, isStoreImg: true, img: require('@/assets/buttonAppleStore.png'), alt: 'Cliente - App Store' },
        { name: "Google Play", href: "https://play.google.com/store/apps/details?id=br.com.megaleios.meca_cliente&hl=pt_BR&pli=1", external: true, isStoreImg: true, img: require('@/assets/buttonGooglePlay.png'), alt: 'Cliente - Google Play' }
      ]
    },
    {
      title: "Para Oficinas",
      links: [
        { name: "Cadastrar Oficina", href: "https://play.google.com/store/apps/details?id=br.com.megaleios.meca_oficina", external: true },
        { name: "Painel de Gestão", href: "#oficinas" },
        { name: "Planos e Preços", href: "#sobre" },
        { name: "Central de Ajuda", href: "mailto:contato@mecabr.com?subject=Central%20de%20Ajuda" },
        // Botões visuais das lojas
        { name: "App Store", href: "https://apps.apple.com/us/app/meca-oficina/id6476768852", external: true, isStoreImg: true, img: require('@/assets/buttonAppleStore.png'), alt: 'Oficina - App Store' },
        { name: "Google Play", href: "https://play.google.com/store/apps/details?id=br.com.megaleios.meca_oficina", external: true, isStoreImg: true, img: require('@/assets/buttonGooglePlay.png'), alt: 'Oficina - Google Play' }
      ]
    },
    {
      title: "Empresa",
      links: [
        { name: "Sobre Nós", href: "#sobre" },
        { name: "Blog", href: "#" },
        { name: "Carreiras", href: "#" },
        { name: "Imprensa", href: "#" }
      ]
    }
  ];

  const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/mecabr_?igsh=MWZiMXo0cWpkbmwyYg==" }
  ];

  return (
    <footer className="bg-gradient-to-b from-meca-marinho to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="sm:block flex flex-col items-center text-center sm:text-left"
              >
                <div className="mb-6">
                  <div className="flex items-center space-x-2 mb-4 justify-center sm:justify-start">
                    <div className="w-10 h-10 bg-meca-verde rounded-xl flex items-center justify-center">
                      <span className="font-bold text-xl text-white">M</span>
                    </div>
                    <span className="font-bold text-2xl">MECA</span>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    A plataforma que conecta motoristas e oficinas de forma moderna e eficiente. 
                    <span className="text-meca-verde font-medium"> Quem vai de MECA, vai além!</span>
                  </p>
                </div>
                {/* Contact Info */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3 text-gray-300 justify-center sm:justify-start">
                    <Mail className="w-5 h-5 text-meca-verde" />
                    <span>contato@mecabr.com </span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300 justify-center sm:justify-start">
                    <Phone className="w-5 h-5 text-meca-verde" />
                    <span>(11) 3064-4243</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300 justify-center sm:justify-start">
                    <MapPin className="w-5 h-5 text-meca-verde" />
                    <span>São Paulo, Brasil</span>
                  </div>
                </div>
                {/* Social Links */}
                <div className="flex space-x-4 justify-center sm:justify-start mb-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 bg-white/10 hover:bg-meca-verde rounded-xl flex items-center justify-center transition-all duration-300 group"
                      >
                        <Icon className="w-5 h-5 group-hover:text-white" />
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            </div>
            {/* Links Columns */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center md:text-left">
                {footerSections.map((section, index) => (
                  <>
                    <motion.div
                      key={section.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex flex-col items-center md:items-start"
                    >
                      <h3 className="font-semibold text-2xl md:text-lg mb-6 text-white text-center md:text-left">
                        {section.title}
                      </h3>
                      <ul className="space-y-4 w-full flex flex-col items-center md:items-start">
                        {section.links.map((link, linkIndex) => (
                          <li key={linkIndex}>
                            {link.isStoreImg ? (
                              <a
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center"
                              >
                                <Image
                                  src={link.img}
                                  alt={link.alt}
                                  width={140}
                                  height={46}
                                  className="w-[140px] h-auto object-contain"
                                />
                              </a>
                            ) : (
                              <Link
                                href={link.href}
                                className="text-gray-300 hover:text-meca-verde transition-colors duration-200 flex items-center space-x-2 group"
                              >
                                <span>{link.name}</span>
                                {link.external && (
                                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                )}
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                    {/* Divider only on mobile, not after last column */}
                    {index < footerSections.length - 1 && (
                      <div className="w-full flex justify-center my-6 md:hidden">
                        <div className="h-px w-24 bg-gray-600/40 rounded-full" />
                      </div>
                    )}
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="py-8 border-t border-gray-700"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap justify-center md:justify-start space-x-6 text-sm text-gray-400">
              <Link href="#" className="hover:text-meca-verde transition-colors">
                Política de Privacidade
              </Link>
              <Link href="#" className="hover:text-meca-verde transition-colors">
                Termos de Uso
              </Link>
              <Link href="#" className="hover:text-meca-verde transition-colors">
                Cookies
              </Link>
              <Link href="mailto:contato@mecabr.com" className="hover:text-meca-verde transition-colors">
                Segurança
              </Link>
            </div>
            
            <div className="text-sm text-gray-400">
              © {currentYear} MECA. Todos os direitos reservados.
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
