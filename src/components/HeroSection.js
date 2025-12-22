"use client";

import buttonAppleStore from "@/assets/buttonAppleStore.png";
import buttonGooglePlay from "@/assets/buttonGooglePlay.png";
import mecaImg1 from "@/assets/meca-img1.png";
import mecaHeaderMobile from "@/assets/Meca_Header_Branco_Mobile.png";
import { motion } from "framer-motion";
import { ArrowDown, Shield, Star, Users } from "lucide-react";
import Image from "next/image";

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

  // Comentado temporariamente até termos métricas reais
  const stats = [
    { icon: <Users className="w-5 h-5" />, value: "", label: "Usuários" },
    { icon: <Star className="w-5 h-5" />, value: "", label: "Avaliação" },
    { icon: <Shield className="w-5 h-5" />, value: "", label: "Oficinas" },
  ];

  return (
    <section 
      className="relative min-h-screen overflow-hidden flex flex-col w-full"
      style={{ 
        width: '100vw',
        maxWidth: '100vw',
        margin: 0,
        padding: 0,
        marginTop: 0,
        marginLeft: 0,
        marginRight: 0,
        position: 'relative',
        minHeight: '100vh',
      }}
    >
      {/* Background Image - Desktop apenas */}
      <div 
        className="absolute inset-0 z-0 hidden md:block"
        style={{
          width: '100%',
          height: '100%',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          margin: 0,
          padding: 0,
          position: 'absolute',
        }}
      >
        <div 
          className="relative w-full h-full"
          style={{
            width: '100%',
            height: '100%',
            margin: 0,
            padding: 0,
            position: 'relative',
          }}
        >
          <Image
            src={mecaImg1}
            alt="MECA background"
            fill
            quality={100}
            className="object-cover"
            style={{ 
              objectPosition: 'right center',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
            sizes="100vw"
            priority
          />
        </div>
      </div>

      {/* Overlay Desktop */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10 pointer-events-none hidden md:block"></div>

      {/* Background Mobile - Imagem Meca_Header_Branco_Mobile.png */}
      <div className="absolute inset-0 z-0 md:hidden">
        <Image
          src={mecaHeaderMobile}
          alt="MECA Mobile Header"
          fill
          quality={100}
          className="object-cover"
          style={{ 
            objectPosition: 'center center',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
          sizes="100vw"
          priority
        />
              </div>

      {/* Desktop: CTA Buttons - Menores, na direita, posicionados mais abaixo */}
            <motion.div
              variants={itemVariants}
        className="hidden md:flex flex-col gap-3 absolute right-8 z-30"
        style={{ top: '20rem', right: '2rem' }}
            >
              <motion.a
                href="https://apps.apple.com/us/app/meca/id6743087361"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
          className="transition-all duration-300 w-[140px] h-[46px] flex items-center drop-shadow-2xl z-30"
              >
                <Image
            src={buttonAppleStore}
                  alt="Baixar na App Store"
            width={140}
            height={46}
                  className="w-full h-auto object-contain"
                />
              </motion.a>

              <motion.a
                href="https://play.google.com/store/apps/details?id=br.com.megaleios.meca_cliente&hl=pt_BR&pli=1"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
          className="transition-all duration-300 w-[140px] h-[46px] flex items-center drop-shadow-2xl z-30"
              >
                <Image
            src={buttonGooglePlay}
                  alt="Baixar no Google Play"
            width={140}
            height={46}
                  className="w-full h-auto object-contain"
                />
              </motion.a>
            </motion.div>

      {/* Conteúdo Mobile - Sem texto, apenas imagem de fundo */}
      <div className="relative z-20 flex-1 flex flex-col justify-center items-center min-h-0 pt-20 md:pt-20 md:justify-end px-4 md:px-0">
        <div className="w-full max-w-4xl mx-auto text-center md:text-left">
          {/* Mobile: Sem texto - apenas imagem de fundo */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center md:items-start space-y-6 md:space-y-6"
          >
            {/* Mobile: Texto removido - apenas imagem de fundo */}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20"
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
