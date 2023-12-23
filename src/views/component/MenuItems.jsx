const MenuItems = [
  {
    name: "Home",
    route: "/",
    subMenu: false,
  },
  {
    name: "About",
    route: "/about",
    subMenu: false,
  },
  {
    name: "Projects",
    route: "/projects",
    subMenu: false,
  },
  {
    name: "Language",
    route: "",
    subMenu: [
        {
            lg: "en",
            country: "English"
        },
        {
            lg: "id",
            country: "Indonesia"
        }
    ],
  },
];

export default MenuItems;
