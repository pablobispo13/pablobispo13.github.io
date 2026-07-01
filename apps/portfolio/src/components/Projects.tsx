import { Container, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { projects } from "@/apps/registry";
import type { ProjectMeta } from "@/apps/types";
import { ProjectCard } from "@/components/ProjectCard";

interface Props {
  onOpen: (project: ProjectMeta) => void;
}

export function Projects({ onOpen }: Props) {
  return (
    <Container as="section" id="projetos" maxW="6xl" py={{ base: 16, md: 24 }}>
      <Stack gap={3} mb={10} textAlign="center" align="center">
        <Heading as="h2" fontSize={{ base: "3xl", md: "4xl" }}>
          Projetos
        </Heading>
        <Text color="fg.muted" maxW="2xl">
          Aplicações que você pode abrir e testar direto aqui. Os projetos
          full-stack são configuráveis por variáveis de ambiente.
        </Text>
      </Stack>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onOpen={onOpen} />
        ))}
      </SimpleGrid>
    </Container>
  );
}
