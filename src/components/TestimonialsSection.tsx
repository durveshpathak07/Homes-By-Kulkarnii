import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Rohan & Priya',
    location: 'Pune',
    review: 'Nath Interiors transformed our house into a dream home. The team is professional, creative and very detail oriented.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
  },
  {
    id: 2,
    name: 'Neha Deshmukh',
    location: 'Mumbai',
    review: 'The design process was smooth and transparent. We loved the attention to detail and the quality of work.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
  },
  {
    id: 3,
    name: 'Amit & Sneha',
    location: 'Bangalore',
    review: 'Highly recommend! They truly understand your vision and bring it to life beautifully.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="font-serif text-4xl text-dark-brown mb-16 uppercase tracking-widest text-center">
          What Our Clients Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-cream/50 backdrop-blur-md p-10 rounded-xl border border-beige/60 relative flex flex-col"
            >
              <Quote className="absolute top-8 left-8 w-12 h-12 text-taupe/20 fill-current" />
              
              <p className="text-dark-brown/80 leading-relaxed z-10 font-italic flex-grow min-h-[100px] mb-8 pt-6">
                "{testimonial.review}"
              </p>

              <div className="flex text-gold mb-6 z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              <div className="flex items-center gap-4 z-10 mt-auto">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <div>
                  <h4 className="font-serif font-medium text-dark-brown text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-dark-brown/60">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
