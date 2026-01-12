import { Hero } from './components/Hero';
import { Projects} from './components/Projects'
import { Container} from '@mantine/core';
function App() {
  return (
    <div>
      <Hero />
      <Container size="lg">
        <Projects />
      </Container>
    </div>
  );
}

export default App;