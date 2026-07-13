'use client';

import { motion } from 'framer-motion';
import { CheckCircle, DollarSign, FileText, Shield, Star, Zap } from 'lucide-react';

const values = [
  {
    icon: FileText,
    title: 'Orçamento Transparente',
    desc: 'Você vê o preço antes de confirmar. Sem surpresas, sem cobranças extras. O que foi acordado é o que você paga.',
    color: '#41b173',
    bg: 'rgba(65,177,115,0.08)',
    border: 'rgba(65,177,115,0.2)',
  },
  {
    icon: Shield,
    title: 'Pagamento Seguro',
    desc: 'Pague com cartão ou Pix pelo app com total segurança. Processamento protegido e parcelamento disponível.',
    color: '#A855F7',
    bg: 'rgba(168,85,247,0.08)',
    border: 'rgba(168,85,247,0.2)',
  },
  {
    icon: CheckCircle,
    title: 'Garantia MECA',
    desc: 'Todos os serviços realizados pelas oficinas parceiras têm garantia. Problema? A MECA entra em ação.',
    color: '#4a6cf7',
    bg: 'rgba(74,108,247,0.08)',
    border: 'rgba(74,108,247,0.2)',
  },
  {
    icon: Star,
    title: 'Oficinas Verificadas',
    desc: 'Cada oficina na plataforma passa por verificação rigorosa. Avaliações reais de clientes reais.',
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.08)',
    border: 'rgba(245,158,11,0.2)',
  },
  {
    icon: Zap,
    title: 'Atendimento Ágil',
    desc: 'Agendamento em minutos. Notificações em tempo real. Comunicação direta entre motorista e oficina.',
    color: '#41b173',
    bg: 'rgba(65,177,115,0.08)',
    border: 'rgba(65,177,115,0.2)',
  },
  {
    icon: DollarSign,
    title: 'Melhor Custo-Benefício',
    desc: 'Compare preços entre oficinas e escolha a melhor opção. Economia real sem abrir mão da qualidade.',
    color: '#4a6cf7',
    bg: 'rgba(74,108,247,0.08)',
    border: 'rgba(74,108,247,0.2)',
  },
];

export default function BrandValuesSection() {
  return (
    <section id="sobre" className="py-32 bg-[#080808] relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-meca-verde/3 blur-[160px]" />
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-white/60 text-sm font-medium mb-6 border border-white/[0.08]">
            Por que escolher o MECA?
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Tudo que você{' '}
            <span className="gradient-text-verde">merece</span>
          </h2>
          <p className="text-xl text-white/50 max-w-2xl mx-auto">
            Construímos o MECA com um único objetivo: ser a plataforma mais confiável
            do mercado automotivo brasileiro.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="relative rounded-2xl p-8 cursor-default group transition-all duration-300"
                style={{
                  background: v.bg,
                  border: `1px solid ${v.border}`,
                  backdropFilter: 'blur(12px)',
                }}
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: `${v.color}20` }}
                >
                  <Icon className="w-7 h-7" style={{ color: v.color }} />
                </div>

                <h3 className="text-white font-bold text-lg mb-3">{v.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{v.desc}</p>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-8 right-8 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${v.color}, transparent)` }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
