import { FaClock, FaDiceD20, FaTwitch } from "react-icons/fa";
import type { ProjectMeta } from "./types";

/** Prefixa um caminho de /public com o base configurado no Vite. */
const asset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

/**
 * Registro de projetos do portfólio.
 * Adicione novos apps aqui — a landing e o modal se atualizam automaticamente.
 */
export const projects: ProjectMeta[] = [
  {
    id: "calculadora",
    title: "Calculadora",
    description:
      "Calculadora com as 4 operações e alternância de tema (claro/escuro) baseada no dispositivo.",
    tags: ["HTML", "CSS", "JavaScript"],
    thumbnail: asset("images/portfolio/calc.png"),
    kind: "embed",
    embedUrl: asset("projetos/calculadora_23_10_2022/index.html"),
  },
  {
    id: "lista-afazeres",
    title: "Lista de afazeres",
    description:
      "To-do list: adicionar, concluir e excluir tarefas, com tema claro/escuro do dispositivo.",
    tags: ["HTML", "CSS", "JavaScript"],
    thumbnail: asset("images/portfolio/lista_a_fazer.jpeg"),
    kind: "embed",
    embedUrl: asset("projetos/lista_fazer_29_10/index.html"),
  },
  {
    id: "prisma-rpg-backend",
    title: "Prisma RPG — Sistema de RPG",
    description:
      "Sistema completo de RPG: gerenciamento de fichas, personagens, mesas e combate interativo. Feito com Next.js e Prisma, publicado na Vercel.",
    tags: ["Next.js", "TypeScript", "Prisma", "MongoDB", "Fullstack"],
    icon: FaDiceD20,
    kind: "external",
    externalUrl: "https://prismarpg.vercel.app",
    repoUrl: "https://github.com/pablobispo13/prisma-rpg",
    // Substitua pelos prints reais em public/images/projetos/prisma-rpg/
    // gallery: [
    //   asset("images/projetos/prisma-rpg/01.svg"),
    //   asset("images/projetos/prisma-rpg/02.svg"),
    //   asset("images/projetos/next-rpg/03.svg"),
    // ],
  },
  {
    id: "overlay-twitch",
    title: "Overlay para Twitch",
    description:
      "Overlay de memes (imagens, vídeos e sons) arrastáveis para lives na Twitch via OBS, em tempo real com Socket.IO. Mídias no Cloudinary e deploy no Render.",
    tags: ["React", "Vite", "Express", "Socket.IO", "Cloudinary", "Render"],
    icon: FaTwitch,
    kind: "external",
    repoUrl: "https://github.com/pablobispo13/overlay-twitch",
  },
  {
    id: "pomodoro-task-manager",
    title: "Pomodoro & Task Manager",
    description:
      "App de produtividade (Pomodoro + gestão de tarefas) para desktop, feito com Electron, React, Vite e shadcn/ui.",
    tags: ["Electron", "React", "TypeScript", "Tailwind"],
    icon: FaClock,
    kind: "external",
    repoUrl: "https://github.com/pablobispo13/pomodoro-task-manager",
  },
];
