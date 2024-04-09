import Image from "next/image";
import "./speakers.css";
import { speakers } from "../data/speakers";

const Speakers: React.FC = () => {
  

  return (
    <div className="cont-speakers">
      <h2>Speakers</h2>
      <div className="speakers-cont-cards">
        {speakers.map((item, i) => (
          <div className="flip-card" key={i}>
          <div className="flip-card-inner">
              <div className="flip-card-front">
                  <Image src={item.img} alt={item.name} width={800} height={1182} />
                  <p className="title">{item.name}</p>
              </div>
              <div className="flip-card-back">
                  <p className="title">{item.bio}</p>
              </div>
          </div>
      </div>
        ))}
      </div>
    </div>
  );
};

export default Speakers;
