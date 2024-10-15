import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
  const linkHoverClasses = `
    from-white to-gray-300 text-[#2b477d]
  `;
  const linkClasses = `
    flex justify-center font-medium
    w-[175px] rounded-t-[3px] rounded-b-none px-4 py-3 mt-4
    bg-gradient-to-b from-[#9cb0d3] to-[#617598]
    relative min-w-[140px]
    hover:from-white hover:to-gray-300 hover:text-[#2b477d]
    inline-block
  `;

  const subMenuClass = `
    absolute top-full hidden 
    border border-gray-300 rounded 
    w-full group-hover:block rounded-t-[5px]
  `;

  const optionItemClass = `
    flex justify-center
    block px-4 py-3
    bg-primary-navBarItemBgColor 
    hover:bg-white hover:text-[#2b477d]
    text-white
    rounded-sm border-b border-black-300
  `;

  const navbarItem = [
    {
      text: 'Clinical',
      link: '#',
      subMenuFlag: false,
      subMenuItem: [],
      defaultHover: true,
    },
    {
      text: 'Customer Service',
      link: '#',
      subMenuFlag: false,
      subMenuItem: [],
      defaultHover: false,
    },
    {
      text: 'Patient Administration',
      link: '#',
      subMenuFlag: false,
      subMenuItem: [],
      defaultHover: false,
    },
    {
      text: 'Adequest',
      link: '#',
      subMenuFlag: false,
      subMenuItem: [],
    },
    {
      text: 'User Details',
      link: '#',
      subMenuFlag: false,
      subMenuItem: [],
      defaultHover: false,
    },
    {
      text: 'More',
      link: '#',
      subMenuFlag: true,
      defaultHover: false,
      subMenuItem: [
        {
          text: 'User',
          link: '#',
          subMenuFlag: false,
        },
        {
          text: 'Patient',
          link: '#',
          subMenuFlag: false,
        },
        {
          text: 'Doctor',
          link: '#',
          subMenuFlag: false,
        },
      ],
    },
  ];

  return (
    <div className="flex justify-center gap-1 text-white text-sm bg-primary-navBarBgColor">
      {navbarItem.map((item, index) => {
        return (
          <div key={index} className="relative group">
            {item.subMenuFlag ? (
              <div className={`${linkClasses} ${item.defaultHover ? linkHoverClasses : ''}`}>
                <Link to={item.link} className="flex items-center w-full">
                  {item.text}
                  <img src="/src/svg/drop-down.png" className="h-4 ml-2 w-4" alt="dropdown" />
                </Link>
                <div className={subMenuClass}>
                  {item.subMenuItem.map((ele, subIndex) => (
                    <Link to={ele.link} className={optionItemClass} key={subIndex}>
                      {ele.text}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <div className={`${linkClasses} ${item.defaultHover ? linkHoverClasses : ''}`}>
                <Link to={item.link} className="w-full text-center">
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
