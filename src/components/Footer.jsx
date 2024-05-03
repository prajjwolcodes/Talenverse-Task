import React from "react";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsFillHexagonFill } from "react-icons/bs";

const Footer = () => {
  return (
    <footer class="bg-white min-w-[375px] sm:max-w-[768px] sm:relative pl-8 py-8">
      <div class="max-w-screen-xl  mx-auto ">
        <div class="grid grid-cols-1  gap-8 lg:grid-cols-3">
          <div className="">
            <div className="min-w-3/2">
              <div className="flex items-center justify-start">
                <svg
                  width="50px"
                  height="50px"
                  viewBox="-5.76 -5.76 27.52 27.52"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                  className="bi bi-hexagon-half"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke="#CCCCCC"
                    stroke-width="0.288"
                  >
                    <path d="M14 4.577v6.846L8 15V1l6 3.577zM8.5.134a1 1 0 0 0-1 0l-6 3.577a1 1 0 0 0-.5.866v6.846a1 1 0 0 0 .5.866l6 3.577a1 1 0 0 0 1 0l6-3.577a1 1 0 0 0 .5-.866V4.577a1 1 0 0 0-.5-.866L8.5.134z"></path>
                  </g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M14 4.577v6.846L8 15V1l6 3.577zM8.5.134a1 1 0 0 0-1 0l-6 3.577a1 1 0 0 0-.5.866v6.846a1 1 0 0 0 .5.866l6 3.577a1 1 0 0 0 1 0l6-3.577a1 1 0 0 0 .5-.866V4.577a1 1 0 0 0-.5-.866L8.5.134z"></path>
                  </g>
                </svg>
                <h1 className="text-2xl text-black font-bold">Lookscout</h1>
              </div>
              <p class="max-w-xs mt-4 text-md text-gray-600">
                Generate outside the box thinking with the possibility to target
                the low.
              </p>
            </div>
            <div class="flex  items-center sm:absolute sm:bottom-8 mt-4 sm:right-4  justify-evenly text-gray-600">
              <a
                class="hover:opacity-75 text-black sm:px-2"
                href
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook size={25} />
              </a>

              <a
                class="hover:opacity-75 text-black  sm:px-2"
                href
                target="_blank"
                rel="noreferrer"
              >
                <FaGoogle size={20} />
              </a>
              <a
                class="hover:opacity-75 text-black  sm:px-2"
                href
                target="_blank"
                rel="noreferrer"
              >
                <FaApple size={25} />
              </a>
              <a
                class="hover:opacity-75 text-black  sm:px-2"
                href
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram size={25} />
              </a>
            </div>
          </div>
          <div class="grid grid-cols-2  gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p class=" font-semibold text-[18px]">Products</p>
              <nav class="flex flex-col mt-4 space-y-2 text-[16px]  font-medium text-gray-500">
                <a class="hover:opacity-75" href>
                  {" "}
                  Features{" "}
                </a>
                <a class="hover:opacity-75" href>
                  {" "}
                  Solutions{" "}
                </a>
                <a class="hover:opacity-75" href>
                  {" "}
                  Integrations{" "}
                </a>
                <a class="hover:opacity-75" href>
                  {" "}
                  Enterprise{" "}
                </a>
              </nav>
            </div>
            <div>
              <p class="font-medium text-[18px]">Resources</p>
              <nav class="flex flex-col mt-4 space-y-2 text-[16px]  font-medium text-gray-500">
                <a class="hover:opacity-75" href>
                  {" "}
                  Partners{" "}
                </a>
                <a class="hover:opacity-75" href>
                  {" "}
                  Community{" "}
                </a>
                <a class="hover:opacity-75" href>
                  {" "}
                  Developers{" "}
                </a>
                <a class="hover:opacity-75" href>
                  {" "}
                  App{" "}
                </a>
                <a class="hover:opacity-75" href>
                  {" "}
                  Blog{" "}
                </a>
              </nav>
            </div>
            <div>
              <p class="font-medium text-[18px]">Why Choose Us?</p>
              <nav class="flex flex-col mt-4 space-y-2 text-[16px]  font-medium text-gray-500">
                <a class="hover:opacity-75" href>
                  {" "}
                  Channels{" "}
                </a>
                <a class="hover:opacity-75" href>
                  {" "}
                  Scale{" "}
                </a>
                <a class="hover:opacity-75" href>
                  {" "}
                  Watch the Demo{" "}
                </a>
                <a class="hover:opacity-75" href>
                  {" "}
                  Our Competition{" "}
                </a>
              </nav>
            </div>
            <div>
              <p class="font-medium text-[18px]">Company</p>
              <nav class="flex flex-col mt-4 space-y-2 text-[16px] font-medium text-gray-500">
                <a class="hover:opacity-75" href>
                  {" "}
                  About Us{" "}
                </a>
                <a class="hover:opacity-75" href>
                  {" "}
                  News{" "}
                </a>
                <a class="hover:opacity-75" href>
                  {" "}
                  Leadership{" "}
                </a>
                <a class="hover:opacity-75" href>
                  {" "}
                  Media Kit{" "}
                </a>
              </nav>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-8 mb-6">
          <BsFillHexagonFill className="text-blue-600 footerIcon" size={25} />
          <p class="mt-12 text-sm text-gray-800 sm:absolute   left-8">
            © 2024 LookScout. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
