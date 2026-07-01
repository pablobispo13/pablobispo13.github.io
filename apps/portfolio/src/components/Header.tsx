import { Box, Flex, HStack, IconButton, Link, Text } from "@chakra-ui/react";
import { FaEnvelope, FaInstagram, FaLinkedin, FaFileAlt } from "react-icons/fa";
import { ColorModeButton, useColorModeValue } from "@/components/ui/color-mode";

const CV_URL =
  "https://docs.google.com/document/d/1fsHjQbYZHzsPlDHNdBpIhmhgC7wxNsVEsF0v16dS6ZE/edit?usp=sharing";

const nav = [
  { label: "Início", href: "#inicio" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

const socials = [
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
  { label: "Currículo", href: CV_URL, icon: FaFileAlt },
];

export function Header() {
  const bg = useColorModeValue("rgba(255,255,255,0.8)", "rgba(13,17,23,0.8)");
  const border = useColorModeValue("gray.200", "whiteAlpha.200");

  return (
    <Box
      as="header"
      position="sticky"
      top="0"
      zIndex="docked"
      bg={bg}
      backdropFilter="blur(10px)"
      borderBottomWidth="1px"
      borderColor={border}
    >
      <Flex
        maxW="6xl"
        mx="auto"
        px={{ base: 4, md: 8 }}
        h="16"
        align="center"
        justify="space-between"
      >
        <Text fontFamily="heading" fontWeight="bold" fontSize="lg">
          Pablo Bispo
        </Text>

        <HStack gap={{ base: 3, md: 6 }}>
          <HStack gap={6} display={{ base: "none", md: "flex" }}>
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                fontWeight="medium"
                _hover={{ color: "brand.400", textDecoration: "none" }}
              >
                {item.label}
              </Link>
            ))}
          </HStack>

          <HStack gap={1}>
            {socials.map((s) => (
              <IconButton
                key={s.label}
                asChild
                variant="ghost"
                size="sm"
                aria-label={s.label}
              >
                <a href={s.href} target="_blank" rel="noreferrer">
                  <s.icon />
                </a>
              </IconButton>
            ))}
            <ColorModeButton />
          </HStack>
        </HStack>
      </Flex>
    </Box>
  );
}
