import {
  Box,
  Burger,
  Collapse,
  Group,
  NavLink,
  Paper,
  Text,
} from '@mantine/core';

import { useState } from 'react';

export function Navbar() {
  const [opened, setOpened] = useState(false);

  return (
    <Paper
      shadow="sm"
      p="xl"
      withBorder
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
      }}
    >
      <Box style={{ position: 'relative' }}>

        {/* Desktop / Mobile Header */}
        <Group justify="space-between">
          <Text fw={700} size="lg">
            Aus.dev
          </Text>

          {/* Mobile Burger */}
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            hiddenFrom="sm"
          />
        </Group>

       
        <Group
          gap="xl"
          visibleFrom="sm"
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <NavLink href="#about" label="About" style={{ width: 'auto' }} />
          <NavLink href="#projects" label="Projects" style={{ width: 'auto' }} />
          <NavLink href="#experience" label="Experience" style={{ width: 'auto' }} />
          <NavLink href="#contact" label="Contact" style={{ width: 'auto' }} />
        </Group>

        {/* Collapsing the navlinks for mobile*/}
        <Collapse in={opened}>
          <Box mt="md">
            <NavLink
              href="#Home"
              label="About"
              onClick={() => setOpened(false)}
            />

            <NavLink
              href="#projects"
              label="Projects"
              onClick={() => setOpened(false)}
            />

            <NavLink
              href="#experience"
              label="Experience"
              onClick={() => setOpened(false)}
            />

            <NavLink
              href="#contact"
              label="Contact"
              onClick={() => setOpened(false)}
            />
          </Box>
        </Collapse>

      </Box>
    </Paper>
  );
}
