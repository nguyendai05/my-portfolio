export default function Footer() {
  return (
    <footer className="border-t border-muted/20 bg-black py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
          
          <p className="text-sm text-muted">
            Built with Next.js, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}