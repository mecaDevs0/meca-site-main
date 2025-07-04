'use client';

import { motion } from 'framer-motion';
import { Clock, Download, Shield, Star, Zap } from 'lucide-react';

export default function AppSection() {
  const features = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Agendamento Rápido",
      description: "Agende em menos de 2 minutos"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Oficinas Verificadas",
      description: "100% das oficinas são certificadas"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Orçamento Instantâneo",
      description: "Receba preços em tempo real"
    }
  ];

  const stats = [
    { number: "50k+", label: "Downloads" },
    { number: "4.8", label: "Avaliação", icon: <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" /> },
    { number: "1000+", label: "Oficinas Parceiras" }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Lado Esquerdo - Conteúdo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-flex items-center px-4 py-2 bg-meca-verde/10 text-meca-verde rounded-full text-sm font-medium"
              >
                📱 Baixe o App MECA
              </motion.div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Seu carro na palma da{' '}
                <span className="text-meca-verde">mão</span>
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Conecte-se com as melhores oficinas da sua região. 
                Agende serviços, compare preços e tenha total controle 
                do seu veículo com o app MECA.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white hover:shadow-sm transition-all duration-300"
                >
                  <div className="flex-shrink-0 p-2 bg-meca-verde/10 text-meca-verde rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-8 py-6"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center space-x-1 mb-1">
                    <span className="text-2xl font-bold text-gray-900">{stat.number}</span>
                    {stat.icon}
                  </div>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            {/* Download Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="group flex items-center justify-center space-x-3 bg-black text-white px-6 py-4 rounded-xl hover:bg-gray-800 transition-all duration-300 hover:scale-105">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                  <Download className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-gray-300">Baixar no</p>
                  <p className="font-semibold">App Store</p>
                </div>
              </button>
              
              <button className="group flex items-center justify-center space-x-3 bg-meca-verde text-white px-6 py-4 rounded-xl hover:bg-meca-verde/90 transition-all duration-300 hover:scale-105">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                  <Download className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-green-100">Baixar no</p>
                  <p className="font-semibold">Google Play</p>
                </div>
              </button>
            </motion.div>
          </motion.div>

          {/* Lado Direito - Mockup do App */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative mx-auto max-w-sm">
              {/* Phone Frame */}
              <div className="relative bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                <div className="bg-white rounded-[2.5rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="bg-black h-8 rounded-t-[2.5rem] flex items-center justify-center">
                    <div className="w-16 h-1 bg-white/30 rounded-full"></div>
                  </div>
                  
                  {/* App Content */}
                  <div className="p-6 space-y-6 h-[600px] bg-gradient-to-br from-meca-verde/5 to-meca-marinho/5">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-bold text-gray-900">Olá, João!</h3>
                        <p className="text-sm text-gray-600">Como posso ajudar hoje?</p>
                      </div>
                      <div className="w-10 h-10 bg-meca-verde rounded-full"></div>
                    </div>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white p-4 rounded-xl shadow-sm">
                        <div className="w-8 h-8 bg-meca-verde/10 rounded-lg mb-2"></div>
                        <p className="text-sm font-medium text-gray-900">Agendar</p>
                        <p className="text-xs text-gray-600">Revisão</p>
                      </div>
                      <div className="bg-white p-4 rounded-xl shadow-sm">
                        <div className="w-8 h-8 bg-meca-marinho/10 rounded-lg mb-2"></div>
                        <p className="text-sm font-medium text-gray-900">Orçamento</p>
                        <p className="text-xs text-gray-600">Rápido</p>
                      </div>
                    </div>

                    {/* Recent Activity */}
                    <div className="bg-white rounded-xl p-4 shadow-sm">
                      <h4 className="font-medium text-gray-900 mb-3">Agendamentos</h4>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-meca-verde rounded-full"></div>
                          <div className="flex-1">
                            <p className="text-sm font-medium">Troca de óleo</p>
                            <p className="text-xs text-gray-600">Hoje, 14:00</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                          <div className="flex-1">
                            <p className="text-sm font-medium">Revisão completa</p>
                            <p className="text-xs text-gray-600">Amanhã, 09:00</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-white rounded-xl p-3 shadow-lg"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs font-medium">Online</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-4 -left-4 bg-meca-verde text-white rounded-xl p-3 shadow-lg"
              >
                <p className="text-xs font-medium">R$ 89,90</p>
                <p className="text-xs opacity-90">Orçamento aprovado</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
