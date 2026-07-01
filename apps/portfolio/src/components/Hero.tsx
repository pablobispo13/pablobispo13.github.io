import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode";

export function Hero() {
  const subtle = useColorModeValue("gray.600", "gray.400");

  return (
    <Box
      as="section"
      id="inicio"
      position="relative"
      overflow="hidden"
      bgGradient="to-br"
      gradientFrom={useColorModeValue("brand.50", "#0d1117")}
      gradientTo={useColorModeValue("white", "#111a22")}
    >
      <Container maxW="6xl" py={{ base: 24, md: 40 }}>
        <Stack gap={6} maxW="3xl">
          <Heading
            as="h1"
            fontSize={{ base: "4xl", md: "6xl" }}
            lineHeight="1.05"
            letterSpacing="tight"
          >
            Olá! Prazer, me chamo{" "}
            <Text as="span" color="brand.400">
              Pablo
            </Text>
          </Heading>

          <Heading
            as="h2"
            fontSize={{ base: "xl", md: "2xl" }}
            fontWeight="medium"
            color={subtle}
          >
            Desenvolvedor Web Fullstack
          </Heading>

          <Text fontSize={{ base: "md", md: "lg" }} color={subtle} maxW="2xl">
            Um portfólio interativo: clique em um projeto para abri-lo e
            testá-lo aqui mesmo, sem sair da página.
          </Text>

          <HStack gap={4} pt={2}>
            <Button colorPalette="brand" size="lg" asChild>
              <a href="#projetos">Ver projetos</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contato">Entrar em contato</a>
            </Button>
          </HStack>
        </Stack>
      </Container>
    </Box>
  );
}
