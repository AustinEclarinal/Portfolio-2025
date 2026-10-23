import { Container, Title, Text, Paper, TextInput, Textarea, Button, SimpleGrid, Group } from '@mantine/core';
import { motion } from 'framer-motion';
import { IconSend } from '@tabler/icons-react';

export function Contact() {
  return (
    <Container size="lg" py="xl" mt={100} mb={100} id="contact">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Title order={2} size={40} mb="xs" ta="center">
          Get In Touch
        </Title>
        <Text c="dimmed" mb={50} ta="center" maw={600} mx="auto">
          Have a project in mind, an opportunity to share, or just want to say hi?
          Drop me a message and I'll get back to you.
        </Text>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Paper shadow="md" p="xl" radius="md" withBorder maw={700} mx="auto">
          {/* UI only for now, preventDefault just stops the page from reloading on submit */}
          <form onSubmit={(e) => e.preventDefault()}>

   
            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
              <TextInput
                label="Name"
                placeholder="Your name"
                size="md"
                required
              />
              <TextInput
                label="Email"
                placeholder="you@example.com"
                type="email"
                size="md"
                required
              />
            </SimpleGrid>

            <TextInput
              label="Subject"
              placeholder="What's this about?"
              size="md"
              mt="md"
            />

            <Textarea
              label="Message"
              placeholder="Write your message here..."
              size="md"
              mt="md"
              minRows={5}
              autosize
              required
            />

            <Group justify="flex-end" mt="xl">
              <Button
                type="submit"
                size="md"
                rightSection={<IconSend size={18} />}
              >
                Send Message
              </Button>
            </Group>

          </form>
        </Paper>
      </motion.div>

    </Container>
  );
}
