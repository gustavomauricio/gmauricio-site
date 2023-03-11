import React, { useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import clsx from "clsx";

const navigationInitial = [
  { name: "Home", href: "#home", current: true },
  { name: "Overview", href: "#overview", current: false },
  { name: "Skills", href: "#skills", current: false },
  { name: "Employment", href: "#employment", current: false },
  { name: "Contact", href: "#contact", current: false },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [navigation, setNavigation] = useState(navigationInitial);

  const handleAnchorClick = (
    e: any,
    identifier: string,
    behavior: ScrollBehavior = "smooth"
  ) => {
    e.preventDefault();

    const element = document.querySelector(identifier);
    element?.scrollIntoView({
      behavior,
    });
  };

  useEffect(() => {
    const onScroll = (e: any) => {
      const currentScrollY = window.scrollY;

      if (currentScrollY >= 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // scroll is at the bottom
      if (currentScrollY + window.innerHeight === document.body.offsetHeight) {
        setNavigation((nav) =>
          nav.map((nav) => {
            return {
              ...nav,
              current: nav.href === "#contact",
            };
          })
        );

        return;
      }

      const sectionElements = document.querySelectorAll("section");

      sectionElements.forEach((elem) => {
        if (
          currentScrollY > elem.offsetTop - 1 &&
          currentScrollY < elem.offsetTop + elem.offsetHeight
        ) {
          const sectionID = elem.getAttribute("id") ?? "";
          setNavigation((nav) =>
            nav.map((nav) => {
              return {
                ...nav,
                current: nav.href === `#${sectionID}`,
              };
            })
          );
        }
      });
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Popover
      as="nav"
      className={clsx(
        isScrolled ? "dark:bg-[#444]" : "dark:bg-black",
        "text-black dark:text-white bg-white ",
        "fixed top-0 right-0 left-0 z-40 transition-colors duration-500"
      )}
    >
      {({ open, close }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-14">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Popover.Button className="inline-flex items-center justify-center p-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    // cross icon
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    // hamburger icon
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </Popover.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={(e: any) => {
                          handleAnchorClick(e, item.href);
                        }}
                        className={clsx(
                          item.current
                            ? "text-cyan-500"
                            : "hover:text-cyan-500",
                          "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-500"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Transition
            as={React.Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel
              className={clsx(
                isScrolled ? "dark:bg-[#444] fixed" : "dark:bg-black absolute",
                "text-black dark:text-white bg-white",
                "sm:hidden absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              )}
            >
              <div className="flex justify-end">
                <Popover.Button className="inline-flex items-center justify-center p-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Close menu</span>
                  {/* cross icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </Popover.Button>
              </div>
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e: any) => {
                      close();
                      handleAnchorClick(e, item.href);
                    }}
                    className={clsx(
                      item.current ? "text-cyan-500" : "hover:text-cyan-500",
                      "block px-3 py-2 rounded-md text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default Navbar;
