import { useTranslations } from "next-intl";
import BannerVideo from "../../components/banner-home/banner-home";
import { lora } from "../../fonts/lora";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { notFound } from "next/navigation";
import { infoThemesSpeakers, socialMediaSpeakers } from "../../data/speakers";
import Link from "next/link";
import BannerSection from "../bannerSection";
import SponsorsList from "../../homeComponents/sponsorsList";
import { getTranslations } from "next-intl/server";
import "./speakers.css";

export async function generateMetadata() {
  const t = await getTranslations("metadata.speakers");
  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords").split(",")
  };
}

type SpeakersType = {
  name: "angeles" | "claudia" | "cesar"  | "noelia";
};

const validNames: SpeakersType["name"][] = ["angeles", "claudia", "cesar", "noelia"];
export default function SpeakersPage({ params }: { params: { name: SpeakersType["name"] } }) {
  const b = useTranslations('speakers')
  const t = useTranslations(`speakers.${params.name}`);
  if (!validNames.includes(params.name as SpeakersType["name"])) {
    notFound();
    return null;
  } 
  const socialM = socialMediaSpeakers[params.name]
  const info = infoThemesSpeakers[params.name]


  return (
    <div className="cont-speakers-page">
      <BannerVideo
        translationTitle={`speakers.${params.name}`}
        title="name"
        subtitle="title"
        video={`/banner-${params.name}.mp4`}
      >
        
      </BannerVideo>
      
      <div className="themes">
        <h2>{t("themeTitle")}</h2>
        <div>
          <h3>{t("theme")}</h3>
          <p className="themes-subtitle">{t("p1")}</p>
          <ul>

          {info.map((li)=>(
            <li className="list-items-speaker" key={li}>
              {t(`list.${li}`)}
            </li>
          ))}
          </ul>
          <p className="p2-speakers">{t("p2")}</p>
        </div>
        <video autoPlay loop muted playsInline className="bio-video">
          <source src={`/video-${params.name}.mp4`} type="video/mp4" />
        </video>
      </div>

      <BannerSection title={b("register")} button={b("button")} />
      
      <div className="bio">
        <div className="cont-icons">
          <Link href={socialM.facebook} target="_blank"> <FontAwesomeIcon icon={faFacebook}  /></Link>
          <Link href={socialM.instagram} target="_blank"><FontAwesomeIcon icon={faInstagram} /></Link>
          <Link href={socialM.linkedin} target="_blank"><FontAwesomeIcon icon={faLinkedin} /></Link>
          <Link href={socialM.website} target="_blank"><FontAwesomeIcon icon={faGlobe} /></Link>
          
        </div>
        <div className="cont-text-bio">
          <h4>{t("bioTitle")}</h4>
          <p className={lora.className}>{t("bio1")}</p>
          <br/>
          <p className={lora.className}>{t("bio2")}</p>
        </div>
      </div>
      <SponsorsList />
    </div>
  );
}
