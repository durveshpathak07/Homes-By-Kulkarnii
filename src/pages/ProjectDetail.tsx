import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { projects } from './Projects';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center">
          <h1 className="font-serif text-4xl text-dark-brown mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-taupe hover:text-dark-brown transition-colors uppercase tracking-widest text-sm">
            Return to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Link to="/projects" className="inline-flex items-center gap-2 text-dark-brown/60 hover:text-dark-brown transition-colors mb-12 uppercase tracking-widest text-xs font-semibold">
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 mb-16">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
               <div className="overflow-hidden mb-12">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[60vh] object-cover"
                  />
               </div>
            </motion.div>
          </div>
          <div className="lg:col-span-4 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="font-serif text-4xl lg:text-5xl text-dark-brown mb-6">{project.title}</h1>
              <p className="text-lg text-dark-brown/80 mb-12 leading-relaxed">
                {project.description}
                <br/><br/>
                We approached this project with a deep respect for the architectural bones of the space, blending modern comforts with timeless elements. Every material, from the natural stone countertops to the custom-milled cabinetry, was selected to enhance the everyday lives of the homeowners.
              </p>

              <div className="grid grid-cols-2 gap-8 border-t border-dark-brown/10 pt-8">
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-taupe mb-2">Location</h4>
                  <p className="font-serif text-xl text-dark-brown">{project.location}</p>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-taupe mb-2">Design Style</h4>
                  <p className="font-serif text-xl text-dark-brown">{project.style}</p>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-taupe mb-2">Year</h4>
                  <p className="font-serif text-xl text-dark-brown">2023</p>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-taupe mb-2">Scope</h4>
                  <p className="font-serif text-xl text-dark-brown">Full Interior</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
