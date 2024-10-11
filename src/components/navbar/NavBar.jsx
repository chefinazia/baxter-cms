import React from "react";

const linkClasses =
  "flex justify-center font-medium hover:bg-white hover:text-black gap-2 bg-primary-navBarItemBgColor px-4 py-2 rounded-md";

const navbarItem = [
  {
    text: "Clinical",
    link: "#",
    linkDesign: linkClasses,
  },
  {
    text: "Customer Service",
    link: "#",
    linkDesign: linkClasses,
  },
  {
    text: "Patient Administration",
    link: "#",
    linkDesign: linkClasses,
  },
  {
    text: "Adequest",
    link: "#",
    linkDesign: linkClasses,
  },
  {
    text: "User Details",
    link: "#",
    linkDesign: linkClasses,
  },
];

const NavBar = () => {
  return (
    <div className="flex justify-center gap-4 text-white text-sm bg-primary-navBarBgColor p-4">
      {navbarItem.map((item) => {
        return (
          <a href={item.link} className={item.linkDesign}>
            {item.text}
          </a>
        );
      })}

      <a href="#" className={linkClasses}>
        More
        <span>
          <img src="/src/svg/drop-down.png" className="h-4 w-4 mt-1"></img>
        </span>
      </a>
    </div>
  );
};

export default NavBar;
