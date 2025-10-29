# My Project (e.g., Tasksfy)

This is a monorepo for the Taskify project, built with Vite, React, Express, and Docusaurus.

## What's Inside?

- `apps/web`: The Vite + React main application
- `apps/api`: The Express.js backend API
- `apps/docs`: The Docusaurus documentation site
- `packages/ui`: Shared React components
- `packages/db`: Prisma schema and database client
- `packages/config-tailwind`: Shared Tailwind CSS configuration
- `packages/typescript-config`: Shared `tsconfig.json` files
- `packages/eslint-config`: Shared ESLint configurations

## Getting Started

1.  **Install dependencies:**

    ```bash
    pnpm install
    ```

2.  **Set up environment variables:**
    Copy `.env.example` to `.env` in `apps/api` (for the pooled URL) and `.env.example` to `.env.cli` in `packages/db` (for the direct URL). Then, fill in your database passwords.

3.  **Push the database schema:**

    ```bash
    pnpm --filter=@repo/db db:push
    ```

4.  **Run all applications:**
    ```bash
    pnpm run dev
    ```

    - Web app: `http://localhost:5173`
    - API: `http://localhost:4000`
    - Docs: `http://localhost:3000`
