import React from "react";
import { GiForest } from "react-icons/gi";
import { Link } from "react-router-dom";
import footerBg from "../../../assets/wave.svg";

const Footer = () => {
  return (
    <div className="bg-white dark:bg-gray-900 pt-4 lg:pt-20">
      <div
        className="p-4 bg-white sm:p-6 dark:bg-gray-900"
        style={{
          backgroundImage: `url(${footerBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <footer className="container mx-auto">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <div className="ml-3 transition-colors duration-300 transform text-teal-500 hover:text-slate-800 dark:text-success dark:hover:text-white">
                <Link
                  to={"/"}
                  className="flex align-items-center gap-2 font-extrabold content-evenly items-center"
                >
                  <GiForest className="text-5xl md:text-6xl "></GiForest>
                  <p className="flex flex-col align-items-center md:text-2xl">
                    <span className="text-2xl md:text-3xl pb-0">Nexa</span>
                    <span className="pt-0 text-xl md:text-2xl">Forest</span>
                  </p>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Pages
                </h2>
                <ul className="text-gray-600 dark:text-gray-400">
                  <li className="mb-4">
                    <Link to={"/"} className="hover:underline">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to={"/all-services"} className="hover:underline">
                      All Service
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Follow us
                </h2>
                <ul className="text-gray-600 dark:text-gray-400">
                  <li className="mb-4">
                    <a
                      href="https://github.com/arifuddinraihan"
                      className="hover:underline "
                    >
                      My Github
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://discordapp.com/users/MdArifRaihan#9438"
                      className="hover:underline"
                    >
                      Join me in Discord
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  This Website Resources
                </h2>
                <ul className="text-gray-600 dark:text-gray-400">
                  <li className="mb-4">
                    <a
                      href="https://tailwindcss.com/"
                      className="hover:underline"
                    >
                      Tailwind CSS
                    </a>
                  </li>
                  <li>
                    <a href="https://merakiui.com/" className="hover:underline">
                      MerakiUI
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 text-left dark:text-gray-400">
              © 2022<p className="hover:underline">NexaForest</p> All Rights
              Reserved
            </span>
            <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
              <a
                href="https://www.facebook.com/mdarifuddinraihan"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Facebook page</span>
              </a>
              <a
                href="https://twitter.com/MdArifUddinRai1"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
                <span className="sr-only">Twitter page</span>
              </a>
              <a
                href="https://github.com/arifuddinraihan"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">GitHub account</span>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
