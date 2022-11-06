import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import {
  ArrowCircleRightIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/outline";

import Navbar from "components/Navbar";
import SubmitForm from "components/SubmitForm";
import Footer from "components/Footer";
import { EMPLOYMENT_HISTORY, NAME_FINAL } from "../constants";

const Home: NextPage = () => {
  const [theme, setTheme] = useState("dark");
  const [name, setName] = useState("");

  useEffect(() => {
    for (let i = 0; i <= NAME_FINAL.length; i++) {
      // Slices string from 0 to current iteration
      const nameSlice = NAME_FINAL.slice(0, i);

      setTimeout(function () {
        setName(nameSlice);
      }, i * 80);
    }
  }, []);

  return (
    <div className={theme}>
      <Head>
        {/* <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />*/}

        <title>Gustavo Maurício - Developer</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />

      <main className=" dark:text-[#999] bg-[#f2f4f5] transition-all duration-500">
        <button
          className="fixed bottom-0 right-0 -translate-x-8 -translate-y-8 bg-[#111] dark:bg-[#999] text-white dark:text-white rounded-full p-2"
          onClick={() =>
            theme === "dark" ? setTheme("light") : setTheme("dark")
          }
        >
          {theme === "dark" ? (
            <SunIcon height={32} />
          ) : (
            <MoonIcon height={32} />
          )}
        </button>
        <section
          id="home"
          className="text-white flex items-center h-screen md:h-[70vh] bg-gradient-to-b from-stone-900 via-cyan-900 dark:to-[#111] to-gray-200"
        >
          <div className="container max-w-6xl px-4 mx-auto">
            <div className="flex justify-center gap-7 flex-col md:flex-row">
              <div className="flex justify-center py-2 w-full sm:w-1/4 sm:justify-end">
                <Image
                  className="avatar"
                  height={140}
                  width={140}
                  src="/img/profile.png"
                  alt="avatar"
                />
              </div>
              <div className="flex items-center py-2 w-full sm:w-3/4">
                <div className="tracking-widest">
                  <h3 className="uppercase text-3xl mb-2" id="name">
                    {name}
                  </h3>
                  <h5 className="uppercase text-xl">Software Engineer</h5>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="py-24 bg-gray-200 dark:bg-[#111] border-b-[1px] boder-[#888] dark:border-[#222]"
          id="overview"
        >
          <div className="container max-w-6xl px-4 mx-auto">
            <div>
              <h5 className="tracking-widest uppercase text-center text-xl dark:text-white">
                Overview
              </h5>
              <hr className="mb-10" />
              <p className="text-center mb-4">
                I'm a Fullstack Web Developer who is addicted to learning and
                building new stuff.
              </p>
              <p className="text-center">
                From a young age I've always been fascinated by computers and
                how things work behind the scenes. I'm also a passionate problem
                solver, math lover and logical person. Those qualities and
                traits together made me follow this developer journey.
              </p>
            </div>
          </div>
        </section>
        <section
          className="py-24 dark:bg-black border-b-[1px] boder-[#888] dark:border-[#222]"
          id="skills"
        >
          <div className="container max-w-6xl px-4 mx-auto">
            <h5 className="tracking-widest uppercase text-center text-xl dark:text-white">
              Skills
            </h5>
            <hr className="mb-10 border-cyan-600" />
            <p className="text-center">
              I have a strong preference for the client-side development of an
              application, although I have always been kind of full-stack, and I
              consider it extremely important to understand an entire system end
              to end. I work mostly with React on the frontend, also built a few
              pet projects with Vue and Svelte.
            </p>
            <ul className="grid grid-cols-3 gap-3 max-w-sm mt-12 px-4 sm:px-0 mx-auto dark:text-[#FAFAFA]">
              <li>
                <div className="flex items-center gap-2">
                  <ArrowCircleRightIcon className="text-cyan-600" height={14} />
                  JavaScript
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <ArrowCircleRightIcon className="text-cyan-600" height={14} />
                  React
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <ArrowCircleRightIcon className="text-cyan-600" height={14} />
                  Node
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <ArrowCircleRightIcon className="text-cyan-600" height={14} />
                  Nextjs
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <ArrowCircleRightIcon className="text-cyan-600" height={14} />
                  Typescript
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <ArrowCircleRightIcon className="text-cyan-600" height={14} />
                  Tailwind
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section
          className="py-24 bg-gray-200 dark:bg-[#111] border-b-[1px] boder-[#888] dark:border-[#222]"
          id="employment"
        >
          <div className="container max-w-6xl px-4 mx-auto">
            <div className="w-full">
              <h5 className="tracking-widest uppercase text-center text-xl dark:text-white">
                Employment
              </h5>
              <hr className="mb-10" />
              {EMPLOYMENT_HISTORY.map((entry) => (
                <div className="py-4" key={entry.company}>
                  <div className="flex justify-between mb-1">
                    <h6 className="uppercase tracking-wide font-semibold dark:text-white">
                      {entry.company}
                    </h6>
                    <h6 className="text-sm dark:theme-white">{entry.date}</h6>
                  </div>
                  <p className="text-xs">{entry.role}</p>
                  <hr className="opacity-20 max-w-full border-[#555]" />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section
          className="py-24 dark:bg-black border-b-[1px] boder-[#888] dark:border-[#222]"
          id="contact"
        >
          <div className="container max-w-6xl px-4 mx-auto">
            <div className="w-full mb-3">
              <h5 className="tracking-widest uppercase text-center text-xl dark:text-white">
                Contact
              </h5>
              <hr className="mb-10 border-cyan-600" />
              <p className="text-center md:px-12 mb-8">
                Although I’m not currently looking for any new opportunities, my
                inbox is always open. Whether you have a question or just want
                to say hi, I’ll try my best to get back to you!
              </p>
              <SubmitForm />
            </div>
          </div>
        </section>
      </main>
      <Footer className="dark:bg-[#111]" />
    </div>
  );
};

export default Home;
