import { motion } from 'motion/react';
import { testimonials } from '../data';
import { MessageSquare, Quote, Star, TrendingUp } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full bg-canvas/60 px-4 md:px-8 py-24 border-t border-borderGrid relative transition-colors duration-300">
      {/* Subtle background glow */}
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-accentBlue/3 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface border border-borderGrid rounded-lg mb-4 transition-colors duration-300">
            <MessageSquare className="w-3.5 h-3.5 text-accentBlue" />
            <span className="text-xs font-mono uppercase tracking-wider text-textSecondary font-semibold">Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-medium text-textPrimary tracking-tight">
            What Clients & Producers Say
          </h2>
          <p className="text-sm text-textSecondary mt-3 font-sans font-light max-w-lg mx-auto">
            Real performance indicators and watch-time results achieved by channels working with my post-production workflow.
          </p>
        </motion.div>

        {/* Testimonials Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((test, index) => {
            return (
              <motion.div
                key={test.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: index * 0.1, type: 'spring', damping: 22 }}
                className="group relative bg-surface hover:bg-surface border border-borderGrid hover:border-textSecondary/30 rounded-xl p-8 shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                {/* Accent line decoration on hover */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-0 group-hover:h-2/3 bg-accentBlue transition-all duration-300 rounded-r" />

                <div>
                  {/* Card Header: Rating stars & Metric Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400 font-bold" />
                      ))}
                    </div>
                    
                    {test.statsHighlight && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-mono tracking-wide uppercase rounded bg-accentBlue/10 border border-accentBlue/20 text-accentBlue font-bold">
                        <TrendingUp className="w-3 h-3" />
                        {test.statsHighlight}
                      </span>
                    )}
                  </div>

                  {/* Testimonial content quoting */}
                  <div className="relative mb-6">
                    <Quote className="absolute -left-2 -top-3 w-8 h-8 text-textSecondary/5 pointer-events-none" />
                    <p className="text-sm sm:text-base text-textPrimary/90 font-sans font-light leading-relaxed italic relative z-10 pl-4">
                      "{test.content}"
                    </p>
                  </div>
                </div>

                {/* Client Profile details footer */}
                <div className="flex items-center gap-4 mt-8 pt-6 border-t border-borderGrid">
                  <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border border-borderGrid bg-canvas">
                    <img
                      src={test.avatarUrl}
                      alt={test.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-textPrimary group-hover:text-accentBlue transition-colors duration-200">
                      {test.name}
                    </h4>
                    <p className="text-xs text-textSecondary font-sans font-light mt-0.5">
                      {test.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic conversion nudge */}
        <div className="mt-16 text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-textSecondary">
            Ready to be the next success story?
          </p>
          <button
            onClick={() => {
              const contactEl = document.getElementById('contact');
              if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
            }}
            className="mt-4 px-8 py-4 bg-accentBlue hover:opacity-90 text-white rounded-lg font-medium text-xs font-mono uppercase tracking-wider shadow-md transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] cursor-pointer inline-flex items-center gap-2"
          >
            <span>Let's Discuss Your Channel</span>
          </button>
        </div>

      </div>
    </section>
  );
}
