
import { Card, Image, Text, Badge, Button, Group, Stack } from '@mantine/core';
import { IconBrandGithub, IconDeviceGamepad2 } from '@tabler/icons-react';
import { motion } from 'framer-motion';

interface GameCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  playLink: string;
  githubLink: string;
}

export function GameCard({ title, description, image, tags, playLink, githubLink }: GameCardProps) {
  return (
   
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      style={{ height: '100%' }}
    >
      <Card shadow="sm" padding="lg" radius="md" withBorder h="100%" style={{display:'flex', flexDirection:'column'}}>
        
        <Card.Section>
          <Image
            src={image}
            height={160}
            alt={title}
            fit="cover"
          />
        </Card.Section>

        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={700}>{title}</Text>
         
          {tags.length > 0 && (
            <Badge color="blue" variant="light">
              {tags[0]}
            </Badge>
          )}
        </Group>

        <Text size="sm" c="dimmed" lineClamp={4} h={100} w="100%">
          {description}
        </Text>

    
        <Group gap={5} mt="md" mb="md">
          {tags.map((tag) => (
            <Badge key={tag} size="xs" variant="outline" color="gray">
              {tag}
            </Badge>
          ))}
        </Group>

      <Stack mt="auto" gap={8}> 
          
          {/* ONLY show this button if playLink is NOT empty */}
          {playLink && (
            <Button 
              fullWidth 
              radius="md" 
              component="a" 
              href={playLink} 
              target="_blank"
              leftSection={<IconDeviceGamepad2 size={18} />}
              variant="light"
              color="blue"
            >
              Play Demo
            </Button>
          )}

          {/* GitHub button always shows */}
          <Button 
            fullWidth 
            radius="md" 
            component="a" 
            href={githubLink} 
            target="_blank"
            leftSection={<IconBrandGithub size={18} />}
            variant="default"
          >
            View Code
          </Button>

        </Stack>
      </Card>
    </motion.div>
  );
}