<h1 align="center">
  <img
      src="https://readme-typing-svg.demolab.com?font=Roboto+Slab&color=9f4bff&size=30&center=true&vCenter=true&width=500&lines=Vite++React++TailwindCSS+Starter+Kit;"
      alt="Vite + React + TailwindCSS Starter Kit"
  />
</h1>
  <br/>

<div align="center">
  <img
    alt="GitHub repo size"
    src="https://img.shields.io/github/repo-size/purnasth/vite-react-tailwind-starter?color=9f4bff&logo=github&style=for-the-badge&logoColor=9f4bff"
  />
  <img
    alt="GitHub forks"
    src="https://img.shields.io/github/forks/purnasth/vite-react-tailwind-starter?color=9f4bff&logo=github&style=for-the-badge&logoColor=9f4bff"
  />
  <img
    alt="GitHub Repo stars"
    src="https://img.shields.io/github/stars/purnasth/vite-react-tailwind-starter?color=9f4bff&logo=github&style=for-the-badge&logoColor=9f4bff"
  />
  <img
    alt="Last commit"
    src="https://img.shields.io/github/last-commit/purnasth/vite-react-tailwind-starter?color=9f4bff&logo=git&logoColor&style=for-the-badge"
  />
  <img
    alt="Commit activity"
    src="https://img.shields.io/github/commit-activity/m/purnasth/vite-react-tailwind-starter?color=9f4bff&logo=git&logoColor&style=for-the-badge"
  />
</div>
<br />

<p align="center">This template provides a stater setup to get React working in Vite with TailwindCSS installed.</p>

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

#### &rarr; Repo Url: https://github.com/purnasth/vite-react-tailwind-starter-kit/tree/vrt

### &rarr; for `TypeScript`

```sh
git checkout vrt-ts
```

#### &rarr; Repo Url: https://github.com/purnasth/vite-react-tailwind-starter-kit/tree/vrt-ts

#

### 2. Install and Run`*`

Run the following commands in your terminal:

```sh
npm install
npm run dev
```

- <b><em>`npm install`</em></b> to install the node_modules on your local repo which has been .gitignore in this github repo.
- <b><em>`npm run dev`</em></b> for running this in your browser, by default it opens in port http://localhost:5173/

---

## Getting Started`*`

### 1. Clone this repo`*`

```sh
git clone https://github.com/purnasth/vite-react-tailwind-starter.git
```


### &rarr; for `pnpm TypeScript + Tailwindcss + Prettier (Auto Formatting)`

```sh
the main branch
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
pnpm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Replace <em>`tailwind.config.js`</em> inner codes with

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#111111",
      },
      fontSize: {
        inherit: "inherit",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1600px",
        "3xl": "1920px",
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "100%",
          md: "100%",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1600px",
        },
      },
    },
  },
  plugins: [],
};
```

### Paste these lines in <em>`index.css`</em>

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### `React is not defined` error

If you encounter the error `React is not defined` or `React is defined but never used`, add the following line to the top of your `tsconfig.json` file:

```json
{
    "files": [],
    "references": [
        {
            "path": "./tsconfig.app.json"
        },
        {
            "path": "./tsconfig.node.json"
        }
    ],
    "compilerOptions": {
        "jsx": "react-jsx",
        "jsxImportSource": "react"
    }
}
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