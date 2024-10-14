import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const linkClasses =
    "flex justify-center font-medium hover:bg-white hover:text-black gap-2 bg-primary-navBarItemBgColor px-4 py-2 rounded-md";

  const navbarItem = [
    {
      text: "Clinical",
      link: "#",
      subMenuFlag: false,
      subMenuItem: [],
    },
    {
      text: "Customer Service",
      link: "#",
      subMenuFlag: false,
      subMenuItem: [],
    },
    {
      text: "Patient Administration",
      link: "#",
      subMenuFlag: false,
      subMenuItem: [],
    },
    {
      text: "Adequest",
      link: "#",
      subMenuFlag: false,
      subMenuItem: [],
    },
    {
      text: "User Details",
      link: "#",
      subMenuFlag: false,
      subMenuItem: [],
    },
    {
      text: "More",
      link: "#",
      subMenuFlag: true,
      subMenuItem: [],
    },
  ];
  return (
    <div className="flex justify-center gap-4 text-white text-sm bg-primary-navBarBgColor p-4">
      {navbarItem.map((item, index) => {
        return (
          <div>
            {item.subMenuFlag ? (
              <div className={linkClasses}>
                <Link className={item.linkDesign} key={index} href="styles.css">
                  {item.text}
                </Link>
                <img
                  src="/src/svg/drop-down.png"
                  className="h-4 w-4 mt-1"
                ></img>
              </div>
            ) : (
              <div className={linkClasses}>
                <Link className={item.linkDesign} key={index} href="styles.css">
                  {item.text}
                </Link>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default NavBar;
