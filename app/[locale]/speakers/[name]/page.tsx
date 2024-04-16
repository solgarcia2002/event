import { useTranslations } from "next-intl";
import BannerVideo from "../../components/banner-home/banner-home";
import Eventbrite from "../../components/eventBrite/eventBrite";
import { lora } from "../../fonts/lora";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import "./speakers.css";
import { notFound } from "next/navigation";

type SpeakersType = {
  name: "angeles" | "claudia";
};

const validNames: SpeakersType["name"][] = ["angeles", "claudia"];
export default function SpeakersPage({ params }: { params: { name: string } }) {
  
  const t = useTranslations(`speakers.${params.name}`);
  if (!validNames.includes(params.name as SpeakersType["name"])) {
    notFound();
    return null;
  }
 

  return (
    <div className="cont-speakers-page">
      <BannerVideo
        translationTitle={`speakers.${params.name}`}
        title="name"
        subtitle="title"
        video={`/banner-${params.name}.mp4`}
      >
        <Eventbrite />
      </BannerVideo>
      <div className="time-event">
        <h2>Horarios</h2>
        <p>9 - 12 </p>
      </div>
      <div className="themes">
        <h2>{t("themeTitle")}</h2>
        <div>
          <h3>{t("theme")}</h3>
          <p className="themes-subtitle">{t("p1")}</p>
          <p className={lora.className}>{t("p2")}</p>
        </div>
        <video autoPlay loop muted playsInline className="bio-video">
          <source src={`/video-${params.name}.mp4`} type="video/mp4" />
        </video>
      </div>
      
      <div className="bio">
        <div className="cont-icons">
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faLinkedin} />
          <FontAwesomeIcon icon={faGlobe} />
        </div>
        <div className="cont-text-bio">
          <h4>{t("bioTitle")}</h4>
          <p className={lora.className}>{t("bio")}</p>
        </div>
      </div>
    </div>
  );
}
