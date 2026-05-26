'use client';

import mecaLogoBranco from '@/assets/meca-logo-branco.png';
import { motion } from 'framer-motion';
import { ExternalLink, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const appColumns = [
  {
    title: 'App Cliente',
    icon: '/app-icon-cliente.png',
    accent: '#41b173',
    links: [
      { name: 'Baixar para iOS', href: 'https://apps.apple.com/us/app/meca/id6743087361', external: true },
      { name: 'Baixar para Android', href: 'https://play.google.com/store/apps/details?id=br.com.megaleios.meca_cliente&hl=pt_BR&pli=1', external: true },
      { name: 'Como Funciona', href: '#como-funciona' },
      { name: 'Conheça a MIA', href: '#mia' },
    ],
    stores: {
      apple: 'https://apps.apple.com/us/app/meca/id6743087361',
      google: 'https://play.google.com/store/apps/details?id=br.com.megaleios.meca_cliente&hl=pt_BR&pli=1',
    },
  },
  {
    title: 'App Oficina',
    icon: '/app-icon-oficina.png',
    accent: '#8b9cf4',
    links: [
      { name: 'Cadastrar Oficina', href: 'https://play.google.com/store/apps/details?id=br.com.megaleios.meca_oficina', external: true },
      { name: 'Baixar para iOS', href: 'https://apps.apple.com/app/meca-oficina/id6476768852', external: true },
      { name: 'Baixar para Android', href: 'https://play.google.com/store/apps/details?id=br.com.megaleios.meca_oficina', external: true },
      { name: 'Central de Ajuda', href: 'mailto:contato@mecabr.com?subject=Central%20de%20Ajuda' },
    ],
    stores: {
      apple: 'https://apps.apple.com/app/meca-oficina/id6476768852',
      google: 'https://play.google.com/store/apps/details?id=br.com.megaleios.meca_oficina',
    },
  },
];

const companyLinks = [
  { name: 'Sobre Nós', href: '#sobre' },
  { name: 'Blog', href: '#' },
  { name: 'Carreiras', href: '#' },
  { name: 'Imprensa', href: '#' },
];

const contactInfo = [
  { icon: Mail, text: 'contato@mecabr.com', href: 'mailto:contato@mecabr.com' },
  { icon: Phone, text: '(11) 3064-4243', href: 'tel:+551130644243' },
  { icon: MapPin, text: 'R. Padre João Manuel 235, conj. 41, São Paulo' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#060606]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-meca-verde/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ─── Main grid ─── */}
        <div className="pt-16 pb-12 grid grid-cols-1 lg:grid-cols-12 gap-y-12 gap-x-8">

          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 flex flex-col"
          >
            <div className="w-24 h-24 relative mb-5">
              <Image src={mecaLogoBranco} alt="MECA" fill className="object-contain" />
            </div>
            <p className="text-white/45 text-sm leading-relaxed max-w-xs mb-6">
              A plataforma que conecta motoristas e oficinas de forma moderna e eficiente.{' '}
              <span className="text-meca-verde font-medium">Quem vai de MECA, vai além!</span>
            </p>

            {/* Contact */}
            <div className="space-y-2.5 mb-6">
              {contactInfo.map(({ icon: Icon, text, href }, i) => {
                const inner = (
                  <div className="flex items-start gap-2.5 text-white/35 text-[13px] leading-snug">
                    <Icon className="w-3.5 h-3.5 text-meca-verde/70 flex-shrink-0 mt-[3px]" />
                    <span>{text}</span>
                  </div>
                );
                return href ? (
                  <a key={i} href={href} className="block hover:text-white/60 transition-colors">{inner}</a>
                ) : (
                  <div key={i}>{inner}</div>
                );
              })}
            </div>

            {/* Social */}
            <motion.a
              href="https://www.instagram.com/mecabr_?igsh=MWZiMXo0cWpkbmwyYg=="
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08 }}
              className="inline-flex w-9 h-9 rounded-lg border border-white/8 items-center justify-center text-white/30 hover:text-white hover:border-meca-verde/40 hover:bg-meca-verde/8 transition-all duration-200"
            >
              <Instagram className="w-4 h-4" />
            </motion.a>
          </motion.div>

          {/* ─── App columns ─── */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8">
            {appColumns.map((col, ci) => (
              <motion.div
                key={col.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: ci * 0.08 }}
              >
                {/* Header with app icon */}
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="w-7 h-7 rounded-lg overflow-hidden flex-shrink-0 ring-1 ring-white/10">
                    <img src={col.icon} alt={col.title} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-white font-semibold text-sm">{col.title}</h3>
                </div>

                {/* Links */}
                <ul className="space-y-2.5 mb-6">
                  {col.links.map((link, li) => (
                    <li key={li}>
                      <Link
                        href={link.href}
                        target={link.external ? '_blank' : undefined}
                        rel={link.external ? 'noopener noreferrer' : undefined}
                        className="text-white/35 hover:text-white text-[13px] transition-colors flex items-center gap-1.5 group"
                      >
                        {link.name}
                        {link.external && (
                          <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-50 transition-opacity" />
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* Store badges */}
                <div className="flex flex-col gap-2.5 mt-1">
                  <a
                    href={col.stores.apple}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10 hover:border-white/25 bg-white/[0.03] hover:bg-white/[0.06] transition-all group w-fit"
                  >
                    <svg className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 21.99 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 21.99C7.79 22.03 6.8 20.68 5.96 19.47C4.25 16.56 2.93 11.3 4.7 7.72C5.57 5.94 7.36 4.86 9.28 4.84C10.56 4.82 11.78 5.71 12.56 5.71C13.34 5.71 14.82 4.62 16.37 4.8C17.03 4.83 18.85 5.07 20 6.85C19.88 6.93 17.48 8.27 17.51 11.24C17.54 14.75 20.48 15.87 20.52 15.89C20.49 15.97 20.05 17.49 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                    </svg>
                    <div>
                      <div className="text-[9px] text-white/40 leading-none">Baixar na</div>
                      <div className="text-[13px] text-white/80 font-semibold leading-tight group-hover:text-white transition-colors">App Store</div>
                    </div>
                  </a>
                  <a
                    href={col.stores.google}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10 hover:border-white/25 bg-white/[0.03] hover:bg-white/[0.06] transition-all group w-fit"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.61 3 21.09 3 20.5Z" fill="#4285F4"/>
                      <path d="M16.81 15.12L6.05 21.34L13.69 12L16.81 15.12Z" fill="#EA4335"/>
                      <path d="M20.16 10.81C20.5 11.08 20.75 11.5 20.75 12C20.75 12.5 20.53 12.9 20.18 13.18L17.89 14.5L14.5 12L17.89 9.5L20.16 10.81Z" fill="#FBBC04"/>
                      <path d="M6.05 2.66L16.81 8.88L13.69 12L6.05 2.66Z" fill="#34A853"/>
                    </svg>
                    <div>
                      <div className="text-[9px] text-white/40 leading-none">Disponível no</div>
                      <div className="text-[13px] text-white/80 font-semibold leading-tight group-hover:text-white transition-colors">Google Play</div>
                    </div>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ─── Company column ─── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="lg:col-span-3"
          >
            <h3 className="text-white font-semibold text-sm mb-5">Empresa</h3>
            <ul className="space-y-2.5 mb-8">
              {companyLinks.map((link, li) => (
                <li key={li}>
                  <Link
                    href={link.href}
                    className="text-white/35 hover:text-white text-[13px] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="text-[11px] text-white/20 leading-relaxed">
              CNPJ: 56.390.849-0001/73
              <br />
              Meca Serviços e Benefícios Ltda.
            </div>
          </motion.div>
        </div>

        {/* ─── Divider ─── */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

        {/* ─── Bottom bar ─── */}
        <div className="py-5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap gap-5 text-[11px] text-white/25">
            {['Política de Privacidade', 'Termos de Uso', 'Cookies'].map((l) => (
              <Link key={l} href="#" className="hover:text-white/50 transition-colors">{l}</Link>
            ))}
          </div>

          <div className="flex items-center gap-5">
            <a
              href="https://baas.asaas.com/selos/Servicos_financeiros_Asaas-Reduzida-Negativo-Branco.svg?id=2a6ee772-f63f-424d-9d0e-1a3811b0f64c"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-50 hover:opacity-90 transition-opacity"
            >
              <img
                src="https://baas.asaas.com/selos/Servicos_financeiros_Asaas-Reduzida-Negativo-Branco.svg?id=2a6ee772-f63f-424d-9d0e-1a3811b0f64c"
                alt="Serviços financeiros por Asaas"
                className="h-5"
              />
            </a>
            <span className="text-[11px] text-white/15">© {year} MECA. Todos os direitos reservados.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
