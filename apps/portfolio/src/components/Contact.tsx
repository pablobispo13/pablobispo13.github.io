import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaEnvelope, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useColorModeValue } from "@/components/ui/color-mode";

const links = [
  {
    label: "Email",
    href: "mailto:contato.pabloed@gmail.com?subject=Visualizei seu portifolio",
    icon: FaEnvelope,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/pablobispo13",
    icon: FaInstagram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/pablo-pimentel/",
    icon: FaLinkedin,
  },
];

export function Contact() {
  const bg = useColorModeValue("brand.50", "#111a22");

  return (
    <Box as="section" id="contato" bg={bg} py={{ base: 16, md: 24 }}>
      <Container maxW="4xl">
        <Stack gap={6} align="center" textAlign="center">
          <Heading as="h2" fontSize={{ base: "3xl", md: "4xl" }}>
            Entre em contato
          </Heading>
          <Text color="fg.muted" maxW="xl">
            Tem um projeto em mente ou quer conversar? Me chame por qualquer um
            dos canais abaixo.
          </Text>
          <HStack gap={4} flexWrap="wrap" justify="center">
            {links.map((l) => (
              <Button key={l.label} variant="outline" size="lg" asChild>
                <a href={l.href} target="_blank" rel="noreferrer">
                  <l.icon /> {l.label}
                </a>
              </Button>
            ))}
          </HStack>
        </Stack>
      </Container>
    </Box>
  );
}
