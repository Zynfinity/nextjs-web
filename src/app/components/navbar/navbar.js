"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
const Navbar = () => {
  const divRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleOutsideClick);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleOutsideClick = (event) => {
    let sbar = document.getElementById("sidebar");
    let body = document.getElementsByTagName("body");
    let main = document.getElementsByTagName("main");

    if (divRef.current && !divRef.current.contains(event.target)) {
      if (event.target.id != "bar" && event.target.id != "hamburger") {
        sbar.classList.add("hidden");
        main[0].classList.remove("filter", "blur-md");
        body[0].style.overflow = "auto";
      }
    }
  };

  const handleScroll = () => {
    const header = document.querySelector("header");
    const fixNav = header.offsetTop;
    if (window.pageYOffset > fixNav) {
      header.classList.add("navbar-fixed");
    } else {
      header.classList.remove("navbar-fixed");
    }
  };

  const handleMenu = () => {
    let sbar = document.getElementById("sidebar");
    let body = document.getElementsByTagName("body");
    let main = document.getElementsByTagName("main");
    if (!sbar.classList.contains("hidden")) {
      sbar.classList.add("hidden");
    } else {
      sbar.classList.remove("hidden");
      main[0].classList.add("filter", "blur-md");
      body[0].style.overflow = "hidden";
    }
  };
  return (
    <>
      <div className="container">
        <header className="w-full fixed top-0 left-0 py-2 flex justify-between items-center z-10 lg:justify-end">
          <button
            id="hamburger"
            name="hamburger"
            type="button"
            className="ml-4 p-2 px-3 rounded-md lg:hidden"
            onClick={handleMenu}
          >
            <Image
              id="bar"
              src="/menu.svg"
              alt="My Image"
              width={20}
              height={20}
            />
          </button>
          <div className="p-2 px-3 mr-4 lg:mr-10">
            <Image src="/human.svg" alt="profile" width={20} height={20} />
          </div>
        </header>
      </div>
      <aside
        ref={divRef}
        id="sidebar"
        className="hidden bg-secondary text-white h-screen w-64 fixed top-0 z-10 lg:block lg:fixed transition-all duration-500 ease-in"
      >
        <div className="flex items-center px-6 p-3 border-b border-[#555661]">
          <span className="tracking-widest text-sm font-bold">User</span>
        </div>
        <nav className="mt-4 p-2">
          <Link
            href="/"
            className="block py-2 px-4 text-sm text-white tracking-widest hover:bg-gray-700 hover:rounded-full"
          >
            Home
          </Link>
          <Link
            href="/bot"
            className="block py-2 px-4 text-sm text-white tracking-widest hover:bg-gray-700 hover:rounded-full"
          >
            Bot
          </Link>
          <Link
            href="#"
            className="block py-2 px-4 text-sm text-white tracking-widest hover:bg-gray-700 hover:rounded-full"
          >
            Services
          </Link>
          <Link
            href="#"
            className="block py-2 px-4 text-sm text-white tracking-widest hover:bg-gray-700 hover:rounded-full"
          >
            Contact
          </Link>
        </nav>
      </aside>
    </>
  );
};

export default Navbar;
