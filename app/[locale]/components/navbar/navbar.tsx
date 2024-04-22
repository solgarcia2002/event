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
import ChangeLanguageButton from "../translationMenu/translationMenu";
import Image from "next/image";
import Button from "../button/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useTranslations } from "next-intl";
import ModalSponsor from "../modal/modal";
import { useDisclosure } from "@nextui-org/modal";
import './navbar.css';

export default function App() {
  const t = useTranslations("navbar");
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const {isOpen, onOpen, onClose} = useDisclosure();

  const menuItems = [
    {link:t("schedule"), url:"/#"},
    {link:t("gallery"), url:"/#"},
    {link:t("speakers"), url:"/#speakers"},
    {link:t("travel"), url:"/#"},

  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className={`h-[120px] navbar bg-black-transparent`}
      isMenuOpen={isMenuOpen}
    >
      <NavbarContent >
        <NavbarMenuToggle
          icon={<FontAwesomeIcon icon={faBars} />}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="toggle link-navbar"
          
        />
        <NavbarBrand >
          <Link href={'/'}>
            <Image src='/logo-wb-border.png' alt="wellbiz-bridge" width={100} height={100} />
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <ChangeLanguageButton />

      <NavbarContent className="navbar-links" justify="center">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full link-navbar"
              href={item.url}
            >
              {item.link}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarItem >
          <Link href={'#contact'} className="link-navbar">{t("register")}</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button title="Sé un sponsor!" onClick={onOpen} />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="navbar-mobile bg-black-transparent">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`} >
            <Link
              className="w-full"
              href={item.url}
              onClick={()=>setIsMenuOpen(false)}
            >
              {item.link}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarItem >
          <Link href={'#contact'} className="link-navbar">{t("register")}</Link>
        </NavbarItem>
      </NavbarMenu>
      <ModalSponsor isOpen={isOpen} onClose={onClose} />
    </Navbar>
  );
}
