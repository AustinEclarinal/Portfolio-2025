import { Container, Title, Text, SimpleGrid } from '@mantine/core';
import { motion } from 'framer-motion';
import { projects } from '../data/projectData'; // Import your data
import { GameCard } from './GameCard';

export function Projects() {
  return (
    <Container size="lg" py="xl" id="projects" mt="200" > {/* Added ID for scrolling */}
      
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Title order={2} size={40} mb="xs">
          Featured Projects
        </Title>
        <Text c="dimmed" mb={50}>
          A collection of games and projects I've built.
        </Text>
      </motion.div>

      {/* The Grid - Automatically loops through your data */}
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="xl">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }} // Stagger effect
          >
            <GameCard 
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              playLink={project.playLink}
              githubLink={project.githubLink}
            />
          </motion.div>
        ))}
      </SimpleGrid>

    </Container>
  );
}