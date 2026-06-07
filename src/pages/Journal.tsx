import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export const articles = [
  {
    id: 1,
    title: '10 Tips to Make Your Home Look Luxurious',
    category: 'Interior Tips',
    date: 'May 12, 2024',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200',
    excerpt: 'Transform your living space into a luxurious sanctuary with these simple yet effective interior design tips that elevate any home without breaking the bank.',
  },
  {
    id: 2,
    title: 'The Rise of Minimal Interiors in 2024',
    category: 'Design Trends',
    date: 'May 05, 2024',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1200',
    excerpt: 'Explore why minimalist interior design is capturing the hearts of homeowners in 2024, focusing on uncluttered spaces and functional aesthetics.',
  },
  {
    id: 3,
    title: 'How to Choose the Right Materials',
    category: 'Materials Guide',
    date: 'April 28, 2024',
    image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&q=80&w=1200',
    excerpt: 'A comprehensive guide to selecting the perfect materials for your home renovation, ensuring durability, style, and sustainability.',
  },
  {
    id: 4,
    title: 'Lighting Strategies for Small Spaces',
    category: 'Lighting',
    date: 'April 15, 2024',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200',
    excerpt: 'Discover how strategic lighting can make small rooms feel significantly larger, brighter, and more inviting.',
  },
  {
    id: 5,
    title: 'The Psychology of Color in Interior Design',
    category: 'Color Theory',
    date: 'April 02, 2024',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1200',
    excerpt: 'Understand how different colors influence our emotions and behavior, and learn how to choose the right palette for every room in your house.',
  },
  {
    id: 6,
    title: 'Curating Art for Your Home',
    category: 'Decor',
    date: 'March 20, 2024',
    image: 'https://images.unsplash.com/photo-1544457070-4cd773b4d71e?auto=format&fit=crop&q=80&w=1200',
    excerpt: 'An expert guide on selecting, framing, and hanging art pieces to create visually stunning focal points in your living spaces.',
  }
];

export default function Journal() {
  return (
    <div className="pt-32 pb-24 bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24 text-center max-w-3xl mx-auto"
        >
          <h1 className="font-serif text-5xl md:text-6xl text-dark-brown mb-6">The Journal</h1>
          <p className="text-xl text-dark-brown/70 font-light">
            Insights, trends, and musings from our design studio.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-16 mb-16">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.15 }}
              className="flex flex-col h-full group"
            >
              <Link to={`/journal/${article.id}`} className="block overflow-hidden relative aspect-[4/3] mb-6">
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors duration-500 z-10" />
                <motion.img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </Link>
              <div className="flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs tracking-wider uppercase text-taupe font-semibold">
                    {article.category}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-dark-brown/20"></span>
                  <span className="text-xs text-dark-brown/50">
                    {article.date}
                  </span>
                </div>
                <Link to={`/journal/${article.id}`}>
                  <h2 className="font-serif text-2xl leading-tight text-dark-brown mb-4 group-hover:text-taupe transition-colors duration-300">
                    {article.title}
                  </h2>
                </Link>
                <p className="text-dark-brown/70 mb-6 flex-grow line-clamp-3">
                  {article.excerpt}
                </p>
                <Link 
                  to={`/journal/${article.id}`}
                  className="text-sm uppercase tracking-widest text-dark-brown font-medium hover:text-gold transition-colors inline-block mt-auto"
                >
                  Read Article
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <button className="px-8 py-4 border border-dark-brown text-dark-brown uppercase tracking-widest text-sm hover:bg-dark-brown hover:text-white transition-colors">
            Load More Articles
          </button>
        </div>
      </div>
    </div>
  );
}
