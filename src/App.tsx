import { useMemo } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Startup from './components/Startup';
import Projects from './components/Projects';
import Learning from './components/Learning';
import Footer from './components/Footer';
import { LEARNING_PATH } from './data/learningPath';
import { useLearningProgress } from './hooks/useLearningProgress';

function App() {
  const { progress, toggle, reset } = useLearningProgress();

  const readinessPct = useMemo(() => {
    const all = LEARNING_PATH.flatMap((p) => p.resources);
    if (!all.length) return 0;
    const done = all.filter((r) => progress[r.id]).length;
    return Math.round((done / all.length) * 100);
  }, [progress]);

  return (
    <>
      <Nav />
      <main>
        <Hero readinessPct={readinessPct} />
        <About />
        <Startup />
        <Projects />
        <Learning progress={progress} onToggleResource={toggle} onReset={reset} />
      </main>
      <Footer />
    </>
  );
}

export default App;
