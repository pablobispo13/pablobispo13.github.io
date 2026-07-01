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
    id: "next-rpg-backend",
    title: "Next RPG — Backend/API",
    description:
      "API de RPG feita com Next.js e Prisma, publicada na Vercel. Backend com banco de dados.",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Fullstack"],
    icon: FaDiceD20,
    kind: "external",
    externalUrl: "https://next-rpg-backend.vercel.app",
    repoUrl: "https://github.com/pablobispo13/next-rpg-backend",
    // Substitua pelos prints reais em public/images/projetos/next-rpg/
    // gallery: [
    //   asset("images/projetos/next-rpg/01.svg"),
    //   asset("images/projetos/next-rpg/02.svg"),
    //   asset("images/projetos/next-rpg/03.svg"),
    // ],
  },
  {
    id: "overlay-twitch",
    title: "Overlay para Twitch",
    description:
      "Overlay de memes (imagens, vídeos e sons) arrastáveis para lives na Twitch via OBS, em tempo real com Socket.IO.",
    tags: ["React", "Vite", "Express", "Socket.IO"],
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
