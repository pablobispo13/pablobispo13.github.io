import { Box, Container, Text } from "@chakra-ui/react";

export function Footer() {
  return (
    <Box as="footer" borderTopWidth="1px" borderColor="whiteAlpha.200" py={8}>
      <Container maxW="6xl">
        <Text textAlign="center" color="fg.muted" fontSize="sm">
          © {new Date().getFullYear()} Pablo Bispo · Desenvolvedor Web Fullstack
        </Text>
      </Container>
    </Box>
  );
}
