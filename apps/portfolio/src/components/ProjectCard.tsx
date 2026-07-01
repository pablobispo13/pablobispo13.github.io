import {
  Badge,
  Box,
  Button,
  Card,
  Flex,
  HStack,
  Icon,
  IconButton,
  Image,
  Text,
  Wrap,
} from "@chakra-ui/react";
import { FaExternalLinkAlt, FaGithub, FaPlay } from "react-icons/fa";
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
  // Abre no modal quando é app embutido, full-stack ou tem galeria de imagens.
  const openable = !isExternal || !!project.gallery?.length;
  // Demo ao vivo só quando o link externo é diferente do repositório.
  const liveUrl =
    project.externalUrl && project.externalUrl !== project.repoUrl
      ? project.externalUrl
      : undefined;
  const primaryHref = liveUrl ?? project.repoUrl ?? project.externalUrl;

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
        {project.thumbnail ? (
          <Image
            src={project.thumbnail}
            alt={project.title}
            w="full"
            h="full"
            objectFit="cover"
          />
        ) : (
          <Flex
            w="full"
            h="full"
            align="center"
            justify="center"
            bgGradient="to-br"
            gradientFrom="space.600"
            gradientTo="brand.800"
          >
            {project.icon ? (
              <Icon
                as={project.icon}
                boxSize={16}
                color="whiteAlpha.800"
                aria-hidden
              />
            ) : (
              <Text fontSize="5xl" fontWeight="bold" color="whiteAlpha.700">
                {project.title.charAt(0)}
              </Text>
            )}
          </Flex>
        )}
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
        {!openable ? (
          <HStack w="full">
            <Button
              colorPalette={liveUrl ? "brand" : "gray"}
              variant={liveUrl ? "solid" : "outline"}
              flex="1"
              asChild
            >
              <a href={primaryHref} target="_blank" rel="noreferrer">
                {liveUrl ? <FaExternalLinkAlt /> : <FaGithub />}
                {liveUrl ? "Ver ao vivo" : "Ver no GitHub"}
              </a>
            </Button>
            {liveUrl && project.repoUrl ? (
              <IconButton
                asChild
                variant="outline"
                aria-label="Ver código no GitHub"
              >
                <a href={project.repoUrl} target="_blank" rel="noreferrer">
                  <FaGithub />
                </a>
              </IconButton>
            ) : null}
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
