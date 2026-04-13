import { Hero } from '../components/Hero';
import { CaseStudies } from '../components/CaseStudies';
import { About } from '../components/About';
import { Skills } from '../components/Skills';
import { Footer } from '../components/Footer';

export function Home() {
  const scrollToWork = () => {
    const workSection = document.getElementById('work');
    workSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-white">
      <Hero onViewWork={scrollToWork} />
      <CaseStudies />
      <About />
      <Skills />
      <Footer />
    </div>
  );
}
