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
    thumbnail: asset("images/projetos/prisma/login.png"),
    kind: "external",
    externalUrl: "https://prismarpg.vercel.app",
    repoUrl: "https://github.com/pablobispo13/prisma-rpg",
    gallery: [
      asset("images/projetos/prisma/login.png"),
      asset("images/projetos/prisma/tela-inicial-sem-mesa.png"),
      asset("images/projetos/prisma/hub-mesas.png"),
      asset("images/projetos/prisma/ficha-personagem.png"),
      asset("images/projetos/prisma/visualizacao-combate.png"),
      asset("images/projetos/prisma/tela-combate.png"),
    ],
  },
  {
    id: "overlay-twitch",
    title: "Overlay para Twitch",
    description:
      "Overlay de memes (imagens, vídeos e sons) arrastáveis para lives na Twitch via OBS, em tempo real com Socket.IO. Mídias no Cloudinary e deploy no Render.",
    tags: ["React", "Vite", "Express", "Socket.IO", "Cloudinary", "Render"],
    icon: FaTwitch,
    thumbnail: asset("images/projetos/overlay/tela-overlay.png"),
    kind: "external",
    repoUrl: "https://github.com/pablobispo13/overlay-twitch",
    gallery: [
      asset("images/projetos/overlay/tela-login.png"),
      asset("images/projetos/overlay/tela-overlay.png"),
      asset("images/projetos/overlay/exemplo-overlay-1.png"),
      asset("images/projetos/overlay/exemplo-overlay-2.png"),
    ],
  },
  {
    id: "pomodoro-task-manager",
    title: "Pomodoro & Task Manager",
    description:
      "App de produtividade (Pomodoro + gestão de tarefas) para desktop, feito com Electron, React, Vite e shadcn/ui.",
    tags: ["Electron", "React", "TypeScript", "Tailwind"],
    icon: FaClock,
    thumbnail: asset("images/projetos/pomodoro/tela-inicial.png"),
    kind: "external",
    repoUrl: "https://github.com/pablobispo13/pomodoro-task-manager",
    gallery: [
      asset("images/projetos/pomodoro/tela-inicial.png"),
      asset("images/projetos/pomodoro/tela-foco.png"),
      asset("images/projetos/pomodoro/tela-tarefas.png"),
      asset("images/projetos/pomodoro/tela-dashboard.png"),
      asset("images/projetos/pomodoro/tela-cadastros.png"),
      asset("images/projetos/pomodoro/tela-configuracoes.png"),
    ],
  },
];
