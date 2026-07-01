import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { AppModal } from "@/components/AppModal";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { LoadingScreen } from "@/components/LoadingScreen";
import type { ProjectMeta } from "@/apps/types";

export function App() {
  const [active, setActive] = useState<ProjectMeta | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Some com o loading quando a página termina de carregar (com um respiro).
    const finish = () => window.setTimeout(() => setLoading(false), 600);
    if (document.readyState === "complete") {
      finish();
      return;
    }
    window.addEventListener("load", finish);
    return () => window.removeEventListener("load", finish);
  }, []);

  return (
    <>
      <LoadingScreen visible={loading} />
      <ParticlesBackground />

      <Box position="relative" zIndex={1} minH="100dvh" color="gray.100">
        <Header />
        <Hero />
        <Projects onOpen={setActive} />
        <Contact />
        <Footer />
      </Box>

      <AppModal
        project={active}
        open={active !== null}
        onClose={() => setActive(null)}
      />
    </>
  );
}
