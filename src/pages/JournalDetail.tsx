import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { articles } from './Journal';

export default function JournalDetail() {
  const { id } = useParams();
  const article = articles.find((a) => a.id === Number(id));

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center">
          <h1 className="font-serif text-4xl text-dark-brown mb-4">Article Not Found</h1>
          <Link to="/journal" className="text-taupe hover:text-dark-brown transition-colors uppercase tracking-widest text-sm">
            Return to Journal
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <Link to="/journal" className="inline-flex items-center gap-2 text-dark-brown/60 hover:text-dark-brown transition-colors mb-12 uppercase tracking-widest text-xs font-semibold">
          <ArrowLeft className="w-4 h-4" />
          Back to Journal
        </Link>
        
        <header className="mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-xs tracking-wider uppercase text-taupe font-semibold">
              {article.category}
            </span>
            <span className="w-1 h-1 rounded-full bg-dark-brown/20"></span>
            <span className="text-xs text-dark-brown/50">
              {article.date}
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-dark-brown leading-tight mb-8">
            {article.title}
          </h1>
        </header>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 mb-16">
         <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-[50vh] md:h-[70vh] object-cover"
          />
        </motion.div>
      </div>

      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="prose prose-lg prose-headings:font-serif prose-headings:text-dark-brown prose-p:text-dark-brown/80 prose-p:font-light max-w-none">
          <p className="text-xl md:text-2xl text-dark-brown font-serif mb-8 leading-relaxed">
            {article.excerpt}
          </p>
          <p className="mb-6">
            When designing a home, one of the most crucial elements to consider is how the space will feel, not just how it will look. Interior design is more than arranging furniture; it is about creating an environment that supports your lifestyle.
          </p>
          <h3 className="text-2xl mt-10 mb-4">Focus on Lighting</h3>
          <p className="mb-6">
            Natural light is the best accessory a room can have. Maximize your windows and consider light, sheer treatments that offer privacy without blocking the sun. For artificial lighting, layering is key. Combine ambient, task, and accent lighting to create depth and warmth.
          </p>
          <h3 className="text-2xl mt-10 mb-4">Texture Adds Warmth</h3>
          <p className="mb-6">
            Minimalist spaces can quickly feel cold if they lack texture. Incorporate materials like natural wood, bouclé fabrics, linen, and woven rugs. These elements add tactile interest and make a room feel lived-in and welcoming.
          </p>
          <blockquote className="border-l-4 border-gold pl-6 py-2 my-10 italic font-serif text-2xl text-dark-brown">
            "Design is not just what it looks like and feels like. Design is how it works."
          </blockquote>
          <p>
            By carefully considering the elements of light, texture, and personal style, your home can transform into a sanctuary that is both beautiful and deeply comforting.
          </p>
        </div>
        
        <div className="mt-16 pt-8 border-t border-dark-brown/10 flex justify-between items-center">
            <h4 className="font-serif text-xl text-dark-brown">Share this article</h4>
            <div className="flex gap-4">
              <button className="text-dark-brown/50 hover:text-dark-brown transition-colors uppercase text-xs tracking-widest font-semibold">Twitter</button>
              <button className="text-dark-brown/50 hover:text-dark-brown transition-colors uppercase text-xs tracking-widest font-semibold">Facebook</button>
              <button className="text-dark-brown/50 hover:text-dark-brown transition-colors uppercase text-xs tracking-widest font-semibold">Pinterest</button>
            </div>
        </div>
      </div>
    </article>
  );
}
