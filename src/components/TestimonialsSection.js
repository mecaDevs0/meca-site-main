'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Pedro Almeida',
    role: 'Motorista',
    tag: 'App Cliente',
    avatar: '🧑‍💼',
    rating: 5,
    content:
      'A MIA identificou o problema do meu carro em segundos e agendou a oficina na hora. Nunca foi tão fácil cuidar do meu veículo!',
    accent: '#41b173',
    bg: 'rgba(65,177,115,0.06)',
    border: 'rgba(65,177,115,0.15)',
  },
  {
    name: 'Carla Mendes',
    role: 'Dona de Oficina',
    tag: 'App Oficina',
    avatar: '👩‍🔧',
    rating: 5,
    content:
      'Desde que entrei na plataforma MECA, minha oficina triplicou o número de clientes. A gestão pelo app é incrível e intuitiva.',
    accent: '#8b9cf4',
    bg: 'rgba(74,108,247,0.06)',
    border: 'rgba(74,108,247,0.15)',
  },
  {
    name: 'Rafael Costa',
    role: 'Motorista',
    tag: 'App Cliente',
    avatar: '🧑‍🚗',
    rating: 5,
    content:
      'Transparência total no orçamento. Vi o preço, aprovei, paguei pelo app. Meu carro ficou pronto no prazo. 10/10.',
    accent: '#41b173',
    bg: 'rgba(65,177,115,0.06)',
    border: 'rgba(65,177,115,0.15)',
  },
  {
    name: 'Marcos Souza',
    role: 'Dono de Oficina',
    tag: 'App Oficina',
    avatar: '👨‍🔧',
    rating: 5,
    content:
      'O chat com o cliente pelo app é muito prático. Consigo enviar fotos do serviço, laudo e atualizações em tempo real.',
    accent: '#8b9cf4',
    bg: 'rgba(74,108,247,0.06)',
    border: 'rgba(74,108,247,0.15)',
  },
  {
    name: 'Ana Lima',
    role: 'Motorista',
    tag: 'App Cliente',
    avatar: '👩‍💼',
    rating: 5,
    content:
      'Paguei pelo Pix direto no app e a oficina já sabia. Sem stress, sem ligar, sem passar cartão. Adorei o MECA!',
    accent: '#41b173',
    bg: 'rgba(65,177,115,0.06)',
    border: 'rgba(65,177,115,0.15)',
  },
  {
    name: 'Bruno Ferreira',
    role: 'Técnico / Oficina',
    tag: 'App Oficina',
    avatar: '🧑‍🔧',
    rating: 5,
    content:
      'As notificações em tempo real e o histórico de cada cliente nos ajudam a dar um atendimento muito mais profissional.',
    accent: '#8b9cf4',
    bg: 'rgba(74,108,247,0.06)',
    border: 'rgba(74,108,247,0.15)',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-32 bg-[#080808] relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full bg-meca-verde/4 blur-[120px]" />
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] rounded-full bg-meca-ai/4 blur-[100px]" />
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-yellow-500/20 text-yellow-400 text-sm font-medium mb-6">
            <Star className="w-4 h-4 fill-yellow-400" />
            Depoimentos Reais
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Quem usa, <span className="gradient-text-verde">recomenda</span>
          </h2>
          <p className="text-xl text-white/50 max-w-2xl mx-auto">
            Motoristas e oficinas que já transformaram sua experiência automotiva com o MECA.
          </p>
        </motion.div>

        {/* Two-column labeled grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Column labels */}
          <div className="hidden lg:flex items-center gap-3 pb-2">
            <div className="w-3 h-3 rounded-full bg-meca-verde" />
            <span className="text-meca-verde text-sm font-medium">Motoristas — App Cliente</span>
          </div>
          <div className="hidden lg:flex items-center gap-3 pb-2">
            <div className="w-3 h-3 rounded-full bg-[#8b9cf4]" />
            <span className="text-[#8b9cf4] text-sm font-medium">Parceiros — App Oficina</span>
          </div>

          {/* Testimonial cards — interleaved */}
          {[0, 1, 2, 3, 4, 5].map((i) => {
            const t = testimonials[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.07 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl p-7 transition-all duration-300"
                style={{
                  background: t.bg,
                  border: `1px solid ${t.border}`,
                  backdropFilter: 'blur(12px)',
                }}
              >
                {/* Quote icon */}
                <Quote className="w-7 h-7 mb-4" style={{ color: t.accent, opacity: 0.6 }} />

                {/* Content */}
                <p className="text-white/80 text-base leading-relaxed mb-6">
                  "{t.content}"
                </p>

                {/* Stars */}
                <div className="flex gap-0.5 mb-5">
                  {[...Array(t.rating)].map((_, si) => (
                    <Star key={si} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center text-xl"
                    style={{ background: `${t.accent}20` }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{t.name}</div>
                    <div className="text-white/40 text-xs">{t.role}</div>
                  </div>
                  <div
                    className="ml-auto text-xs font-medium px-3 py-1 rounded-full"
                    style={{ background: `${t.accent}15`, color: t.accent, border: `1px solid ${t.accent}30` }}
                  >
                    {t.tag}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Ratings summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          {[
            { store: 'App Store', rating: '4.8', stars: 5 },
            { store: 'Google Play', rating: '4.9', stars: 5 },
          ].map((s, i) => (
            <div
              key={i}
              className="flex items-center gap-4 px-8 py-4 rounded-2xl"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <div className="text-3xl font-bold text-white">{s.rating}</div>
              <div>
                <div className="flex gap-0.5 mb-1">
                  {[...Array(s.stars)].map((_, si) => (
                    <Star key={si} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <div className="text-white/40 text-xs">{s.store}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
