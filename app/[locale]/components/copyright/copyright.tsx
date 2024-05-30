"use client"
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import './copyright.css';


export default function Copyright() {
  const t = useTranslations("footer")
  return(
    <div className="copyright">
      <p>{t("copyright")}</p>
        <p>© 2024 Copyright</p>
        <p>{t("empowerit")}</p>
        <Link className='empowerit' href='https://www.empowerit.io' passHref={true} target='_blank'>
          <Image src='/empowerit-logo.png' alt='empowerit.io' width={100} height={100} /> 
        </Link>
      </div>
  )
}