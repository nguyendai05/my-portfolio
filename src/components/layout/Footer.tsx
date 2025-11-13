export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-12 md:py-16">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-light mb-4">Dizan</h3>
            <p className="text-sm text-white/40 font-light">
              Experience Studio
            </p>
          </div>
          {/* Links */}
          <div>
            <div className="text-xs uppercase tracking-[0.15em] text-white/40 mb-4">
              Navigate
            </div>
            <div className="space-y-2">
              <a href="#about" className="block text-sm text-white/60 hover:text-white transition-colors duration-300">
                About
              </a>
              <a href="#services" className="block text-sm text-white/60 hover:text-white transition-colors duration-300">
                Services
              </a>
              <a href="#work" className="block text-sm text-white/60 hover:text-white transition-colors duration-300">
                Work
              </a>
              <a href="#contact" className="block text-sm text-white/60 hover:text-white transition-colors duration-300">
                Contact
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="text-xs uppercase tracking-[0.15em] text-white/40 mb-4">
              Connect
            </div>
            <div className="space-y-2">
              <a
                href="mailto:hello@dizan.works"
                className="block text-sm text-white/60 hover:text-white transition-colors duration-300"
              >
                hello@dizan.works
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30 font-light">
            © {new Date().getFullYear()} Dizan. All rights reserved.
          </p>
          <p className="text-xs text-white/30 font-light">
            Crafted with precision
          </p>
        </div>
      </div>
    </footer>
  );
}