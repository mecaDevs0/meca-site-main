'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Download, Mail, MessageSquare, Phone } from 'lucide-react';
import { useState } from 'react';

export default function CtaSection() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const benefits = [
    "Acesso a 1000+ oficinas verificadas",
    "Orçamentos gratuitos e transparentes",
    "Suporte 24/7 para emergências",
    "Histórico completo do seu veículo"
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-meca-marinho via-gray-900 to-meca-marinho relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-meca-verde rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-meca-verde rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - CTA Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-flex items-center px-4 py-2 bg-meca-verde/20 border border-meca-verde/30 rounded-full text-meca-verde text-sm font-medium"
              >
                🚀 Transforme sua experiência automotiva
              </motion.div>
              
              <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
                Pronto para começar sua jornada com a{' '}
                <span className="text-meca-verde">MECA</span>?
              </h2>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Junte-se a mais de 50.000 usuários que já descobriram uma forma 
                mais inteligente de cuidar do seu veículo.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-meca-verde flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* Download Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-meca-verde text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-meca-verde/90 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Download className="w-5 h-5" />
                <span>Baixar App Gratuito</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Falar com Especialista</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-2xl"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Receba novidades exclusivas
              </h3>
              <p className="text-gray-600">
                Seja o primeiro a saber sobre novas funcionalidades e promoções especiais
              </p>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Seu melhor e-mail
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="seuemail@exemplo.com"
                      required
                      className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-meca-verde focus:border-transparent transition-all duration-200"
                    />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-meca-verde to-meca-marinho text-white py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Quero receber novidades</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>

                <p className="text-xs text-gray-500 text-center">
                  Ao se inscrever, você concorda com nossa política de privacidade. 
                  Você pode cancelar a qualquer momento.
                </p>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Obrigado! 🎉
                </h3>
                <p className="text-gray-600">
                  Você foi inscrito com sucesso. Em breve você receberá novidades exclusivas do MECA.
                </p>
              </motion.div>
            )}

            {/* Contact Info */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <p className="text-sm text-gray-600 text-center mb-4">Ou entre em contato diretamente:</p>
              <div className="flex justify-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>(11) 97477-2390</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>contato@mecabr.com </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        {/* Métricas temporariamente removidas até termos números reais
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white"
        >
          <div>
            <div className="text-3xl font-bold text-meca-verde mb-2">50k+</div>
            <div className="text-gray-400">Usuários Ativos</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-meca-verde mb-2">1000+</div>
            <div className="text-gray-400">Oficinas Verificadas</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-meca-verde mb-2">150k+</div>
            <div className="text-gray-400">Serviços Realizados</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-meca-verde mb-2">4.8★</div>
            <div className="text-gray-400">Avaliação Média</div>
          </div>
        </motion.div>
        */}
      </div>
    </section>
  );
}
