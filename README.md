# Vite + React + TailwindCSS (v4) Starter Kit

---

## 📦 Branches & Variants

- **`main` branch (React 18 LTS):**
  - Stable, production-ready with React 18 and latest dependencies.
  - [Repo URL](https://github.com/purnasth/vite-react-tailwind-starter-kit/)

- **`chore/upgrade-react-19` branch:**
  - Experimental, includes React 19 and the latest versions of all dependencies.
  - [Repo URL](https://github.com/purnasth/vite-react-tailwind-starter-kit/tree/chore/upgrade-react-19)
  - _Use this branch if you want to try the newest React features and updates._


- **Other variants:**
  - **`vrt`** — _Vite + React + TailwindCSS (JSX only)_  
    [Repo URL](https://github.com/purnasth/vite-react-tailwind-starter-kit/tree/vrt)
  - **`vrt-ts`** — _Vite + React + TailwindCSS (TypeScript)_  
    [Repo URL](https://github.com/purnasth/vite-react-tailwind-starter-kit/tree/vrt-ts)
  - **`tailwind-v3`** — _Vite + React + TailwindCSS v3_  
    [Repo URL](https://github.com/purnasth/vite-react-tailwind-starter-kit/tree/tailwind-v3)

---

## 🚀 Getting Started

### 1. Clone the repository

```sh
git clone https://github.com/purnasth/vite-react-tailwind-starter.git
cd vite-react-tailwind-starter-kit
```

### 2. Install dependencies

```sh
pnpm install
```

### 3. Start the development server

```sh
pnpm dev
```

The app will be available at [http://localhost:5173](http://localhost:5173).

---

## 🛠️ Manual Setup (from scratch)

> _Skip this section if you cloned the repo above. This is for those who want to create a similar project from scratch._

### 1. Create a new Vite + React project

```sh
pnpm create vite@latest ./ --template react
# y to proceed
# Select a framework: react
# Select a variant: TypeScript + SWC
pnpm install
pnpm run dev
```

### 2. Install TailwindCSS

```sh
pnpm install tailwindcss @tailwindcss/vite
```

### 3. Configure the Vite plugin (`vite.config.ts`)

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

### 4. Import Tailwind CSS styles (`src/index.css`)

```css
@import "tailwindcss";
@config "../tailwind.config.js";
```

### 5. Install and configure Prettier

```sh
pnpm install -D prettier prettier-plugin-tailwindcss
```

Create a `.prettierrc` file:

```json
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "useTabs": false,
  "printWidth": 80,
  "endOfLine": "auto"
}
```

Add scripts to `package.json`:

```json
"format": "prettier --write 'src/**/*.{js,jsx,ts,tsx,json,css,scss,md}'",
"format:check": "prettier --check 'src/**/*.{js,jsx,ts,tsx,json,css,scss,md}'"
```

---

## 📚 Useful Libraries

- `react-router-dom` — Routing
- `react-icons` — Icon library

Install with:

```sh
pnpm install react-router-dom react-icons
```

---

## ⭐ Star this repo on GitHub — it helps!