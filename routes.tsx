import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { caseStudies } from '../data/caseStudies';

export function CaseStudies() {
  const featuredProjects = caseStudies.filter(study => 
    study.category === 'flagship' || study.category === 'featured'
  );
  const additionalProjects = caseStudies.filter(study => 
    study.category === 'additional'
  );

  return (
    <section id="work" className="px-6 py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-5xl md:text-6xl tracking-tight mb-6" style={{ fontFamily: 'Inter', fontWeight: 400 }}>
            Selected Work
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl" style={{ fontFamily: 'Inter', fontWeight: 400 }}>
            Case studies showcasing problem-solving, design process, and measurable impact
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid gap-16 mb-24">
          {featuredProjects.map((study, index) => (
            <Link
              key={study.id}
              to={`/case-study/${study.id}`}
              className="group block"
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'md:order-2' : ''} aspect-[4/3] bg-neutral-200 overflow-hidden`}>
                  <img
                    src={study.thumbnail}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="space-y-3">
                    <h3 className="text-3xl md:text-4xl tracking-tight group-hover:text-neutral-600 transition-colors" style={{ fontFamily: 'Inter', fontWeight: 500 }}>
                      {study.title}
                    </h3>
                    <p className="text-lg text-neutral-600" style={{ fontFamily: 'Inter', fontWeight: 400 }}>
                      {study.subtitle}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="text-sm uppercase tracking-wider text-neutral-500 mb-2" style={{ fontFamily: 'Inter', fontWeight: 500 }}>
                        Problem
                      </p>
                      <p className="text-neutral-700" style={{ fontFamily: 'Inter', fontWeight: 400 }}>
                        {study.problemStatement}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm uppercase tracking-wider text-neutral-500 mb-3" style={{ fontFamily: 'Inter', fontWeight: 500 }}>
                        Impact
                      </p>
                      <div className="space-y-2">
                        {study.impact.map((item, i) => (
                          <div key={i} className="text-neutral-900" style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '1.125rem' }}>
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-6 text-sm text-neutral-500 pt-2" style={{ fontFamily: 'Inter', fontWeight: 400 }}>
                      <span>{study.role}</span>
                      <span>•</span>
                      <span>{study.timeline}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-black group-hover:gap-4 transition-all pt-2">
                    <span style={{ fontFamily: 'Inter', fontWeight: 500 }}>View Case Study</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Additional Work Section */}
        {additionalProjects.length > 0 && (
          <div>
            <h3 className="text-3xl md:text-4xl tracking-tight mb-12" style={{ fontFamily: 'Inter', fontWeight: 400 }}>
              Additional Work
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {additionalProjects.map((study) => (
                <Link
                  key={study.id}
                  to={`/case-study/${study.id}`}
                  className="group block bg-white p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-[4/3] bg-neutral-200 overflow-hidden mb-6">
                    <img
                      src={study.thumbnail}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-2xl tracking-tight mb-2 group-hover:text-neutral-600 transition-colors" style={{ fontFamily: 'Inter', fontWeight: 500 }}>
                        {study.title}
                      </h4>
                      <p className="text-neutral-600" style={{ fontFamily: 'Inter', fontWeight: 400 }}>
                        {study.subtitle}
                      </p>
                    </div>

                    <div className="space-y-2">
                      {study.impact.slice(0, 2).map((item, i) => (
                        <div key={i} className="text-neutral-900" style={{ fontFamily: 'Inter', fontWeight: 600 }}>
                          {item}
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-black group-hover:gap-4 transition-all pt-2">
                      <span style={{ fontFamily: 'Inter', fontWeight: 500 }}>View Case Study</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}