# Portfólio · Pablo Bispo

Portfólio interativo em **React + Vite + TypeScript + Chakra UI v3**, organizado como
**monorepo** (npm workspaces). Os projetos podem ser abertos e testados direto na
página, em um modal.

Acesse: https://pablobispo13.github.io/

## Estrutura

```
.
├─ apps/
│  └─ portfolio/        # app React (Vite) — a landing + o launcher de apps
│     ├─ public/
│     │  └─ projetos/   # apps legados estáticos (HTML/CSS/JS), abertos via iframe
│     └─ src/
│        ├─ apps/       # registro tipado de projetos (registry.ts + types.ts)
│        └─ components/ # Header, Hero, Projects, Contact, Footer, AppModal...
├─ packages/            # pacotes compartilhados (futuros apps full-stack)
├─ legacy/              # site estático original (mantido para referência)
└─ .github/workflows/   # deploy automático no GitHub Pages
```

## Rodando localmente

```bash
npm install           # instala o monorepo inteiro
npm run dev           # sobe o portfólio em http://localhost:5173
npm run build         # gera apps/portfolio/dist
npm run preview       # serve o build localmente
```

## Adicionar um novo projeto

Edite `apps/portfolio/src/apps/registry.ts`:

- **`embed`**: app estático em `public/` aberto via iframe (ex.: Calculadora).
- **`fullstack`**: front + back + banco, configurável por variáveis `VITE_*`
  (ver `.env.example`). O modal mostra o status de cada variável.
- **`external`**: apenas linka para um repositório/demonstração.

## Deploy no GitHub Pages

O deploy é automático via GitHub Actions (`.github/workflows/deploy.yml`).
Passo a passo:

1. No GitHub: **Settings → Pages → Build and deployment → Source → "GitHub Actions"**.
2. `git push` na branch `main`.
3. Acompanhe em **Actions**; ao terminar, o site atualiza em
   https://pablobispo13.github.io/.

> Como este é um site de usuário (`pablobispo13.github.io`), o `base` do Vite é `/`.
> Em um repo de projeto, defina `VITE_BASE="/nome-do-repo/"` no workflow.
