import Image from "next/image";
import { useTranslations } from "next-intl";
import { lora } from "../../fonts/lora";
import "./banner-home.css";

type BannerVideoTypes = {
  translationTitle: string;
  video: string;
  title: string;
  subtitle: string;
  paragraph?: string;
  children?: React.JSX.Element;
};

const BannerVideo = ({
  translationTitle,
  video,
  title,
  subtitle,
  children,
  paragraph,
}: BannerVideoTypes) => {
  const t = useTranslations(translationTitle);

  return (
    <div className="cont-video-home">
      <div className="title-mobile">
        <h1>{t(title)}</h1>
      </div>
      <video autoPlay loop muted playsInline>
        <source src={video} type="video/mp4" />
      </video>
      <div className="banner-text">
        <h1>{t(title)}</h1>
        <p>{t(subtitle)} </p>
        {paragraph && <p className={lora.className}>{t(paragraph)}</p>}
        <br />
        {children}
        <div className="cont-logos-video">
          <Image
            src="/logo-blanco.png"
            alt="wellbiz-bridge"
            width={200}
            height={200}
          />
          <Image
            src="/logo-aacc.png"
            alt="argentine american chamber of commerce of florida"
            width={266}
            height={105}
            className="logo-video"
          />
        </div>
        <p className={`slogan ${lora.className}`}>{t("slogan")}</p>
      </div>
      <div className="slogan-mobile">
        <div>
          <p>{t(subtitle)} </p>
          {paragraph && <p className={lora.className}>{t(paragraph)}</p>}
          <br />
          {children}
          <p className={`slogan ${lora.className}`}>{t("slogan")}</p>

        </div>

        <div className="cont-logos-video">
        <Image
            src="/logo-blanco.png"
            alt="wellbiz-bridge"
            width={200}
            height={200}
            className="logos-home"
          />
          <Image
            src="/logo-aacc.png"
            alt="argentine american chamber of commerce of florida"
            width={266}
            height={105}
            className="logo-video logos-home"
          />
        </div>
      </div>
    </div>
  );
};

export default BannerVideo;
