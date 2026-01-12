import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { Paper, Text, Title, Button, useMantineTheme, rem, Container, Overlay } from '@mantine/core';
import { motion } from 'framer-motion';
import { experiences } from '../data/experienceData';

// This is the individual card design
interface CardProps {
  image: string;
  title: string;
  role: string;
  date: string;
}

function Card({ image, title, role, date }: CardProps) {
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      style={{
        backgroundImage: `url(${image})`,
        height: 440,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Dark Overlay so text is readable */}
      <Overlay gradient="linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .85) 90%)" opacity={0.6} zIndex={0} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <Text c="cyan" size="xs" fw={700} tt="uppercase">
          {date}
        </Text>
        <Title order={3} c="white" mt={5}>
          {role}
        </Title>
        <Text c="dimmed" size="sm" mt={5}>
          {title}
        </Text>
      </div>
    </Paper>
  );
}

export function Experience() {
  const theme = useMantineTheme();
  // Responsive: 1 slide on mobile, 3 on desktop
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  return (
    <Container size="lg" py="xl" mt={100} id="experience">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Title order={2} size={40} mb="xs" ta="center">
          Leadership in Action
        </Title>
        <Text c="dimmed" mb={50} ta="center" maw={600} mx="auto">
          Beyond coding, I actively lead student organizations and manage large-scale events.
          Here are some highlights from my journey.
        </Text>
      </motion.div>


      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Carousel
          slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
          slideGap="md"
          //@ts-ignore
          align='start'
          slidesToScroll={mobile ? 1 : 2}
          loop
          withIndicators
        >
          {experiences.map((item) => (
            <Carousel.Slide key={item.id}>
              <Card {...item} />
            </Carousel.Slide>
          ))}
        </Carousel>
      </motion.div>

    </Container>
  );
}