import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 3, ease: 'easeOut' }}
          src="https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&q=80&w=2600"
          alt="Luxury living room interior"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white mt-16">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight mb-6"
        >
          Transforming Spaces<br />Into Timeless Experiences
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-sans text-lg md:text-xl font-light text-white/90 max-w-2xl mx-auto mb-12"
        >
          Luxury interior design, home styling, and personalized living spaces crafted for modern homeowners.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link
            to="/projects"
            className="w-full sm:w-auto px-8 py-4 bg-white text-dark-brown uppercase tracking-widest text-sm font-medium hover:bg-beige transition-colors duration-300"
          >
            View Projects
          </Link>
          <Link
            to="/contact"
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white text-white uppercase tracking-widest text-sm font-medium hover:bg-white hover:text-dark-brown transition-colors duration-300"
          >
            Book Consultation
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
