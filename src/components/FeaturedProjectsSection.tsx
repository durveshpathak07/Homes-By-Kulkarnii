import { motion } from 'motion/react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: 'Modern Serenity',
    location: 'Pune',
    style: 'Minimalist Contemporary',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 2,
    title: 'Earthy Elegance',
    location: 'Mumbai',
    style: 'Modern Transitional',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 3,
    title: 'Warm Minimalist',
    location: 'Bangalore',
    style: 'Organic Modern',
    image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 4,
    title: 'Timeless Classic',
    location: 'Pune',
    style: 'Neo-Classical',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 5,
    title: 'Villa Paradiso',
    location: 'Nashik',
    style: 'Luxury Villa',
    image: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 6,
    title: 'Urban Oasis',
    location: 'Mumbai',
    style: 'Modern Apartment',
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=1200',
  },
];

export function FeaturedProjectsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const isMobile = window.innerWidth < 768;
      const scrollAmount = isMobile ? window.innerWidth : 500;
      scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const isMobile = window.innerWidth < 768;
      const scrollAmount = isMobile ? window.innerWidth : 500;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12 flex items-end justify-between">
        <div>
          <h2 className="font-serif text-4xl text-dark-brown">Selected Projects</h2>
        </div>
        <div className="flex gap-4">
          <button 
            onClick={scrollLeft}
            className="p-2 border border-beige text-dark-brown hover:bg-beige transition-colors disabled:opacity-50"
            aria-label="Previous project"
          >
            <ArrowLeft className="w-5 h-5 stroke-[1.5]" />
          </button>
          <button 
            onClick={scrollRight}
            className="p-2 border border-beige text-dark-brown hover:bg-beige transition-colors"
            aria-label="Next project"
          >
            <ArrowRight className="w-5 h-5 stroke-[1.5]" />
          </button>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto pb-12 hide-scrollbar snap-x snap-mandatory scroll-smooth px-6 lg:px-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex-none w-full sm:w-[85vw] md:w-[60vw] lg:w-[35rem] pr-6 snap-center lg:snap-start"
            >
              <Link to={`/projects/${project.id}`} className="group cursor-pointer block">
                <div className="relative overflow-hidden aspect-[4/3] mb-6">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500 z-10" />
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-serif text-2xl text-dark-brown mb-1 group-hover:text-taupe transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-dark-brown/60">{project.location}</p>
                  </div>
                  <div className="text-sm text-taupe font-medium tracking-wide uppercase">
                    {project.style}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Add responsive scrollbar hide styles to global css eventually, or use inline if needed */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
