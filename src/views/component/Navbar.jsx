import MenuItems from "./MenuItems";
import { Navigate } from "react-router-dom";
import LinkButton from "./LinkButton";
import { useState, useEffect } from "react";
import LocalStorage from "./LocalStorage";
import { NavLink } from "react-router-dom";

const Navbar = ({ selectLanguage }) => {
  const [language, setLanguage] = useState("");
  const [activeMenu, setActive] = useState(false);
  const [activeItemMenu, setActivIetemMenu] = useState(false);

  useEffect(() => {
    const storedLanguage = LocalStorage.getData("language");
    setLanguage(storedLanguage);
  }, [language]);

  const handleClickLanguage = (language) => {
    setLanguage(language);
    selectLanguage(language);
  };

  return (
    <>
      <nav className="fixed font-poppins w-full flex justify-center px-4 hp:px-6 bg-sr-black border-b border-gray-600 z-50 hp:border-none">
        <div className="flex flex-row justify-between items-center h-[80px] hp:h-[100px] max-w-[1260px] w-full">
          <h1 className="text-xl hp:text-2xl text-white font-semibold">
            Fadel<span className="text-pr-lavender">.</span>
          </h1>

          <div className="ipad:hidden relative">
            <div
              onClick={() => {
                setActive(!activeMenu), setActivIetemMenu(false);
              }}
              className="h-full flex items-center text-white text-3xl"
            >
              <ion-icon
                name={`${activeMenu ? "close-outline" : "menu-outline"}`}
              ></ion-icon>
            </div>
          </div>

          <div className="hidden ipad:flex flex-row items-center gap-8 h-full">
            <div className="flex flex-row text-white h-full items-center gap-8">
              {MenuItems.map((menu, index) => (
                <div className="relative h-full" key={index}>
                  {!menu.subMenu && (
                    <NavLink
                      to={menu.route}
                      className={`group px-2 h-full flex items-center relative hover:text-pr-lavender cursor-pointer `}
                    >
                      <div className="flex flex-row items-center gap-2">
                        <span className="block text-base">{menu.name}</span>
                      </div>
                    </NavLink>
                  )}

                  {menu?.subMenu && (
                    <div
                      className={`group px-2 h-full flex items-center relative hover:text-pr-lavender cursor-pointer `}
                    >
                      <div className="flex flex-row items-center gap-2">
                        <span className="block text-base">{menu.name}</span>

                        <span className="text-2xl flex items-center group-hover:rotate-180 ease-in-out duration-300">
                          <ion-icon
                            className="block"
                            name="chevron-down-outline"
                          ></ion-icon>
                        </span>
                      </div>

                      <ul className="absolute group-hover:block w-48 right-0 hover:block hidden pt-4 top-24">
                        <div className="bg-sr-black rounded-md overflow-hidden">
                          {menu.subMenu.map((sub, index) => (
                            <li
                              onClick={() => handleClickLanguage(sub.lg)}
                              className={`w-full px-5 text-white py-4 hover:bg-qt-black flex flex-row justify-between ${
                                language == sub.lg
                                  ? "active-language"
                                  : "non-active-language"
                              }`}
                              key={index}
                            >
                              <span className="text-base">{sub.country}</span>
                              <span className="flex items-center text-2xl">
                                <ion-icon
                                  className="block"
                                  name={`${
                                    language == sub.lg
                                      ? "checkmark-circle-outline"
                                      : "ellipse-outline"
                                  }`}
                                ></ion-icon>
                              </span>
                            </li>
                          ))}
                        </div>
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <LinkButton
              url="#contactMe"
              className="w-fit hover:bg-pr-lavender hover:text-white"
              variant="outline-lavender"
            >
              <span className="text-base font-semibold block">Contact Me</span>
            </LinkButton>
          </div>
        </div>
      </nav>

      <div
        className={` ${
          activeMenu ? "block" : "hidden"
        } font-poppins ipad:hidden right-0 mr-0 hp:mr-6 mt-0 hp:mt-28 min-h-screen hp:min-h-fit fixed block bg-sr-black pt-[88px] hp:pt-0 text-white rounded-md overflow-hidden w-full hp:w-80 z-40`}
      >
        {MenuItems.map((menu, index) => (
          <div className="fit" key={index}>
            {!menu.subMenu && (
              <NavLink to={menu.route} className="cursor-pointer">
                <div className="px-4 hp:px-6 py-5 flex flex-row justify-between w-full items-center gap-2 hover:text-pr-lavender">
                  <span className="block text-base">{menu.name}</span>
                </div>
              </NavLink>
            )}

            {menu?.subMenu && (
              <div
                className="cursor-pointer"
                onClick={() => setActivIetemMenu(!activeItemMenu)}
              >
                <div className="px-4 hp:px-6 py-5 flex flex-row justify-between w-full items-center gap-2 hover:text-pr-lavender">
                  <span className="block text-base">{menu.name}</span>

                  <span
                    className={`pr-2 text-2xl flex items-center ease-in-out duration-300 ${
                      activeItemMenu ? "rotate-180" : ""
                    }`}
                  >
                    <ion-icon
                      className="block"
                      name="chevron-down-outline"
                    ></ion-icon>
                  </span>
                </div>

                <div className={`px-4 hp:px-6 ${activeItemMenu ? "block" : "hidden"}`}>
                  <div className="w-full bg-tr-black rounded-md">
                    {menu.subMenu.map((sub, index) => (
                      <div
                        onClick={() => {
                          handleClickLanguage(sub.lg),
                            setActive(!activeMenu),
                            setActivIetemMenu(!activeItemMenu);
                        }}
                        className={`px-4 py-4 text-lg flex items-center justify-between ${
                          language == sub.lg
                            ? "active-language"
                            : "non-active-language"
                        }`}
                        key={index}
                      >
                        <span className="text-base">{sub.country}</span>
                        <span className="flex items-center text-2xl">
                          <ion-icon
                            className="block"
                            name={`${
                              language == sub.lg
                                ? "checkmark-circle-outline"
                                : "ellipse-outline"
                            }`}
                          ></ion-icon>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              // <p>tes</p>
            )}
          </div>
        ))}
        <div className="px-4 hp:px-6 py-5 w-full">
          <LinkButton
            url="#contactMe"
            handleClick={() => setActive(false)}
            className="w-fit hover:bg-pr-lavender hover:text-white"
            variant="outline-lavender"
          >
            <span className="text-base font-semibold block">Contact Me</span>
          </LinkButton>
        </div>
      </div>
    </>
  );
};

export default Navbar;
