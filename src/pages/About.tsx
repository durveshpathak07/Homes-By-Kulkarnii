import { motion } from 'motion/react';
import { ProcessSection } from '../components/ProcessSection';

export default function About() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-5xl md:text-6xl text-dark-brown mb-8 leading-tight">
              Crafting Spaces of Timeless Beauty
            </h1>
            <p className="text-lg text-dark-brown/70 font-light mb-6 leading-relaxed">
              Baasuri Design Studio is a premier interior design studio dedicated to creating personalized, elegant environments. We believe that your home should be a reflection of your evolving story.
            </p>
            <p className="text-lg text-dark-brown/70 font-light leading-relaxed">
              Founded on the principles of architectural honesty and minimalist elegance, our studio approaches every project with a curated eye for detail. We specialize in blending natural materials, warm neutral palettes, and bespoke furnishings to create spaces that feel both luxurious and intimately livable.
            </p>
          </motion.div>
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="relative h-[60vh] lg:h-[80vh]"
          >
            <img 
              src="https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&q=80&w=1200" 
              alt="Studio Interior" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
      <ProcessSection />
    </div>
  );
}
