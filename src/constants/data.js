export const navLinks = [
  {
    id: "home", // "id" is used for the "key" prop in the list
    title: "Home", // "title" is used for the text content of the link
    path: "/", // "path" is used for the "to" prop of the link
  },
  {
    id: "about",
    title: "About",
    path: "/about",
    sublinks: [
      {
        id: "purna",
        title: "Purna",
        path: "/about/purna",
      },
      {
        id: "shrestha",
        title: "Shrestha",
        path: "/about/shrestha",
      },
    ],
  },
  {
    id: "contact",
    title: "Contact",
    path: "/contact",
  },
];
