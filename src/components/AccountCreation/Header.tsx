"use client";
import React from "react";
import { Link } from "react-router-dom"; // Added for proper routing framework link tracking

const NAV_LOGO =
  "https://api.builder.io/api/v1/image/assets/TEMP/a70227e5fc32d52a308aec751b2c1153ecb64655?width=154";

interface HeaderProps {
  logoSrc?: string;
  logoAlt?: string;
}

export const Header: React.FC<HeaderProps> = ({
  logoSrc = NAV_LOGO, // Tied fallback property string directly to your global constant variable
  logoAlt = "Pag-IBIG Logo",
}) => {
  return (
    /* 
      Header Structural Compression:
      - Changed bg-blue-950 to your exact branding color code #112C44.
      - Sized height profile to a sleeker h-[76px] layout to match smaller component proportions.
    */
    <header className="w-full bg-[#112C44] h-[76px] flex items-center justify-between px-6 lg:px-10 shadow-sm">
      {/* Brand Logo Anchor */}
      <Link
        to="/"
        className="flex items-center transform active:scale-95 transition-transform duration-150 shrink-0"
      >
        <img
          src={logoSrc}
          alt={logoAlt}
          /* 
            Fixed Logo Proportion: Removed rounded-full and fixed sizes. 
            Using h-11 with w-auto preserves the crisp shape layout properties.
          */
          className="h-11 w-auto object-contain"
          // Injected your custom cyan glow aura branding layer
          style={{ filter: "drop-shadow(0 0 6px #A3E7FF)" }}
        />
      </Link>

      {/* Navigation Options Block */}
      <nav className="flex gap-8 items-center">
        <Link
          to="/learn"
          /* 
            Tightened down typography metrics and added signature hover text-color changes 
            along with dynamic tap animations to keep button effects uniform!
          */
          className="text-[13px] font-bold tracking-wider text-white hover:text-[#A3E7FF] active:scale-95 transition-all duration-150 select-none"
        >
          LEARN MORE
        </Link>
        <Link
          to="/contact"
          className="text-[13px] font-bold tracking-wider text-white hover:text-[#A3E7FF] active:scale-95 transition-all duration-150 select-none"
        >
          CONTACT US
        </Link>
      </nav>
    </header>
  );
};
