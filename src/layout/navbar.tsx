import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-row gap-5">
        <Link to={"/"} className="hover:text-matrix">
          Home
        </Link>
        <Link to={"latest-news"} className="hover:text-matrix">
          Latest News
        </Link>
      </div>
      <Button variant="outline" size="icon">
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-100 dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all duration-100 dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
};

export default Navbar;
