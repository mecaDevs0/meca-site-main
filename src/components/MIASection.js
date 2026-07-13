'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Brain, Calendar, CheckCircle, MessageSquare, Sparkles, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

const chatMessages = [
  { from: 'user', text: 'Meu carro está fazendo um barulho estranho ao frear...' },
  { from: 'mia', text: 'Entendi! Isso pode ser desgaste nas pastilhas de freio. Já faz quanto tempo esse barulho?', delay: 1200 },
  { from: 'user', text: 'Uns 2 dias já. É perigoso?' },
  { from: 'mia', text: 'Sim, é importante verificar logo. Encontrei 3 oficinas verificadas perto de você com disponibilidade hoje. Deseja agendar?', delay: 1200 },
  { from: 'user', text: 'Sim, agende na mais bem avaliada!' },
  { from: 'mia', text: 'Pronto! Agendado na Oficina AutoPrime às 14h. Vou te enviar a confirmação. ✅', delay: 1000 },
];

function ChatBubble({ msg, visible }) {
  const isUser = msg.from === 'user';
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className={`flex items-end gap-2 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}
        >
          {!isUser && (
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-meca-ai-dark to-meca-ai flex items-center justify-center flex-shrink-0 shadow-lg">
              <Bot className="w-4 h-4 text-white" />
            </div>
          )}
          <div
            className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
              isUser
                ? 'bg-meca-verde/20 border border-meca-verde/30 rounded-br-sm'
                : 'bg-meca-ai/15 border border-meca-ai/25 rounded-bl-sm'
            }`}
            style={{ color: 'var(--s-text)' }}
          >
            {msg.text}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function AnimatedChat() {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (visibleCount >= chatMessages.length) return;
    const delay = chatMessages[visibleCount]?.delay ?? 1000;
    const timer = setTimeout(() => setVisibleCount((c) => c + 1), delay);
    return () => clearTimeout(timer);
  }, [visibleCount]);

  useEffect(() => {
    if (visibleCount >= chatMessages.length) {
      const reset = setTimeout(() => setVisibleCount(0), 3500);
      return () => clearTimeout(reset);
    }
  }, [visibleCount]);

  return (
    <div className="space-y-3 min-h-[280px]">
      {chatMessages.map((msg, i) => (
        <ChatBubble key={i} msg={msg} visible={i < visibleCount} />
      ))}
    </div>
  );
}

const features = [
  {
    icon: Brain,
    title: 'Diagnóstico Inteligente',
    desc: 'A MIA analisa seus sintomas e identifica possíveis problemas com precisão.',
  },
  {
    icon: Calendar,
    title: 'Agendamento Automático',
    desc: 'Encontra oficinas disponíveis e agenda no horário ideal para você.',
  },
  {
    icon: Zap,
    title: 'Respostas em Segundos',
    desc: 'Disponível 24/7, a MIA responde imediatamente qualquer dúvida sobre seu veículo.',
  },
  {
    icon: CheckCircle,
    title: 'Histórico Personalizado',
    desc: 'Aprende sobre seu carro e histórico de manutenção para recomendações precisas.',
  },
];

export default function MIASection() {
  return (
    <section id="mia" className="py-32 relative overflow-hidden" style={{ background: 'var(--s-bg)' }}>
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-meca-ai/6 blur-[120px]" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-meca-verde/4 blur-[100px]" />
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-ai text-meca-ai text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Exclusivo no App Cliente
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6" style={{ color: 'var(--s-text)' }}>
            Conheça a{' '}
            <span className="gradient-text-ai">MIA</span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--s-text-secondary)' }}>
            A inteligência artificial do MECA que diagnostica problemas, recomenda serviços
            e agenda tudo para você — em segundos.
          </p>
        </motion.div>

        {/* Split layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — Features */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-4 p-5 rounded-2xl glass hover:border-meca-ai/30 transition-all duration-300 group"
                  style={{ borderColor: 'var(--s-border-light)' }}
                >
                  <div className="w-12 h-12 rounded-xl bg-meca-ai/15 flex items-center justify-center flex-shrink-0 group-hover:bg-meca-ai/25 transition-colors">
                    <Icon className="w-6 h-6 text-meca-ai" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1" style={{ color: 'var(--s-text)' }}>{f.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--s-text-secondary)' }}>{f.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Right — Animated Chat */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Outer glow */}
            <div className="absolute -inset-4 rounded-3xl bg-meca-ai/10 blur-2xl" />

            {/* Chat card */}
            <div className="relative glass-ai rounded-3xl p-6 border border-meca-ai/20 shadow-2xl">
              {/* Chat header */}
              <div className="flex items-center gap-3 pb-5 mb-5" style={{ borderBottom: '1px solid var(--s-border)' }}>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-meca-ai-dark to-meca-ai flex items-center justify-center shadow-lg">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-sm flex items-center gap-2" style={{ color: 'var(--s-text)' }}>
                    MIA
                    <span className="text-xs font-normal px-2 py-0.5 rounded-full bg-meca-ai/20 text-meca-ai">IA do MECA</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-meca-verde animate-pulse" />
                    <span className="text-xs" style={{ color: 'var(--s-text-muted)' }}>Online agora</span>
                  </div>
                </div>
                <div className="ml-auto">
                  <MessageSquare className="w-5 h-5" style={{ color: 'var(--s-text-faint)' }} />
                </div>
              </div>

              {/* Chat messages */}
              <AnimatedChat />

              {/* Input bar */}
              <div className="mt-5 pt-4" style={{ borderTop: '1px solid var(--s-border)' }}>
                <div className="flex items-center gap-3 rounded-xl px-4 py-3" style={{ background: 'var(--s-glass-hover)', border: '1px solid var(--s-border)' }}>
                  <span className="text-sm flex-1" style={{ color: 'var(--s-text-faint)' }}>Descreva o problema do seu carro...</span>
                  <div className="w-8 h-8 rounded-lg bg-meca-ai/80 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-5 -right-5 glass-ai rounded-2xl px-4 py-2 border border-meca-ai/30 shadow-lg"
            >
              <div className="text-xs font-medium flex items-center gap-2" style={{ color: 'var(--s-text)' }}>
                <Brain className="w-3 h-3 text-meca-ai" />
                IA Automotiva
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
