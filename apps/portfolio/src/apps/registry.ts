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
    id: "lol-invocador",
    title: "API League of Legends — Dados do invocador",
    description:
      "Consome a API da Riot para buscar dados de um invocador. Front + PHP.",
    tags: ["HTML", "CSS", "JavaScript", "PHP"],
    thumbnail: asset("images/portfolio/imagem_buscar_dados.jpg"),
    kind: "external",
    externalUrl: "https://github.com/pablobispo13/LOL",
    repoUrl: "https://github.com/pablobispo13/LOL",
  },
  {
    id: "lol-ultima-partida",
    title: "API League of Legends — Última partida",
    description:
      "Busca os invocadores da última partida via API da Riot. Front + PHP.",
    tags: ["HTML", "CSS", "JavaScript", "PHP"],
    thumbnail: asset("images/portfolio/imagem_buscar_dados_ultima_partida.jpg"),
    kind: "external",
    externalUrl: "https://github.com/pablobispo13/LOL",
    repoUrl: "https://github.com/pablobispo13/LOL",
  },
];
