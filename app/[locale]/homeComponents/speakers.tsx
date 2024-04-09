
import "./speakers.css";
import { speakers } from "../data/speakers";

import type {CollageImageProps} from '../components/collage/collage'
import Collage from "../components/collage/collage";
const Speakers: React.FC = () => {
  
  const images: CollageImageProps[] = [
    { src: '/speaker-angeles-lucero-bringas.png', animation: 'right-to-left' },
  ];

  return (
    <div className="cont-speakers">
      <h2>Speakers</h2>
      <div className="speakers-cont-cards">
        {speakers.map((item, i) => (
          <div className="flip-card" key={i}>
          <div className="flip-card-inner">
              <div className="flip-card-front">
                  <Collage images={images} />
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
