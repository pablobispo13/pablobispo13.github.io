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
import { useState, type MouseEvent } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaExternalLinkAlt,
  FaGithub,
  FaPlay,
} from "react-icons/fa";
import type { ProjectMeta } from "@/apps/types";

interface Props {
  project: ProjectMeta;
  onOpen: (project: ProjectMeta, initialIndex?: number) => void;
}

const kindLabel: Record<ProjectMeta["kind"], string> = {
  embed: "Interativo",
  fullstack: "Full-stack",
  external: "Código",
};

export function ProjectCard({ project, onOpen }: Props) {
  const [index, setIndex] = useState(0);
  const isExternal = project.kind === "external";
  // Abre no modal quando é app embutido, full-stack ou tem galeria de imagens.
  const openable = !isExternal || !!project.gallery?.length;
  // Demo ao vivo só quando o link externo é diferente do repositório.
  const liveUrl =
    project.externalUrl && project.externalUrl !== project.repoUrl
      ? project.externalUrl
      : undefined;
  const primaryHref = liveUrl ?? project.repoUrl ?? project.externalUrl;

  const images = project.gallery?.length
    ? project.gallery
    : project.thumbnail
      ? [project.thumbnail]
      : [];
  const hasCarousel = images.length > 1;

  // Navegação da mini-galeria não deve abrir o modal do card.
  const go = (e: MouseEvent, delta: number) => {
    e.stopPropagation();
    setIndex((prev) => (prev + delta + images.length) % images.length);
  };

  return (
    <Card.Root
      bg="space.700"
      borderWidth="1px"
      borderColor="whiteAlpha.200"
      overflow="hidden"
      cursor={openable ? "pointer" : "default"}
      onClick={() => openable && onOpen(project, index)}
      transition="transform 0.2s, box-shadow 0.2s, border-color 0.2s"
      _hover={{
        transform: "translateY(-4px)",
        boxShadow: "0 0 30px -6px rgba(162, 56, 245, 0.5)",
        borderColor: "brand.500",
      }}
    >
      <Box position="relative" aspectRatio={16 / 10} overflow="hidden">
        {images.length ? (
          <Image
            src={images[index]}
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

        {hasCarousel ? (
          <>
            <IconButton
              aria-label="Imagem anterior"
              onClick={(e) => go(e, -1)}
              position="absolute"
              top="50%"
              left={2}
              transform="translateY(-50%)"
              size="xs"
              variant="solid"
              bg="blackAlpha.700"
              color="white"
              _hover={{ bg: "blackAlpha.900" }}
              rounded="full"
            >
              <FaChevronLeft />
            </IconButton>
            <IconButton
              aria-label="Próxima imagem"
              onClick={(e) => go(e, 1)}
              position="absolute"
              top="50%"
              right={2}
              transform="translateY(-50%)"
              size="xs"
              variant="solid"
              bg="blackAlpha.700"
              color="white"
              _hover={{ bg: "blackAlpha.900" }}
              rounded="full"
            >
              <FaChevronRight />
            </IconButton>

            <HStack
              position="absolute"
              bottom={2}
              left="50%"
              transform="translateX(-50%)"
              gap={1.5}
            >
              {images.map((src, i) => (
                <Box
                  key={src}
                  as="button"
                  aria-label={`Ir para imagem ${i + 1}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setIndex(i);
                  }}
                  w={i === index ? "4" : "1.5"}
                  h="1.5"
                  rounded="full"
                  bg={i === index ? "brand.400" : "whiteAlpha.600"}
                  transition="all 0.2s"
                  cursor="pointer"
                />
              ))}
            </HStack>
          </>
        ) : null}
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
            onClick={(e) => {
              e.stopPropagation();
              onOpen(project, index);
            }}
          >
            <FaPlay /> Abrir aplicação
          </Button>
        )}
      </Card.Footer>
    </Card.Root>
  );
}
