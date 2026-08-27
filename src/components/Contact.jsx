import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';
import SectionHeader from './SectionHeader';

emailjs.init(import.meta.env.VITE_PUBLIC_KEY);

const CONTACT_LINKS = [
  { label: 'GitHub', href: 'https://github.com/9346mukesh' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mukeshkumarreddy-musturu/' },
  { label: 'Email', href: 'mailto:mukeshredddy0109@gmail.com' },
];

const inputClass =
  'w-full bg-transparent border-0 border-b border-white/15 focus:border-accent focus:outline-none focus:ring-0 px-0 py-3 font-sans text-bone placeholder:text-mist/40 transition-colors rounded-none';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ submitting: false, submitted: false, error: null });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    const formattedDate = new Date().toISOString().replace('T', ' ').substring(0, 19);

    try {
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          date_time: formattedDate,
        }
      );
      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus((prev) => ({ ...prev, submitted: false })), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({
        submitting: false,
        submitted: false,
        error: 'Something went wrong. Please check your details and try again.',
      });
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom" ref={ref}>
        <SectionHeader
          number="06"
          eyebrow="CONTACT"
          title="Let's build something useful."
          note="HAVE AN INTERESTING PROBLEM, PROJECT, OR OPPORTUNITY? LET'S TALK."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: CTA + links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xl text-bone leading-relaxed mb-10">
              Have an interesting problem, project, or opportunity? I'd love to hear about it. Whether you're looking for collaboration, have a question, or just want to say hi — my inbox is open.
            </p>

            <a href="mailto:mukeshredddy0109@gmail.com" className="btn-primary mb-10">
              GET IN TOUCH
              <span aria-hidden="true">→</span>
            </a>

            <div className="space-y-4">
              {CONTACT_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className="flex items-center justify-between py-4 border-b border-white/10 hover:border-accent/30 transition-colors group"
                >
                  <span className="text-bone font-display text-lg group-hover:text-accent transition-colors">
                    {link.label}
                  </span>
                  <span className="text-mist group-hover:text-accent transition-colors">→</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="mb-6">
              <label htmlFor="name" className="eyebrow block mb-2">NAME</label>
              <input
                id="name"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                className={inputClass}
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="eyebrow block mb-2">EMAIL</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
                className={inputClass}
              />
            </div>

            <div className="mb-8">
              <label htmlFor="message" className="eyebrow block mb-2">MESSAGE</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell me about your project or idea..."
                value={formData.message}
                onChange={handleChange}
                required
                className={`${inputClass} resize-y`}
              />
            </div>

            <button
              type="submit"
              disabled={status.submitting}
              className="btn-primary w-full justify-center disabled:opacity-50"
            >
              {status.submitting ? 'SENDING...' : 'SEND MESSAGE'}
              <span aria-hidden="true">→</span>
            </button>

            {status.submitted && (
              <p className="mt-5 text-center font-sans text-sm text-accent">
                ✓ Sent! I'll reply within 1–2 days.
              </p>
            )}
            {status.error && (
              <p className="mt-5 text-center font-sans text-sm text-[#c45a3a]">
                ✗ {status.error}
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
