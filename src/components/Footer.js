'use client';

import { motion } from 'framer-motion';
import { Download, ExternalLink, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Para Motoristas",
      links: [
        { name: "Baixar App", href: "#", external: true },
        { name: "Como Funciona", href: "#" },
        { name: "Encontrar Oficinas", href: "#" },
        { name: "Suporte", href: "#" }
      ]
    },
    {
      title: "Para Oficinas",
      links: [
        { name: "Cadastrar Oficina", href: "#", external: true },
        { name: "Painel de Gestão", href: "#" },
        { name: "Planos e Preços", href: "#" },
        { name: "Central de Ajuda", href: "#" }
      ]
    },
    {
      title: "Empresa",
      links: [
        { name: "Sobre Nós", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Carreiras", href: "#" },
        { name: "Imprensa", href: "#" }
      ]
    }
  ];

  const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/mecaapp" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/mecaapp" }
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
                    <span>contato@meca.app</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Phone className="w-5 h-5 text-meca-verde" />
                    <span>(11) 9999-9999</span>
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
                        <li key={linkIndex}>
                          <Link
                            href={link.href}
                            className="text-gray-300 hover:text-meca-verde transition-colors duration-200 flex items-center space-x-2 group"
                          >
                            <span>{link.name}</span>
                            {link.external && (
                              <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                            )}
                          </Link>
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
                    href="#"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-3 bg-white/10 hover:bg-white/20 p-4 rounded-xl transition-all duration-300 group"
                  >
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                      <Download className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Baixar no</p>
                      <p className="font-semibold text-white">App Store</p>
                    </div>
                  </motion.a>
                  
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-3 bg-white/10 hover:bg-white/20 p-4 rounded-xl transition-all duration-300 group"
                  >
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                      <Download className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Baixar no</p>
                      <p className="font-semibold text-white">Google Play</p>
                    </div>
                  </motion.a>
                </div>

                {/* Stats */}
                <div className="mt-8 p-4 bg-white/5 rounded-xl">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-meca-verde mb-1">50k+</div>
                    <div className="text-sm text-gray-400">Downloads</div>
                  </div>
                </div>
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
              <Link href="#" className="hover:text-meca-verde transition-colors">
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
