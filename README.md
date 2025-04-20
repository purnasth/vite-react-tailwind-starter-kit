# Vite + React + TailwindCSS(4) Starter Kit

---

## Getting Started`*`

### 1. Clone this repo`*`

```sh
git clone https://github.com/purnasth/vite-react-tailwind-starter.git
```

### &rarr; for `jsx`

<!-- how to print arrow in markdown ?
https://stackoverflow.com/questions/30003353/how-to-write-an-arrow-in-markdown 
 -->

```sh
git checkout vrt
```

#### Repo Url: https://github.com/purnasth/vite-react-tailwind-starter-kit/tree/vrt

### &rarr; for `TypeScript`

```sh
git checkout vrt-ts
```

#### Repo Url: https://github.com/purnasth/vite-react-tailwind-starter-kit/tree/vrt-ts

### &rarr; for `react-with-tailwind(v3)`

```sh
git checkout tailwind-v3
```

#### Repo Url: https://github.com/purnasth/vite-react-tailwind-starter-kit/tree/tailwind-v3

---

### 2. Install and Run`*`

Run the following commands in your terminal:

```sh
pnpm install
pnpm run dev
```

- <b><em>`pnpm install`</em></b> to install the node_modules on your local repo which has been .gitignore in this github repo.
- <b><em>`pnpm run dev`</em></b> for running this in your browser, by default it opens in port http://localhost:5173/

---

## Getting Started`*`

### 1. Clone this repo`*`

```sh
git clone https://github.com/purnasth/vite-react-tailwind-starter.git
```


### &rarr; for `pnpm TypeScript + Tailwindcss + Prettier (Auto Formatting)`

```sh
the `main` branch
```

#### &rarr; Repo Url: https://github.com/purnasth/vite-react-tailwind-starter-kit/

#

### 2. Install and Run`*`

Run the following commands in your terminal:

```sh
pnpm install
pnpm dev
```

- <b><em>`pnpm install`</em></b> to install the node_modules on your local repo which has been .gitignore in this github repo.
- <b><em>`pnpm dev`</em></b> for running this in your browser, by default it opens in port http://localhost:5173/

---


## Codes Used

<b>`NOTE:`
<em>
Please disregard these below provided codes if you've already completed the first two steps of the "Getting Started" section. It's only meant for those interested in manually creating a project from scratch with Vite + React, Typescript, TailwindCSS and Prettier (Auto Formatting) with pnpm.
</em>
</b>

### Install vite + react

```sh
pnpm create vite@latest ./ --template react
# y to proceed
# Select a framework: react
# Select a variant: TypeScript + SWC
pnpm install
pnpm run dev
```

```sh
npm run dev -- --host
```

### Install tailwindCSS

```sh
pnpm install tailwindcss @tailwindcss/vite
```

### Configure the Vite plugin `vite.config.ts`
Update the file `vite.config.ts` file:
```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

### Import Tailwind CSS styles `index.css`
Create a file named `index.css` in the `src` directory and add the following lines:
```css
@import "tailwindcss";
```
`NOTE`: In case you are migrating from tailwindcss v3.4 to v4.0, link your existing `tailwind.config.js` file to the new `index.css` file.

```css
@config "../tailwind.config.js";
```

### Install Prettier

```sh
pnpm install -D prettier
```

### Add Prettier Config

Create a file named `.prettierrc` in the root directory and add the following lines:

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

### Add Prettier Scripts

Add the following lines to the `scripts` object in your `package.json` file:

```json
"format": "prettier --write \"src/**/*.{js,jsx,ts,tsx,json,css,scss,md}\"",
"format:check": "prettier --check \"src/**/*.{js,jsx,ts,tsx,json,css,scss,md}\""
```

### Run Prettier

```sh
pnpm run format
```

### Auto Formatting with Prettier

```sh
pnpm i -D prettier prettier-plugin-tailwindcss
```

<b>`NOTE:`
<em>
Enable the `formatOnSave` option in your editor to auto-format your code with Prettier. You can also run the `pnpm run format` command to format your code. 
Cheers! Now on every save, your code will be auto-formatted. Congratulations! 
</em>
</b>


---

## Libraries `pnpm`

```
pnpm install react-router-dom
pnpm install react-icons
```
<!-- pnpm install react-router-dom
pnpm install react-icons
pnpm install react-helmet
pnpm install react-query
pnpm install react-toastify
pnpm install react-modal
pnpm install react-select
pnpm install react-datepicker
pnpm install react-table
pnpm install react-hook-form
pnpm install react-markdown
pnpm install react-syntax-highlighter
pnpm install react-draggable
pnpm install react-beautiful-dnd
pnpm install react-spring
pnpm install react-use
pnpm install react-use-gesture
pnpm install react-use-measure -->

⭐ Star this repo on GitHub — it helps!