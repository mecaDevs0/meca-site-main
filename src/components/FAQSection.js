'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { HelpCircle, Minus, Plus } from 'lucide-react';
import { useState } from 'react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Como funciona o agendamento de serviços?",
      answer: "É muito simples! Baixe o app, encontre uma oficina próxima, escolha o serviço desejado e agende no melhor horário para você. Você receberá confirmação instantânea e poderá acompanhar tudo em tempo real."
    },
    {
      question: "Os preços são transparentes?",
      answer: "Absolutamente! Todas as oficinas parceiras fornecem orçamentos detalhados antes do início do serviço. Não há surpresas ou taxas ocultas. Você paga exatamente o que foi acordado."
    },
    {
      question: "Como vocês verificam a qualidade das oficinas?",
      answer: "Todas as oficinas passam por um rigoroso processo de verificação que inclui documentação, licenças, avaliação presencial e análise de equipamentos. Monitoramos continuamente através de avaliações de clientes."
    },
    {
      question: "Posso cancelar um agendamento?",
      answer: "Sim, você pode cancelar gratuitamente até 2 horas antes do horário agendado. Para cancelamentos com menos antecedência, podem se aplicar taxas conforme a política da oficina."
    },
    {
      question: "Como funciona o pagamento?",
      answer: "Oferecemos várias formas de pagamento: cartão de crédito/débito, PIX, e dinheiro. O pagamento é processado de forma segura através da plataforma, garantindo proteção para você e para a oficina."
    },
    {
      question: "O que acontece se eu não ficar satisfeito com o serviço?",
      answer: "Sua satisfação é nossa prioridade. Temos uma garantia de qualidade em todos os serviços. Se algo não atender suas expectativas, entre em contato conosco e resolveremos a situação."
    },
    {
      question: "O app funciona em todo o Brasil?",
      answer: "Atualmente operamos nas principais capitais e regiões metropolitanas. Estamos expandindo constantemente. Verifique a disponibilidade na sua cidade através do app."
    },
    {
      question: "Como me torno uma oficina parceira?",
      answer: "É fácil! Acesse nossa seção 'Para Oficinas' no site, preencha o formulário de cadastro e nossa equipe entrará em contato para explicar todo o processo de verificação e onboarding."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4 mr-2" />
            Perguntas Frequentes
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Tire suas <span className="text-meca-verde">dúvidas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Reunimos as principais perguntas dos nossos usuários para 
            ajudar você a entender melhor como a MECA funciona.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left bg-white hover:bg-gray-50 transition-colors"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900 pr-8">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-meca-verde" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-gray-600 mb-6">
              Nossa equipe de suporte está sempre pronta para ajudar você.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://wa.me/5511974772390?text=Ola,%20vim%20atravez%20do%20site%20da%20meca%20e%20estou%20com%20duvidas"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-meca-verde text-white px-6 py-3 rounded-xl font-semibold hover:bg-meca-verde/90 transition-colors inline-flex items-center justify-center"
              >
                Falar com Suporte
              </motion.a>
              <motion.a
                href="mailto:contato@meca.app?subject=Central%20de%20Ajuda%20-%20Dúvida"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors inline-flex items-center justify-center"
              >
                Central de Ajuda
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
