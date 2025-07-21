'use client';

import mecaImg2 from '@/assets/meca-img2.png';
import { motion } from 'framer-motion';
import { Clock, Shield, Star, Zap } from 'lucide-react';
import Image from 'next/image';

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

  // Comentado temporariamente até termos métricas reais
  const stats = [
    { number: "", label: "Downloads" },
    { number: "", label: "Avaliação", icon: <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" /> },
    { number: "", label: "Oficinas Parceiras" }
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
            {/* Estatísticas temporariamente removidas até termos métricas reais
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
            */}

            {/* Download Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (typeof window !== 'undefined' && window.gtag) {
                    window.gtag('event', 'conversion', {
                      'send_to': 'AW-17215013580/NccNCNH9o_UaEMyF4ZBA',
                      'event_callback': function () {
                        window.location = 'https://apps.apple.com/us/app/meca/id6743087361';
                      }
                    });
                  } else {
                    window.location = 'https://apps.apple.com/us/app/meca/id6743087361';
                  }
                }}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105 w-[160px] h-[53px] flex items-center"
              >
                <Image
                  src={require('@/assets/buttonAppleStore.png')}
                  alt="Baixar na App Store"
                  width={160}
                  height={53}
                  className="w-full h-auto object-contain"
                />
              </a>

              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (typeof window !== 'undefined' && window.gtag) {
                    window.gtag('event', 'conversion', {
                      'send_to': 'AW-17215013580/NccNCNH9o_UaEMyF4ZBA',
                      'event_callback': function () {
                        window.location = 'https://play.google.com/store/apps/details?id=br.com.megaleios.meca_cliente&hl=pt_BR&pli=1';
                      }
                    });
                  } else {
                    window.location = 'https://play.google.com/store/apps/details?id=br.com.megaleios.meca_cliente&hl=pt_BR&pli=1';
                  }
                }}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105 w-[160px] h-[53px] flex items-center"
              >
                <Image
                  src={require('@/assets/buttonGooglePlay.png')}
                  alt="Baixar no Google Play"
                  width={160}
                  height={53}
                  className="w-full h-auto object-contain"
                />
              </a>
            </motion.div>
          </motion.div>

          {/* Lado Direito - Imagem do App */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative mx-auto max-w-lg">
                <Image 
                  src={mecaImg2} 
                  alt="App MECA interface" 
                  width={500}
                  height={700}
                  className="object-cover w-full"
                  quality={100}
                />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
