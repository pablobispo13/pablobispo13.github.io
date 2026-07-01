import {
  Box,
  CloseButton,
  Dialog,
  HStack,
  IconButton,
  Portal,
} from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";
import type { ProjectMeta } from "@/apps/types";
import { FullstackPanel } from "@/components/FullstackPanel";

interface Props {
  project: ProjectMeta | null;
  open: boolean;
  onClose: () => void;
}

export function AppModal({ project, open, onClose }: Props) {
  return (
    <Dialog.Root
      open={open}
      onOpenChange={(e) => {
        if (!e.open) onClose();
      }}
      size={{ base: "full", md: "cover" }}
      placement="center"
      scrollBehavior="inside"
    >
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content overflow="hidden">
            <Dialog.Header borderBottomWidth="1px">
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
                <Dialog.CloseTrigger asChild>
                  <CloseButton size="sm" />
                </Dialog.CloseTrigger>
              </HStack>
            </Dialog.Header>

            <Dialog.Body p={0} display="flex" flexDir="column">
              {project?.kind === "embed" && project.embedUrl ? (
                <Box flex="1" minH={{ base: "70dvh", md: "75dvh" }}>
                  <iframe
                    key={project.id}
                    src={project.embedUrl}
                    title={project.title}
                    style={{ width: "100%", height: "100%", border: "none" }}
                  />
                </Box>
              ) : null}

              {project?.kind === "fullstack" && project.fullstack ? (
                <FullstackPanel config={project.fullstack} />
              ) : null}
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}
