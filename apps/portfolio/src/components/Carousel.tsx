import { useEffect, useRef, useState } from "react";
import { Box, HStack, IconButton, Image, Text } from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Props {
  images: string[];
  alt: string;
  initialIndex?: number;
}

/** Carrossel de imagens com miniaturas, contador e navegação por teclado/toque. */
export function Carousel({ images, alt, initialIndex = 0 }: Props) {
  const [index, setIndex] = useState(initialIndex);
  const total = images.length;
  const go = (delta: number) => setIndex((prev) => (prev + delta + total) % total);
  const touchStartX = useRef<number | null>(null);

  // Setas do teclado navegam o carrossel enquanto o modal estiver aberto.
  useEffect(() => {
    if (total <= 1) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") go(-1);
      else if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [total]);

  return (
    <Box flex="1" minH="0" w="full" display="flex" flexDirection="column">
      <Box
        flex="1"
        minH="0"
        position="relative"
        bg="black"
        display="flex"
        alignItems="center"
        justifyContent="center"
        overflow="hidden"
        onTouchStart={(e) => {
          touchStartX.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (touchStartX.current == null) return;
          const delta = e.changedTouches[0].clientX - touchStartX.current;
          if (Math.abs(delta) > 40) go(delta > 0 ? -1 : 1);
          touchStartX.current = null;
        }}
      >
        <Image
          src={images[index]}
          alt={`${alt} — imagem ${index + 1} de ${total}`}
          maxW="full"
          maxH="full"
          objectFit="contain"
        />

        {total > 1 ? (
          <>
            <IconButton
              aria-label="Imagem anterior"
              onClick={() => go(-1)}
              position="absolute"
              top="50%"
              left={{ base: 2, md: 4 }}
              transform="translateY(-50%)"
              variant="solid"
              size={{ base: "sm", md: "md" }}
              bg="blackAlpha.700"
              color="white"
              _hover={{ bg: "blackAlpha.900" }}
              rounded="full"
              shadow="md"
            >
              <FaChevronLeft />
            </IconButton>
            <IconButton
              aria-label="Próxima imagem"
              onClick={() => go(1)}
              position="absolute"
              top="50%"
              right={{ base: 2, md: 4 }}
              transform="translateY(-50%)"
              variant="solid"
              size={{ base: "sm", md: "md" }}
              bg="blackAlpha.700"
              color="white"
              _hover={{ bg: "blackAlpha.900" }}
              rounded="full"
              shadow="md"
            >
              <FaChevronRight />
            </IconButton>

            <Text
              position="absolute"
              top="3"
              right="3"
              fontSize="xs"
              fontWeight="medium"
              color="white"
              bg="blackAlpha.700"
              px="2.5"
              py="1"
              rounded="full"
            >
              {index + 1} / {total}
            </Text>
          </>
        ) : null}
      </Box>

      {total > 1 ? (
        <HStack
          flexShrink={0}
          gap={2}
          p={2}
          overflowX="auto"
          bg="space.800"
          borderTopWidth="1px"
          borderColor="whiteAlpha.200"
        >
          {images.map((src, i) => (
            <Box
              key={src}
              as="button"
              aria-label={`Ir para imagem ${i + 1}`}
              aria-current={i === index}
              onClick={() => setIndex(i)}
              flexShrink={0}
              w="16"
              h="12"
              rounded="md"
              overflow="hidden"
              borderWidth="2px"
              borderColor={i === index ? "brand.400" : "transparent"}
              opacity={i === index ? 1 : 0.6}
              cursor="pointer"
              transition="opacity 0.15s, border-color 0.15s"
              _hover={{ opacity: 1 }}
            >
              <Image src={src} alt="" w="full" h="full" objectFit="cover" />
            </Box>
          ))}
        </HStack>
      ) : null}
    </Box>
  );
}
