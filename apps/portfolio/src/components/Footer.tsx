import { Box, Container, Text } from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode";

export function Footer() {
  const border = useColorModeValue("gray.200", "whiteAlpha.200");

  return (
    <Box as="footer" borderTopWidth="1px" borderColor={border} py={8}>
      <Container maxW="6xl">
        <Text textAlign="center" color="fg.muted" fontSize="sm">
          © {new Date().getFullYear()} Pablo Bispo · Desenvolvedor Web Fullstack
        </Text>
      </Container>
    </Box>
  );
}
