'use client';

import { motion } from 'framer-motion';
import { BarChart3, Bell, DollarSign, MessageSquare, Star, TrendingUp, Users, Wrench } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Mais Clientes',
    desc: 'Apareça para milhares de motoristas da sua região que buscam oficinas confiáveis.',
  },
  {
    icon: BarChart3,
    title: 'Gestão Inteligente',
    desc: 'Controle sua agenda, serviços e equipe pelo app de forma simples e eficiente.',
  },
  {
    icon: MessageSquare,
    title: 'Chat com Clientes',
    desc: 'Comunicação direta com o motorista — tire dúvidas, envie laudos e atualizações.',
  },
  {
    icon: DollarSign,
    title: 'Financeiro Integrado',
    desc: 'Veja receitas, taxas e repasses diretamente pelo app. Tudo transparente.',
  },
  {
    icon: Bell,
    title: 'Notificações em Tempo Real',
    desc: 'Receba alertas de novos agendamentos, pagamentos e mensagens na hora.',
  },
  {
    icon: TrendingUp,
    title: 'Crescimento Contínuo',
    desc: 'Avaliações reais constroem sua reputação e atraem mais clientes organicamente.',
  },
];

const stats = [
  { value: 'Grátis', label: 'Para começar' },
  { value: '+Clientes', label: 'Novos todo mês' },
  { value: '5★', label: 'Avaliação média' },
  { value: '24/7', label: 'Suporte MECA' },
];

export default function AppOficinaSection() {
  return (
    <section id="oficinas" className="py-32 relative overflow-hidden" style={{ background: 'var(--s-bg-alt)' }}>

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-meca-marinho/40 blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-blue-900/20 blur-[100px]" />
      </div>

      {/* Diagonal separator top */}
      <div className="absolute top-0 left-0 right-0 h-24" style={{ background: 'var(--s-bg)', clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 100%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{
              background: 'rgba(37,41,64,0.4)',
              border: '1px solid rgba(37,41,64,0.8)',
              color: 'var(--s-oficina-accent-text)',
            }}
          >
            <Wrench className="w-4 h-4" />
            Para Oficinas
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6" style={{ color: 'var(--s-text)' }}>
            App{' '}
            <span style={{ background: 'linear-gradient(135deg, #4a6cf7, #8b9cf4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Oficina MECA
            </span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--s-text-secondary)' }}>
            A ferramenta que sua oficina precisa para crescer. Gerencie tudo,
            atraia mais clientes e construa uma reputação sólida.
          </p>
        </motion.div>

        {/* Features Bento Grid */}
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
                className="rounded-2xl p-6 transition-all duration-300 group cursor-default"
                style={{
                  background: 'var(--s-glass-bg)',
                  border: '1px solid rgba(74,108,247,0.15)',
                  backdropFilter: 'blur(12px)',
                  boxShadow: 'var(--s-card-shadow)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(74,108,247,0.35)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(74,108,247,0.15)';
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: 'rgba(74,108,247,0.15)' }}
                >
                  <Icon className="w-6 h-6" style={{ color: 'var(--s-oficina-accent-text)' }} />
                </div>
                <h3 className="font-semibold mb-2" style={{ color: 'var(--s-text)' }}>{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--s-text-secondary)' }}>{f.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl p-8 lg:p-12 mb-12"
          style={{
            background: 'linear-gradient(135deg, rgba(37,41,64,0.6), rgba(74,108,247,0.1))',
            border: '1px solid rgba(74,108,247,0.2)',
          }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{s.value}</div>
                <div className="text-white/40 text-sm">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Download CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass rounded-3xl p-8 lg:p-12"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl lg:text-3xl font-bold mb-3" style={{ color: 'var(--s-text)' }}>
                Leve sua oficina para o próximo nível
              </h3>
              <p className="mb-6" style={{ color: 'var(--s-text-secondary)' }}>
                Cadastre sua oficina agora. Disponível para iOS e Android.
              </p>
              <div className="flex flex-row gap-4 justify-center lg:justify-start">
                <motion.a
                  href="https://apps.apple.com/app/meca-oficina"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.94 }}
                  className="w-[150px] h-[50px] relative"
                >
                  <img src="/buttonAppleStore.svg" alt="App Store" className="h-full w-full object-contain" />
                </motion.a>
                <motion.a
                  href="https://play.google.com/store/apps/details?id=br.com.megaleios.meca_oficina"
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
              <div className="text-center rounded-2xl px-6 py-4" style={{ background: 'var(--s-glass-bg)', border: '1px solid var(--s-border-light)', boxShadow: 'var(--s-card-shadow)' }}>
                <div className="text-3xl font-bold mb-1" style={{ color: 'var(--s-text)' }}>4.8</div>
                <div className="flex justify-center gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <div className="text-xs" style={{ color: 'var(--s-text-muted)' }}>App Store</div>
              </div>
              <div className="text-center rounded-2xl px-6 py-4" style={{ background: 'var(--s-glass-bg)', border: '1px solid var(--s-border-light)', boxShadow: 'var(--s-card-shadow)' }}>
                <div className="text-3xl font-bold mb-1" style={{ color: 'var(--s-text)' }}>4.9</div>
                <div className="flex justify-center gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <div className="text-xs" style={{ color: 'var(--s-text-muted)' }}>Google Play</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
