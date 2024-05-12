import Image from "next/image";
import { scheduleType } from "../../data/schedule";

import './card.css';
import { useTranslations } from "next-intl";
import { Avatar, Chip } from "@nextui-org/react";



const Card = ({id, image, card, time, speakers}:scheduleType) => {

  const t = useTranslations("schema")
  return(
    <div className="card-schedule">
      <Image src={image} alt="" width={200} height={200} />
      <div className="body-card-schedule">

        <h2>{time}</h2>
        <h3>{t(card)}</h3>
        {speakers && speakers.map((sp,i)=>(
          <Chip
            className="chip-web"
            key={i}
            variant="flat"
            avatar={
              <Avatar
                size="lg"
                name="JW"
                src={sp.url}
              />
            }
          >
            <p className="chip-text">{sp.name}</p>
          </Chip>
        ))}
        
      </div>
      
    </div>
  )
}

export default Card;