import { useTranslations } from "next-intl";
import { travelTypes } from "../data/travel";
import Image from "next/image";
import './index.css'
import { lora } from "../fonts/lora";

type infoTravelProps = {
  travelInfo: travelTypes[],
  langTitle:'shops' | 'nature'
}

const InfoSection = ({travelInfo, langTitle}:infoTravelProps) => {
  const t = useTranslations(`travel.${langTitle}`)
  return(
    <div className="cont-info-section">
      <h2>{t("title")}</h2>
      {travelInfo.map((nat)=>(
          <div key={nat.name} className="item-info">
            <h3>{t(`${nat.name}.name`)}</h3>
            <div className="body-item">
              <div className="image">
                <Image src={nat.imagen} alt={nat.name} height={1080} width={1080}/>
              </div>
              <p className={lora.className}>{t(`${nat.name}.description`)}</p>
            </div>
          </div>
        )
      )}
    </div>
  )
}

export default InfoSection;