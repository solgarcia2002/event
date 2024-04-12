import Image from "next/image";
import './banner-home.css';
import { useTranslations } from "next-intl";
import { lora } from "../../fonts/lora";
import Eventbrite from "../eventBrite/eventBrite";

type BannerVideoTypes = {
  translationTitle:string,
  video:string,
  title:string,
  subtitle:string,
  paragraph?:string
  children:React.JSX.Element
}

const BannerVideo = ({translationTitle, video, title, subtitle, children, paragraph}:BannerVideoTypes) => {
  const t = useTranslations(translationTitle)
  
  return(
    <div className="cont-video-home">
      <video autoPlay loop muted playsInline >
        <source src={video} type="video/mp4" />
      </video>
      <div className="banner-text">
        <h1>
          {t(title)}
        </h1>
        <p>{t(subtitle)} </p>
        {paragraph && <p className={lora.className}>{t(paragraph)}</p>}
        <br/>
        {children}
        <Image src='/logo-blanco.png'  alt="wellbiz-bridge" width={200} height={200}/>
      </div>
      
    </div>
  )
}

export default BannerVideo;