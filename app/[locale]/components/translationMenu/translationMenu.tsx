"use client";
import * as React from "react";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem
} from "@nextui-org/dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons/faGlobe";
import "./translationMenu.css";

function ChangeLanguageButton() {
  const t = useTranslations("navbar");
  const pathName = usePathname();
  const router = useRouter();

  const redirectedPathName = (lang: string) => {
    const segments = pathName.split("/");
    if (lang === "en") {
      segments[1] = 'en';
      return segments.join("/");
    } else {
      segments[1] = 'es';
      return segments.join("/");
    } 
  };

  const handleLanguageChange = (lang: string) => {
    const newPath = redirectedPathName(lang);
    router.push(newPath); // Redirigir a la nueva ruta
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <button aria-label="menu-translations" className="world-icon text-pink p-0 rounded-full min-w-[3.2rem] h-[3rem] bg-white">
          <FontAwesomeIcon icon={faGlobe} size="xl" />
        </button>
      </DropdownTrigger>

      <DropdownMenu aria-label="Translation menu" className="dropdown-menu">
        <DropdownItem 
          className="text-pink focus-visible:border-0" 
          textValue="es"
          >
          <button className="button-dropd" onClick={() => handleLanguageChange("es")}>
            {t("translationEs")}
          </button>
        </DropdownItem>
        <DropdownItem className="text-pink focus-visible:border-0" textValue="en">
          <button className="button-dropd" onClick={() => handleLanguageChange("en")}>
            {t("translationEn")}
          </button>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default ChangeLanguageButton;