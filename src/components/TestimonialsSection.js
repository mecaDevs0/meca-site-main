'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "João Silva",
      role: "Motorista",
      avatar: "👨‍💼",
      rating: 5,
      content: "O MECA revolucionou a forma como cuido do meu carro. Encontrar oficinas confiáveis nunca foi tão fácil!",
      service: "Revisão completa"
    },
    {
      name: "Maria Santos",
      role: "Proprietária de Oficina",
      avatar: "👩‍🔧",
      rating: 5,
      content: "Desde que entrei na plataforma, minha oficina cresceu 300%. A qualidade dos clientes é excepcional.",
      service: "Parceira há 2 anos"
    },
    {
      name: "Carlos Oliveira",
      role: "Motorista",
      avatar: "👨‍🚗",
      rating: 5,
      content: "Transparência total nos preços e serviços. Meu carro nunca esteve tão bem cuidado!",
      service: "Troca de óleo"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2 fill-current" />
            Depoimentos Reais
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            O que nossos usuários dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Milhares de motoristas e oficinas já transformaram sua experiência automotiva com o MECA
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-6">
                <Quote className="w-8 h-8 text-meca-verde mb-4" />
                <p className="text-gray-700 text-lg leading-relaxed">
                  "{testimonial.content}"
                </p>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-meca-verde to-meca-marinho rounded-full flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-xs text-meca-verde font-medium">{testimonial.service}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-8 bg-gray-50 rounded-2xl px-8 py-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">4.8</div>
              <div className="flex items-center justify-center mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="text-sm text-gray-600">App Store</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">4.9</div>
              <div className="flex items-center justify-center mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="text-sm text-gray-600">Google Play</div>
            </div>
            {/* Métricas temporariamente removidas
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">50k+</div>
              <div className="text-sm text-gray-600">Downloads</div>
            </div>
            */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
