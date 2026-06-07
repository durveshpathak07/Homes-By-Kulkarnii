import { motion } from 'motion/react';
import { Armchair, Users, Star, Award } from 'lucide-react';

const stats = [
  {
    icon: <Armchair className="w-8 h-8 stroke-[1.5]" />,
    value: '150+',
    label: 'Projects Completed',
  },
  {
    icon: <Users className="w-8 h-8 stroke-[1.5]" />,
    value: '500+',
    label: 'Happy Clients',
  },
  {
    icon: <Award className="w-8 h-8 stroke-[1.5]" />,
    value: '8+',
    label: 'Years Experience',
  },
  {
    icon: <Star className="w-8 h-8 stroke-[1.5]" />,
    value: '4.9/5',
    label: 'Client Satisfaction',
  },
];

export function SocialProofSection() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Left Side */}
          <div className="col-span-1 lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="text-sm tracking-widest uppercase text-taupe mb-4 font-semibold">
                Trusted by Homeowners
              </h4>
              <h2 className="font-serif text-4xl leading-tight text-dark-brown mb-6">
                Creating Spaces,<br />Building Trust.
              </h2>
              <p className="text-dark-brown/70 leading-relaxed text-lg pb-8 border-b border-dark-brown/20 mb-8">
                We blend aesthetics with functionality to create timeless interiors that enhance the way you live. Across Maharashtra, our portfolio stands as a testament to our commitment to excellence.
              </p>
            </motion.div>
          </div>

          {/* Right Side */}
          <div className="col-span-1 lg:col-span-7">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded border border-beige flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-taupe mb-4">{stat.icon}</div>
                  <div className="text-3xl font-serif text-dark-brown mb-2">{stat.value}</div>
                  <div className="text-xs uppercase tracking-wider text-dark-brown/60">
                    {stat.label.split(' ').map((word, i) => (
                      <span key={i} className="block">{word}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
