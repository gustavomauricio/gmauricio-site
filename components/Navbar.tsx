import React, { useEffect, useState } from "react";
import cn from "classnames";

import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const navigationInitial = [
  { name: "Home", href: "#home", current: true },
  { name: "Overview", href: "#overview", current: false },
  { name: "Skills", href: "#skills", current: false },
  { name: "Employment", href: "#employment", current: false },
  { name: "Contact", href: "#contact", current: false },
];

const NavbarTW = () => {
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

      if (currentScrollY >= 60) {
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
    <Disclosure
      as="nav"
      className={cn(
        isScrolled
          ? "text-black bg-white"
          : "text-white bg-black bg-opacity-70",
        "fixed top-0 right-0 left-0 z-40"
      )}
    >
      {({ open, close }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-14">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                {/* <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                    alt="Workflow"
                  />
                </div> */}
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={(e: any) => {
                          handleAnchorClick(e, item.href);
                        }}
                        className={cn(
                          item.current
                            ? "text-pink-400"
                            : "hover:bg-gray-700 hover:text-white",
                          "px-3 py-2 rounded-md text-sm font-medium"
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

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  onClick={(e: any) => {
                    close();
                    handleAnchorClick(e, item.href);
                  }}
                  className={cn(
                    item.current
                      ? "text-pink-400"
                      : "hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default NavbarTW;
