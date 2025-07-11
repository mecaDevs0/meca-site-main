'use client';

import mecaImg3 from '@/assets/meca-img3.png';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, CheckCircle, Search, Wrench } from 'lucide-react';
import Image from 'next/image';

export default function HowItWorksSection() {
  const steps = [
    {
      step: "01",
      icon: <Search className="w-8 h-8" />,
      title: "Encontre oficinas",
      description: "Busque por oficinas verificadas na sua região usando nossos filtros inteligentes",
      color: "from-blue-500 to-indigo-600"
    },
    {
      step: "02", 
      icon: <Calendar className="w-8 h-8" />,
      title: "Agende o serviço",
      description: "Escolha o melhor horário e solicite orçamentos gratuitos para seu veículo",
      color: "from-meca-verde to-green-600"
    },
    {
      step: "03",
      icon: <Wrench className="w-8 h-8" />,
      title: "Monitoramento ao vivo",
      description: "Receba atualizações sobre o progresso do serviço pelo aplicativo",
      color: "from-orange-500 to-red-600"
    },
    {
      step: "04",
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Avalie e pague",
      description: "Avalie o serviço e efetue o pagamento de forma segura pela plataforma",
      color: "from-purple-500 to-pink-600"
    }
  ];

  const features = [
    "GPS integrado para localizar oficinas próximas",
    "Chat direto com os mecânicos",
    "Histórico completo de manutenções",
    "Pagamento seguro e transparente",
    "Avaliações e comentários reais",
    "Suporte 24/7"
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 bg-meca-verde/10 text-meca-verde rounded-full text-sm font-medium mb-6">
            🔧 Como Funciona
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Simples como <span className="text-meca-verde">1, 2, 3, 4</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cuidar do seu carro nunca foi tão fácil. Veja como funciona 
            nossa plataforma em apenas 4 passos simples.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <div className="relative h-1 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 2, delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full origin-left"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Step Card */}
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 relative">
                  
                  {/* Step Number */}
                  <div className="absolute -top-4 left-8">
                    <div className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                      {step.step}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="flex justify-center mb-6 mt-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white`}>
                      {step.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow for non-mobile */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="w-6 h-6 text-gray-300" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="bg-white border-2 border-meca-verde/20 rounded-[2.5rem] p-12 text-gray-800 relative overflow-hidden shadow-xl">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-meca-verde/20 to-blue-300/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-meca-marinho/20 to-purple-300/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
            
            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 opacity-5 mix-blend-overlay">
              <Image 
                src={mecaImg3} 
                alt="MECA recursos" 
                fill 
                quality={100}
                className="object-cover"
              />
            </div>
            
            <div className="relative z-10 text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-meca-verde/10 text-meca-verde rounded-full text-sm font-medium mb-4">
                ✨ Recursos Exclusivos
              </div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900">
                Ferramentas que transformam sua experiência
              </h3>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Tudo que você precisa para gerenciar a manutenção do seu veículo com facilidade
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 p-5 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                >
                  <div className="p-2 bg-meca-verde/10 rounded-full">
                    <CheckCircle className="w-5 h-5 text-meca-verde flex-shrink-0" />
                  </div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-16">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-meca-verde to-meca-marinho text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 mx-auto"
                style={{ display: 'inline-flex' }}
              >
                <span>Experimente Agora</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <p className="text-gray-500 text-sm mt-4">
                Comece a transformar sua experiência automotiva hoje mesmo
              </p>
            </div>
          </div>
        </motion.div>


      </div>
    </section>
  );
}
