import type { ComponentType } from "react";

/**
 * Tipos do "registro de apps" do portfólio.
 *
 * Cada projeto é descrito de forma declarativa e pode ser "startado" dentro
 * do portfólio (em um modal). Um app pode ser:
 *
 *  - "embed": app estático (HTML/CSS/JS) servido de /public e aberto em um
 *    iframe. É o caso da Calculadora e da Lista de afazeres já prontas.
 *  - "fullstack": precisa de backend + banco, cuja conexão é configurável por
 *    variáveis de ambiente (VITE_*). Serve para os próximos projetos.
 *  - "external": apenas linka para um repositório/demonstração externa.
 */
export type AppKind = "embed" | "fullstack" | "external";

/** Descreve uma variável de ambiente que um app full-stack precisa. */
export interface EnvVarSpec {
  /** Nome da variável (ex.: "VITE_LOL_API_BASE_URL"). */
  key: string;
  /** Rótulo amigável exibido no painel de configuração. */
  label: string;
  description?: string;
  required?: boolean;
  /** Valor padrão sugerido. */
  defaultValue?: string;
  /** Se true, o valor é mascarado na UI (senha/token). */
  secret?: boolean;
  /** Placeholder de exemplo. */
  placeholder?: string;
}

/** Configuração de banco de dados de um app full-stack. */
export interface DatabaseConfig {
  type: "postgres" | "mysql" | "mongodb" | "sqlite" | string;
  /** Variáveis de ambiente necessárias para conectar ao banco. */
  envVars: EnvVarSpec[];
}

/** Configuração de um app full-stack (front + back + banco). */
export interface FullstackConfig {
  /** Variável de env que aponta para a base do backend. */
  apiBaseUrlEnv: string;
  /** Variáveis de ambiente do backend/API. */
  envVars: EnvVarSpec[];
  /** Configuração opcional de banco de dados. */
  database?: DatabaseConfig;
}

/** Metadados de um projeto/app do portfólio. */
export interface ProjectMeta {
  id: string;
  title: string;
  /** Descrição curta exibida no card. */
  description: string;
  /** Stack / tecnologias. */
  tags: string[];
  /** Caminho da imagem (em /public). Opcional — usa fallback com ícone. */
  thumbnail?: string;
  /** Ícone (react-icons) usado no fallback quando não há thumbnail. */
  icon?: ComponentType;
  kind: AppKind;

  /** URL do app estático servido de /public (kind "embed"). */
  embedUrl?: string;

  /** Imagens do projeto exibidas em um carrossel no modal. */
  gallery?: string[];

  /** Link externo (demo/GitHub) para kind "external". */
  externalUrl?: string;
  /** Repositório do código. */
  repoUrl?: string;

  /** Presente quando kind === "fullstack". */
  fullstack?: FullstackConfig;
}
