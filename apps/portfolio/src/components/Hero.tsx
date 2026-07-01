import {
  Badge,
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";

export function Hero() {
  const subtle = "gray.300";

  return (
    <Box
      as="section"
      id="inicio"
      position="relative"
      minH="calc(100dvh - 4rem)"
      display="flex"
      alignItems="center"
    >
      <Container maxW="4xl" py={{ base: 20, md: 24 }}>
        <Stack gap={6} align="center" textAlign="center" mx="auto">
          <Badge
            colorPalette="brand"
            variant="surface"
            px={3}
            py={1}
            borderRadius="full"
            letterSpacing="wide"
          >
            Portfólio interativo
          </Badge>

          <Heading
            as="h1"
            fontSize={{ base: "4xl", md: "6xl" }}
            lineHeight="1.05"
            letterSpacing="tight"
            textShadow="0 2px 30px rgba(0,0,0,0.6)"
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

          <Text
            fontSize={{ base: "md", md: "lg" }}
            color={subtle}
            maxW="xl"
            mx="auto"
          >
            Clique em um projeto para abri-lo e testá-lo aqui mesmo, sem sair da
            página.
          </Text>

          <HStack gap={4} pt={2} justify="center">
            <Button colorPalette="brand" size="lg" asChild>
              <a href="#projetos">Ver projetos</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contato">Entrar em contato</a>
            </Button>
          </HStack>
        </Stack>
      </Container>

      {/* Dica de rolagem para os projetos */}
      <Link
        href="#projetos"
        position="absolute"
        bottom={8}
        left="50%"
        transform="translateX(-50%)"
        color="gray.400"
        display={{ base: "none", md: "flex" }}
        flexDir="column"
        alignItems="center"
        gap={2}
        fontSize="sm"
        _hover={{ color: "brand.300", textDecoration: "none" }}
        animation="bh-bob 2s ease-in-out infinite"
      >
        Role para ver os projetos
        <FaChevronDown />
      </Link>
    </Box>
  );
}
