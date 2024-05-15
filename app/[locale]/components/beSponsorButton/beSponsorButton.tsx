"use client"

import { useDisclosure } from "@nextui-org/react";
import Button from "../button/button"
import ModalSponsor from "../modal/modal";
import { useTranslations } from "next-intl";

export const BeSponsorButton = () => {
  const t = useTranslations("home");
  const {isOpen, onOpen, onClose} = useDisclosure();
  return(
    <div>
      <Button title={t("sponsorButton")} onClick={onOpen} />
      <ModalSponsor isOpen={isOpen} onClose={onClose} />
    </div>
  )
}