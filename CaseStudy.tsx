import { ImageWithFallback } from './figma/ImageWithFallback';
import profileImage from 'figma:asset/8aa8e21824eb09c286531c5e2e182e8a93de8c6d.png';

export function About() {
  return (
    <section id="about" className="px-6 py-32">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-5xl md:text-6xl tracking-tight mb-8" style={{ fontFamily: 'Inter', fontWeight: 400 }}>
              About
            </h2>
            {/* Profile Image */}
            <div className="w-full aspect-[3/4] bg-neutral-100 overflow-hidden">
              <img
                src={profileImage}
                alt="Thanushree Uppoor"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-6 text-lg text-neutral-700" style={{ fontFamily: 'Inter', fontWeight: 400, lineHeight: 1.8 }}>
              <p>
                I design systems, not just screens. My work focuses on simplifying complex enterprise 
                workflows and enabling teams to operate more efficiently at scale.
              </p>
              <p>
                With 5+ years of UX experience and 7.8+ years overall, I specialize in enterprise platforms, 
                internal tools, and AI-powered systems that drive measurable business outcomes. Currently based 
                in Bangalore, I work on products that serve thousands of users globally.
              </p>
              <p>
                My approach combines deep user research, systems thinking, and close collaboration with 
                cross-functional teams—Product, Engineering, Analytics, and Leadership. I believe in 
                evidence-based design, iterative problem-solving, and building solutions that balance 
                user needs with business impact.
              </p>
            </div>

            <div className="pt-8 space-y-6">
              <div>
                <p className="text-sm uppercase tracking-wider text-neutral-500 mb-4" style={{ fontFamily: 'Inter', fontWeight: 500 }}>
                  Experience Highlights
                </p>
                <ul className="space-y-3 text-neutral-700" style={{ fontFamily: 'Inter', fontWeight: 400 }}>
                  <li>• Senior UX Designer at Nike India Technology Centre</li>
                  <li>• Led design for enterprise BI platform serving 2,000+ stores</li>
                  <li>• Designed AI-powered content generation tools (15K+ assets generated)</li>
                  <li>• Delivered $11.5M+ in operational savings through workflow optimization</li>
                  <li>• Previously worked at Accenture and Wipro on enterprise systems</li>
                </ul>
              </div>

              <div>
                <p className="text-sm uppercase tracking-wider text-neutral-500 mb-4" style={{ fontFamily: 'Inter', fontWeight: 500 }}>
                  Design Philosophy
                </p>
                <p className="text-neutral-700" style={{ fontFamily: 'Inter', fontWeight: 400, lineHeight: 1.8 }}>
                  Great design solves real problems and scales gracefully. I focus on clarity over complexity, 
                  measurable outcomes over aesthetics alone, and systems that empower teams to work smarter. 
                  Design is strategic—it drives business value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}