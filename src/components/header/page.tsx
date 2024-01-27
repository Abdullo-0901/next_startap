"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { MdOutlineAccountCircle } from "react-icons/md";
import { FaRegBell } from "react-icons/fa6";
import Link from "next/link";

const HeaderPage = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${scroll && "bg-[#E10856] shadow-lg "}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <Image alt="logo" src={"/logo.svg"} width={40} height={40} />
        <ul className="space-x-4 hidden md:flex ">
          <li className="navlink">Home</li>
          <li className="navlink">Movies</li>
          <li className="navlink">Tv Shows</li>
          <li className="navlink">News</li>
          <li className="navlink">Popular</li>
        </ul>
      </div>
      <div className="flex items-center space-x-4 text-sm font-light ">
        <CiSearch className="h-6 w-6 cursor-pointer" />
        <p className="hidden lg:inline">Keeds</p>
        <FaRegBell className="h-6 w-6 cursor-pointer" />
        <Link href={"/acount"}>
          <Image alt="logo" src={"/acount.svg"} width={40} height={40} />
        </Link>
      </div>
    </header>
  );
};

export default HeaderPage;
