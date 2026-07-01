import { Flex, Spinner, Text } from "@chakra-ui/react";

/**
 * Tela de carregamento inicial. Fica por cima de tudo e some com fade
 * quando `visible` vira false (controlado pelo App).
 */
export function LoadingScreen({ visible }: { visible: boolean }) {
  return (
    <Flex
      position="fixed"
      inset="0"
      zIndex={9999}
      bg="space.900"
      direction="column"
      align="center"
      justify="center"
      gap={6}
      opacity={visible ? 1 : 0}
      pointerEvents={visible ? "auto" : "none"}
      transition="opacity 0.6s ease"
      aria-hidden={!visible}
    >
      <Spinner
        size="xl"
        color="brand.400"
        css={{ "--spinner-track-color": "colors.whiteAlpha.200" }}
        borderWidth="3px"
      />
      <Text
        fontFamily="heading"
        fontWeight="semibold"
        letterSpacing="wide"
        color="gray.300"
      >
        Pablo Bispo
      </Text>
    </Flex>
  );
}
