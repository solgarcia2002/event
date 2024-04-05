"use client"

import {
  Navbar as NavbarTop,
  NavbarBrand,
  NavbarContent,
  NavbarItem
} from "@nextui-org/navbar";
import Link from "next/link";
import './navbar.css';


const Navbar: React.FC = () => {
  return (
    <NavbarTop>
      <NavbarBrand>
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link href="#" className="link">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link  href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <button color="primary">Sign Up</button>
        </NavbarItem>
      </NavbarContent>
    </NavbarTop>
  );
};


export default Navbar;