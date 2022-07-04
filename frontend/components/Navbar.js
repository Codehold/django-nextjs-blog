import Link from "next/link";
import { useState } from "react";
import { MenuIcon, HeartIcon } from "@heroicons/react/solid";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className="bg-gray-100 sticky top-0 z-50 ">
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex space-x-4">
              {/* Logo */}
              <div>
                <a className="flex items-center text-gray-700 py-4 px-2">
                  <HeartIcon className="h-6 mr-2 w-6 text-blue-400 " />
                  <span className="font-bold">Linux Hold</span>
                </a>

                {/* Primary Nav */}
              </div>
              <div className="hidden md:flex space-x-1 items-center">
                <Link href="/">
                  <a className="py-4 px-1 text-gray-700 hover:text-gray-900">
                    Blogs
                  </a>
                </Link>
                <Link href="/Category">
                  <a className="py-4 px-1 text-gray-700 hover:text-gray-900">
                    Category
                  </a>
                </Link>
              </div>
            </div>

            {/* Mobile Setup */}

            <button
              className="md:hidden flex items-center"
              onClick={handleClick}
            >
              <MenuIcon className=" h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Mobile Content */}
        <div className={`${active ? "" : "hidden"} md:hidden`}>
          <Link href="/">
            <a className="block hover:bg-gray-200 py-2 px-4 text-sm ">Blogs</a>
          </Link>
          <Link href="/Category">
            <a className="block hover:bg-gray-200 py-2 px-4 text-sm ">
              Category
            </a>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
