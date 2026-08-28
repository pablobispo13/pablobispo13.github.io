import { useRef } from "react";
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
import { useReducedMotion, useScroll, useTransform } from "framer-motion";
import { MotionBox } from "@/components/motion";

export function Hero() {
  const subtle = "gray.300";

  const sectionRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Progresso de 0 a 1 enquanto o Hero atravessa o topo da viewport.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Conteúdo: sobe devagar e esmaece — sensação de ser "puxado" ao rolar.
  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, prefersReducedMotion ? 0 : 70],
  );
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.8],
    [1, prefersReducedMotion ? 1 : 0],
  );

  // Dois "orbs" do disco de acreção em profundidades diferentes: o de trás
  // se move pouco, o da frente se move mais rápido — é isso que dá a
  // sensação de parallax (camadas com velocidades distintas).
  const orbBackY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, prefersReducedMotion ? 0 : -40],
  );
  const orbFrontY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, prefersReducedMotion ? 0 : -130],
  );

  return (
    <Box
      ref={sectionRef}
      as="section"
      id="inicio"
      position="relative"
      minH="calc(100dvh - 4rem)"
      display="flex"
      alignItems="center"
      overflow="hidden"
    >
      {/* Camada de trás do parallax: brilho amplo e mais parado */}
      <MotionBox
        aria-hidden="true"
        position="absolute"
        top="-10%"
        right="-10%"
        boxSize={{ base: "320px", md: "480px" }}
        borderRadius="full"
        bgGradient="radial-gradient(circle, #8b21e0 0%, transparent 70%)"
        filter="blur(70px)"
        opacity={0.35}
        pointerEvents="none"
        style={{ y: orbBackY }}
      />

      {/* Camada da frente do parallax: brilho menor e mais rápido */}
      <MotionBox
        aria-hidden="true"
        position="absolute"
        bottom="-5%"
        left="-8%"
        boxSize={{ base: "220px", md: "340px" }}
        borderRadius="full"
        bgGradient="radial-gradient(circle, #b96bff 0%, transparent 70%)"
        filter="blur(60px)"
        opacity={0.28}
        pointerEvents="none"
        style={{ y: orbFrontY }}
      />

      <Container maxW="4xl" py={{ base: 20, md: 24 }}>
        <MotionBox style={{ y: contentY, opacity: contentOpacity }}>
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
              Clique em um projeto para abri-lo e testá-lo aqui mesmo, sem sair
              da página.
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
        </MotionBox>
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
