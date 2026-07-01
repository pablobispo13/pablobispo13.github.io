import { useState } from "react";
import { Box, Circle, HStack, IconButton, Image } from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Props {
  images: string[];
  alt: string;
}

/** Carrossel simples de imagens (setas + indicadores). */
export function Carousel({ images, alt }: Props) {
  const [index, setIndex] = useState(0);
  const total = images.length;
  const go = (delta: number) => setIndex((prev) => (prev + delta + total) % total);

  return (
    <Box
      position="relative"
      bg="black"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Image
        src={images[index]}
        alt={`${alt} — imagem ${index + 1} de ${total}`}
        w="full"
        maxH={{ base: "60dvh", md: "72dvh" }}
        objectFit="contain"
      />

      {total > 1 ? (
        <>
          <IconButton
            aria-label="Imagem anterior"
            onClick={() => go(-1)}
            position="absolute"
            top="50%"
            left="3"
            transform="translateY(-50%)"
            variant="solid"
            bg="blackAlpha.600"
            _hover={{ bg: "blackAlpha.800" }}
            rounded="full"
          >
            <FaChevronLeft />
          </IconButton>
          <IconButton
            aria-label="Próxima imagem"
            onClick={() => go(1)}
            position="absolute"
            top="50%"
            right="3"
            transform="translateY(-50%)"
            variant="solid"
            bg="blackAlpha.600"
            _hover={{ bg: "blackAlpha.800" }}
            rounded="full"
          >
            <FaChevronRight />
          </IconButton>

          <HStack
            position="absolute"
            bottom="4"
            left="50%"
            transform="translateX(-50%)"
            gap={2}
          >
            {images.map((src, i) => (
              <Circle
                key={src}
                size="2.5"
                cursor="pointer"
                bg={i === index ? "brand.400" : "whiteAlpha.500"}
                onClick={() => setIndex(i)}
              />
            ))}
          </HStack>
        </>
      ) : null}
    </Box>
  );
}
