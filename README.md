# Task4 — React + TypeScript + Vite + shadcn/ui + Tailwind

The application is deployed and available here:  
https://lazeta.github.io/task4/

---

## What has been implemented

- Navigation and routing using manual version `@tanstack/react-router` with active link highlighting.
- Home page at first loading
- Theme management with a `ThemeProvider` and `useTheme` custom hook.
- Products page with product cards and data loading from API.
- `Spinner` component for loading states from shadcn.
- Chat page with message display and metadata such like dialog.
- GraphQL page for query testing, and shows cards from graphql query api.
- Unit testing for core components and hooks.
- Module testing component.
- Snapshot testing for client api.
- E2E testing send form echo chat.

---

## How it was implemented

- **Stack**: React 19.1.1, TypeScript 5.9.3, Vite 7.1.7, TailwindCSS 4.1.17, zod 4.1.12, clsx 2.1.1,  
- **Data fetching**: TanStack Query with Zod schemas for validation.
- **Routing**: TanStack Router with routes organized by folders and `index.tsx` entry points.
- **UI**: shadcn/ui components and lucide-react icons, wrapped in reusable components.
- **Theme**: Context-based provider that sets `data-theme` on the document root.

---

## Architectural approaches

- Feature-Sliced Design (FSD) structure:
  - `app/` — entry point and global providers
  - `entities/` — business entities (product, chat, etc.)
  - `features/` — functional blocks
  - `pages/` — application pages
  - `shared/` — utilities, contexts, UI components
- Strict TypeScript configuration (`noImplicitAny`, preference for `unknown`/`never`, for maximum strict `exactOptionalPropertyTypes`, `noUncheckedIndexedAccess`).
- Validation of API responses with `Zod` schemas.
- Separation of logic and presentation for maintainability.
- `"@/*": ["./src/*"]` - convenient shortcuts for modular architecture.
- 

---

## Testing

- Unit tests implemented with Vitest.
- Coverage includes:
  - Rendering of components (`ProductCard`, `PeopleList`)
  - Hooks (`useProducts`, `useTheme`)
  - Data validation with Zod

---

## Deployment

- Built with Vite and deployed to GitHub Pages.
- `vite.config.ts` configured with `base` for correct asset routing.
- Accessible at: https://lazeta.github.io/task4/

---

## Dependencies

- `react`, `react-dom`
- `@tanstack/react-query`, `@tanstack/react-router`, `@tanstack/react-query-devtools`,
- `tailwindcss`
- `shadcn/ui`, `lucide-react`
- `zod`
- `class-variance-authority`
- `clsx`

---

## Getting started

Clone the repository:

```bash
git clone https://github.com/lazeta/task4.git
cd task4
```
Install dependencies:
```bash
npm install
```
Run the development server:
```bash
npm run dev
```
Build for production:
```bash
npm run build
```
Preview the production build locally:
```bash
npm run dev
```
---

## Summary

This project demonstrates a modern React + TypeScript setup with strict typing, feature-sliced architecture, reusable UI components, and deployment to GitHub Pages. It includes unit testing and a clear separation of concerns to ensure maintainability and scalability.