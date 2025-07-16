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
              >
                <div className="mb-6">
                  <div className="flex items-center space-x-2 mb-4">
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
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Mail className="w-5 h-5 text-meca-verde" />
                    <span>contato@mecabr.com </span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Phone className="w-5 h-5 text-meca-verde" />
                    <span>(11) 3064-4243</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <MapPin className="w-5 h-5 text-meca-verde" />
                    <span>São Paulo, Brasil</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex space-x-4">
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
            <div className="lg:col-span-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {footerSections.map((section, index) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="font-semibold text-lg mb-6 text-white">
                      {section.title}
                    </h3>
                    <ul className="space-y-4">
                      {section.links.map((link, linkIndex) => (
                        <li key={link.name + '-' + linkIndex}>
                          {link.isStoreImg ? (
                            <motion.a
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="transition-all duration-300 w-[140px] h-[46px] flex items-center mb-2"
                            >
                              <Image
                                src={link.img}
                                alt={link.alt}
                                width={140}
                                height={46}
                                className="w-full h-auto object-contain"
                              />
                            </motion.a>
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
                ))}
              </div>
            </div>

            {/* Download Column */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold text-lg mb-6 text-white">
                  Baixe o App
                </h3>
                <div className="space-y-4">
                  <motion.a 
                    href="https://apps.apple.com/us/app/meca/id6743087361"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="transition-all duration-300 w-[140px] h-[46px] flex items-center"
                  >
                    <Image
                      src={require('@/assets/buttonAppleStore.png')}
                      alt="Baixar na App Store"
                      width={140}
                      height={46}
                      className="w-full h-auto object-contain"
                    />
                  </motion.a>
                  
                  <motion.a 
                    href="https://play.google.com/store/apps/details?id=br.com.megaleios.meca_cliente&hl=pt_BR&pli=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="transition-all duration-300 w-[140px] h-[46px] flex items-center"
                  >
                    <Image
                      src={require('@/assets/buttonGooglePlay.png')}
                      alt="Baixar no Google Play"
                      width={150}
                      height={50}
                      className="h-auto"
                    />
                  </motion.a>
                </div>

                {/* Stats - Temporariamente removidos
                <div className="mt-8 p-4 bg-white/5 rounded-xl">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-meca-verde mb-1">50k+</div>
                    <div className="text-sm text-gray-400">Downloads</div>
                  </div>
                </div>
                */}
              </motion.div>
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

            <div className="text-sm text-gray-400 text-center md:text-right space-y-1 md:space-y-0 md:space-x-4 flex flex-col md:flex-row md:items-center">
              <span key="copyright">© {currentYear} MECA. Todos os direitos reservados.</span>
              <span key="sep1" className="hidden md:inline">|</span>
              <span key="cnpj">CNPJ: 56.390.849-0001/73</span>
              <span key="sep2" className="hidden md:inline">|</span>
              <span key="endereco">Endereço: Rua Padre João Manuel 235, conjunto 41</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
