import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onViewWork: () => void;
}

export function Hero({ onViewWork }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-24">
      <div className="max-w-5xl w-full">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl tracking-tight mb-4" style={{ fontFamily: 'Inter', fontWeight: 600 }}>
              Thanushree Uppoor
            </h1>
            <p className="text-2xl md:text-3xl text-neutral-600" style={{ fontFamily: 'Inter', fontWeight: 400 }}>
              Senior UX Designer III
            </p>
          </div>
          
          <div className="max-w-2xl space-y-6">
            <p className="text-xl md:text-2xl text-neutral-700 leading-relaxed" style={{ fontFamily: 'Inter', fontWeight: 400 }}>
              Designing scalable enterprise systems and AI-driven platforms with measurable business impact
            </p>
            <p className="text-lg text-neutral-600 leading-relaxed" style={{ fontFamily: 'Inter', fontWeight: 400 }}>
              Senior UX Designer with 7.8+ years of experience, including 5+ years in product design, specializing in enterprise platforms, 
              workflow optimization, and data-driven systems. Proven track record of driving product strategy, improving operational
              efficiency, and delivering multi-million dollar business impact. Strong foundation in engineering with expertise in 
              scalable, accessible, and AI-driven product experiences.
            </p>
          </div>

          <div className="pt-4">
            <button
              onClick={onViewWork}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-black text-white hover:bg-neutral-800 transition-colors"
              style={{ fontFamily: 'Inter', fontWeight: 500 }}
            >
              View Case Studies
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}