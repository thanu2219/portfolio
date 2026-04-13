import { useParams, Link, Navigate } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { caseStudies } from '../data/caseStudies';
import { Footer } from '../components/Footer';

export function CaseStudy() {
  const { id } = useParams<{ id: string }>();
  const caseStudy = caseStudies.find(study => study.id === id);

  if (!caseStudy) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <header className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-neutral-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-neutral-700 hover:text-black transition-colors group"
            style={{ fontFamily: 'Inter', fontWeight: 500 }}
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Hero Image */}
      <div className="w-full aspect-[21/9] bg-neutral-200">
        <img
          src={caseStudy.thumbnail}
          alt={caseStudy.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-20">
        {/* Title Section */}
        <div className="mb-20 space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tight" style={{ fontFamily: 'Inter', fontWeight: 500 }}>
              {caseStudy.title}
            </h1>
            <p className="text-2xl text-neutral-600" style={{ fontFamily: 'Inter', fontWeight: 400 }}>
              {caseStudy.subtitle}
            </p>
          </div>

          {/* SIGNAL BAR */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-neutral-200 bg-neutral-50 -mx-6 px-6 py-8">
            <div>
              <p className="text-sm uppercase tracking-wider text-neutral-500 mb-2" style={{ fontFamily: 'Inter', fontWeight: 500 }}>
                Role
              </p>
              <p className="text-neutral-900" style={{ fontFamily: 'Inter', fontWeight: 500 }}>
                {caseStudy.role}
              </p>
            </div>
            {caseStudy.signalBar?.scope && (
              <div>
                <p className="text-sm uppercase tracking-wider text-neutral-500 mb-2" style={{ fontFamily: 'Inter', fontWeight: 500 }}>
                  Scope
                </p>
                <p className="text-neutral-900" style={{ fontFamily: 'Inter', fontWeight: 500 }}>
                  {caseStudy.signalBar.scope}
                </p>
              </div>
            )}
            {caseStudy.signalBar?.users && (
              <div>
                <p className="text-sm uppercase tracking-wider text-neutral-500 mb-2" style={{ fontFamily: 'Inter', fontWeight: 500 }}>
                  Users
                </p>
                <p className="text-neutral-900" style={{ fontFamily: 'Inter', fontWeight: 600 }}>
                  {caseStudy.signalBar.users}
                </p>
              </div>
            )}
            <div>
              <p className="text-sm uppercase tracking-wider text-neutral-500 mb-2" style={{ fontFamily: 'Inter', fontWeight: 500 }}>
                Key Impact
              </p>
              <p className="text-neutral-900" style={{ fontFamily: 'Inter', fontWeight: 600 }}>
                {caseStudy.impact[0]}
              </p>
            </div>
          </div>
        </div>

        {/* SCANNABLE SUMMARY */}
        {caseStudy.scannableSummary && (
          <section className="mb-24 bg-black text-white -mx-6 px-6 md:-mx-12 md:px-12 py-16">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Impact */}
              <div>
                <h3 className="text-sm uppercase tracking-wider text-neutral-400 mb-4" style={{ fontFamily: 'Inter', fontWeight: 500 }}>
                  Impact
                </h3>
                <ul className="space-y-3">
                  {caseStudy.scannableSummary.impact.map((item, index) => (
                    <li key={index} className="text-lg" style={{ fontFamily: 'Inter', fontWeight: 500 }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Problem & Why it matters */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-neutral-400 mb-4" style={{ fontFamily: 'Inter', fontWeight: 500 }}>
                    Problem
                  </h3>
                  <p className="text-lg text-neutral-200 leading-relaxed" style={{ fontFamily: 'Inter', fontWeight: 400 }}>
                    {caseStudy.scannableSummary.problem}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-neutral-400 mb-4" style={{ fontFamily: 'Inter', fontWeight: 500 }}>
                    Why This Matters
                  </h3>
                  <p className="text-lg text-neutral-200 leading-relaxed" style={{ fontFamily: 'Inter', fontWeight: 400 }}>
                    {caseStudy.scannableSummary.whyItMatters}
                  </p>
                </div>
              </div>
            </div>

            {/* Key Decisions */}
            {caseStudy.scannableSummary.keyDecisions && caseStudy.scannableSummary.keyDecisions.length > 0 && (
              <div className="mt-12 pt-12 border-t border-neutral-700">
                <h3 className="text-sm uppercase tracking-wider text-neutral-400 mb-6" style={{ fontFamily: 'Inter', fontWeight: 500 }}>
                  Key Decisions
                </h3>
                <ul className="grid md:grid-cols-2 gap-4">
                  {caseStudy.scannableSummary.keyDecisions.map((item, index) => (
                    <li key={index} className="flex gap-3 text-lg text-neutral-200" style={{ fontFamily: 'Inter', fontWeight: 400 }}>
                      <span className="text-neutral-500">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        )}

        {/* Overview */}
        <section className="mb-24 space-y-12">
          <h2 className="text-4xl tracking-tight" style={{ fontFamily: 'Inter', fontWeight: 500 }}>
            Overview
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-sm uppercase tracking-wider text-neutral-500 mb-4" style={{ fontFamily: 'Inter', fontWeight: 500 }}>
                Context
              </h3>
              <p className="text-lg text-neutral-700 leading-relaxed" style={{ fontFamily: 'Inter', fontWeight: 400 }}>
                {caseStudy.overview.context}
              </p>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-wider text-neutral-500 mb-4" style={{ fontFamily: 'Inter', fontWeight: 500 }}>
                Challenge
              </h3>
              <p className="text-lg text-neutral-700 leading-relaxed" style={{ fontFamily: 'Inter', fontWeight: 400 }}>
                {caseStudy.overview.challenge}
              </p>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-wider text-neutral-500 mb-4" style={{ fontFamily: 'Inter', fontWeight: 500 }}>
                Solution
              </h3>
              <p className="text-lg text-neutral-700 leading-relaxed" style={{ fontFamily: 'Inter', fontWeight: 400 }}>
                {caseStudy.overview.solution}
              </p>
            </div>
          </div>
        </section>

        {/* Problem & Context */}
        <section className="mb-24 space-y-8">
          <h2 className="text-4xl tracking-tight" style={{ fontFamily: 'Inter', fontWeight: 500 }}>
            Problem & Context
          </h2>
          <p className="text-lg text-neutral-700 leading-relaxed" style={{ fontFamily: 'Inter', fontWeight: 400 }}>
            {caseStudy.details.problem}
          </p>
        </section>

        {/* Role & Responsibilities */}
        <section className="mb-24 space-y-8">
          <h2 className="text-4xl tracking-tight" style={{ fontFamily: 'Inter', fontWeight: 500 }}>
            Role & Responsibilities
          </h2>
          <ul className="space-y-4">
            {caseStudy.details.roleResponsibilities.map((item, index) => (
              <li key={index} className="flex gap-4 text-lg text-neutral-700" style={{ fontFamily: 'Inter', fontWeight: 400 }}>
                <span className="text-neutral-400">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Constraints */}
        <section className="mb-24 space-y-8 bg-neutral-50 -mx-6 px-6 md:-mx-12 md:px-12 py-12">
          <h2 className="text-4xl tracking-tight" style={{ fontFamily: 'Inter', fontWeight: 500 }}>
            Constraints
          </h2>
          <ul className="space-y-4">
            {caseStudy.details.constraints.map((item, index) => (
              <li key={index} className="flex gap-4 text-lg text-neutral-700" style={{ fontFamily: 'Inter', fontWeight: 400 }}>
                <span className="text-neutral-400">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Research & Insights */}
        <section className="mb-24 space-y-8">
          <h2 className="text-4xl tracking-tight" style={{ fontFamily: 'Inter', fontWeight: 500 }}>
            Research & Insights
          </h2>
          <ul className="space-y-4">
            {caseStudy.details.research.map((item, index) => (
              <li key={index} className="flex gap-4 text-lg text-neutral-700" style={{ fontFamily: 'Inter', fontWeight: 400 }}>
                <span className="text-neutral-400">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Design Process */}
        <section className="mb-24 space-y-8">
          <h2 className="text-4xl tracking-tight" style={{ fontFamily: 'Inter', fontWeight: 500 }}>
            Design Process
          </h2>
          <div className="space-y-6">
            {caseStudy.details.designProcess.map((item, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-black text-white flex items-center justify-center" style={{ fontFamily: 'Inter', fontWeight: 500 }}>
                  {index + 1}
                </div>
                <p className="text-lg text-neutral-700 leading-relaxed pt-1" style={{ fontFamily: 'Inter', fontWeight: 400 }}>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Final Solution */}
        <section className="mb-24 space-y-8">
          <h2 className="text-4xl tracking-tight" style={{ fontFamily: 'Inter', fontWeight: 500 }}>
            Final Solution
          </h2>
          <p className="text-lg text-neutral-700 leading-relaxed" style={{ fontFamily: 'Inter', fontWeight: 400 }}>
            {caseStudy.details.finalSolution}
          </p>
        </section>

        {/* Impact */}
        <section className="mb-24 space-y-8 bg-black text-white -mx-6 px-6 md:-mx-12 md:px-12 py-16">
          <h2 className="text-4xl tracking-tight" style={{ fontFamily: 'Inter', fontWeight: 500 }}>
            Impact & Results
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudy.details.impact.map((item, index) => (
              <div key={index} className="space-y-2">
                <p className="text-lg leading-relaxed" style={{ fontFamily: 'Inter', fontWeight: 400 }}>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Learnings */}
        <section className="mb-24 space-y-8">
          <h2 className="text-4xl tracking-tight" style={{ fontFamily: 'Inter', fontWeight: 500 }}>
            Key Learnings
          </h2>
          <ul className="space-y-4">
            {caseStudy.details.learnings.map((item, index) => (
              <li key={index} className="flex gap-4 text-lg text-neutral-700" style={{ fontFamily: 'Inter', fontWeight: 400 }}>
                <span className="text-neutral-400">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Navigation to other case studies */}
        <section className="pt-16 border-t border-neutral-200">
          <h3 className="text-2xl mb-8" style={{ fontFamily: 'Inter', fontWeight: 500 }}>
            More Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies
              .filter(study => study.id !== id)
              .slice(0, 2)
              .map(study => (
                <Link
                  key={study.id}
                  to={`/case-study/${study.id}`}
                  className="group block space-y-4"
                >
                  <div className="aspect-[4/3] bg-neutral-200 overflow-hidden">
                    <img
                      src={study.thumbnail}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl mb-2 group-hover:text-neutral-600 transition-colors" style={{ fontFamily: 'Inter', fontWeight: 500 }}>
                      {study.title}
                    </h4>
                    <p className="text-neutral-600" style={{ fontFamily: 'Inter', fontWeight: 400 }}>
                      {study.subtitle}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}