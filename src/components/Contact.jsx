import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';

emailjs.init(import.meta.env.VITE_PUBLIC_KEY);

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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
      await emailjs.send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        date_time: formattedDate,
      });

      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus((prev) => ({ ...prev, submitted: false })), 4000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({ submitting: false, submitted: false, error: 'Failed to send message. Please try again.' });
    }
  };

  return (
    <section id="contact" className="section-padding bg-secondary/80">
      <div className="container-custom" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-12">
          <h4 className="mb-2 font-mono text-sm uppercase tracking-[0.25em] text-muted">Get in touch</h4>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Contact Me</h2>
          <div className="h-[2px] w-16 bg-light/60" />
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="rounded-[1.5rem] border border-white/10 bg-primary/70 p-6 sm:p-8">
            <h3 className="text-xl font-semibold">Let’s start a conversation</h3>
            <p className="mt-4 text-muted">Have a project in mind? I’m always happy to discuss ideas, collaborations, and opportunities to build meaningful work together.</p>

            <div className="mt-8 space-y-5">
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">Email</h4>
                <a href="mailto:9346mukeshkumarreddy@gmail.com" className="mt-1 block text-light/90">9346mukeshkumarreddy@gmail.com</a>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">Phone</h4>
                <p className="mt-1 text-light/90">+91 7981491191</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">Connect</h4>
                <div className="mt-2 flex flex-wrap gap-4">
                  <a href="https://github.com/9346mukesh" target="_blank" rel="noreferrer" className="text-light/80 transition-colors hover:text-light">GitHub</a>
                  <a href="https://www.linkedin.com/in/mukeshkumarreddy-musturu/" target="_blank" rel="noreferrer" className="text-light/80 transition-colors hover:text-light">LinkedIn</a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }} className="rounded-[1.5rem] border border-white/10 bg-primary/70 p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required className="w-full rounded-xl border border-white/10 bg-secondary/80 px-4 py-3 text-light outline-none ring-0" />
              <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="w-full rounded-xl border border-white/10 bg-secondary/80 px-4 py-3 text-light outline-none ring-0" />
            </div>
            <textarea name="message" rows="6" placeholder="Message" value={formData.message} onChange={handleChange} required className="mt-4 w-full rounded-xl border border-white/10 bg-secondary/80 px-4 py-3 text-light outline-none ring-0" />
            <button type="submit" disabled={status.submitting} className="btn btn-primary mt-4 w-full sm:w-auto">
              {status.submitting ? 'Sending…' : 'Send Message'}
            </button>
            {status.submitted && <div className="mt-4 text-center text-emerald-300">Message sent successfully!</div>}
            {status.error && <div className="mt-4 text-center text-red-400">{status.error}</div>}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
