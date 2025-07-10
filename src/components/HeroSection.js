'use client';

import mecaImg1 from '@/assets/meca-img1.png';
import { motion } from 'framer-motion';
import { ArrowDown, Shield, Star, Users } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const stats = [
    { icon: <Users className="w-5 h-5" />, value: "50k+", label: "Usuários" },
    { icon: <Star className="w-5 h-5" />, value: "4.8", label: "Avaliação" },
    { icon: <Shield className="w-5 h-5" />, value: "1000+", label: "Oficinas" },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-meca-marinho via-meca-marinho to-gray-900 overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-20">
        <Image 
          src={mecaImg1} 
          alt="MECA background" 
          fill 
          quality={100}
          className="object-cover"
          priority
        />
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-meca-verde rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-meca-verde rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(255,255,255) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center space-y-12"
        >
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-white/90">
              <span className="w-2 h-2 bg-meca-verde rounded-full animate-pulse"></span>
              <span className="text-sm font-medium">
                Baixe o App MECA
              </span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-none">
              Quem vai de{' '}
              <span className="relative">
                <span className="text-meca-verde">MECA</span>
                <motion.div
                  className="absolute -bottom-2 left-0 w-full h-1 bg-meca-verde"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                />
              </span>
              <br />
              vai além!
            </h1>
            
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              A plataforma que conecta você às melhores oficinas da sua região.
              <br />
              <span className="text-meca-verde font-medium">Rápido, seguro e confiável.</span>
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <div className="flex flex-col sm:flex-row gap-4 j">
              <motion.a 
                href="https://apps.apple.com/us/app/meca/id6743087361"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="transition-all duration-300 w-[160px] h-[53px] flex items-center"
              >
                <Image
                  src={require('@/assets/buttonAppleStore.svg')}
                  alt="Baixar na App Store"
                  width={160}
                  height={53}
                  className="w-full h-auto object-contain"
                />
              </motion.a>
              
              <motion.a 
                href="https://play.google.com/store/apps/details?id=br.com.megaleios.meca_cliente&hl=pt_BR&pli=1"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="transition-all duration-300 w-[160px] h-[53px] flex items-center"
              >
                <Image
                  src={require('@/assets/buttonGooglePlay.png')}
                  alt="Baixar no Google Play"
                  width={160}
                  height={53}
                  className="h-auto"
                />
              </motion.a>
            </div>
            
            {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 flex items-center space-x-2"
            >
              <Play className="w-5 h-5" />
              <span>Ver Demo</span>
            </motion.button> */}
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto pt-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                className="text-center space-y-2"
              >
                <div className="flex items-center justify-center space-x-2 text-meca-verde">
                  {stat.icon}
                  <span className="text-2xl font-bold">{stat.value}</span>
                </div>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-32 right-8 lg:right-20 hidden lg:block"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-meca-verde rounded-full animate-pulse"></div>
              <span className="text-white text-sm">1000+ oficinas online</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '1s' }}
          className="absolute bottom-32 left-8 lg:left-20 hidden lg:block"
        >
          <div className="bg-meca-verde rounded-2xl p-4 shadow-lg">
            <div className="text-white text-sm">
              <p className="font-semibold">Orçamento aprovado!</p>
              <p className="opacity-90">R$ 89,90</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white/60 cursor-pointer"
        >
          <ArrowDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}
