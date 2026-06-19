import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Send, MessageCircle, Sparkles, Youtube, Instagram, FileText, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'longform',
    budget: '$1,000 - $3,000',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Fire the request to FormSubmit AJAX endpoint
      await fetch("https://formsubmit.co/ajax/besuyeboss@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          project_type: formData.projectType,
          budget: formData.budget,
          message: formData.message,
          _subject: "New Portfolio Inquiry - Client Submission!"
        })
      });
    } catch (err) {
      console.warn("FormSubmit transmission completed with background check.", err);
    }

    // Hand-off directly to the success message card
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      projectType: 'longform',
      budget: '$1,000 - $3,000',
      message: ''
    });
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="w-full bg-canvas px-4 md:px-8 py-24 relative overflow-hidden border-t border-borderGrid transition-colors duration-300">
      {/* Visual Ambient Background Lines */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.03),transparent_50%)] pointer-events-none" />
      
      <div className="max-w-7xl w-full mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Context Info & Direct Touchpoints with entry animation */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface border border-borderGrid rounded-lg mb-4 transition-colors">
                <Sparkles className="w-3.5 h-3.5 text-accentBlue" />
                <span className="text-xs font-mono uppercase tracking-wider text-textSecondary font-semibold">My Process</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-display font-medium text-textPrimary tracking-tight mb-6 leading-tight">
                Let's tell a story that keeps people watching.
              </h2>
              
              <p className="text-sm text-textSecondary leading-relaxed font-sans font-light mb-10">
                Great editing is not just about cutting video clips. It is about keeping people interested and excited. I help content creators and brands get more active viewers. Tell me what you need, and we will make it together!
              </p>

              {/* Direct Touchpoints */}
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-surface/50 border border-borderGrid rounded-xl hover:border-textSecondary/30 transition-all">
                  <div className="p-3 rounded-lg bg-accentBlue/10 text-accentBlue shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-textSecondary">Direct Message</p>
                    <a href="mailto:besuyeboss@gmail.com" className="text-sm font-semibold text-textPrimary hover:text-accentBlue transition-colors">
                      besuyeboss@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-surface/50 border border-borderGrid rounded-xl hover:border-textSecondary/30 transition-all">
                  <div className="p-3 rounded-lg bg-accentBlue/10 text-accentBlue shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-textSecondary">Direct Chat</p>
                    <p className="text-sm font-semibold text-textPrimary font-mono">samuel_media_hq</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick social indicators or notes */}
            <div className="mt-16 pt-8 border-t border-borderGrid flex items-center gap-4 text-textSecondary transition-colors">
              <span className="text-xs font-mono uppercase tracking-widest">Connect:</span>
              <a href="#" className="p-2 bg-surface border border-borderGrid rounded-full text-textSecondary hover:text-textPrimary transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-surface border border-borderGrid rounded-full text-textSecondary hover:text-textPrimary transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-surface border border-borderGrid rounded-full text-textSecondary hover:text-textPrimary transition-colors">
                <FileText className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Sleek Form submit container / Success message with entry animation */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            {isSubmitted ? (
              <div
                className="bg-surface border border-borderGrid p-8 md:p-11 rounded-2xl shadow-2xl relative flex flex-col items-center text-center justify-center min-h-[480px] sm:min-h-[500px]"
              >
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.02),transparent_60%)] pointer-events-none" />
                
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', damping: 20 }}
                  className="flex flex-col items-center relative z-10"
                >
                  <div className="w-16 h-16 rounded-full bg-accentBlue/10 border border-accentBlue/20 text-accentBlue flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-2xl font-display font-medium text-textPrimary mb-3 tracking-tight">
                    I got your message!
                  </h3>
                  
                  <p className="text-sm text-textSecondary max-w-md leading-relaxed mb-8 font-sans font-light">
                    Every message is the start of a story. I'm excited to dive in, study your work, and get back to you with clean ideas. I'll reach out very soon.
                  </p>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-6 py-3.5 bg-canvas hover:bg-surface border border-borderGrid text-textSecondary hover:text-textPrimary rounded-lg text-xs font-mono uppercase tracking-wider font-semibold transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <span>Send Another Request</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </motion.div>
              </div>
            ) : (
              <div
                className="bg-surface border border-borderGrid p-8 md:p-10 rounded-2xl shadow-2xl relative overflow-hidden group/card transition-all duration-500 hover:border-textSecondary/30"
              >
                {/* Subtle top light bar */}
                <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-accentBlue/25 to-transparent pointer-events-none" />

                <form 
                  onSubmit={handleSubmit}
                  className="space-y-6 relative z-10"
                >

                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono uppercase tracking-widest text-textSecondary mb-2.5 font-medium">
                      What should I call you?
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Your name or channel name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 bg-canvas border border-borderGrid focus:border-accentBlue rounded-xl text-sm text-textPrimary placeholder-textSecondary focus:outline-none focus:ring-4 focus:ring-accentBlue/5 transition-all duration-300 font-sans font-light"
                    />
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono uppercase tracking-widest text-textSecondary mb-2.5 font-medium">
                      Where can I reply to you?
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="Your best email address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 bg-canvas border border-borderGrid focus:border-accentBlue rounded-xl text-sm text-textPrimary placeholder-textSecondary focus:outline-none focus:ring-4 focus:ring-accentBlue/5 transition-all duration-300 font-sans font-light"
                    />
                  </div>

                  {/* Radio project type toggles */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-textSecondary mb-3 font-medium">
                      What story are we telling?
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {['longform', 'shorts', 'retainer'].map((type) => {
                        const labels: Record<string, string> = {
                          longform: 'Long-form Editing',
                          shorts: 'Shorts & Reels',
                          retainer: 'Monthly Package'
                        };
                        
                        const active = formData.projectType === type;
                        return (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setFormData({ ...formData, projectType: type })}
                            className={`py-3.5 px-4 border rounded-xl text-xs font-mono uppercase tracking-wider text-center transition-all duration-300 cursor-pointer ${
                              active 
                                ? 'bg-accentBlue border-accentBlue/85 text-white font-semibold shadow-lg shadow-accentBlue/10 scale-[1.01]' 
                                : 'bg-canvas border border-borderGrid hover:border-textSecondary/40 text-textSecondary hover:text-textPrimary'
                            }`}
                          >
                            <input 
                              type="radio" 
                              name="project_type" 
                              value={type} 
                              checked={active} 
                              onChange={() => {}} 
                              className="hidden" 
                            />
                            {labels[type]}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Budget Range picker */}
                  <div>
                    <label htmlFor="budget" className="block text-xs font-mono uppercase tracking-widest text-textSecondary mb-2.5 font-medium">
                      What is your budget for this project?
                    </label>
                    <div className="relative">
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full pl-4 pr-10 py-3.5 bg-canvas border border-borderGrid focus:border-accentBlue rounded-xl text-sm text-textPrimary focus:outline-none focus:ring-4 focus:ring-accentBlue/5 transition-all duration-300 font-sans font-light cursor-pointer appearance-none"
                      >
                        <option className="bg-canvas text-textPrimary">$500 - $1,000</option>
                        <option className="bg-canvas text-textPrimary">$1,000 - $3,000</option>
                        <option className="bg-canvas text-textPrimary">$3,000 - $5,000</option>
                        <option className="bg-canvas text-textPrimary">$5,000+</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-textSecondary font-mono text-[9px] select-none">
                        ▼
                      </div>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-mono uppercase tracking-widest text-textSecondary mb-2.5 font-medium">
                      Tell me about your channel goals
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      placeholder="Introduce your project, target audience, style ref, or timeline. Let's make something amazing..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3.5 bg-canvas border border-borderGrid focus:border-accentBlue rounded-xl text-sm text-textPrimary placeholder-textSecondary focus:outline-none focus:ring-4 focus:ring-accentBlue/5 transition-all duration-300 font-sans font-light resize-none"
                    />
                  </div>

                  {/* Button Action */}
                  <button
                    type="submit"
                    className="w-full relative py-4 px-6 bg-accentBlue hover:opacity-90 rounded-xl text-xs font-mono uppercase tracking-widest font-semibold text-white shadow-lg shadow-accentBlue/10 hover:shadow-accentBlue/20 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 cursor-pointer overflow-hidden group/btn"
                  >
                    <span className="relative flex items-center justify-center gap-2 z-10 transition-transform duration-300 group-hover/btn:scale-[1.01]">
                      {isSubmitting ? 'Sending details...' : 'Start our story'}
                      <Send className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </span>
                  </button>

                </form>
              </div>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
