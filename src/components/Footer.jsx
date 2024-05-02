import React from "react";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsFillHexagonFill } from "react-icons/bs";

const Footer = () => {
    return (
        <footer className="bg-white max-w-full pl-8 py-8">
            <div className="max-w-screen-xl mx-auto ">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div>
                        <div classNameName="flex items-center justify-start">
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
                            <h1 classNameName="text-2xl text-black font-bold">Lookscout</h1>
                        </div>

                        <p className="max-w-xs mt-4 text-md text-gray-600">
                            Generate outside the box thinking with the possibility to target
                            the low.
                        </p>
                        <div className="flex mt-8 items-center gap-8 text-gray-600">
                            <a
                                className="hover:opacity-75 text-black"
                                href
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaFacebook size={25} />
                            </a>

                            <a
                                className="hover:opacity-75 text-black"
                                href
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaGoogle size={20} />
                            </a>
                            <a
                                className="hover:opacity-75 text-black"
                                href
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaApple size={25} />
                            </a>
                            <a
                                className="hover:opacity-75 text-black"
                                href
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaInstagram size={25} />
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-2  gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
                        <div>
                            <p className=" font-semibold text-[18px]">Products</p>
                            <nav className="flex flex-col mt-4 space-y-2 text-[16px]  font-medium text-gray-500">
                                <a className="hover:opacity-75" href>

                                    Features
                                </a>
                                <a className="hover:opacity-75" href>

                                    Solutions
                                </a>
                                <a className="hover:opacity-75" href>

                                    Integrations
                                </a>
                                <a className="hover:opacity-75" href>
                                    Enterprise
                                </a>
                            </nav>
                        </div>
                        <div>
                            <p className="font-medium text-[18px]">Resources</p>
                            <nav className="flex flex-col mt-4 space-y-2 text-[16px]  font-medium text-gray-500">
                                <a className="hover:opacity-75" href>

                                    Partners
                                </a>
                                <a className="hover:opacity-75" href>

                                    Community
                                </a>
                                <a className="hover:opacity-75" href>

                                    Developers
                                </a>
                                <a className="hover:opacity-75" href>

                                    App
                                </a>
                                <a className="hover:opacity-75" href>

                                    Blog
                                </a>
                            </nav>
                        </div>
                        <div>
                            <p className="font-medium text-[18px]">Why Choose Us?</p>
                            <nav className="flex flex-col mt-4 space-y-2 text-[16px]  font-medium text-gray-500">
                                <a className="hover:opacity-75" href>

                                    Channels
                                </a>
                                <a className="hover:opacity-75" href>

                                    Scale
                                </a>
                                <a className="hover:opacity-75" href>

                                    Watch the Demo
                                </a>
                                <a className="hover:opacity-75" href>

                                    Our Competition
                                </a>
                            </nav>
                        </div>
                        <div>
                            <p className="font-medium text-[18px]">Company</p>
                            <nav className="flex flex-col mt-4 space-y-2 text-[16px] font-medium text-gray-500">
                                <a className="hover:opacity-75" href>

                                    About Us
                                </a>
                                <a className="hover:opacity-75" href>

                                    News
                                </a>
                                <a className="hover:opacity-75" href>

                                    Leadership
                                </a>
                                <a className="hover:opacity-75" href>

                                    Media Kit
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center mt-8">
                    <BsFillHexagonFill className="text-blue-600 footerIcon" size={25} />
                    <p className="mt-4 text-sm text-gray-800">
                        © 2024 LookScout. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;