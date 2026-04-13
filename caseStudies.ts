import { Mail, Linkedin, Globe } from 'lucide-react';

export function Footer() {
  return (
    <footer className="px-6 py-20 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl tracking-tight" style={{ fontFamily: 'Inter', fontWeight: 400 }}>
              Let's work together
            </h2>
            <p className="text-xl text-neutral-600 max-w-lg" style={{ fontFamily: 'Inter', fontWeight: 400 }}>
              Open to new opportunities, collaborations, and conversations about design and product.
            </p>
          </div>

          <div className="space-y-6 md:pt-8">
            <a
              href="mailto:uthanushree@gmail.com"
              className="flex items-center gap-3 text-neutral-700 hover:text-black transition-colors group"
              style={{ fontFamily: 'Inter', fontWeight: 400 }}
            >
              <Mail className="w-5 h-5" />
              <span className="group-hover:underline">uthanushree@gmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/thanushree-uppoor"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-neutral-700 hover:text-black transition-colors group"
              style={{ fontFamily: 'Inter', fontWeight: 400 }}
            >
              <Linkedin className="w-5 h-5" />
              <span className="group-hover:underline">LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500" style={{ fontFamily: 'Inter', fontWeight: 400 }}>
            <p>© 2026 Thanushree Uppoor. All rights reserved.</p>
            <p>Bangalore, India</p>
          </div>
        </div>
      </div>
    </footer>
  );
}