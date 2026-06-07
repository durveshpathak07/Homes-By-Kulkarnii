import { motion } from 'motion/react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const articles = [
  {
    id: 1,
    title: '10 Tips to Make Your Home Look Luxurious',
    category: 'Interior Tips',
    date: 'May 12, 2024',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 2,
    title: 'The Rise of Minimal Interiors in 2024',
    category: 'Design Trends',
    date: 'May 05, 2024',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 3,
    title: 'How to Choose the Right Materials',
    category: 'Materials Guide',
    date: 'April 28, 2024',
    image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&q=80&w=1200',
  },
];

export function JournalSection() {
  return (
    <section id="journal" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <h2 className="font-serif text-4xl text-dark-brown uppercase tracking-widest">
            Journal
          </h2>
          <div className="hidden md:flex items-center gap-4">
             <Link to="/journal" className="p-2 border border-beige text-dark-brown hover:bg-white transition-colors flex items-center justify-center relative w-10 h-10 group" aria-label="View Journal">
               <span className="absolute inset-x-0 bottom-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-xs text-dark-brown -translate-y-2 pointer-events-none text-center">View All</span>
              <ArrowRight className="w-5 h-5 stroke-[1.5]" />
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 gap-y-12">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group cursor-pointer bg-white"
            >
              <Link to={`/journal/${article.id}`} className="grid grid-cols-5 h-full border border-beige/60">
                <div className="col-span-2 overflow-hidden relative">
                   <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500 z-10" />
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="col-span-3 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl leading-tight text-dark-brown mb-4 group-hover:text-taupe transition-colors duration-300">
                      {article.title}
                    </h3>
                  </div>
                  <div className="pt-4 border-t border-beige/50">
                    <p className="text-xs tracking-wider uppercase text-dark-brown/60 mb-1">
                      {article.category}
                    </p>
                    <p className="text-xs text-dark-brown/40">
                      {article.date}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
