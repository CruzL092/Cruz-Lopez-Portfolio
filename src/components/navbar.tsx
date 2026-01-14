"use client";
import Link from "next/link";
import { items } from "../data/Nav";
import { useRouter, usePathname } from "next/navigation";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const handleMobileMenu = () => {
    setOpenMobileMenu(!openMobileMenu);
  };

  const pathname = usePathname();
  const router = useRouter();

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    target?: string,
  ) => {
    e.preventDefault();

    if (!target) {
      if (pathname !== "/") {
        router.push("/");
      }

      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);

      return;
    }

    // Scroll to section
    if (pathname === "/") {
      const el = document.getElementById(target);
      el?.scrollIntoView({ behavior: "smooth" });
      return;
    }

    router.push(`/#${target}`);
    setTimeout(() => {
      const el = document.getElementById(target);
      el?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="sticky top-0 z-50 bg-white w-full h-20 drop-shadow-md drop-shadow-black font-sans">
      <div className="flex h-full items-center text-center text-2xl md:text-3xl lg:text-3xl font-bold text-[#635656]">
        <div className="flex flex-1 ml-5 lg:ml-10">
          <Link
            href="/#"
            className="scroll-mt-20 bg-linear-to-r from-[#635656] to-[#635656] hover:from-[#4DB1B1] hover:via-[#90dfdf] hover:to-[#90dfdf] bg-clip-text text-transparent"
            onClick={(e) => handleNavigation(e)}
          >
            Cruz Lopez
          </Link>
        </div>
        <FaBars
          className="mr-[7%] text-[#635656] text-3xl lg:hidden"
          onClick={handleMobileMenu}
        />
        <div className="hidden lg:flex flex-1 justify-end">
          {items.map((item, index) => {
            return (
              <Link
                key={index}
                href={item.link}
                onClick={
                  item.scrollToId
                    ? (e) => handleNavigation(e, item.scrollToId)
                    : undefined
                }
                target={item.newTab ? "_blank" : "_self"}
                rel={item.newTab ? "noopener noreferrer" : ""}
                className="mr-20 bg-linear-to-r from-[#635656] to-[#635656] hover:from-[#4DB1B1] hover:via-[#90dfdf] hover:to-[#90dfdf] bg-clip-text text-transparent"
              >
                {item.name}
              </Link>
            );
          })}
        </div>
        {openMobileMenu && (
          <div
            className={`lg:hidden bg-white absolute top-full w-full border-t-2 border-[rgba(19,19,19,0.5)] text-[#635656] flex flex-col`}
          >
            {items.map((item, index) => {
              return (
                <Link
                  key={index}
                  href={item.link}
                  onClick={
                    item.scrollToId
                      ? (e) => handleNavigation(e, item.scrollToId)
                      : undefined
                  }
                  target={item.newTab ? "_blank" : "_self"}
                  rel={item.newTab ? "noopener noreferrer" : ""}
                  className="pb-2 mt-1"
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
