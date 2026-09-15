import { Hero } from './components/Hero';
import { Projects} from './components/Projects';
import { Experience} from './components/Experience';
import { Navbar} from './components/navbar';
import { Container} from '@mantine/core';

function App() {
  return (
    <div>
<Navbar/>

<section id="Home">
      <Hero />
      </section>

      <Container size="lg">
        <section id="Projects">
        <Projects/>
        </section>

        <section id="Experience">
        <Experience/>
        </section>
      </Container>
    </div>
  );
}

export default App;