import { Container, Text, Button, Group, Title, Image, SimpleGrid } from '@mantine/core';
import { motion } from 'framer-motion';
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';
import me from '../assets/me.jpg';

export function Hero() {
  return (
    <Container size="lg" py={250} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

      {/* SimpleGrid is the key. 
         cols={{ base: 1, sm: 2 }} means:
         - 1 column on mobile (base)
         - 2 columns on small screens and up (sm)
         spacing="xl" adds a gap between the text and image
      */}
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={50} verticalSpacing={30}>


        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Text c="blue" fw={700} size="xl" mb="sm">
              Hi, my name is
            </Text>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Title order={1} size={60} style={{ lineHeight: 1 }}>
              Austin Eclarinal.
            </Title>
            <Title order={2} c="dimmed" size={30} style={{ lineHeight: 1 }} mt="xs">
              I build immersive experiences.
            </Title>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Text c="dimmed" mt="xl" maw={500} size="lg">
              I am a 4th-year BSIT major specializing in Game Development seeking a challenging
              internship where I can utilize my background in team coordination, asset pipeline management, and game logic programming.
            </Text>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Group mt="xl">
              <Button size="lg" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }} component="a" href="#projects">
                Check out my work
              </Button>
              <Button
                component="a"
                href="https://github.com/AustinEclarinal"
                target="_blank"
                size="lg"
                variant="default"
                leftSection={<IconBrandGithub size={20} />}
              >
                GitHub
              </Button>
              <Button
                component="a"
                href="https://www.linkedin.com/in/austin-paul-eclarinal-b18894307/"
                target="_blank"
                size="lg"
                variant="default"
                leftSection={<IconBrandLinkedin size={20} />}
              >
                LinkedIn
              </Button>
            </Group>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >

          <Image
            src={me}
            h={400}
            w={400}
            radius="50%"
            fit="cover"
            alt="Austin Eclarinal"
          />
        </motion.div>

      </SimpleGrid>
    </Container>
  );
}