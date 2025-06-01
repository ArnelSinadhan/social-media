# Social Media App Documentation

## Overview

This project is a modern social media web application built with **Next.js** and **TypeScript**. It leverages a modular folder structure, reusable UI components, and best practices for scalability and maintainability.

---

### 📁 File Naming Conventions (Next.js + TypeScript)

| Type                 | File Name Convention         | Example                                 |
| -------------------- | ---------------------------- | --------------------------------------- |
| Constants            | kebab-case or camelCase      | `api-endpoints.ts` or `apiEndpoints.ts` |
| React components     | PascalCase                   | `LoginForm.tsx`                         |
| Hooks                | camelCase, starts with `use` | `useLogin.ts`                           |
| Utility/helper files | kebab-case or camelCase      | `date-utils.ts`, `formatDate.ts`        |

---

## Project Structure

- `src/app/` — Next.js app directory (routing, layouts, pages)
- `src/components/ui/` — Reusable UI components (buttons, dialogs, forms, etc.)
- `src/hooks/` — Custom React hooks
- `src/lib/` — Utility functions and helpers
- `src/infrastracture/` — Infrastructure-related code (API, services)
- `src/presentation/` — Presentation logic (optional, for separation of concerns)
- `src/middleware.ts` — Next.js middleware for route protection

---

## Key Technologies

- **Next.js** (App Router)
- **TypeScript**
- **Radix UI** (for accessible UI primitives)
- **React Hook Form** (for forms)
- **Lucide React** (icons)

---

## Middleware

Route protection is handled in [`src/middleware.ts`](src/middleware.ts):

- Redirects unauthenticated users from protected routes (e.g., `/home`)
- Redirects authenticated users away from public routes (e.g., `/login`)

---

## Styling

- Global styles in [`src/app/globals.css`](src/app/globals.css)
- Component-level styles via utility classes and the `cn` helper

---

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

---

## Contribution

- Follow the file naming conventions above.
- Place new UI components in `src/components/ui/` using PascalCase.
- Add new hooks to `src/hooks/` using camelCase and prefix with `use`.
- Write utility functions in `src/lib/` using kebab-case or camelCase.

---

## License

MIT
