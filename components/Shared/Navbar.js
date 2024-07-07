/* eslint-disable react/no-children-prop */
"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import './Navbar.css'
import logo from "@/assets/logo.png";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";

import AU from '@/assets/flag/australia.svg'
import CA from '@/assets/flag/canada.svg'
import IE from '@/assets/flag/ireland.svg'
import GB from '@/assets/flag/uk.svg'
import US from '@/assets/flag/usa.svg'


const navItems = [
  {
    label: "Study abroad steps",
    link: "/study-abroad-steps",
  },
  {
    label: "Study destinations",
    link: "/study-destinations",
    children: [
      {
        label: "Study in Australia",
        link: "/study-destinations/study-in-australia",
        iconImage: AU
      },
      {
        label: "Study in Canada",
        link: "/study-destinations/study-in-canada",
        iconImage: CA
      },
      {
        label: "Study in Ireland",
        link: "/study-destinations/study-in-ireland",
        iconImage: IE
      },
      {
        label: "Study in UK",
        link: "/study-destinations/study-in-uk",
        iconImage: GB
      },
      {
        label: "Study in USA",
        link: "/study-destinations/study-in-usa",
        iconImage: US
      },
    ],
  },
  {
    label: "Find a course",
    link: "/find-a-course",

  },
  {
    label: "IELTS",
    children: [
      {
        label: "Study in Australia",
        link: "/study-in-australia",
      },
      {
        label: "Study in Canada",
        link: "/study-in-canada",
      },
      {
        label: "Study in Ireland",
        link: "/study-in-ireland",
      },
      {
        label: "Study in UK",
        link: "/study-in-uk",
      },
      {
        label: "Study in USA",
        link: "/study-in-usa",
      },
    ],
  },
  {
    label: "Blog",
    link: "/blog",

  },
];

export default function Navbar() {
  const [animationParent] = useAutoAnimate();
  const [isSideMenuOpen, setSideMenu] = useState(false);
  const [token, setToken] = useState(null)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const localToken = localStorage.getItem("token");
      setToken(localToken);
    }

    const handleStorageChange = () => {
      const localToken = localStorage.getItem("token");
      setToken(localToken);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  function handleLogOut() {
    localStorage.removeItem("token");
    setToken(null);
    window.dispatchEvent(new Event("storage"));
  }

  function openSideMenu() {
    setSideMenu(true);
  }

  function closeSideMenu() {
    setSideMenu(false);
  }



  return (
    <div className="mx-auto flex w-full max-w-7xl justify-between px-4 py-5 text-sm z-20 border-y-2">
      <section ref={animationParent} className="flex items-center z-20" style={{ gap: "10rem" }}>
        {/* Logo */}
        <div>
          <Link href="/">
            <Image
              src={logo}
              width={100}
              height={50}
              alt="Picture of the author"
            />
          </Link>
        </div>

        {/* Mobile nav */}
        {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}

        {/* Desktop nav */}
        <div className="hidden md:flex items-center transition-all" style={{ gap: "3rem" }}>
          {navItems.map((d, i) => (
            <div key={i} className="relative group">
              <p
                className="flex cursor-pointer items-center gap-2 text-black font-bold group-hover:text-black"
                onClick={() => d.children && setSideMenu(true)}
              >
                <Link href={`${d.link}`} className="NaVLabel"><span>{d.label}</span></Link>
                {d.children && (
                  <IoIosArrowDown className="forIconInNav rotate-180 transition-all group-hover:rotate-0" />
                )}
              </p>

              {/* Dropdown */}
              {d.children && (
                <div>
                  <div className="absolute right-0 top-5.9 left-3 hidden w-auto flex-col gap-1 rounded-lg py-3 shadow-md transition-all group-hover:flex z-10 text-black font-bold bg-white forFont" style={{ width: "fit-content" }}>
                    {d.children.map((ch, index) => (
                      <Link
                        key={index}
                        href={ch.link ?? "#"}
                        className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-black font-bold hover:text-black "
                      >
                        {/* Image */}
                        {ch.iconImage && (
                          <Image
                            src={ch.iconImage.src}
                            alt="item-icon"
                            width={20}
                            height={20}
                          />
                        )}
                        {/* Item */}
                        <span className="whitespace-nowrap pl-3">{ch.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        {/* End of desktop nav */}
      </section>

      {/* Right side */}
      <section className="hidden md:flex items-center gap-8">
        <button className="text-neutral-400 transition-all hover:text-black/90 text-black font-bold ">
          {token ?
            <Link href='/' onClick={handleLogOut}>LogOut</Link> : <Link href='/login'>LogIn</Link>
          }
        </button>
      </section>

      {/* Mobile menu toggle */}
      <FiMenu
        onClick={openSideMenu}
        className="cursor-pointer text-4xl md:hidden"
      />
    </div>
  );
}

function MobileNav({ closeSideMenu }) {
  return (
    <div className="fixed left-0 top-0 flex h-full min-h-screen w-full justify-end bg-black/60 md:hidden overflow-scroll ">
      <div
        className="h-full w-[65%] bg-white px-4 py-4"
        style={{ height: "fit-content" }}
      >
        <section className="flex justify-end">
          <AiOutlineClose
            onClick={closeSideMenu}
            className="cursor-pointer text-4xl"
          />
        </section>

        <div className="flex flex-col gap-2 transition-all z-10 text-black font-bold">
          {navItems.map((d, i) => (
            <SingleNavItem
              key={i}
              label={d.label}
              iconImage={d.iconImage}
              link={d.link}
              children={d.children}
            />
          ))}
        </div>

        <section className="flex flex-col gap-8 mt-4 items-center">
          <button className="text-neutral-400 transition-all hover:text-black/90 text-black font-bold">
            Login
          </button>
        </section>
      </div>
    </div>
  );
}

function SingleNavItem({ label, iconImage, link, children }) {
  const [animationParent] = useAutoAnimate();
  const [isItemOpen, setItemOpen] = useState(false);

  function toggleItem() {
    setItemOpen(!isItemOpen);
  }

  return (
    <div
      ref={animationParent}
      onClick={() => children && setItemOpen(!isItemOpen)}
      className="relative px-2 py-3 transition-all cursor-pointer"
    >
      <p className="flex items-center gap-2 text-neutral-400 group-hover:text-black">
        <Link href={`${link}`}><span>{label}</span></Link>
        {children && (
          <IoIosArrowDown
            className={`text-xs transition-all ${isItemOpen ? "rotate-180" : ""
              }`}
          />
        )}
      </p>

      {/* Dropdown */}
      {isItemOpen && children && (
        <div className="w-auto flex-col gap-1 rounded-lg bg-white py-3 transition-all">
          {children.map((ch, index) => (
            <Link
              key={index}
              href={ch.link ?? "#"}
              className="flex items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black"
            >
              {/* Image */}
              {ch.iconImage && (
                <Image
                  src={ch.iconImage}
                  alt="item-icon"
                  width={20}
                  height={20}
                />
              )}
              {/* Item */}
              <span className="whitespace-nowrap pl-3">{ch.label}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
