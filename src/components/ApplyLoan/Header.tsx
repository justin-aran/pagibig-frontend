"use client";
import * as React from "react";
import { Link } from "react-router-dom"; // Added for routing functionality

const NAV_LOGO =
  "https://api.builder.io/api/v1/image/assets/TEMP/a70227e5fc32d52a308aec751b2c1153ecb64655?width=154";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <nav className="w-full bg-[#112C44]">
      {/* 
        Sized to exactly match the home screen container properties: 
        max-w-[1200px], px-12, and h-[90px] for consistent height!
      */}
      <div className="max-w-[1200px] mx-auto px-12 flex items-center justify-between h-[90px]">
        {/* Brand Logo Wrapper linking to home */}
        <Link to="/" className="shrink-0">
          <img
            src={NAV_LOGO}
            alt="PAG-IBIG Fund"
            className="h-[60px] w-auto object-contain"
            style={{ filter: "drop-shadow(0 0 6px #A3E7FF)" }}
          />
        </Link>

        {/* Navigation Actions matching your home links styling */}
        <div className="flex items-center gap-10">
          <Link
            to="/learn"
            className="text-white font-sans font-semibold text-[16px] hover:text-[#A3E7FF] active:scale-95 transition-all duration-200"
          >
            LEARN MORE
          </Link>
          <Link
            to="/contact"
            className="text-white font-sans font-semibold text-[16px] hover:text-[#A3E7FF] active:scale-95 transition-all duration-200"
          >
            CONTACT US
          </Link>
        </div>
      </div>
    </nav>
  );
};
