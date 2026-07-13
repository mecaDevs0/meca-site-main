'use client';

import { motion } from 'framer-motion';
import { Bot, Calendar, CreditCard, History, MapPin, Shield, Smartphone, Star } from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    icon: Bot,
    title: 'MIA — IA do MECA',
    desc: 'Diagnóstico inteligente e agendamento automático via chat com IA.',
    accent: 'text-meca-ai',
    bg: 'bg-meca-ai/15',
    border: 'border-meca-ai/25',
  },
  {
    icon: Calendar,
    title: 'Agendamento Express',
    desc: 'Marque seu serviço em menos de 2 minutos com as melhores oficinas.',
    accent: 'text-meca-verde',
    bg: 'bg-meca-verde/15',
    border: 'border-meca-verde/25',
  },
  {
    icon: MapPin,
    title: 'Oficinas Verificadas',
    desc: 'Encontre oficinas certificadas e avaliadas por motoristas na sua região.',
    accent: 'text-meca-verde',
    bg: 'bg-meca-verde/15',
    border: 'border-meca-verde/25',
  },
  {
    icon: CreditCard,
    title: 'Pagamento Seguro',
    desc: 'Pague pelo app com total segurança. Cartão, Pix e parcelamento.',
    accent: 'text-meca-verde',
    bg: 'bg-meca-verde/15',
    border: 'border-meca-verde/25',
  },
  {
    icon: History,
    title: 'Histórico Completo',
    desc: 'Acompanhe todas as manutenções do seu veículo em um único lugar.',
    accent: 'text-meca-verde',
    bg: 'bg-meca-verde/15',
    border: 'border-meca-verde/25',
  },
  {
    icon: Shield,
    title: 'Garantia MECA',
    desc: 'Todos os serviços têm garantia. Problema? A MECA resolve.',
    accent: 'text-meca-verde',
    bg: 'bg-meca-verde/15',
    border: 'border-meca-verde/25',
  },
];

export default function AppClienteSection() {
  return (
    <section id="motoristas" className="py-32 bg-[#080808] relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-meca-verde/5 blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-meca-verde/4 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-verde text-meca-verde text-sm font-medium mb-6">
            <Smartphone className="w-4 h-4" />
            Para Motoristas
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            App{' '}
            <span className="gradient-text-verde">Cliente MECA</span>
          </h2>
          <p className="text-xl text-white/50 max-w-2xl mx-auto">
            Tudo que você precisa para cuidar do seu carro — na palma da mão.
            Agende, pague, acompanhe e conte com a MIA.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className={`glass rounded-2xl p-6 border ${f.border} hover:border-opacity-60 transition-all duration-300 group cursor-default`}
              >
                <div className={`w-12 h-12 rounded-xl ${f.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-6 h-6 ${f.accent}`} />
                </div>
                <h3 className="text-white font-semibold mb-2">{f.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Ratings + Download */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass rounded-3xl p-8 lg:p-12 border border-meca-verde/20"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left */}
            <div className="text-center lg:text-left">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                Baixe agora e cuide do seu carro
              </h3>
              <p className="text-white/50 mb-6">
                Disponível para iOS e Android. Gratuito.
              </p>
              <div className="flex flex-row gap-4 justify-center lg:justify-start">
                <motion.a
                  href="https://apps.apple.com/us/app/meca/id6743087361"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.94 }}
                  className="w-[150px] h-[50px] relative"
                >
                  <img src="/buttonAppleStore.svg" alt="App Store" className="h-full w-full object-contain" />
                </motion.a>
                <motion.a
                  href="https://play.google.com/store/apps/details?id=br.com.megaleios.meca_cliente&hl=pt_BR&pli=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.94 }}
                  className="w-[150px] h-[50px] relative"
                >
                  <img src="/buttonGooglePlay.svg" alt="Google Play" className="h-full w-full object-contain" />
                </motion.a>
              </div>
            </div>

            {/* Right — Ratings */}
            <div className="flex gap-8">
              <div className="text-center glass rounded-2xl px-6 py-4 border border-white/[0.06]">
                <div className="text-3xl font-bold text-white mb-1">4.8</div>
                <div className="flex justify-center gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <div className="text-white/40 text-xs">App Store</div>
              </div>
              <div className="text-center glass rounded-2xl px-6 py-4 border border-white/[0.06]">
                <div className="text-3xl font-bold text-white mb-1">4.9</div>
                <div className="flex justify-center gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <div className="text-white/40 text-xs">Google Play</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
