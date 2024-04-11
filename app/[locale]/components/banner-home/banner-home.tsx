import Image from "next/image";
import './banner-home.css';
import { useTranslations } from "next-intl";
import { lora } from "../../fonts/lora";
import Button from "../button/button";

const BannerHome:React.FC = () => {
  const t = useTranslations("home")
  return(
    <div className="cont-video-home">
      <video autoPlay loop muted playsInline >
        <source src='/home.mp4' type="video/mp4" />
      </video>
      <div className="banner-text">
        <h1>
          WellBiz Bridge
        </h1>
        <p>{t("banner")} </p>
        <p className={lora.className}>{t("bannerDate")}</p>
        <br/>
        <Button title="Save the date"/>
        <Image src='/logo-blanco.png'  alt="wellbiz-bridge" width={200} height={200}/>
      </div>
      
    </div>
  )
}

export default BannerHome;