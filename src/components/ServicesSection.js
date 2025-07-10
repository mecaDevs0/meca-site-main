'use client';

import { motion } from 'framer-motion';
import {
  BarChart3,
  Clock,
  CreditCard,
  MapPin,
  MessageSquare,
  Shield,
  Smartphone,
  Star,
  Users,
  Wrench,
  Zap
} from 'lucide-react';

export default function ServicesSection() {
  const clientBenefits = [
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Agendamento Express",
      description: "Agende em menos de 2 minutos com as melhores oficinas"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Oficinas Próximas",
      description: "Encontre oficinas verificadas na sua região"
    },
    {
      icon: <CreditCard className="w-5 h-5" />,
      title: "Pagamento Seguro",
      description: "Pague de forma segura e transparente pelo app"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Histórico Completo",
      description: "Acompanhe todas as manutenções do seu veículo"
    }
  ];

  const workshopBenefits = [
    {
      icon: <Users className="w-5 h-5" />,
      title: "Mais Clientes",
      description: "Conecte-se com milhares de motoristas da região"
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: "Gestão Inteligente",
      description: "Ferramentas completas para gerenciar sua oficina"
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      title: "Comunicação Direta",
      description: "Chat integrado para falar diretamente com clientes"
    },
    {
      icon: <Star className="w-5 h-5" />,
      title: "Reputação Online",
      description: "Construa sua reputação com avaliações reais"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
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
            <Zap className="w-4 h-4 mr-2" />
            Soluções Completas
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Para <span className="text-meca-verde">motoristas</span> e{' '}
            <span className="text-meca-marinho">oficinas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Uma plataforma que revoluciona a forma como motoristas e oficinas se conectam,
            criando valor para todos os envolvidos.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Para Clientes */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-meca-verde/10 rounded-2xl mb-6">
                <Smartphone className="w-8 h-8 text-meca-verde" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Para Motoristas</h3>
              <p className="text-lg text-gray-600">
                Encontre as melhores oficinas, compare preços e tenha total controle 
                sobre a manutenção do seu veículo.
              </p>
            </div>

            <div className="grid gap-6">
              {clientBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-meca-verde/10 text-meca-verde rounded-xl group-hover:bg-meca-verde group-hover:text-white transition-colors">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>


          </motion.div>

          {/* Para Oficinas */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-meca-marinho/10 rounded-2xl mb-6">
                <Wrench className="w-8 h-8 text-meca-marinho" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Para Oficinas</h3>
              <p className="text-lg text-gray-600">
                Amplie seu negócio, gerencie serviços e construa uma reputação 
                sólida na maior plataforma automotiva.
              </p>
            </div>

            <div className="grid gap-6">
              {workshopBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-meca-marinho/10 text-meca-marinho rounded-xl group-hover:bg-meca-marinho group-hover:text-white transition-colors">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>


          </motion.div>
        </div>

        {/* Features Highlight Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-24 bg-gradient-to-r from-meca-verde to-meca-marinho rounded-3xl p-8 lg:p-12 text-white"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="flex justify-center mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <div className="text-xl lg:text-2xl font-bold mb-2">Rapidez</div>
              <div className="text-white/80">Serviços ágeis</div>
            </div>
            <div>
              <div className="flex justify-center mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <div className="text-xl lg:text-2xl font-bold mb-2">Segurança</div>
              <div className="text-white/80">Oficinas verificadas</div>
            </div>
            <div>
              <div className="flex justify-center mb-4">
                <CreditCard className="w-8 h-8" />
              </div>
              <div className="text-xl lg:text-2xl font-bold mb-2">Transparência</div>
              <div className="text-white/80">Preços sem surpresas</div>
            </div>
            <div>
              <div className="flex justify-center mb-4">
                <Smartphone className="w-8 h-8" />
              </div>
              <div className="text-xl lg:text-2xl font-bold mb-2">Praticidade</div>
              <div className="text-white/80">Tudo pelo celular</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
