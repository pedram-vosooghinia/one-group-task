"use client";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerItems = [
    { nameItem: "صفحه اصلی", hrefItem: "/" },
    { nameItem: "همکاری در فروش", hrefItem: "/co-sell" },
    { nameItem: "درباره ما", hrefItem: "/about-us" },
    { nameItem: "دسته بندی ها", hrefItem: "/category" },
  ];
  return (
    <nav className="ltr bg-black shadow-md py-4 px-4 md:px-8">
      <div className="flex justify-between items-center">
        <Image
          src="/logo.jpg"
          alt="Logo"
          width={60}
          height={60}
          className="ml-2 rounded"
        />

        <div className="hidden md:flex gap-6 rtl">
          {headerItems.map((item) => (
            <Link
              href={item.hrefItem}
              key={item.nameItem}
              className="text-gray-100 hover:border-b-2  hover:border-red-500"
            >
              {item.nameItem}
            </Link>
          ))}
        </div>

        <Button
          className="md:hidden bg-red-500 hover:bg-gray-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-4 w-4" />
        </Button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden mt-4 flex flex-col text-center w-full  text-gray-100 gap-2">
          {headerItems.map((item) => (
            <Link href={item.hrefItem} key={item.nameItem}>
              {item.nameItem}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};
