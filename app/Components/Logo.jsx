import { Link } from "@remix-run/react";
import LogoImage from "~/Images/Website_Logo.png";

export default function Logo() {
  return (
    <div className="flex items-center">
      <Link to="/" aria-label="Taco-IT home">
        <img
          className="h-12 w-auto transition-transform duration-200 hover:scale-105 md:h-16"
          src={LogoImage}
          alt="Taco-IT logo"
        />
      </Link>
    </div>
  );
}
