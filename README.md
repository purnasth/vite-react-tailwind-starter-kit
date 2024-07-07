<h1 align="center">
  <img
      src="https://readme-typing-svg.demolab.com?font=Roboto+Slab&color=9f4bff&size=30&center=true&vCenter=true&width=500&lines=Vite++React++TailwindCSS+Starter+Kit;"
      alt="Vite + React + TailwindCSS + TypeScript Starter Kit"
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

```sh
git checkout vrt-ts
```

### 2. Install and Run`*`

Run the following commands in your terminal:

```sh
npm install
npm run dev
```

-   <b><em>`npm install`</em></b> to install the node_modules on your local repo which has been .gitignore in this github repo.
-   <b><em>`npm run dev`</em></b> for running this in your browser, by default it opens in port http://localhost:5173/

---

## Codes Used

<b>`NOTE:`
<em>
Please disregard these below provided codes if you've already completed the first two steps of the "Getting Started" section. It's only meant for those interested in manually creating a Vite + React project with TailwindCSS.
</em>
</b>

### Install vite + react

```sh
npm create vite@latest ./
# y to proceed
# Select a framework: React
# Select a variant: TypeScript + SWC
npm install
npm run dev
```

```sh
npm run dev -- --host
```

### Install tailwindCSS

```sh
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Replace <em>`tailwind.config.js`</em> inner codes with

```
/** @type {import('tailwindcss').Config} \*/
export default {
content: [
"./index.html",
"./src/**/\*.{js,ts,jsx,tsx}",
],
theme: {
extend: {},
},
plugins: [],
}
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

⭐ Star this repo on GitHub — it helps!
