import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';
import SectionHeader from './SectionHeader';

/* Initialize EmailJS once */
emailjs.init(import.meta.env.VITE_PUBLIC_KEY);

const LEDGER = [
  { label: 'EMAIL', value: '9346mukeshkumarreddy@gmail.com', href: 'mailto:9346mukeshkumarreddy@gmail.com' },
  { label: 'PHONE', value: '+91 79814 91191', href: 'tel:+917981491191' },
  { label: 'LOCATION', value: 'Bengaluru, India', href: null },
  { label: 'RESPONSE TIME', value: 'Within 1–2 days', href: null },
];

const SOCIALS = [
  { label: 'GITHUB', href: 'https://github.com/9346mukesh' },
  { label: 'LEETCODE', href: 'https://leetcode.com/u/mukesh9963/' },
  { label: 'LINKEDIN', href: 'https://www.linkedin.com/in/mukeshkumarreddy-musturu/' },
];

const inputClass =
  'w-full bg-transparent border-0 border-b border-white/15 focus:border-prussian focus:outline-none focus:ring-0 px-0 py-2.5 font-sans text-bone placeholder:text-mist/50 placeholder:italic transition-colors rounded-none';

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
        error: 'Transmission failed — please check your details and try again.',
      });
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom" ref={ref}>
        <SectionHeader
          plate="PLATE V"
          eyebrow="CORRESPONDENCE"
          title="Contact"
          note="REPLY WITHIN 1–2 DAYS · ALL CORRESPONDENCE READ"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Ledger */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="glass glass--deep p-8 relative"
          >
            <span className="reg-cross -top-1.5 -left-1.5" />
            <span className="reg-cross -top-1.5 -right-1.5" />
            <span className="reg-cross -bottom-1.5 -left-1.5" />
            <span className="reg-cross -bottom-1.5 -right-1.5" />
            <p className="font-sans italic text-xl text-bone leading-snug">
              Have a dataset, a dashboard, or a product idea worth surveying?
              Open a line of correspondence.
            </p>

            <div className="mt-10">
              {LEDGER.map((row) => (
                <div
                  key={row.label}
                  className="flex items-baseline justify-between gap-6 py-4 border-b border-white/10"
                >
                  <p className="eyebrow">{row.label}</p>
                  {row.href ? (
                    <a
                      href={row.href}
                      className="font-mono text-sm text-bone hover:text-prussian transition-colors text-right"
                    >
                      {row.value}
                    </a>
                  ) : (
                    <p className="font-mono text-sm text-mist text-right">{row.value}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="chip"
                >
                  {s.label} <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass glass--deep p-8 relative"
          >
            <span className="reg-cross -top-1.5 -left-1.5" />
            <span className="reg-cross -top-1.5 -right-1.5" />
            <span className="reg-cross -bottom-1.5 -left-1.5" />
            <span className="reg-cross -bottom-1.5 -right-1.5" />

            <p className="eyebrow mb-8">NEW CORRESPONDENCE — FORM V</p>

            <div className="mb-7">
              <label htmlFor="name" className="eyebrow block mb-2">NAME</label>
              <input
                id="name"
                name="name"
                placeholder="How should I address you?"
                value={formData.name}
                onChange={handleChange}
                required
                className={inputClass}
              />
            </div>

            <div className="mb-7">
              <label htmlFor="email" className="eyebrow block mb-2">EMAIL</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Where should the reply go?"
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
                placeholder="The subject of our correspondence…"
                value={formData.message}
                onChange={handleChange}
                required
                className={`${inputClass} resize-y`}
              />
            </div>

            <button
              type="submit"
              disabled={status.submitting}
              className="btn-glass btn-glass--solid w-full justify-center disabled:opacity-50"
            >
              {status.submitting ? 'TRANSMITTING…' : 'SEND CORRESPONDENCE'} <span aria-hidden="true">→</span>
            </button>

            {status.submitted && (
              <p className="mt-5 text-center font-mono text-xs tracking-wider text-prussian">
                ✓ RECORDED — YOUR MESSAGE IS IN TRANSIT.
              </p>
            )}
            {status.error && (
              <p className="mt-5 text-center font-mono text-xs tracking-wider text-iron">
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
