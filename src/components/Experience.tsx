import { Container, Title, Text, Timeline, ThemeIcon, Card, List } from '@mantine/core';
import { IconBriefcase, IconUsers } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { experiences } from '../data/experienceData';

export function Experience() {
  return (
    <Container size="md" py="xl" id="experience" mt={100}>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Title order={2} size={40} mb="xs" ta="center">
          Relevant Experience
        </Title>
        <Text c="dimmed" mb={50} ta="center">
          Leadership roles and professional work history.
        </Text>
      </motion.div>

      <Timeline active={experiences.length} bulletSize={34} lineWidth={2}>
        
        {experiences.map((item, index) => (
          <Timeline.Item 
            key={item.id} 
            bullet={
              <ThemeIcon
                size={32}
                radius="xl"
                color={index % 2 === 0 ? "blue" : "cyan"}
              >
                 {/* Alternate icons based on index */}
                {index % 2 === 0 ? <IconUsers size={18} /> : <IconBriefcase size={18} />}
              </ThemeIcon>
            }
            title={
              <Text size="lg" fw={700} c="white">
                {item.role}
              </Text>
            }
          >
            <motion.div
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.5, delay: index * 0.2 }}
               viewport={{ once: true }}
            >
                <Text c="dimmed" size="sm" mb={4}>
                  {item.title} • {item.date}
                </Text>
                
                <Card withBorder shadow="sm" radius="md" p="md" mt="sm">
                  <List spacing="xs" size="sm" center icon={
                    <ThemeIcon color="blue" size={6} radius="xl"><div /></ThemeIcon>
                  }>
                    {item.description.map((desc, i) => (
                      <List.Item key={i}>{desc}</List.Item>
                    ))}
                  </List>
                </Card>
            </motion.div>
          </Timeline.Item>
        ))}

      </Timeline>
    </Container>
  );
}