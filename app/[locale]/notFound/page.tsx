"use client"
import { useTranslations } from "next-intl";
import Button from "../components/button/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import './notFound.css';
 
export default function NotFound() {
  const t = useTranslations("notFound");
  const router = useRouter();

  return (
    <div className="not-found">
      <Image src='/logo.png' alt='logo' width={300} height={300} />
      <p>{t("message")}</p>
      <Button title={t("button")} onClick={()=>router.push('/')} />
      
    </div>
  );
}