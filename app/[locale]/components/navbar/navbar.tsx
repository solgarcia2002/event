"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import Link from "next/link";
import './navbar.css';
import ChangeLanguageButton from "../translationMenu/translationMenu";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    {link:"Agenda", url:"/schedule"},
    {link:"Galeria", url:"/gallery"},
    {link:"Speakers", url:"/speakers"},
    {link:"Comprar Tickets", url:"/tickets"},
    {link:"Travel & Info", url:"/travel&info"},

  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className={`h-[120px] navbar`}
      isMenuOpen={isMenuOpen}
    >
      <NavbarContent >
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="toggle"
        />
        <NavbarBrand className="emp_logo">
          <p className="font-bold text-inherit">Logo</p>
        </NavbarBrand>
      </NavbarContent>
      <ChangeLanguageButton />

      <NavbarContent className="navbar-links" justify="center">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              href={item.url}
            >
              {item.link}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem >
          <button color="primary">Registrate hoy!</button>
        </NavbarItem>
        <NavbarItem>
          <button color="primary">Sé un sponsor!</button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              href={item.url}
            >
              {item.link}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
