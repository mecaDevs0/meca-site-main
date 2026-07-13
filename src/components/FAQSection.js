'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { HelpCircle, Minus, Plus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    category: 'motorista',
    question: 'Como funciona o agendamento pelo App Cliente?',
    answer:
      'Baixe o App Cliente MECA, escolha seu veículo, descreva o problema para a MIA (nossa IA), ou navegue pelos serviços disponíveis. A MIA encontra oficinas próximas com disponibilidade e você confirma em menos de 2 minutos.',
  },
  {
    category: 'motorista',
    question: 'O que é a MIA e como ela me ajuda?',
    answer:
      'A MIA é a inteligência artificial exclusiva do App Cliente MECA. Ela diagnostica problemas no seu carro baseado nos sintomas que você descreve, recomenda serviços, encontra oficinas disponíveis e pode agendar tudo automaticamente para você.',
  },
  {
    category: 'motorista',
    question: 'Como funciona o pagamento?',
    answer:
      'Pague com cartão de crédito/débito ou Pix diretamente pelo app, de forma segura. O pagamento é liberado para a oficina somente após a confirmação do serviço. Sem dinheiro em espécie, sem surpresas.',
  },
  {
    category: 'motorista',
    question: 'Os preços são transparentes?',
    answer:
      'Sim. Você recebe o orçamento detalhado antes de confirmar qualquer serviço. O valor exibido é o que você paga — sem taxas ocultas, sem cobranças surpresa.',
  },
  {
    category: 'oficina',
    question: 'Como cadastrar minha oficina no MECA?',
    answer:
      'Baixe o App Oficina MECA, faça o cadastro da sua empresa com os documentos necessários. Nossa equipe verifica as informações em até 48h e sua oficina já aparece para clientes na plataforma.',
  },
  {
    category: 'oficina',
    question: 'Como funciona o financeiro para as oficinas?',
    answer:
      'Os pagamentos feitos pelos clientes são processados com segurança pela Asaas Gestão Financeira S.A., instituição financeira parceira, e repassados para sua oficina conforme o calendário de liquidação. Você acompanha tudo pelo app: serviços realizados, valores a receber e histórico.',
  },
  {
    category: 'oficina',
    question: 'A plataforma cobra alguma taxa?',
    answer:
      'A MECA cobra uma taxa de intermediação de serviço, já inclusa no fluxo de pagamento. As tarifas financeiras (PIX, cartão) são definidas e cobradas pela Asaas Gestão Financeira S.A. Não há mensalidade fixa para começar. Quanto mais serviços, melhor o custo-benefício da plataforma.',
  },
  {
    category: 'geral',
    question: 'O app funciona em todo o Brasil?',
    answer:
      'Operamos nas principais cidades e regiões metropolitanas. Estamos expandindo constantemente. Verifique a disponibilidade na sua cidade dentro do app.',
  },
];

const categories = [
  { key: 'todos', label: 'Todos' },
  { key: 'motorista', label: 'App Cliente' },
  { key: 'oficina', label: 'App Oficina' },
  { key: 'geral', label: 'Geral' },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('todos');

  const filtered = activeCategory === 'todos' ? faqs : faqs.filter((f) => f.category === activeCategory);

  return (
    <section className="py-32 relative overflow-hidden" style={{ background: 'var(--s-bg)' }}>

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-meca-verde/3 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium mb-6" style={{ color: 'var(--s-text-muted)' }}>
            <HelpCircle className="w-4 h-4" />
            Perguntas Frequentes
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6" style={{ color: 'var(--s-text)' }}>
            Tire suas <span className="gradient-text-verde">dúvidas</span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--s-text-secondary)' }}>
            Perguntas sobre o App Cliente, App Oficina e a plataforma MECA.
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap gap-2 justify-center mb-12"
        >
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => { setActiveCategory(c.key); setOpenIndex(-1); }}
              className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-200"
              style={{
                background: activeCategory === c.key ? '#41b173' : 'var(--s-glass-bg)',
                color: activeCategory === c.key ? '#fff' : 'var(--s-text-muted)',
                border: activeCategory === c.key ? '1px solid #41b173' : '1px solid var(--s-border)',
              }}
            >
              {c.label}
            </button>
          ))}
        </motion.div>

        {/* FAQ items */}
        <div className="space-y-3">
          {filtered.map((faq, index) => (
            <motion.div
              key={`${activeCategory}-${index}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="rounded-2xl overflow-hidden"
              style={{
                background: 'var(--s-glass-bg)',
                border: openIndex === index ? '1px solid rgba(65,177,115,0.3)' : '1px solid var(--s-border-light)',
                transition: 'border-color 0.3s',
                boxShadow: 'var(--s-card-shadow)',
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-7 py-5 text-left flex justify-between items-center gap-4 transition-colors"
                style={{ background: 'transparent' }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--s-glass-hover)'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                <span className="font-medium text-base" style={{ color: 'var(--s-text)' }}>{faq.question}</span>
                <div className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-colors"
                  style={{ background: openIndex === index ? 'rgba(65,177,115,0.2)' : 'var(--s-glass-hover)' }}>
                  {openIndex === index
                    ? <Minus className="w-4 h-4 text-meca-verde" />
                    : <Plus className="w-4 h-4" style={{ color: 'var(--s-text-muted)' }} />}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-7 pb-6">
                      <p className="leading-relaxed text-sm" style={{ color: 'var(--s-text-secondary)' }}>{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Support CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 text-center glass rounded-3xl p-8"
        >
          <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--s-text)' }}>Ainda tem dúvidas?</h3>
          <p className="text-sm mb-6" style={{ color: 'var(--s-text-secondary)' }}>Nossa equipe está pronta para ajudar.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <motion.a
              href="https://wa.me/551130644243?text=Ola,%20vim%20através%20do%20site%20da%20meca%20e%20estou%20com%20duvidas"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="px-6 py-3 rounded-xl bg-meca-verde text-white font-semibold text-sm"
            >
              Falar no WhatsApp
            </motion.a>
            <motion.a
              href="mailto:contato@mecabr.com"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="px-6 py-3 rounded-xl font-semibold text-sm transition-colors"
              style={{
                border: '1px solid var(--s-border)',
                color: 'var(--s-text-80)',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--s-text-muted)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--s-border)'}
            >
              Enviar e-mail
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
