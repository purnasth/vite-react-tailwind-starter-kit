# React + Vite

This template provides a stater setup to get React working in Vite with TailwindCss installed.

## Codes Used

# Install vite + react

npm create vite@latest ./
Select a framework: React
Select a variant: JavaScript + SWC

npm install
npm run dev

## Install tailwindCss

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# replace tailwind.config.js inner codes with

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

# Paste these lines in index.css
@tailwind base;
@tailwind components;
@tailwind utilities;


## Import react icons
npm install react-icons --save

## Import axios
npm install axios