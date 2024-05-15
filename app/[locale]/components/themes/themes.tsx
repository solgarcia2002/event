import { Image } from "@nextui-org/react"
import { speakers } from "../../data/speakers";
import { useTranslations } from "next-intl";
import './themes.css';

export const Themes:React.FC = () => {
  const t = useTranslations("home.themes");
  return(
    <div className="cont-themes-section">
      <div className="cont-speakers-themes">
        {speakers.map((sp,i)=>(
          <div className="speaker-theme" key={i}>
            <Image className="speaker-img" src={sp.img} alt={sp.name} width={300} height={300} />
            <p>{sp.name}</p>
          </div>
        ))}
      </div>
      <div className="themes-panel">
        <ul>
          {[1,2,3,4,5,6].map((item)=>(
            <li key={item}>- {t(`li${item}`)}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}