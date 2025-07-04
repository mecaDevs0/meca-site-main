'use client';

import { motion } from 'framer-motion';
import { Heart, Lightbulb, Rocket, Shield, Sparkles, Zap } from 'lucide-react';

export default function BrandValuesSection() {
  const values = [
    {
      title: "Inovação",
      description: "Tecnologia de ponta para conectar você às melhores soluções automotivas com eficiência e modernidade.",
      icon: Lightbulb,
      color: "from-blue-500 to-purple-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600"
    },
    {
      title: "Confiabilidade",
      description: "Oficinas verificadas e processos seguros para garantir total tranquilidade em cada serviço.",
      icon: Shield,
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50",
      textColor: "text-green-600"
    },
    {
      title: "Agilidade",
      description: "Processos otimizados e respostas rápidas para economizar seu tempo e maximizar resultados.",
      icon: Zap,
      color: "from-yellow-500 to-orange-600",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-600"
    },
    {
      title: "Simplicidade",
      description: "Interface intuitiva e processos descomplicados para uma experiência fluida e sem fricções.",
      icon: Sparkles,
      color: "from-pink-500 to-rose-600",
      bgColor: "bg-pink-50",
      textColor: "text-pink-600"
    },
    {
      title: "Transparência",
      description: "Preços claros, processos abertos e comunicação honesta em todas as interações.",
      icon: Heart,
      color: "from-red-500 to-pink-600",
      bgColor: "bg-red-50",
      textColor: "text-red-600"
    },
    {
      title: "Crescimento",
      description: "Impulsionamos o sucesso de motoristas e oficinas através de soluções que geram valor real.",
      icon: Rocket,
      color: "from-indigo-500 to-blue-600",
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 bg-meca-verde/10 text-meca-verde rounded-full text-sm font-medium mb-6">
            ✨ Nossos Valores
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            O que nos <span className="text-meca-verde">move</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Construímos a MECA baseados em princípios sólidos que guiam cada decisão 
            e moldam a experiência de nossos usuários.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="group relative"
              >
                <div className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                  
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${value.bgColor} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 ${value.textColor}`} />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                      {value.description}
                    </p>
                  </div>

                  {/* Hover Effect Border */}
                  <div className={`absolute inset-0 border-2 border-transparent group-hover:border-gradient-to-br group-hover:${value.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-meca-verde to-meca-marinho rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Pronto para fazer parte da nossa história?
            </h3>
            <p className="text-xl mb-8 text-white/90">
              Junte-se a milhares de usuários que já escolheram a MECA como sua plataforma automotiva.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-meca-verde px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-colors"
            >
              Começar Agora
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
