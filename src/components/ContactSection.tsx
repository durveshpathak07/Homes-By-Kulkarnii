import { motion } from 'motion/react';
import { ShoppingBag as WhatsappIcon } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="bg-dark-brown text-cream overflow-hidden">
      <div className="grid lg:grid-cols-2">
        {/* Left Side: Image */}
        <div className="relative h-[60vh] lg:h-auto overflow-hidden">
          <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none" />
          <motion.img
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200"
            alt="Minimalist interior"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side: Form */}
        <div className="py-24 px-8 lg:px-20 lg:pr-32 flex flex-col justify-center bg-cream text-dark-brown">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs tracking-widest uppercase text-taupe font-semibold mb-4">
              Let's create your dream space
            </p>
            <h2 className="font-serif text-4xl mb-12">
              Book Your Consultation
            </h2>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full bg-white border border-beige px-4 py-3 text-sm focus:outline-none focus:border-taupe transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full bg-white border border-beige px-4 py-3 text-sm focus:outline-none focus:border-taupe transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-white border border-beige px-4 py-3 text-sm focus:outline-none focus:border-taupe transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="City"
                    className="w-full bg-white border border-beige px-4 py-3 text-sm focus:outline-none focus:border-taupe transition-colors"
                  />
                </div>
              </div>

              <div>
                <select defaultValue="" className="w-full bg-white border border-beige px-4 py-3 text-sm text-dark-brown/70 focus:outline-none focus:border-taupe transition-colors appearance-none">
                  <option value="" disabled>Project Type</option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="renovation">Renovation</option>
                </select>
              </div>

              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full bg-white border border-beige px-4 py-3 text-sm focus:outline-none focus:border-taupe transition-colors resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  type="button"
                  className="w-full sm:w-auto px-8 py-4 border border-dark-brown bg-dark-brown text-white text-sm tracking-widest uppercase hover:bg-dark-brown/90 transition-colors"
                >
                  Submit Inquiry
                </button>
                <button
                  type="button"
                  className="w-full sm:w-auto px-8 py-4 border border-dark-brown bg-transparent text-dark-brown text-sm tracking-widest uppercase hover:bg-dark-brown hover:text-white transition-colors flex items-center justify-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/.svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" /><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" /></svg>
                  WhatsApp Consultation
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
