import { Hero } from './components/Hero';
import { Projects} from './components/Projects'
import { Experience} from './components/Experience'
import { Container} from '@mantine/core';
function App() {
  return (
    <div>
      <Hero />
      <Container size="lg">
        <Projects />
        <Experience/>
      </Container>
    </div>
  );
}

export default App;