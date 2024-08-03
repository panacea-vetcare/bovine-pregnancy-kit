"use client";
import Image from "next/image";
import Link from "next/link";
import cownav from "public/cow-face.svg";
import { useEffect } from "react";

export default function Navbar() {
  useEffect(() => {
    var lastScrollTop = 0;

    window.addEventListener("scroll", (event) => {
      var st = window.scrollY || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
      if (st > lastScrollTop) {
      } else if (st < lastScrollTop) {
        if (window.location.href.split("#").length > 1) {
          history.replaceState(
            {},
            document.title,
            window.location.href.split("#")[0]
          );
        }
      }
      lastScrollTop = st <= 0 ? 0 : st;
    });
  }, []);

  return (
    <nav className="fixed h-12 bg-green-900/50 top-0 left-0 w-screen flex justify-between items-center pr-1 md:pr-4 pl-1 md:pl-3 z-50">
      <Link
        href="#"
        className="h-full flex items-center justify-center gap-1 links text-xl text-"
      >
        <Image
          src={cownav}
          alt="home"
          height={40}
          className="text-white"
        ></Image>
        Home
      </Link>
      <div className="flex items-center justify-center gap-4 pr-5">
        <Link href="#about" className="links">
          About
        </Link>
        <Link href="#contactUs" className="links">
          Contact Us
        </Link>
      </div>
    </nav>
  );
}
