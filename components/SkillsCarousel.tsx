import React, { useState } from "react";
import Image from "next/image";
import { useSwipeable, LEFT, RIGHT } from "react-swipeable";

const SKILL_GROUPS_COUNT = 3;

const Skills = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlers = useSwipeable({
    onSwiped: (eventData) => {
      const { dir } = eventData;

      if (dir === RIGHT) {
        if (currentIndex !== 0) {
          setCurrentIndex((s) => s - 1);
        }
      } else if (dir === LEFT) {
        if (currentIndex !== SKILL_GROUPS_COUNT - 1) {
          setCurrentIndex((s) => s + 1);
        }
      }
    },
  });

  const contentToRender = () => {
    if (currentIndex === 0) {
      return (
        <div id="frontend" className="w-full text-center">
          <h6 className="tracking-widest mb-2">Front End</h6>
          <div className="skills-list py-6">
            <Image
              src="/img/icons/react-logo.svg"
              height={60}
              width={60}
              alt="react"
            />
            <Image
              src="/img/icons/js-logo.svg"
              height={60}
              width={60}
              alt="js"
            />
            <Image
              src="/img/icons/angular-logo.svg"
              height={60}
              width={60}
              alt="angular"
            />
            <Image
              src="/img/icons/jquery-logo.svg"
              height={60}
              width={60}
              alt="jquery"
            />
            <Image
              src="/img/icons/html-logo.svg"
              height={60}
              width={60}
              alt="html"
            />
            <Image
              src="/img/icons/css-logo.svg"
              height={60}
              width={60}
              alt="css"
            />
            <Image
              src="/img/icons/bootstrap-logo.svg"
              height={60}
              width={60}
              alt="bootstrap"
            />
          </div>
        </div>
      );
    } else if (currentIndex === 1) {
      return (
        <div id="backend" className="w-full text-center">
          <h6 className="tracking-widest mb-2">Back End</h6>
          <div className="skills-list py-6">
            <Image
              src="/img/icons/node-logo.svg"
              height={60}
              width={60}
              alt="node"
            />
            <Image
              src="/img/icons/express.svg"
              height={60}
              width={60}
              alt="express"
            />
            <Image
              src="/img/icons/php-logo.svg"
              height={60}
              width={60}
              alt="php"
            />
            <Image
              src="/img/icons/laravel.svg"
              height={60}
              width={60}
              alt="laravel"
            />
            <Image
              src="/img/icons/dotnet-logo.svg"
              height={60}
              width={60}
              alt=".net"
            />
          </div>
        </div>
      );
    }

    return (
      <div id="database" className="w-full text-center">
        <h6 className="tracking-widest mb-2">Database</h6>
        <div className="skills-list py-6">
          <Image
            src="/img/icons/mysql-logo.svg"
            height={60}
            width={60}
            alt="mysql"
          />
          <Image
            src="/img/icons/mongodb-logo.svg"
            height={60}
            width={60}
            alt="mongodb"
          />
          <Image
            src="/img/icons/sqlserver-logo.svg"
            height={60}
            width={60}
            alt="sqlserver"
          />
        </div>
      </div>
    );
  };

  return (
    <div id="skills-car" className="flex mt-12 flex-col" {...handlers}>
      {contentToRender()}
      <div className="w-full text-center">
        <span
          className={`dot ${currentIndex === 0 ? "active" : ""}`}
          onClick={() => setCurrentIndex(0)}
        />
        <span
          className={`dot ${currentIndex === 1 ? "active" : ""}`}
          onClick={() => setCurrentIndex(1)}
        />
        <span
          className={`dot ${currentIndex === 2 ? "active" : ""}`}
          onClick={() => setCurrentIndex(2)}
        />
      </div>
    </div>
  );
};

export default Skills;
