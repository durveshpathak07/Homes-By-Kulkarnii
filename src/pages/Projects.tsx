import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export const projects = [
  {
    id: 1,
    title: 'Modern Serenity',
    location: 'Pune',
    style: 'Minimalist Contemporary',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200',
    description: 'A complete transformation of a dated apartment into a modern, serene sanctuary. We focused on clean lines, natural light, and a neutral palette.',
  },
  {
    id: 2,
    title: 'Earthy Elegance',
    location: 'Mumbai',
    style: 'Modern Transitional',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    description: 'Blending organic textures with modern transitional elements to create a grounded yet elegant living space in the heart of Mumbai.',
  },
  {
    id: 3,
    title: 'Warm Minimalist',
    location: 'Bangalore',
    style: 'Organic Modern',
    image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=1200',
    description: 'A study in warm minimalism. By curating a selection of organic materials and keeping decor sparse, we created a truly calming environment.',
  },
  {
    id: 4,
    title: 'Timeless Classic',
    location: 'Pune',
    style: 'Neo-Classical',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1200',
    description: 'Incorporating classical design principles with modern sensibilities for a timeless aesthetic that refuses to age.',
  },
  {
    id: 5,
    title: 'Villa Paradiso',
    location: 'Nashik',
    style: 'Luxury Villa',
    image: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&q=80&w=1200',
    description: 'A sprawling luxury villa designed to maximize indoor-outdoor living, featuring expansive glass and natural stone finishes.',
  },
  {
    id: 6,
    title: 'Urban Oasis',
    location: 'Mumbai',
    style: 'Modern Apartment',
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=1200',
    description: 'An elegant oasis amidst the bustling city. This apartment features smart space-saving solutions wrapped in luxury finishes.',
  },
];

export default function Projects() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <h1 className="font-serif text-5xl md:text-6xl text-dark-brown mb-6">Our Client Portfolio</h1>
          <p className="text-xl text-dark-brown/70 max-w-2xl font-light">
            Explore our residential and commercial projects, each uniquely tailored to reflect the people who inhabit them.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: (index % 2) * 0.2 }}
            >
              <Link to={`/projects/${project.id}`} className="group block">
                <div className="relative overflow-hidden aspect-[4/3] mb-6">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500 z-10" />
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <h2 className="font-serif text-3xl text-dark-brown group-hover:text-taupe transition-colors duration-300">
                      {project.title}
                    </h2>
                    <span className="text-sm text-taupe font-medium tracking-wide uppercase">
                      {project.style}
                    </span>
                  </div>
                  <p className="text-dark-brown/70 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <span className="text-xs uppercase tracking-widest text-dark-brown group-hover:text-gold transition-colors font-medium relative overflow-hidden inline-flex">
                    View Project Details
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-300"></span>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
