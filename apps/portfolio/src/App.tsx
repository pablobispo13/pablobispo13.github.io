import { useState } from "react";
import { Box } from "@chakra-ui/react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { AppModal } from "@/components/AppModal";
import { useColorModeValue } from "@/components/ui/color-mode";
import type { ProjectMeta } from "@/apps/types";

export function App() {
  const [active, setActive] = useState<ProjectMeta | null>(null);
  const bg = useColorModeValue("gray.50", "#0d1117");

  return (
    <Box bg={bg} minH="100dvh" color={useColorModeValue("gray.800", "gray.100")}>
      <Header />
      <Hero />
      <Projects onOpen={setActive} />
      <Contact />
      <Footer />

      <AppModal
        project={active}
        open={active !== null}
        onClose={() => setActive(null)}
      />
    </Box>
  );
}
