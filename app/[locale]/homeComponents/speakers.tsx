import { speakers } from "../data/speakers";
import Image from "next/image";
import { useTranslations } from "next-intl";
import "./speakers.css";

const Speakers: React.FC = () => {
  const t = useTranslations("home.speakersBio")

  return (
    <div className="cont-speakers">
      <h3>Speakers</h3>
      <div className="speakers-cont-cards">
        {speakers.map((item, i) => (
          <div className="card" key={i}>
            <div className={`cont-text-card ${item.bio}`}>
              <p className="card-name">{item.name}</p>
              <br />
              <p className="card-bio">{t(item.bio)}</p>
            </div>
            <Image src={item.img} alt={item.name} width={800} height={1182} />
            <video autoPlay loop muted playsInline className="video-speaker">
              <source src={item.video} type="video/mp4" />
            </video>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Speakers;
