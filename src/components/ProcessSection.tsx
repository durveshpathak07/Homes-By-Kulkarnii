import { motion } from 'motion/react';
import { Lightbulb, PenTool, Layers, CheckCircle } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Consultation',
    description: 'Understanding your needs, preferences & lifestyle.',
    icon: <Lightbulb className="w-12 h-12 stroke-[1]" />,
  },
  {
    number: '02',
    title: 'Design Planning',
    description: 'Concept development & space planning.',
    icon: <PenTool className="w-12 h-12 stroke-[1]" />,
  },
  {
    number: '03',
    title: 'Material Selection',
    description: 'Curating the finest materials and finishes.',
    icon: <Layers className="w-12 h-12 stroke-[1]" />,
  },
  {
    number: '04',
    title: 'Execution & Handover',
    description: 'Precision execution and timely handover.',
    icon: <CheckCircle className="w-12 h-12 stroke-[1]" />,
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="font-serif text-4xl text-dark-brown mb-16 uppercase tracking-widest text-center relative inline-block">
          The Process
        </h2>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-[1px] bg-taupe/30" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="flex flex-col items-center"
              >
                <div className="bg-white rounded-full p-6 text-taupe mb-6 border-2 border-beige shadow-sm relative">
                   {step.icon}
                </div>
                <h3 className="font-serif text-xl text-dark-brown mb-2 font-medium">
                  {step.number}. {step.title}
                </h3>
                <p className="text-dark-brown/70 text-sm max-w-[200px] leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
