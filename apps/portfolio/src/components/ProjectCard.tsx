import {
  Badge,
  Box,
  Button,
  Card,
  HStack,
  Image,
  Text,
  Wrap,
} from "@chakra-ui/react";
import { FaGithub, FaPlay } from "react-icons/fa";
import type { ProjectMeta } from "@/apps/types";

interface Props {
  project: ProjectMeta;
  onOpen: (project: ProjectMeta) => void;
}

const kindLabel: Record<ProjectMeta["kind"], string> = {
  embed: "Interativo",
  fullstack: "Full-stack",
  external: "Código",
};

export function ProjectCard({ project, onOpen }: Props) {
  const isExternal = project.kind === "external";

  return (
    <Card.Root
      bg="space.700"
      borderWidth="1px"
      borderColor="whiteAlpha.200"
      overflow="hidden"
      transition="transform 0.2s, box-shadow 0.2s, border-color 0.2s"
      _hover={{
        transform: "translateY(-4px)",
        boxShadow: "0 0 30px -6px rgba(162, 56, 245, 0.5)",
        borderColor: "brand.500",
      }}
    >
      <Box position="relative" aspectRatio={16 / 10} overflow="hidden">
        <Image
          src={project.thumbnail}
          alt={project.title}
          w="full"
          h="full"
          objectFit="cover"
        />
        <Badge
          position="absolute"
          top={3}
          left={3}
          colorPalette={isExternal ? "gray" : "brand"}
          variant="solid"
        >
          {kindLabel[project.kind]}
        </Badge>
      </Box>

      <Card.Body gap={3}>
        <Card.Title fontSize="lg">{project.title}</Card.Title>
        <Text color="fg.muted" fontSize="sm">
          {project.description}
        </Text>
        <Wrap gap={2}>
          {project.tags.map((tag) => (
            <Badge key={tag} variant="subtle" colorPalette="gray">
              {tag}
            </Badge>
          ))}
        </Wrap>
      </Card.Body>

      <Card.Footer>
        {isExternal ? (
          <HStack w="full">
            <Button variant="outline" w="full" asChild>
              <a href={project.externalUrl} target="_blank" rel="noreferrer">
                <FaGithub /> Ver no GitHub
              </a>
            </Button>
          </HStack>
        ) : (
          <Button
            colorPalette="brand"
            w="full"
            onClick={() => onOpen(project)}
          >
            <FaPlay /> Abrir aplicação
          </Button>
        )}
      </Card.Footer>
    </Card.Root>
  );
}
