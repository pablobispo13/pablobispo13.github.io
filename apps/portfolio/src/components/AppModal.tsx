import {
  Box,
  Button,
  CloseButton,
  Dialog,
  HStack,
  IconButton,
  Portal,
} from "@chakra-ui/react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import type { ProjectMeta } from "@/apps/types";
import { FullstackPanel } from "@/components/FullstackPanel";
import { Carousel } from "@/components/Carousel";

interface Props {
  project: ProjectMeta | null;
  open: boolean;
  onClose: () => void;
}

export function AppModal({ project, open, onClose }: Props) {
  const isEmbed = project?.kind === "embed" && !!project.embedUrl;
  const hasGallery = !!project?.gallery?.length;
  const liveUrl =
    project?.externalUrl && project.externalUrl !== project.repoUrl
      ? project.externalUrl
      : undefined;

  return (
    <Dialog.Root
      open={open}
      onOpenChange={(e) => {
        if (!e.open) onClose();
      }}
      size={{ base: "full", md: "cover" }}
      placement="center"
    >
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          {/* altura definida + flex column para o conteúdo preencher (corrige mobile) */}
          <Dialog.Content
            display="flex"
            flexDirection="column"
            overflow="hidden"
            h={{ base: "100dvh", md: "90dvh" }}
          >
            <Dialog.Header borderBottomWidth="1px" flexShrink={0}>
              <Dialog.Title>{project?.title}</Dialog.Title>
              <HStack ml="auto" gap={1}>
                {project?.embedUrl ? (
                  <IconButton
                    asChild
                    variant="ghost"
                    size="sm"
                    aria-label="Abrir em nova aba"
                  >
                    <a href={project.embedUrl} target="_blank" rel="noreferrer">
                      <FaExternalLinkAlt />
                    </a>
                  </IconButton>
                ) : null}
                <Dialog.CloseTrigger
                  asChild
                  position="static"
                  top="auto"
                  insetEnd="auto"
                >
                  <CloseButton size="sm" />
                </Dialog.CloseTrigger>
              </HStack>
            </Dialog.Header>

            <Dialog.Body
              flex="1"
              minH="0"
              p={0}
              display="flex"
              flexDirection="column"
              overflow={isEmbed ? "hidden" : "auto"}
            >
              {isEmbed ? (
                <Box flex="1" minH="0" w="full">
                  <iframe
                    key={project!.id}
                    src={project!.embedUrl}
                    title={project!.title}
                    style={{ width: "100%", height: "100%", border: "none" }}
                  />
                </Box>
              ) : null}

              {hasGallery ? (
                <Carousel images={project!.gallery!} alt={project!.title} />
              ) : null}

              {project?.kind === "fullstack" && project.fullstack ? (
                <FullstackPanel config={project.fullstack} />
              ) : null}
            </Dialog.Body>

            {/* Rodapé com links (para projetos de galeria / externos) */}
            {!isEmbed && (liveUrl || project?.repoUrl) ? (
              <HStack
                flexShrink={0}
                borderTopWidth="1px"
                p={3}
                justify="flex-end"
                gap={3}
              >
                {liveUrl ? (
                  <Button colorPalette="brand" asChild>
                    <a href={liveUrl} target="_blank" rel="noreferrer">
                      <FaExternalLinkAlt /> Ver ao vivo
                    </a>
                  </Button>
                ) : null}
                {project?.repoUrl ? (
                  <Button variant="outline" asChild>
                    <a href={project.repoUrl} target="_blank" rel="noreferrer">
                      <FaGithub /> Código
                    </a>
                  </Button>
                ) : null}
              </HStack>
            ) : null}
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}
