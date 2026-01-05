import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';

/* ✅ INITIALIZE EMAILJS ONCE */
emailjs.init(import.meta.env.VITE_PUBLIC_KEY);

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    const formattedDate = new Date()
      .toISOString()
      .replace('T', ' ')
      .substring(0, 19);

    try {
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          date_time: formattedDate
        }
      );

      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setStatus(prev => ({ ...prev, submitted: false }));
      }, 4000);

    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({
        submitting: false,
        submitted: false,
        error: 'Failed to send message. Please try again.'
      });
    }
  };

  return (
    <section id="contact" className="section-padding bg-secondary">
      <div className="container-custom" ref={ref}>

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h4 className="font-mono text-sm text-muted mb-2">GET IN TOUCH</h4>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Me</h2>
          <div className="w-16 h-[2px] bg-light opacity-50"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* LEFT INFO */}
          <div>
            <h3 className="text-xl font-medium mb-6">
              Let's start a conversation
            </h3>

            <p className="text-muted mb-8">
              Have a project in mind? Want to discuss collaboration opportunities?
              I'm always open to discussing new projects, creative ideas or opportunities
              to be part of your vision.
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-sm mb-1">Email</h4>
                <p className="text-muted">9346mukeshkumarreddy@gmail.com</p>
              </div>

              <div>
                <h4 className="font-medium text-sm mb-1">Phone</h4>
                <p className="text-muted">+91 7981491191</p>
              </div>

              <div>
                <h4 className="font-medium text-sm mb-1">Connect</h4>
                <div className="flex gap-4 mt-2">
                  <a href="https://github.com/9346mukesh" target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mukeshkumarreddy-musturu/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-primary bg-opacity-40 border border-muted p-6"
          >
            <input
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full mb-4 p-3 bg-secondary border"
            />

            <input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full mb-4 p-3 bg-secondary border"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full mb-6 p-3 bg-secondary border"
            />

            <button
              type="submit"
              disabled={status.submitting}
              className="btn btn-primary w-full"
            >
              {status.submitting ? 'Sending…' : 'Send Message'}
            </button>

            {status.submitted && (
              <div className="mt-4 text-green-400 text-center">
                Message sent successfully!
              </div>
            )}

            {status.error && (
              <div className="mt-4 text-red-400 text-center">
                {status.error}
              </div>
            )}
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
