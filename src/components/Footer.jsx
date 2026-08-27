const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10">
      <div className="container-custom py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className="font-display text-2xl md:text-3xl font-semibold text-white tracking-tight">
              MUKESH KUMAR REDDY
            </p>
            <p className="text-mist text-sm mt-2">
              AI ENGINEER · SOFTWARE ENGINEER
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3">
            <a href="https://github.com/9346mukesh" target="_blank" rel="noopener noreferrer" className="eyebrow hover:text-accent transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/mukeshkumarreddy-musturu/" target="_blank" rel="noopener noreferrer" className="eyebrow hover:text-accent transition-colors">
              LinkedIn
            </a>
            <a href="mailto:mukeshredddy0109@gmail.com" className="eyebrow hover:text-accent transition-colors">
              Email
            </a>
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="eyebrow">
            © {year} MUKESH KUMAR REDDY
          </p>
          <p className="eyebrow">
            DESIGNED & BUILT BY MUKESH
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
