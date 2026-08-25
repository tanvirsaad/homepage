import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ResearchSection from './components/ResearchSection';
import EducationSection from './components/EducationSection';
import HonorsAwardsSection from './components/HonorsAwardsSection';
import SkillsSection from './components/SkillsSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main className="container flex-col">
        <HeroSection />
        <ResearchSection />
        <EducationSection />
        <HonorsAwardsSection />
        <SkillsSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
